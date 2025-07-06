"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IndianRupee, Home, CheckCircle2, Download, Calculator, TrendingUp, Shield, Award } from "lucide-react"

export default function EnhancedPricingSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-green-50 to-emerald-50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <Badge className="bg-green-100 text-green-800 border border-green-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
            Investment Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
            Smart{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Investment
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Choose from our flexible pricing options designed to make luxury living accessible
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
          {[
            {
              type: "East Facing Villas",
              price: "₹2.8 Cr",
              originalPrice: "₹3.2 Cr",
              discount: "12% OFF",
              sqft: "3,200",
              features: [
                "Morning Sun Advantage",
                "Vaastu Compliant Design",
                "Garden View",
                "Premium Location",
                "2 Car Parking",
                "Solar Power System",
              ],
              popular: false,
              color: "blue",
              savings: "₹40 Lakhs",
            },
            {
              type: "West Facing Villas",
              price: "₹3.2 Cr",
              originalPrice: "₹3.6 Cr",
              discount: "11% OFF",
              sqft: "3,200",
              features: [
                "Evening Sun Benefits",
                "Corner Plot Advantage",
                "Extra Privacy",
                "Premium Amenities Access",
                "2 Car Parking",
                "Smart Home Ready",
              ],
              popular: true,
              color: "emerald",
              savings: "₹40 Lakhs",
            },
            {
              type: "North Facing Villas",
              price: "₹3.5 Cr",
              originalPrice: "₹3.9 Cr",
              discount: "10% OFF",
              sqft: "3,200",
              features: [
                "Best Vaastu Orientation",
                "All Day Natural Light",
                "Most Premium Location",
                "Exclusive Amenities",
                "3 Car Parking",
                "Home Theater Ready",
              ],
              popular: false,
              color: "purple",
              savings: "₹40 Lakhs",
            },
          ].map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-0 rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 ${
                plan.popular ? "ring-2 ring-emerald-500 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-center py-2 sm:py-3 font-semibold text-sm">
                  ⭐ Most Popular Choice
                </div>
              )}

              <CardContent className={`p-6 sm:p-8 lg:p-10 ${plan.popular ? "pt-12 sm:pt-16" : ""}`}>
                <div className="text-center mb-6 sm:mb-8">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Badge
                      className={`bg-${plan.color}-100 text-${plan.color}-800 px-3 py-1 rounded-full text-xs font-bold`}
                    >
                      {plan.discount}
                    </Badge>
                    <Badge className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold">
                      Save {plan.savings}
                    </Badge>
                  </div>

                  <div
                    className={`p-4 sm:p-6 bg-${plan.color}-50 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 mx-auto w-fit`}
                  >
                    <Home className={`h-8 w-8 sm:h-10 sm:w-10 text-${plan.color}-600`} />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">{plan.type}</h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-lg text-slate-500 line-through">{plan.originalPrice}</span>
                      <TrendingUp className="h-4 w-4 text-red-500" />
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <IndianRupee className="h-6 w-6 sm:h-7 sm:w-7 text-slate-600" />
                      <span className="text-3xl sm:text-4xl font-bold text-slate-900">
                        {plan.price.replace("₹", "")}
                      </span>
                    </div>
                    <div className="text-sm sm:text-base text-slate-600">Built-up: {plan.sqft} sq.ft</div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle2 className={`h-4 w-4 sm:h-5 sm:w-5 text-${plan.color}-600 flex-shrink-0`} />
                      <span className="text-sm sm:text-base text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Button
                    className={`w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold ${
                      plan.popular
                        ? "bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white"
                        : `bg-${plan.color}-50 text-${plan.color}-700 hover:bg-${plan.color}-100`
                    }`}
                  >
                    <Calculator className="h-4 w-4 mr-2" />
                    Calculate EMI
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold border-slate-200 hover:bg-slate-50 bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Price Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Plan */}
        <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Flexible Payment Schedule</h3>
            <p className="text-slate-600 text-sm sm:text-base">Easy payment options to suit your financial planning</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="p-6 sm:p-8 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl sm:rounded-3xl mb-4">
                <div className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-2">20%</div>
                <div className="text-sm sm:text-base text-slate-600 font-medium">Booking Amount</div>
                <div className="text-xs sm:text-sm text-slate-500 mt-2">On Agreement</div>
              </div>
            </div>

            <div className="text-center">
              <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl mb-4">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">60%</div>
                <div className="text-sm sm:text-base text-slate-600 font-medium">Construction Linked</div>
                <div className="text-xs sm:text-sm text-slate-500 mt-2">As per milestones</div>
              </div>
            </div>

            <div className="text-center">
              <div className="p-6 sm:p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl sm:rounded-3xl mb-4">
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">20%</div>
                <div className="text-sm sm:text-base text-slate-600 font-medium">On Possession</div>
                <div className="text-xs sm:text-sm text-slate-500 mt-2">Final handover</div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Offers */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="p-6 sm:p-8 bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl sm:rounded-3xl shadow-xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-yellow-100 rounded-2xl">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Early Bird Offer</h3>
                <p className="text-sm text-slate-600">Limited time special pricing</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>Up to ₹40 Lakhs savings</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>Free premium upgrades worth ₹5 Lakhs</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>Zero processing fees</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 sm:p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl sm:rounded-3xl shadow-xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-green-100 rounded-2xl">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Investment Benefits</h3>
                <p className="text-sm text-slate-600">Long-term value proposition</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>Zero electricity bills for lifetime</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>15-20% annual appreciation expected</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>Premium rental yields</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
