"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
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
  Eye,
  ChevronRight,
  Menu,
  X,
  ArrowUpRight,
  Clock,
  CheckCircle2,
} from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Ultra Professional Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-2xl border-b border-slate-200/60 z-50 shadow-sm">
        <div className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl flex items-center justify-center shadow-lg">
                  <img src="/nyra-logo.png" alt="Nyra" className="w-9 h-9" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-2xl text-slate-900 tracking-tight">NYRA</div>
                <div className="text-xs text-slate-500 font-medium tracking-widest -mt-1">SUNTERRA</div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-10">
              {[
                { name: "Overview", href: "#overview" },
                { name: "Features", href: "#features" },
                { name: "Amenities", href: "#amenities" },
                { name: "Gallery", href: "#gallery" },
                { name: "Location", href: "#location" },
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

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <Phone className="h-4 w-4 text-slate-600" />
                <span className="font-semibold text-slate-900 text-sm">+91 7022 433 001</span>
              </div>
              <Button className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white shadow-xl px-6 py-3 rounded-2xl font-medium">
                Schedule Visit
                <ArrowUpRight className="h-4 w-4 ml-2" />
              </Button>
              <button
                className="lg:hidden p-3 rounded-xl bg-slate-50 border border-slate-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-6 pb-6 border-t border-slate-200">
              <nav className="flex flex-col space-y-4 pt-6">
                {[
                  { name: "Overview", href: "#overview" },
                  { name: "Features", href: "#features" },
                  { name: "Amenities", href: "#amenities" },
                  { name: "Gallery", href: "#gallery" },
                  { name: "Location", href: "#location" },
                  { name: "Contact", href: "#contact" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-700 hover:text-slate-900 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors"
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
      <section className="pt-32 pb-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.05),transparent_50%)]"></div>

        <div className="container mx-auto px-8 relative">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-8">
                <div className="flex flex-wrap items-center gap-4">
                  <Badge className="bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-800 border border-emerald-200/50 px-6 py-3 rounded-full font-medium">
                    <Sun className="h-4 w-4 mr-2" />
                    100% Solar Powered Living
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 border border-blue-200/50 px-6 py-3 rounded-full font-medium">
                    <Shield className="h-4 w-4 mr-2" />
                    RERA Approved
                  </Badge>
                </div>

                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-slate-900 leading-[0.9] tracking-tight">
                    Luxury Meets
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700">
                      Sustainability
                    </span>
                  </h1>

                  <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full"></div>
                </div>

                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl font-light">
                  Experience premium villa living with zero electricity bills. 58 exquisitely crafted 4BHK villas
                  powered entirely by solar energy in Bangalore's most sought-after location.
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { number: "58", label: "Premium Villas", icon: Home, color: "emerald" },
                    { number: "3200", label: "Sq.Ft Max", icon: Building, color: "blue" },
                    { number: "4", label: "BHK Luxury", icon: Award, color: "purple" },
                    { number: "15", label: "Min to Metro", icon: MapPin, color: "orange" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 text-center shadow-lg border border-white/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                      <div
                        className={`p-4 bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-50 rounded-2xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300`}
                      >
                        <stat.icon className={`h-8 w-8 text-${stat.color}-600`} />
                      </div>
                      <div className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                      <div className="text-sm text-slate-600 font-medium tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-6 pt-6">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white text-lg px-10 py-6 shadow-2xl rounded-2xl font-semibold group"
                  >
                    <Phone className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
                    Call Now - Get Best Price
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 text-lg px-10 py-6 bg-white/80 backdrop-blur-xl rounded-2xl font-semibold group"
                  >
                    <Play className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                    Watch Virtual Tour
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-slate-100 via-white to-slate-100 rounded-[3rem] overflow-hidden shadow-2xl border border-white/50">
                  <img
                    src="/banner.jpeg"
                    alt="Luxury Villa"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Premium Floating Cards */}
                <div className="absolute -left-8 top-1/4 bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl">
                      <Zap className="h-7 w-7 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-bold text-xl text-slate-900">₹0 Bills</div>
                      <div className="text-sm text-slate-600 font-medium">Solar Powered</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-8 bottom-1/4 bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl">
                      <Shield className="h-7 w-7 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-xl text-slate-900">100% Vaastu</div>
                      <div className="text-sm text-slate-600 font-medium">Compliant</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Professional Features */}
      <section id="features" className="py-32 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"></div>

        <div className="container mx-auto px-8 relative">
          <div className="text-center mb-24">
            <Badge className="bg-slate-100 text-slate-700 border border-slate-200 mb-8 px-6 py-3 rounded-full font-medium">
              Premium Features
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Crafted for the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                Extraordinary
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              Every detail has been meticulously designed to create spaces that inspire, comfort, and elevate your daily
              living experience to unprecedented heights.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                icon: Home,
                title: "Grand Teak Entrance",
                description:
                  "Solid teak wood double doors with premium hardware create an unforgettable first impression that speaks of timeless elegance.",
                image: "/building.webp?height=400&width=500",
                gradient: "from-amber-500 to-orange-600",
                bgGradient: "from-amber-50 to-orange-50",
              },
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
                className="group hover:shadow-2xl transition-all duration-700 border-0 bg-white rounded-3xl overflow-hidden hover:-translate-y-3"
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
                <CardContent className="p-10">
                  <div className={`p-4 bg-gradient-to-r ${feature.gradient} rounded-3xl mb-8 w-fit shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-slate-900 tracking-tight">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 font-light">{feature.description}</p>
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

      {/* Premium Video Gallery */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-slate-100 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.05),transparent_50%)]"></div>

        <div className="container mx-auto px-8 relative">
          <div className="text-center mb-24">
            <Badge className="bg-blue-100 text-blue-800 border border-blue-200 mb-8 px-6 py-3 rounded-full font-medium">
              Virtual Experience
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Explore Before You{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Invest</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light">
              Take an immersive journey through our premium villas and world-class amenities with our exclusive video
              collection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Villa Walkthrough", duration: "3:45", views: "12.5K", category: "Interior", color: "emerald" },
              { title: "Amenities Tour", duration: "4:20", views: "8.2K", category: "Facilities", color: "blue" },
              { title: "Solar Technology", duration: "2:15", views: "15.1K", category: "Technology", color: "purple" },
              { title: "Location Highlights", duration: "3:10", views: "9.8K", category: "Location", color: "orange" },
              { title: "Resident Stories", duration: "5:30", views: "6.4K", category: "Testimonials", color: "pink" },
              { title: "Construction Quality", duration: "2:45", views: "11.2K", category: "Quality", color: "indigo" },
            ].map((video, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-700 bg-white border-0 rounded-3xl hover:-translate-y-2"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=300&width=500`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="p-6 bg-white/95 backdrop-blur-xl rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-10 w-10 text-slate-900" />
                    </div>
                  </div>
                  <div className="absolute top-6 left-6">
                    <Badge className={`bg-${video.color}-500 text-white border-0 px-4 py-2 rounded-full font-medium`}>
                      {video.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-4 text-slate-900 tracking-tight">{video.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-slate-500 text-sm">
                      <Eye className="h-4 w-4 mr-2" />
                      {video.views} views
                    </span>
                    <Button variant="ghost" size="sm" className="text-slate-700 hover:text-slate-900 p-0 font-medium">
                      Watch Now
                      <ArrowUpRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 px-12 py-6 rounded-2xl text-lg font-semibold shadow-2xl"
            >
              <Play className="h-5 w-5 mr-3" />
              View Complete Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Luxury Amenities */}
      <section id="amenities" className="py-32 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>

        <div className="container mx-auto px-8 relative">
          <div className="text-center mb-24">
            <Badge className="bg-purple-100 text-purple-800 border border-purple-200 mb-8 px-6 py-3 rounded-full font-medium">
              World-Class Amenities
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Resort-Style{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Living</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light">
              Every amenity has been carefully curated to provide you with a lifestyle that's both luxurious and
              convenient, setting new standards for premium living.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-3xl p-8 hover:-translate-y-2"
              >
                <CardContent className="p-0 text-center">
                  <div
                    className={`p-6 bg-${amenity.bgColor} rounded-3xl mb-8 w-fit mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <amenity.icon className={`h-10 w-10 text-${amenity.color}-600`} />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-slate-900 tracking-tight">{amenity.name}</h3>
                  <p className="text-slate-600 leading-relaxed font-light">{amenity.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Location */}
      <section id="location" className="py-32 bg-gradient-to-br from-emerald-50 to-green-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.1),transparent_50%)]"></div>

        <div className="container mx-auto px-8 relative">
          <div className="text-center mb-24">
            <Badge className="bg-emerald-100 text-emerald-800 border border-emerald-200 mb-8 px-6 py-3 rounded-full font-medium">
              Prime Location
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Connected to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                Everything
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light">
              Strategically positioned with seamless connectivity to Bangalore's key destinations, ensuring convenience
              without compromise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
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
                <Card key={index} className="p-10 border-0 shadow-xl bg-white/80 backdrop-blur-xl rounded-3xl">
                  <div className="flex items-center mb-8">
                    <div className={`p-4 bg-${category.bgColor} rounded-2xl mr-6 shadow-lg`}>
                      <category.icon className={`h-8 w-8 text-${category.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{category.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.places.map((place, placeIndex) => (
                      <div
                        key={placeIndex}
                        className="flex justify-between items-center py-4 border-b border-slate-100 last:border-b-0"
                      >
                        <div>
                          <span className="text-slate-800 font-medium">{place.name}</span>
                          <div className="text-sm text-slate-500 mt-1">{place.rating}</div>
                        </div>
                        <Badge
                          className={`bg-${category.color}-100 text-${category.color}-800 border-${category.color}-200 px-4 py-2 rounded-full font-semibold`}
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
              <div className="aspect-square bg-gradient-to-br from-emerald-100 via-white to-green-100 rounded-[3rem] overflow-hidden shadow-2xl border border-white/50">
                <img
                  src="/building2.webp?height=600&width=600"
                  alt="Location Map"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">15</div>
                  <div className="text-sm text-slate-600 font-medium">Min to Metro</div>
                  <div className="flex items-center justify-center mt-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-xs text-slate-500">Upcoming</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Professional Contact */}
      <section id="contact" className="py-32 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"></div>

        <div className="container mx-auto px-8 relative">
          <div className="text-center mb-24">
            <Badge className="bg-slate-100 text-slate-700 border border-slate-200 mb-8 px-6 py-3 rounded-full font-medium">
              Get In Touch
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Your Dream Home{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                Awaits
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light">
              Schedule a personalized site visit and experience luxury living firsthand with our expert consultants
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="space-y-10">
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
                  <div key={index} className="flex items-start space-x-6">
                    <div className={`p-5 bg-${contact.bgColor} rounded-3xl shadow-lg`}>
                      <contact.icon className={`h-8 w-8 text-${contact.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-2xl mb-2 text-slate-900 tracking-tight">{contact.title}</h3>
                      <p className="text-slate-500 mb-4 font-medium">{contact.subtitle}</p>
                      {contact.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-slate-700 font-medium leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Card className="p-10 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200/50 rounded-3xl shadow-xl">
                <div className="text-center">
                  <h3 className="font-bold text-xl mb-4 text-slate-900">RERA Registration</h3>
                  <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-emerald-100">
                    <p className="font-mono text-sm text-slate-700 font-medium">PRM/KA/RERA/1251/308/PR110124/007750</p>
                  </div>
                  <p className="text-sm text-slate-600 mt-4">Fully compliant and government approved project</p>
                </div>
              </Card>
            </div>

            <Card className="p-12 shadow-2xl border-0 bg-white rounded-3xl">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">Schedule Your Private Tour</h3>
                <form className="space-y-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">First Name</label>
                      <Input className="h-14 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-2xl text-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">Last Name</label>
                      <Input className="h-14 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-2xl text-lg" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">Email Address</label>
                    <Input
                      type="email"
                      className="h-14 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-2xl text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">Phone Number</label>
                    <Input
                      type="tel"
                      className="h-14 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-2xl text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">Preferred Visit Date</label>
                    <Input
                      type="date"
                      className="h-14 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-2xl text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">Special Requirements</label>
                    <Textarea
                      rows={4}
                      className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-2xl text-lg resize-none"
                      placeholder="Any specific areas you'd like to focus on during the visit..."
                    />
                  </div>
                  <Button className="w-full h-16 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white text-lg font-semibold rounded-2xl shadow-xl">
                    <Calendar className="h-6 w-6 mr-3" />
                    Schedule My Private Tour
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ultra Professional Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>

        <div className="container mx-auto px-8 relative">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl flex items-center justify-center shadow-xl">
                  <img src="/nyra-logo.png" alt="Nyra" className="w-10 h-10 brightness-0 invert" />
                </div>
                <div>
                  <div className="font-bold text-2xl tracking-tight">NYRA</div>
                  <div className="text-xs text-slate-400 font-medium tracking-widest -mt-1">SUNTERRA</div>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed font-light">
                Crafting luxurious, sustainable homes that blend elegance with eco-consciousness for the discerning
                homeowner who values both luxury and responsibility.
              </p>
              <div className="flex space-x-4">
                {[1, 2, 3, 4].map((social) => (
                  <div
                    key={social}
                    className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    <div className="w-5 h-5 bg-slate-400 rounded"></div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-8 tracking-tight">Quick Links</h4>
              <div className="space-y-4">
                {["Overview", "Features", "Amenities", "Gallery", "Location", "Floor Plans"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-slate-300 hover:text-white transition-colors font-medium"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-8 tracking-tight">Contact Info</h4>
              <div className="space-y-4 text-slate-300">
                <div className="font-medium">+91 7022 433 001</div>
                <div className="font-medium">+91 7760 777 992</div>
                <div className="font-medium">www.nyrasunterra.com</div>
                <div className="font-medium">info@nyrasunterra.com</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-8 tracking-tight">Legal & Compliance</h4>
              <div className="space-y-4">
                {["Privacy Policy", "Terms of Service", "RERA Details", "Disclaimer", "Refund Policy"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-slate-300 hover:text-white transition-colors font-medium"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-12 text-center">
            <div className="mb-6">
              <p className="text-slate-300 mb-2 font-medium">&copy; 2024 Nyra Projects Pvt Ltd. All rights reserved.</p>
              <p className="text-sm text-slate-400 font-light max-w-4xl mx-auto">
                All images, amenities, specifications, and features shown are indicative and for representational
                purposes only. Actual construction may vary. Please refer to the final agreement for binding terms and
                conditions.
              </p>
            </div>
            <div className="flex justify-center items-center space-x-8 text-sm text-slate-400">
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
