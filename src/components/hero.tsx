import Link from "next/link";
import { ArrowUpRight, Check, MessageSquare, Paintbrush } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#f8f7f4]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=1200&q=80')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f7f4] via-white to-[#f0efe9] opacity-90" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 bg-[#1a365d]/10 text-[#1a365d] rounded-full text-sm font-medium mb-6">
                AI-Powered Card Design Platform
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-[#1a365d] mb-6 tracking-tight leading-tight">
                Create Beautiful{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a365d] to-[#4a5568] border-b-2 border-[#e6e4de]">
                  Greeting Cards
                </span>{" "}
                Through Conversation
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                Our split-screen interface combines AI guidance with real-time
                design, allowing you to create personalized cards for any
                occasion.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center px-8 py-4 text-white bg-[#1a365d] rounded-lg hover:bg-[#2d4a76] transition-colors text-lg font-medium shadow-sm"
                >
                  Start Designing
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>

                <Link
                  href="#pricing"
                  className="inline-flex items-center px-8 py-4 text-[#1a365d] bg-white border border-[#e6e4de] rounded-lg hover:bg-[#f0efe9] transition-colors text-lg font-medium"
                >
                  View Pricing
                </Link>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#1a365d]" />
                  <span>No design skills needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#1a365d]" />
                  <span>Free trial available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#1a365d]" />
                  <span>Digital & print options</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative bg-white p-2 rounded-xl shadow-xl border border-[#e6e4de] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-8 bg-[#f8f7f4] border-b border-[#e6e4de] flex items-center px-3 gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="pt-8 flex">
                  <div className="w-1/2 border-r border-[#e6e4de] p-4 bg-[#f8f7f4]">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#1a365d] flex items-center justify-center text-white">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm border border-[#e6e4de] text-sm">
                        What occasion is this card for?
                      </div>
                    </div>
                    <div className="flex items-start gap-3 mb-4 justify-end">
                      <div className="bg-[#1a365d] p-3 rounded-lg shadow-sm text-white text-sm">
                        It's for my mom's birthday
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-xs">You</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#1a365d] flex items-center justify-center text-white">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm border border-[#e6e4de] text-sm">
                        Great! What style would you prefer?
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 p-4 flex items-center justify-center">
                    <div className="relative w-full aspect-[2/3] bg-gradient-to-br from-[#f8f7f4] to-[#e6e4de] rounded-lg shadow-sm border border-[#e6e4de] flex items-center justify-center">
                      <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-sm">
                        <Paintbrush className="w-4 h-4 text-[#1a365d]" />
                      </div>
                      <div className="text-center p-4">
                        <div className="text-xs text-[#1a365d] uppercase tracking-wider mb-2">
                          Happy Birthday
                        </div>
                        <div className="text-lg font-serif text-[#1a365d] mb-2">
                          To the best mom ever
                        </div>
                        <div className="w-16 h-0.5 bg-[#1a365d] mx-auto mb-2"></div>
                        <div className="text-xs text-[#1a365d]">With love</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#1a365d]/5 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#1a365d]/5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
