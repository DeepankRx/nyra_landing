"use client"
import { Button } from "@/components/ui/button"
import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import {
  Phone,
  Play,
  Sun,
  Zap,
  Home,
  Award,
  TreePine,
  Star,
  Shield,
  Waves,
  Dumbbell,
  Users,
  Building,
  MapPin,
  Mail,
  Calendar,
  ChevronRight,
  Menu,
  X,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  Bed,
  Bath,
  Square,
  Car,
  Quote,
  Download,
  Loader2,
} from "lucide-react"
import { useState } from "react"
import axios from "axios"
import GallerySection from "./gallery-section"
import FAQSection from "./faq-section"
import EnhancedPricingSection from "./enhanced-pricing"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFloorPlan, setActiveFloorPlan] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    visitDate: "",
    requirements: "",
  })

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL 

      const response = await axios.post(
        `${backendUrl}/api/form/submit`,
        {
          ...formData,
          timestamp: new Date().toISOString(),
          source: "landing-page",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000, // 10 second timeout
        },
      )

      if (response.status === 200 || response.status === 201) {
        toast({
          title: "Success!",
          description: "Your tour request has been submitted successfully. We'll contact you soon!",
          duration: 5000,
        })

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          visitDate: "",
          requirements: "",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)

      let errorMessage = "Something went wrong. Please try again or call us directly."

      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          errorMessage = "Request timeout. Please check your connection and try again."
        } else if (error.response?.status === 400) {
          errorMessage = "Please check your information and try again."
        } 
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Ultra Professional Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-2xl border-b border-slate-200/60 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="relative">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                  <img src="/nyra-logo.png" alt="Nyra" className="w-6 h-6 sm:w-9 sm:h-9" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-xl sm:text-2xl text-slate-900 tracking-tight">NYRA</div>
                <div className="text-xs text-slate-500 font-medium tracking-widest -mt-1">SUNTERRA</div>
              </div>
            </div>
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              {[
                { name: "Overview", href: "#overview" },
                { name: "Floor Plans", href: "#floor-plans" },
                { name: "Features", href: "#features" },
                { name: "Amenities", href: "#amenities" },
                { name: "Gallery", href: "#gallery" },
                { name: "Location", href: "#location" },
                { name: "FAQ", href: "#faq" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-slate-900 font-medium text-sm tracking-wide transition-all duration-300 relative group py-2"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-green-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden sm:flex items-center space-x-2 lg:space-x-3 bg-slate-50 px-3 lg:px-5 py-2 lg:py-3 rounded-xl lg:rounded-2xl border border-slate-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <Phone className="h-3 w-3 lg:h-4 lg:w-4 text-slate-600" />
                <span className="font-semibold text-slate-900 text-xs lg:text-sm">+91 7022 433 001</span>
              </div>
              <Button className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white shadow-xl px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-medium text-xs sm:text-sm">
                <span className="hidden sm:inline">Schedule Visit</span>
                <span className="sm:hidden">Visit</span>
                <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2" />
              </Button>
              <button
                className="lg:hidden p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
              </button>
            </div>
          </div>
          {/* Enhanced Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-slate-200">
              <nav className="flex flex-col space-y-2 pt-4">
                {[
                  { name: "Overview", href: "#overview" },
                  { name: "Floor Plans", href: "#floor-plans" },
                  { name: "Features", href: "#features" },
                  { name: "Amenities", href: "#amenities" },
                  { name: "Gallery", href: "#gallery" },
                  { name: "Location", href: "#location" },
                  { name: "FAQ", href: "#faq" },
                  { name: "Contact", href: "#contact" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-700 hover:text-slate-900 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Premium Hero Section */}
      <section
        id="overview"
        className="pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.05),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 lg:space-y-10">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <Badge className="bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-800 border border-emerald-200/50 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm">
                    <Sun className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    100% Solar Powered Living
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 border border-blue-200/50 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm">
                    <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    RERA Approved
                  </Badge>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[0.9] tracking-tight">
                    Luxury Meets
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700">
                      Sustainability
                    </span>
                  </h1>
                  <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full"></div>
                </div>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 leading-relaxed max-w-2xl font-light">
                  Experience premium villa living with zero electricity bills. 58 exquisitely crafted 4BHK villas
                  powered entirely by solar energy in Bangalore's most sought-after location.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
                  {[
                    { number: "58", label: "Premium Villas", icon: Home, color: "emerald" },
                    { number: "3200", label: "Sq.Ft Max", icon: Building, color: "blue" },
                    { number: "4", label: "BHK Luxury", icon: Award, color: "purple" },
                    { number: "15", label: "Min to Metro", icon: MapPin, color: "orange" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="group bg-white/70 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-8 text-center shadow-lg border border-white/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                      <div
                        className={`p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-50 rounded-lg sm:rounded-xl lg:rounded-2xl mb-2 sm:mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300`}
                      >
                        <stat.icon className={`h-3 w-3 sm:h-4 sm:w-4 lg:h-8 lg:w-8 text-${stat.color}-600`} />
                      </div>
                      <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 font-medium tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-4 pt-4 sm:pt-6">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 shadow-2xl rounded-xl sm:rounded-2xl font-semibold group"
                    >
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform" />
                      Call Now - Get Best Price
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl font-semibold group"
                    >
                      <Play className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
                      Watch Virtual Tour
                    </Button>
                  </div>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl font-semibold group w-full sm:w-auto"
                  >
                    <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 mt-8 lg:mt-0">
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-slate-100 via-white to-slate-100 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl border border-white/50">
                  <img src="/building1.webp" alt="Luxury Villa" className="w-full h-full object-cover" />
                </div>
                {/* Premium Floating Cards */}
                <div className="absolute left-2 sm:-left-4 lg:-left-8 top-1/4 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 shadow-2xl border border-white/50">
                  <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                    <div className="p-1.5 sm:p-2 lg:p-3 bg-gradient-to-br from-emerald-100 to-green-100 rounded-lg sm:rounded-xl lg:rounded-2xl">
                      <Zap className="h-4 w-4 sm:h-5 sm:w-5 lg:h-7 lg:w-7 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-bold text-sm sm:text-lg lg:text-xl text-slate-900">₹0 Bills</div>
                      <div className="text-xs sm:text-sm text-slate-600 font-medium">Solar Powered</div>
                    </div>
                  </div>
                </div>
                <div className="absolute right-2 sm:-right-4 lg:-right-8 bottom-1/4 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 shadow-2xl border border-white/50">
                  <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                    <div className="p-1.5 sm:p-2 lg:p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg sm:rounded-xl lg:rounded-2xl">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 lg:h-7 lg:w-7 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-sm sm:text-lg lg:text-xl text-slate-900">100% Vaastu</div>
                      <div className="text-xs sm:text-sm text-slate-600 font-medium">Compliant</div>
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Floor Plans Section */}
      <section
        id="floor-plans"
        className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-slate-100 relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.05),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <Badge className="bg-indigo-100 text-indigo-800 border border-indigo-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
              Floor Plans
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
              Thoughtfully{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Designed
              </span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              Each villa is meticulously planned to maximize space, natural light, and functionality while maintaining
              the highest standards of luxury living.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  { name: "Ground Floor", sqft: "1,600", active: 0 },
                  { name: "First Floor", sqft: "1,400", active: 1 },
                  { name: "Terrace", sqft: "200", active: 2 },
                ].map((plan, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFloorPlan(index)}
                    className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl text-center transition-all duration-300 ${
                      activeFloorPlan === index
                        ? "bg-indigo-600 text-white shadow-2xl scale-105"
                        : "bg-white text-slate-700 hover:bg-slate-50 shadow-lg"
                    }`}
                  >
                    <div className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{plan.name}</div>
                    <div className="text-xs sm:text-sm opacity-80">{plan.sqft} sq.ft</div>
                  </button>
                ))}
              </div>
              <Card className="p-6 sm:p-8 lg:p-10 bg-white shadow-2xl border-0 rounded-2xl sm:rounded-3xl">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { icon: Bed, label: "4 Bedrooms", desc: "Master + 3 Guest" },
                    { icon: Bath, label: "5 Bathrooms", desc: "Attached + Common" },
                    { icon: Square, label: "3,200 Sq.Ft", desc: "Built-up Area" },
                    { icon: Car, label: "2 Car Parking", desc: "Covered Parking" },
                  ].map((spec, index) => (
                    <div key={index} className="text-center">
                      <div className="p-3 sm:p-4 bg-indigo-50 rounded-2xl mb-3 sm:mb-4 mx-auto w-fit">
                        <spec.icon className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
                      </div>
                      <div className="font-bold text-sm sm:text-base text-slate-900 mb-1">{spec.label}</div>
                      <div className="text-xs sm:text-sm text-slate-600">{spec.desc}</div>
                    </div>
                  ))}
                </div>
              </Card>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-indigo-100">
                <h3 className="font-bold text-xl sm:text-2xl text-slate-900 mb-4 sm:mb-6">Premium Inclusions</h3>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    "Italian Marble Flooring",
                    "Teak Wood Doors",
                    "Modular Kitchen",
                    "Premium Fixtures",
                    "Solar Water Heater",
                    "Smart Home Ready",
                  ].map((inclusion, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-slate-700 font-medium">{inclusion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img src="/image.png?height=600&width=600" alt="Floor Plan" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-1 sm:mb-2">₹2.8Cr*</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium">Starting Price</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <EnhancedPricingSection />

      {/* Enhanced Features Section */}
      <section id="features" className="py-16 sm:py-24 lg:py-32 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <Badge className="bg-slate-100 text-slate-700 border border-slate-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
              Premium Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
              Crafted for the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                Extraordinary
              </span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              Every detail has been meticulously designed to create spaces that inspire, comfort, and elevate your daily
              living experience to unprecedented heights.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[
        
              {
                icon: Award,
                title: "Italian Marble Flooring",
                description:
                  "Premium imported Italian marble flooring throughout formal living spaces for timeless elegance and sophistication.",
                image: "/building6.webp?height=400&width=500",
                gradient: "from-purple-500 to-pink-600",
                bgGradient: "from-purple-50 to-pink-50",
              },
              {
                icon: Star,
                title: "Sky Terrace Garden",
                description:
                  "Expansive terrace spaces perfect for stargazing, entertaining, and creating lasting memories under the open sky.",
                image: "/building5.webp?height=400&width=500",
                gradient: "from-blue-500 to-indigo-600",
                bgGradient: "from-blue-50 to-indigo-50",
              },
              {
                icon: Play,
                title: "Private Home Theater",
                description:
                  "Dedicated miniplex space accommodating 10+ people with premium acoustics and luxury comfort seating.",
                image: "/building6.webp?height=400&width=500",
                gradient: "from-red-500 to-pink-600",
                bgGradient: "from-red-50 to-pink-50",
              },
              {
                icon: TreePine,
                title: "Zen Garden Spaces",
                description:
                  "Private outdoor sanctuaries with professionally landscaped gardens and dedicated meditation areas.",
                image: "/building4.webp?height=400&width=500",
                gradient: "from-green-500 to-emerald-600",
                bgGradient: "from-green-50 to-emerald-50",
              },
              {
                icon: Shield,
                title: "Smart Home Ready",
                description:
                  "Pre-wired for complete smart home automation with premium electrical fittings and IoT readiness throughout.",
                image: "/pool.webp?height=400&width=500",
                gradient: "from-slate-500 to-gray-600",
                bgGradient: "from-slate-50 to-gray-50",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-700 border-0 bg-white rounded-2xl sm:rounded-3xl overflow-hidden hover:-translate-y-3"
              >
                <div className="aspect-[5/4] overflow-hidden relative">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${feature.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                </div>
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <div
                    className={`p-3 sm:p-4 bg-gradient-to-r ${feature.gradient} rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 w-fit shadow-lg`}
                  >
                    <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-900 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 font-light text-sm sm:text-base">
                    {feature.description}
                  </p>
                  <Button variant="ghost" className="p-0 text-slate-700 hover:text-slate-900 font-medium group/btn">
                    Explore Details
                    <ChevronRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-slate-100 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.05),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <Badge className="bg-yellow-100 text-yellow-800 border border-yellow-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
              Happy Residents
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                Residents Say
              </span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              Discover why families choose NYRA SUNTERRA as their dream home destination
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                name: "Rajesh & Priya Sharma",
                role: "IT Professionals",
                image: "/placeholder.svg?height=100&width=100",
                rating: 5,
                testimonial:
                  "The solar-powered living has completely eliminated our electricity bills. The quality of construction and attention to detail is exceptional. Our kids love the amenities!",
                highlight: "Zero electricity bills for 2 years",
              },
              {
                name: "Dr. Anand Kumar",
                role: "Medical Professional",
                image: "/placeholder.svg?height=100&width=100",
                rating: 5,
                testimonial:
                  "The location is perfect - close to hospitals and schools. The Vaastu-compliant design brings positive energy to our home. Highly recommend NYRA SUNTERRA.",
                highlight: "Perfect location & Vaastu compliance",
              },
              {
                name: "Meera & Vikram Reddy",
                role: "Business Owners",
                image: "/placeholder.svg?height=100&width=100",
                rating: 5,
                testimonial:
                  "Luxury meets sustainability perfectly here. The amenities are world-class and the community is wonderful. Best investment decision we've made.",
                highlight: "World-class amenities & community",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-0 rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center space-x-4 mb-6 sm:mb-8">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-slate-200"
                    />
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-slate-900">{testimonial.name}</h3>
                      <p className="text-sm sm:text-base text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 mb-4 sm:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-slate-300 mb-4 sm:mb-6" />
                  <p className="text-slate-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base font-light italic">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-4 sm:p-6 rounded-2xl border border-emerald-100">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-emerald-800 font-semibold">
                        {testimonial.highlight}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Amenities Section */}
      <section id="amenities" className="py-16 sm:py-24 lg:py-32 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <Badge className="bg-purple-100 text-purple-800 border border-purple-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
              World-Class Amenities
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
              Resort-Style{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Living</span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto font-light">
              Every amenity has been carefully curated to provide you with a lifestyle that's both luxurious and
              convenient, setting new standards for premium living.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: Waves,
                name: "Infinity Pool",
                desc: "Temperature controlled with poolside lounge and cabanas",
                color: "blue",
                bgColor: "blue-50",
              },
              {
                icon: Dumbbell,
                name: "Premium Gym",
                desc: "State-of-the-art fitness equipment with personal trainers",
                color: "red",
                bgColor: "red-50",
              },
              {
                icon: Users,
                name: "Grand Banquet",
                desc: "Elegant venue for celebrations and corporate events",
                color: "purple",
                bgColor: "purple-50",
              },
              {
                icon: TreePine,
                name: "Zen Gardens",
                desc: "Professionally landscaped meditation and yoga spaces",
                color: "green",
                bgColor: "green-50",
              },
              {
                icon: Star,
                name: "Sports Complex",
                desc: "Multi-sport indoor facilities with professional courts",
                color: "orange",
                bgColor: "orange-50",
              },
              {
                icon: Building,
                name: "Kids Wonderland",
                desc: "Safe and creative play areas with supervised activities",
                color: "pink",
                bgColor: "pink-50",
              },
              {
                icon: Award,
                name: "Business Center",
                desc: "Co-working spaces and meeting rooms with high-speed internet",
                color: "indigo",
                bgColor: "indigo-50",
              },
              {
                icon: Shield,
                name: "24/7 Security",
                desc: "Advanced surveillance systems with trained security personnel",
                color: "slate",
                bgColor: "slate-50",
              },
            ].map((amenity, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:-translate-y-2"
              >
                <CardContent className="p-0 text-center">
                  <div
                    className={`p-4 sm:p-5 lg:p-6 bg-${amenity.bgColor} rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 lg:mb-8 w-fit mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <amenity.icon className={`h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-${amenity.color}-600`} />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 lg:mb-4 text-slate-900 tracking-tight">
                    {amenity.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-light text-xs sm:text-sm lg:text-base">
                    {amenity.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Enhanced Location with Interactive Map */}
      <section id="location" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 to-green-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <Badge className="bg-emerald-100 text-emerald-800 border border-emerald-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
              Prime Location
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
              Connected to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                Everything
              </span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto font-light">
              Strategically positioned with seamless connectivity to Bangalore's key destinations, ensuring convenience
              without compromise
            </p>
          </div>
          {/* Interactive Map Section */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <Card className="overflow-hidden border-0 shadow-2xl rounded-2xl sm:rounded-3xl">
              <div className="aspect-video sm:aspect-[21/9] bg-gradient-to-br from-emerald-100 via-white to-green-100 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7395.70200170143!2d77.778238!3d12.821171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae73582de78713%3A0x3081835771771805!2sNyra%20Sunterra!5e1!3m2!1sen!2sin!4v1751714705778!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl sm:rounded-3xl"
                ></iframe>
              </div>
            </Card>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="space-y-8 sm:space-y-10">
              {[
                {
                  category: "Education Hub",
                  icon: Building,
                  color: "blue",
                  bgColor: "blue-50",
                  places: [
                    { name: "GEAR Innovative International School", time: "5 mins", rating: "★★★★★" },
                    { name: "Indus International School", time: "6 mins", rating: "★★★★★" },
                    { name: "Azim Premji University", time: "10 mins", rating: "★★★★★" },
                  ],
                },
                {
                  category: "IT Corridor",
                  icon: Building,
                  color: "purple",
                  bgColor: "purple-50",
                  places: [
                    { name: "Upcoming Infosys Campus", time: "10 mins", rating: "★★★★★" },
                    { name: "Wipro Kodathi", time: "30 mins", rating: "★★★★★" },
                    { name: "Electronic City", time: "30 mins", rating: "★★★★★" },
                  ],
                },
                {
                  category: "Healthcare",
                  icon: Building,
                  color: "red",
                  bgColor: "red-50",
                  places: [
                    { name: "Oxford Hospital", time: "15 mins", rating: "★★★★★" },
                    { name: "Narayana Hrudayalaya", time: "20 mins", rating: "★★★★★" },
                    { name: "Manipal Hospital", time: "45 mins", rating: "★★★★★" },
                  ],
                },
              ].map((category, index) => (
                <Card
                  key={index}
                  className="p-6 sm:p-8 lg:p-10 border-0 shadow-xl bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl"
                >
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div
                      className={`p-3 sm:p-4 bg-${category.bgColor} rounded-xl sm:rounded-2xl mr-4 sm:mr-6 shadow-lg`}
                    >
                      <category.icon className={`h-6 w-6 sm:h-8 sm:w-8 text-${category.color}-600`} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{category.category}</h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {category.places.map((place, placeIndex) => (
                      <div
                        key={placeIndex}
                        className="flex justify-between items-center py-3 sm:py-4 border-b border-slate-100 last:border-b-0"
                      >
                        <div>
                          <span className="text-slate-800 font-medium text-sm sm:text-base">{place.name}</span>
                          <div className="text-xs sm:text-sm text-slate-500 mt-1">{place.rating}</div>
                        </div>
                        <Badge
                          className={`bg-${category.color}-100 text-${category.color}-800 border-${category.color}-200 px-3 sm:px-4 py-1 sm:py-2 rounded-full font-semibold text-xs sm:text-sm`}
                        >
                          <Clock className="h-3 w-3 mr-1" />
                          {place.time}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-emerald-100 via-white to-green-100 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl border border-white/50">
                <img
                  src="/building1.webp?height=600&width=600"
                  alt="Location Highlights"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-2">15</div>
                  <div className="text-sm text-slate-600 font-medium">Min to Metro</div>
                  <div className="flex items-center justify-center mt-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-xs text-slate-500">Upcoming</span>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <Badge className="bg-slate-100 text-slate-700 border border-slate-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
              Get In Touch
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
              Your Dream Home{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                Awaits
              </span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto font-light">
              Schedule a personalized site visit and experience luxury living firsthand with our expert consultants
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              <div className="space-y-8 sm:space-y-10">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    subtitle: "Speak with our luxury home consultants",
                    details: ["+91 7022 433 001", "+91 7760 777 992"],
                    color: "emerald",
                    bgColor: "emerald-50",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    subtitle: "Get detailed information and brochures",
                    details: ["info@nyrasunterra.com", "sales@nyrasunterra.com"],
                    color: "blue",
                    bgColor: "blue-50",
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    subtitle: "Experience center and model villa",
                    details: [
                      "BEML Cooperative Society Layout",
                      "S.Medihalli, Sarjapur-Attibele Road",
                      "Bengaluru - 562125",
                    ],
                    color: "purple",
                    bgColor: "purple-50",
                  },
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4 sm:space-x-6">
                    <div
                      className={`p-4 sm:p-5 bg-${contact.bgColor} rounded-2xl sm:rounded-3xl shadow-lg flex-shrink-0`}
                    >
                      <contact.icon className={`h-6 w-6 sm:h-8 sm:w-8 text-${contact.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl sm:text-2xl mb-2 text-slate-900 tracking-tight">
                        {contact.title}
                      </h3>
                      <p className="text-slate-500 mb-3 sm:mb-4 font-medium text-sm sm:text-base">{contact.subtitle}</p>
                      {contact.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-slate-700 font-medium leading-relaxed text-sm sm:text-base"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Card className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200/50 rounded-2xl sm:rounded-3xl shadow-xl">
                <div className="text-center">
                  <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-900">RERA Registration</h3>
                  <div className="bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-sm border border-emerald-100">
                    <p className="font-mono text-xs sm:text-sm text-slate-700 font-medium break-all">
                      PRM/KA/RERA/1251/308/PR110124/007750
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 sm:mt-4">
                    Fully compliant and government approved project
                  </p>
                </div>
              </Card>
            </div>
            <Card className="p-6 sm:p-8 lg:p-12 shadow-2xl border-0 bg-white rounded-2xl sm:rounded-3xl">
              <CardContent className="p-0">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 sm:mb-10 tracking-tight">
                  Schedule Your Private Tour
                </h3>
                <form onSubmit={handleFormSubmit} className="space-y-6 sm:space-y-8">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">First Name</label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="h-12 sm:h-14 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl sm:rounded-2xl text-base sm:text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">Last Name</label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="h-12 sm:h-14 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl sm:rounded-2xl text-base sm:text-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12 sm:h-14 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl sm:rounded-2xl text-base sm:text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="h-12 sm:h-14 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl sm:rounded-2xl text-base sm:text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">
                      Preferred Visit Date
                    </label>
                    <Input
                      type="date"
                      name="visitDate"
                      value={formData.visitDate}
                      onChange={handleInputChange}
                      className="h-12 sm:h-14 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl sm:rounded-2xl text-base sm:text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">
                      Special Requirements
                    </label>
                    <Textarea
                      rows={4}
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl sm:rounded-2xl text-base sm:text-lg resize-none"
                      placeholder="Any specific areas you'd like to focus on during the visit..."
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 sm:h-16 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl shadow-xl disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Calendar className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                        Schedule My Private Tour
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
            <div className="sm:col-span-2 md:col-span-1 space-y-6 sm:space-y-8">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl">
                  <img src="/nyra-logo.png" alt="Nyra" className="w-8 h-8 sm:w-10 sm:h-10 brightness-0 invert" />
                </div>
                <div>
                  <div className="font-bold text-xl sm:text-2xl tracking-tight">NYRA</div>
                  <div className="text-xs text-slate-400 font-medium tracking-widest -mt-1">SUNTERRA</div>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed font-light text-sm sm:text-base">
                Crafting luxurious, sustainable homes that blend elegance with eco-consciousness for the discerning
                homeowner who values both luxury and responsibility.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                {[1, 2, 3, 4].map((social) => (
                  <div
                    key={social}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-slate-400 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg sm:text-xl mb-6 sm:mb-8 tracking-tight">Quick Links</h4>
              <div className="space-y-3 sm:space-y-4">
                {["Overview", "Floor Plans", "Features", "Amenities", "Location", "Gallery"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="block text-slate-300 hover:text-white transition-colors font-medium text-sm sm:text-base"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg sm:text-xl mb-6 sm:mb-8 tracking-tight">Contact Info</h4>
              <div className="space-y-3 sm:space-y-4 text-slate-300 text-sm sm:text-base">
                <div className="font-medium">+91 7022 433 001</div>
                <div className="font-medium">+91 7760 777 992</div>
                <div className="font-medium">www.nyrasunterra.com</div>
                <div className="font-medium">info@nyrasunterra.com</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg sm:text-xl mb-6 sm:mb-8 tracking-tight">Legal & Compliance</h4>
              <div className="space-y-3 sm:space-y-4">
                {["Privacy Policy", "Terms of Service", "RERA Details", "Disclaimer", "Refund Policy"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-slate-300 hover:text-white transition-colors font-medium text-sm sm:text-base"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 sm:pt-12 text-center">
            <div className="mb-4 sm:mb-6">
              <p className="text-slate-300 mb-2 font-medium text-sm sm:text-base">
                &copy; 2024 Nyra Projects Pvt Ltd. All rights reserved.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-light max-w-4xl mx-auto">
                All images, amenities, specifications, and features shown are indicative and for representational
                purposes only. Actual construction may vary. Please refer to the final agreement for binding terms and
                conditions.
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-400">
              <span>RERA Approved</span>
              <span>•</span>
              <span>ISO Certified</span>
              <span>•</span>
              <span>Green Building</span>
              <span>•</span>
              <span>Vaastu Compliant</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
