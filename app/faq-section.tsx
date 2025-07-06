"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Phone } from "lucide-react"
import { useState } from "react"

export default function FAQSection() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "What makes NYRA SUNTERRA different from other villa projects?",
      answer:
        "NYRA SUNTERRA is unique as it's 100% solar-powered, eliminating electricity bills entirely. We combine luxury living with sustainability, featuring premium Italian marble flooring, teak wood doors, and world-class amenities while being completely eco-friendly.",
    },
    {
      question: "How much can I save on electricity bills with solar power?",
      answer:
        "With our comprehensive solar power system, residents typically save ₹15,000-25,000 per month on electricity bills. Over 10 years, this translates to savings of ₹18-30 lakhs, making it a smart long-term investment.",
    },
    {
      question: "What is the payment schedule and financing options available?",
      answer:
        "We offer flexible payment plans: 20% booking amount, 60% during construction, and 20% on possession. We also provide attractive financing options through leading banks with competitive interest rates and easy EMI options.",
    },
    {
      question: "Is the project RERA approved and what are the possession timelines?",
      answer:
        "Yes, NYRA SUNTERRA is fully RERA approved (Registration: PRM/KA/RERA/1251/308/PR110124/007750). The project is scheduled for possession by December 2025, with construction progressing as per timeline.",
    },
    {
      question: "What amenities are included in the project?",
      answer:
        "Our world-class amenities include an infinity swimming pool, premium gym, grand banquet hall, zen gardens, sports complex, kids' play area, business center, and 24/7 security with advanced surveillance systems.",
    },
    {
      question: "How is the connectivity and location advantage?",
      answer:
        "Located on Sarjapur-Attibele Road, we're just 15 minutes from the upcoming Metro station, 10 minutes from top schools like GEAR International, and 30 minutes from major IT hubs like Electronic City and Wipro Kodathi.",
    },
    {
      question: "Are the villas Vaastu compliant?",
      answer:
        "Yes, all our villas are 100% Vaastu compliant, designed by expert Vaastu consultants to ensure positive energy flow and prosperity for residents. The orientation and layout follow traditional Vaastu principles.",
    },
    {
      question: "What is included in the villa specifications?",
      answer:
        "Each 4BHK villa includes Italian marble flooring, solid teak wood doors, modular kitchen, premium fixtures, solar water heater, smart home readiness, covered parking for 2 cars, and a private terrace garden.",
    },
    {
      question: "Can I customize the interiors of my villa?",
      answer:
        "Yes, we offer customization options for interiors including flooring choices, kitchen layouts, bathroom fittings, and color schemes. Our design team will work with you to create your dream home within the project guidelines.",
    },
    {
      question: "What is the maintenance cost and who manages it?",
      answer:
        "The monthly maintenance is approximately ₹8-12 per sq.ft, covering common area maintenance, security, landscaping, and amenity upkeep. A professional facility management company will handle all maintenance services.",
    },
  ]

  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 bg-white relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <Badge className="bg-orange-100 text-orange-800 border border-orange-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
            Got{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Questions?
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Find answers to the most commonly asked questions about NYRA SUNTERRA
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl sm:rounded-3xl overflow-hidden"
              >
                <button
                  className="w-full text-left"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg sm:text-xl text-slate-900 pr-4 leading-relaxed">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {expandedFaq === index ? (
                          <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                        ) : (
                          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-slate-400" />
                        )}
                      </div>
                    </div>

                    {expandedFaq === index && (
                      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-100">
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-light">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-orange-100">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Still have questions?</h3>
              <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Our expert consultants are here to help you with any additional queries
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold shadow-2xl"
              >
                <Phone className="h-5 w-5 mr-3" />
                Speak with Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
