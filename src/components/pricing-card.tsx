"use client";

import { User } from "@supabase/supabase-js";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { supabase } from "../../supabase/supabase";
import { Check } from "lucide-react";

export default function PricingCard({
  item,
  user,
}: {
  item: any;
  user: User | null;
}) {
  // Handle checkout process
  const handleCheckout = async (priceId: string) => {
    if (!user) {
      // Redirect to login if user is not authenticated
      window.location.href = "/login?redirect=pricing";
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke(
        "supabase-functions-create-checkout",
        {
          body: {
            price_id: priceId,
            user_id: user.id,
            return_url: `${window.location.origin}/dashboard`,
          },
          headers: {
            "X-Customer-Email": user.email || "",
          },
        },
      );

      if (error) {
        throw error;
      }

      // Redirect to Stripe checkout
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  // Define features based on plan type
  const getFeatures = (planName: string) => {
    const baseFeatures = [
      "AI-powered card creation",
      "Digital card downloads",
      "Basic templates",
    ];

    if (planName.toLowerCase().includes("pro")) {
      return [
        ...baseFeatures,
        "Premium templates",
        "Remove watermarks",
        "Priority support",
      ];
    } else if (
      planName.toLowerCase().includes("business") ||
      planName.toLowerCase().includes("enterprise")
    ) {
      return [
        ...baseFeatures,
        "Premium templates",
        "Remove watermarks",
        "Priority support",
        "Team collaboration",
        "Brand customization",
      ];
    }

    return baseFeatures;
  };

  const features = getFeatures(item.name || "");

  return (
    <Card
      className={`w-full relative overflow-hidden ${item.popular ? "border-2 border-[#1a365d] shadow-xl" : "border border-[#e6e4de]"}`}
    >
      {item.popular && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f7f4] via-white to-[#f0efe9] opacity-50" />
      )}
      <CardHeader className="relative pb-4">
        {item.popular && (
          <div className="px-4 py-1.5 text-sm font-medium text-white bg-[#1a365d] rounded-full w-fit mb-4">
            Most Popular
          </div>
        )}
        <CardTitle className="text-2xl font-bold tracking-tight text-[#1a365d]">
          {item.name}
        </CardTitle>
        <CardDescription className="flex items-baseline gap-2 mt-2">
          <span className="text-4xl font-bold text-[#1a365d]">
            ${item?.amount / 100}
          </span>
          <span className="text-gray-600">/{item?.interval}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="relative pb-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#1a365d] mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="relative pt-2">
        <Button
          onClick={async () => {
            await handleCheckout(item.id);
          }}
          className={`w-full py-6 text-lg font-medium ${item.popular ? "bg-[#1a365d] hover:bg-[#2d4a76]" : "bg-white border border-[#1a365d] text-[#1a365d] hover:bg-[#f0efe9]"}`}
          variant={item.popular ? "default" : "outline"}
        >
          {item.popular ? "Get Started" : "Choose Plan"}
        </Button>
      </CardFooter>
    </Card>
  );
}
