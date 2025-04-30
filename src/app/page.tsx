import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PricingCard from "@/components/pricing-card";
import Footer from "@/components/footer";
import { createClient } from "../../supabase/server";
import {
  ArrowUpRight,
  MessageSquare,
  Paintbrush,
  Sparkles,
  Send,
  Download,
} from "lucide-react";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: plans, error } = await supabase.functions.invoke(
    "supabase-functions-get-plans",
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f7f4] to-[#f0efe9]">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#1a365d]">
              Create Beautiful Cards with AI
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform makes it easy to design personalized
              greeting cards for any occasion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "AI Chat Guidance",
                description:
                  "Conversational interface helps you craft the perfect message",
              },
              {
                icon: <Paintbrush className="w-6 h-6" />,
                title: "Real-time Design",
                description: "See your card take shape as you make changes",
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Premium Templates",
                description: "Elegant designs for every occasion and style",
              },
              {
                icon: <Send className="w-6 h-6" />,
                title: "Easy Sharing",
                description: "Send digital cards or order physical prints",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#e6e4de]"
              >
                <div className="text-[#1a365d] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#1a365d]">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-[#1a365d] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Create personalized cards in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-white text-[#1a365d] rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Chat with AI</h3>
              <p className="text-blue-100">
                Tell our AI about your occasion and preferences
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-white text-[#1a365d] rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Customize Design</h3>
              <p className="text-blue-100">
                Edit text, adjust styles, and add personal touches
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-white text-[#1a365d] rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Share or Print</h3>
              <p className="text-blue-100">
                Download, share digitally, or order physical prints
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#1a365d]">
              Beautiful Cards for Every Occasion
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From birthdays to weddings, create the perfect card for your
              special moments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=600&q=80",
                title: "Birthday Cards",
                description: "Celebrate with style",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80",
                title: "Wedding Cards",
                description: "Elegant and romantic",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&q=80",
                title: "Holiday Cards",
                description: "Festive and cheerful",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6 bg-white border-t border-[#e6e4de]">
                  <h3 className="text-xl font-semibold mb-2 text-[#1a365d]">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-[#f8f7f4]" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#1a365d]">
              Choose Your Perfect Plan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible options for creators of all levels.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans?.map((item: any) => (
              <PricingCard key={item.id} item={item} user={user} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-[#e6e4de]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#1a365d]">
            Start Creating Your Perfect Card
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who create beautiful, personalized cards
            with our AI-powered platform.
          </p>
          <a
            href="/dashboard"
            className="inline-flex items-center px-8 py-4 text-white bg-[#1a365d] rounded-lg hover:bg-[#2d4a76] transition-colors text-lg font-medium"
          >
            Try Card Designer Now
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
