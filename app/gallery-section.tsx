"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ImageIcon, Play, ArrowUpRight } from "lucide-react"
import { useState } from "react"

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("exterior")

  const galleryCategories = [
    { id: "exterior", name: "Exterior Views", count: 12 },
    { id: "interior", name: "Interior Design", count: 15 },
    { id: "amenities", name: "Amenities", count: 8 },
    { id: "location", name: "Location", count: 6 },
  ]

  const galleryImages = {
    exterior: [
      { src: "/building.webp", title: "Villa Exterior", type: "image" },
      { src: "/building2.webp", title: "Entrance View", type: "image" },
      { src: "/building4.webp", title: "Garden View", type: "image" },
      { src: "/building5.webp", title: "Terrace Design", type: "image" },
      { src: "/building6.webp", title: "Architecture", type: "image" },
      { src: "/banner.jpeg", title: "Villa Walkthrough", type: "video" },
    ],
    interior: [
      { src: "/placeholder.svg?height=400&width=600", title: "Living Room", type: "image" },
      { src: "/placeholder.svg?height=400&width=600", title: "Master Bedroom", type: "image" },
      { src: "/placeholder.svg?height=400&width=600", title: "Kitchen", type: "image" },
      { src: "/placeholder.svg?height=400&width=600", title: "Home Theater", type: "video" },
      { src: "/placeholder.svg?height=400&width=600", title: "Dining Area", type: "image" },
      { src: "/placeholder.svg?height=400&width=600", title: "Bathroom", type: "image" },
    ],
    amenities: [
      { src: "/pool.webp", title: "Swimming Pool", type: "image" },
      { src: "/placeholder.svg?height=400&width=600", title: "Gym", type: "image" },
      { src: "/placeholder.svg?height=400&width=600", title: "Clubhouse", type: "image" },
      { src: "/placeholder.svg?height=400&width=600", title: "Kids Play Area", type: "image" },
    ],
    location: [
      { src: "/placeholder.svg?height=400&width=600", title: "Aerial View", type: "image" },
      { src: "/placeholder.svg?height=400&width=600", title: "Nearby Schools", type: "image" },
      { src: "/placeholder.svg?height=400&width=600", title: "Metro Connectivity", type: "image" },
      { src: "/placeholder.svg?height=400&width=600", title: "Location Tour", type: "video" },
    ],
  }as any

  return (
    <section id="gallery" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-slate-100 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <Badge className="bg-pink-100 text-pink-800 border border-pink-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
            Visual Gallery
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
            Experience{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
              Luxury Living
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Explore our comprehensive gallery showcasing the finest details of architecture, interiors, and lifestyle
            amenities
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-pink-600 text-white shadow-2xl scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-50 shadow-lg"
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryImages[activeCategory]?.map((item :any, index :number) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-700 bg-white border-0 rounded-2xl sm:rounded-3xl hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="p-4 sm:p-6 bg-white/95 backdrop-blur-xl rounded-full shadow-2xl">
                      <Play className="h-8 w-8 sm:h-10 sm:w-10 text-slate-900" />
                    </div>
                  </div>
                )}

                <div className="absolute top-4 left-4">
                  <Badge
                    className={`${item.type === "video" ? "bg-red-500" : "bg-blue-500"} text-white border-0 px-3 py-1 rounded-full text-xs font-medium`}
                  >
                    {item.type === "video" ? "Video" : "Photo"}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-2">{item.title}</h3>
                <Button variant="ghost" size="sm" className="text-slate-700 hover:text-slate-900 p-0 font-medium">
                  View Full Size
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-600 to-rose-700 hover:from-pink-700 hover:to-rose-800 px-12 py-6 rounded-2xl text-lg font-semibold shadow-2xl"
          >
            <ImageIcon className="h-5 w-5 mr-3" />
            View Complete Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}
