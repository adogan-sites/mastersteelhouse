"use client"

import { useState, useEffect } from "react"
import {
  Menu,
  X,
  Building,
  Award,
  Phone,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  Play,
  CheckCircle,
  Users,
  Clock,
  Shield,
  Zap,
  ArrowRight,
  Star,
  FileText,
  ChevronLeft,
  ChevronRight,
  Factory,
  Home,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function SteelConstructionSPA() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [currentSlide, setCurrentSlide] = useState(0)

  // Hero slider data with SEO-optimized content
  const heroSlides = [
    {
      id: 1,
      title: "Hafif Çelik Yapı Sistemleri",
      subtitle: "Modern teknoloji ile dayanıklı ve hızlı yapı çözümleri",
      image: "/placeholder.svg?height=1080&width=1920&text=Modern+Hafif+Çelik+Yapı",
      cta: "Ücretsiz Danışma",
      ctaSecondary: "Projelerimizi İncele",
    },
    {
      id: 2,
      title: "Büyük Konut Projeleri ve Çelik Yapılar",
      subtitle: "Özel villa siteleri, köy evleri ve toplu yerleşkeler için size özel çözümler",
      image: "/placeholder.svg?height=1080&width=1920&text=Endüstriyel+Çelik+Yapı",
      cta: "Proje Danışmanlığı",
      ctaSecondary: "Referanslarımız",
    },
    {
      id: 3,
      title: "Modern Konut Projeleri",
      subtitle: "Hayalinizdeki evi, çelik çözüm sistemleri ile gerçeğe dönüştürün",
      image: "/placeholder.svg?height=1080&width=1920&text=Hafif+Çelik+Villa",
      cta: "Teklif Al",
      ctaSecondary: "Bizimle İletişime Geçin",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const services = [
    {
      id: "tek-katli",
      title: "Tek Katlı Yapılar",
      description:
        "Modern ve dayanıklı tek katlı hafif çelik yapı sistemleri. Konut, ofis ve ticari alanlar için ideal çözümler.",
      icon: Home,
      features: ["Hızlı montaj", "Depreme dayanıklı", "Enerji verimli", "Ekonomik"],
      image: "/placeholder.svg?height=300&width=400&text=Tek+Katlı+Yapı",
    },
    {
      id: "iki-katli",
      title: "İki Katlı Yapılar",
      description: "Çok katlı hafif çelik konstrüksiyon çözümleri. Geniş yaşam alanları için mükemmel seçenek.",
      icon: Building,
      features: ["Geniş alan", "Esnek tasarım", "Güvenli yapı", "Uzun ömürlü"],
      image: "/placeholder.svg?height=300&width=400&text=İki+Katlı+Yapı",
    },
    {
      id: "ozel-yapilar",
      title: "Özel Yapılar",
      description: "İhtiyaçlarınıza özel tasarlanmış hafif çelik yapılar. Endüstriyel ve ticari projeler için.",
      icon: Factory,
      features: ["Özel tasarım", "Büyük açıklık", "Endüstriyel güç", "Hızlı üretim"],
      image: "/placeholder.svg?height=300&width=400&text=Özel+Yapılar",
    },
    {
      id: "profil-uretimi",
      title: "Profil Üretimi",
      description: "Yüksek kaliteli galvanizli çelik profil üretimi. Tüm yapı ihtiyaçlarınız için.",
      icon: Shield,
      features: ["Galvanizli çelik", "Yüksek kalite", "Özel ölçüler", "Hızlı teslimat"],
      image: "/placeholder.svg?height=300&width=400&text=Profil+Üretimi",
    },
  ]

  const products = [
    {
      id: "alci-kose",
      title: "Alçı Köşe Profili",
      description: "Alçıpan uygulamaları için özel tasarlanmış köşe profilleri. Mükemmel bitirme detayları.",
      specs: ["Galvanizli çelik", "0.50mm kalınlık", "Çeşitli boyutlar", "Kolay montaj"],
      image: "/placeholder.svg?height=250&width=350&text=Alçı+Köşe+Profili",
    },
    {
      id: "metal-kabasiva",
      title: "Metal Kabasıva Profili",
      description: "Duvar kaplamaları için metal profiller. Dayanıklı ve estetik çözümler.",
      specs: ["Paslanmaz çelik", "0.60mm kalınlık", "Çok renkli seçenekler", "UV dayanımlı"],
      image: "/placeholder.svg?height=250&width=350&text=Metal+Kabasıva",
    },
    {
      id: "tavan-uc",
      title: "Tavan U-C Profili",
      description: "Asma tavan sistemleri için U-C profilleri. Profesyonel tavan çözümleri.",
      specs: ["Hafif yapı", "0.45mm kalınlık", "Kolay kurulum", "Ekonomik"],
      image: "/placeholder.svg?height=250&width=350&text=Tavan+U-C+Profili",
    },
  ]

  const projects = [
    {
      id: 1,
      title: "Modern Villa Projesi",
      category: "konut",
      description: "200m² hafif çelik villa projesi",
      image: "/placeholder.svg?height=300&width=400&text=Modern+Villa",
      location: "İstanbul",
      year: "2024",
    },
    {
      id: 2,
      title: "Endüstriyel Tesis",
      category: "endustriyel",
      description: "5000m² üretim tesisi",
      image: "/placeholder.svg?height=300&width=400&text=Endüstriyel+Tesis",
      location: "Bursa",
      year: "2023",
    },
    {
      id: 3,
      title: "Ticari Merkez",
      category: "ticari",
      description: "3 katlı ticari kompleks",
      image: "/placeholder.svg?height=300&width=400&text=Ticari+Merkez",
      location: "Ankara",
      year: "2024",
    },
    {
      id: 4,
      title: "Okul Binası",
      category: "kamu",
      description: "Modern eğitim kampüsü",
      image: "/placeholder.svg?height=300&width=400&text=Okul+Binası",
      location: "İzmir",
      year: "2023",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const stats = [
    { number: "100+", label: "Tamamlanan Proje", icon: Building },
    { number: "10+", label: "Yıllık Deneyim", icon: Clock },
    { number: "20+", label: "Uzman Ekip", icon: Users },
    { number: "99%", label: "Müşteri Memnuniyeti", icon: Star },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* SEO-optimized Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-xl border-b border-gray-200/50"
            : "bg-white/95 backdrop-blur-sm shadow-lg"
        }`}
        role="banner"
      >
        <div className="container mx-auto px-9">
          <div className="flex items-center justify-between h-20">
            {/* Corporate Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-[168px] h-[70px] relative rounded-xl">
                <Image
                    loading="eager"
                    width={168}
                    height={70}
                    src="/images/logo-dark.webp"
                    alt="header-logo"
                    className="object-contain"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6" role="navigation" aria-label="Ana menü">
              <a
                  href="#ana-sayfa"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("ana-sayfa")
                }}
                className="text-gray-700 hover:text-yellow-600 font-semibold transition-colors duration-200 relative group"
              >
                Ana Sayfa
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-200 group-hover:w-full"></span>
              </a>

              <a
                href="#hizmetlerimiz"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("hizmetlerimiz")
                }}
                className="text-gray-700 hover:text-yellow-600 font-semibold transition-colors duration-200 relative group"
              >
                Hizmetlerimiz
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-200 group-hover:w-full"></span>
              </a>

              <a
                href="#urunlerimiz"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("urunlerimiz")
                }}
                className="text-gray-700 hover:text-yellow-600 font-semibold transition-colors duration-200 relative group"
              >
                Ürünlerimiz
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-200 group-hover:w-full"></span>
              </a>

              <a
                href="#projeler"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("projeler")
                }}
                className="text-gray-700 hover:text-yellow-600 font-semibold transition-colors duration-200 relative group"
              >
                Projeler
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="#sertifikalar"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("sertifikalar")
                }}
                className="text-gray-700 hover:text-yellow-600 font-semibold transition-colors duration-200 relative group"
              >
                Sertifikalar
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="#katalog"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("katalog")
                }}
                className="text-gray-700 hover:text-yellow-600 font-semibold transition-colors duration-200 relative group"
              >
                Katalog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="#hakkimizda"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("hakkimizda")
                }}
                className="text-gray-700 hover:text-yellow-600 font-semibold transition-colors duration-200 relative group"
              >
                Hakkımızda
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="#sss"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("sss")
                }}
                className="text-gray-700 hover:text-yellow-600 font-semibold transition-colors duration-200 relative group"
              >
                S.S.S.
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <Button
                  onClick={() => scrollToSection("iletisim")}
                  className="px-8 py-3 rounded-xl font-semibold text-gray-900 bg-yellow-500 shadow-lg animate-bounce"
              >
                TEKLİF ALIN
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menüyü aç/kapat"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav
              className="lg:hidden bg-white border-t border-gray-200 animate-in slide-in-from-top-2 shadow-lg"
              role="navigation"
              aria-label="Mobil menü"
            >
              <div className="px-4 py-4 space-y-2">
                {[
                  { href: "#ana-sayfa", label: "Ana Sayfa" },
                  { href: "#hizmetlerimiz", label: "Hizmetlerimiz" },
                  { href: "#urunlerimiz", label: "Ürünlerimiz" },
                  { href: "#projeler", label: "Projeler" },
                  { href: "#sertifikalar", label: "Sertifikalar" },
                  { href: "#katalog", label: "Katalog" },
                  { href: "#hakkimizda", label: "Hakkımızda" },
                  { href: "#sss", label: "S.S.S." },
                  { href: "#iletisim", label: "İletişim" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href.substring(1))
                    }}
                    className="block py-3 px-4 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 font-semibold transition-colors rounded-lg"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Advanced Hero Slider Section */}
        <section
          id="ana-sayfa"
          className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
          aria-label="Ana sayfa hero bölümü"
        >
          <div className="relative w-full h-full">
            {heroSlides.map((slide, index) => (
              <article
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
                aria-hidden={index !== currentSlide}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-800/80 to-gray-900/90 z-10"></div>
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                />
                <div className="relative z-20 h-full flex items-center justify-center">
                  <div className="container mx-auto px-4">
                    <div className="text-center max-w-5xl mx-auto">
                      <div className="mb-8">
                        <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 px-8 py-4 text-lg font-bold backdrop-blur-sm rounded-full">
                          10+ Yıllık Deneyim
                        </Badge>
                      </div>

                      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                        {slide.title}
                      </h1>

                      <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto">
                        {slide.subtitle}
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 transition-all duration-200"
                          onClick={() => scrollToSection("iletisim")}
                        >
                          <Phone className="h-6 w-6 mr-3" />
                          {slide.cta}
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-3 border-white/60 text-white hover:bg-white hover:text-gray-900 px-12 py-6 text-xl font-bold rounded-2xl bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-200"
                          onClick={() => scrollToSection("projeler")}
                        >
                          <Play className="h-6 w-6 mr-3" />
                          {slide.ctaSecondary}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-yellow-500/30 backdrop-blur-sm rounded-full p-4 transition-all duration-200 hover:scale-110 group"
            aria-label="Önceki slayt"
          >
            <ChevronLeft className="h-6 w-6 text-white group-hover:text-yellow-300" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-yellow-500/30 backdrop-blur-sm rounded-full p-4 transition-all duration-200 hover:scale-110 group"
            aria-label="Sonraki slayt"
          >
            <ChevronRight className="h-6 w-6 text-white group-hover:text-yellow-300" />
          </button>

          {/* Slider Indicators */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex space-x-4">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-yellow-500 scale-125 shadow-lg shadow-yellow-500/50"
                    : "bg-white/50 hover:bg-yellow-400/75 hover:scale-110"
                }`}
                aria-label={`Slayt ${index + 1}'e git`}
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 right-8 z-20 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
              <div className="w-1 h-3 bg-yellow-400/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Corporate Stats Section */}
        <section className="py-20 bg-gradient-to-r from-gray-100 via-white to-gray-100" aria-label="İstatistikler">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <stat.icon className="h-10 w-10 text-yellow-400" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="hizmetlerimiz" className="py-24 bg-white" aria-labelledby="services-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-20">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200 font-semibold px-6 py-2">
                Hizmetlerimiz
              </Badge>
              <h2 id="services-heading" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Kapsamlı Yapı Çözümleri
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Modern teknoloji ve uzman ekibimizle her türlü hafif çelik yapı projenizde yanınızdayız. Tasarımdan
                üretime, montajdan teslime kadar tam hizmet.
              </p>
            </header>

            <div className="grid lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-br from-white to-gray-50"
                >
                  <div className="relative">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={`${service.title} - Hafif çelik yapı hizmeti`}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-yellow-500 transition-colors duration-300">
                        <service.icon className="h-6 w-6 text-yellow-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                        className="bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                        onClick={() => scrollToSection("iletisim")}
                    >
                      Detaylı Bilgi Al
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Sub-sections */}
            <div className="mt-24 space-y-20">
              {/* Tek Katlı Yapılar */}
              <article id="tek-katli-yapilar" className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200 font-semibold px-4 py-2">
                    Tek Katlı Yapılar
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Modern Tek Katlı Çözümler</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Konut, ofis ve ticari alanlar için ideal olan tek katlı hafif çelik yapılarımız, hızlı montaj ve
                    ekonomik çözümler sunar.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>2-4 hafta içinde teslim</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>%70 daha hızlı inşaat</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Depreme dayanıklı tasarım</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Enerji verimli yapı</span>
                    </li>
                  </ul>
                  <Button
                      className="bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                      onClick={() => scrollToSection("iletisim")}
                  >
                    Detaylı Bilgi Al
                  </Button>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Tek+Katlı+Yapı+Detay"
                    alt="Tek katlı hafif çelik yapı detayları"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </article>

              {/* İki Katlı Yapılar */}
              <article id="iki-katli-yapilar" className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=İki+Katlı+Yapı+Detay"
                    alt="İki katlı hafif çelik yapı detayları"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200 font-semibold px-4 py-2">
                    İki Katlı Yapılar
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Geniş Yaşam Alanları</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Çok katlı hafif çelik yapılarımız ile geniş ve konforlu yaşam alanları oluşturun. Esnek tasarım
                    seçenekleri ile hayalinizdeki evi gerçekleştirin.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Geniş açık alanlar</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Esnek kat planları</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Yüksek tavan seçenekleri</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Modern mimari tasarım</span>
                    </li>
                  </ul>
                  <Button
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                    onClick={() => scrollToSection("iletisim")}
                  >
                    Detaylı Bilgi Al
                  </Button>
                </div>
              </article>

              {/* Özel Yapılar */}
              <article id="ozel-yapilar" className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200 font-semibold px-4 py-2">
                    Özel Yapılar
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">İhtiyaca Özel Tasarım</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Endüstriyel tesisler, depolar, spor salonları ve özel projeler için ihtiyaçlarınıza göre tasarlanmış
                    çözümler.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Büyük açıklık kapasitesi</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Endüstriyel dayanıklılık</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Özel mühendislik çözümleri</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Hızlı proje teslimi</span>
                    </li>
                  </ul>
                  <Button
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                    onClick={() => scrollToSection("iletisim")}
                  >
                    Detaylı Bilgi Al
                  </Button>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Özel+Yapı+Detay"
                    alt="Özel hafif çelik yapı detayları"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </article>

              {/* Profil Üretimi */}
              <article id="profil-uretimi" className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Profil+Üretim+Detay"
                    alt="Çelik profil üretim detayları"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200 font-semibold px-4 py-2">
                    Profil Üretimi
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Yüksek Kalite Profiller</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Modern üretim tesisimizde galvanizli çelik profillerin üretimini gerçekleştiriyoruz. Tüm yapı
                    ihtiyaçlarınız için kaliteli çözümler.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Galvanizli çelik kalitesi</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Özel ölçü üretimi</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Hızlı teslimat</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Kalite kontrol sertifikası</span>
                    </li>
                  </ul>
                  <Button
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                    onClick={() => scrollToSection("iletisim")}
                  >
                    Detaylı Bilgi Al
                  </Button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section
          id="urunlerimiz"
          className="py-24 bg-gradient-to-br from-gray-50 to-white"
          aria-labelledby="products-heading"
        >
          <div className="container mx-auto px-4">
            <header className="text-center mb-20">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200 font-semibold px-6 py-2">
                Ürünlerimiz
              </Badge>
              <h2 id="products-heading" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Kaliteli Çelik Profiller
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Yüksek kaliteli galvanizli çelik profillerimizle projelerinizi destekliyoruz. Her ihtiyaca uygun
                çözümler sunuyoruz.
              </p>
            </header>

            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white"
                >
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`${product.title} - Hafif çelik profil ürünü`}
                      width={350}
                      height={250}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-500 text-gray-900 font-semibold">Yeni</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                    <div className="space-y-2 mb-6">
                      {product.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-600">{spec}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="flex-1 border-gray-300 hover:bg-gray-900 hover:text-white transition-colors duration-300 bg-transparent"
                        onClick={() => scrollToSection("katalog")}
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Katalog
                      </Button>
                      <Button
                        className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                        onClick={() => scrollToSection("iletisim")}
                      >
                        Fiyat Al
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Product Sub-sections */}
            <div className="mt-24 space-y-20">
              {/* Alçı Köşe Profili */}
              <article id="alci-kose-profili" className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200 font-semibold px-4 py-2">
                    Alçı Köşe Profili
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mükemmel Köşe Detayları</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Alçıpan uygulamalarında köşe detaylarının mükemmel bitirilmesi için özel tasarlanmış profiller.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Teknik Özellikler</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Galvanizli çelik</li>
                        <li>• 0.50mm kalınlık</li>
                        <li>• Çeşitli boyutlar</li>
                        <li>• Korozyona dayanıklı</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Uygulama Alanları</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• İç mekan köşeleri</li>
                        <li>• Alçıpan sistemler</li>
                        <li>• Dekoratif uygulamalar</li>
                        <li>• Tavan detayları</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      className="bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                      onClick={() => scrollToSection("iletisim")}
                    >
                      Fiyat Teklifi Al
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-300 hover:bg-gray-900 hover:text-white bg-transparent"
                      onClick={() => scrollToSection("katalog")}
                    >
                      Katalog İndir
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Alçı+Köşe+Profili+Detay"
                    alt="Alçı köşe profili detayları ve uygulaması"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </article>

              {/* Metal Kabasıva Profili */}
              <article id="metal-kabasiva-profili" className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Metal+Kabasıva+Detay"
                    alt="Metal kabasıva profili detayları ve uygulaması"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200 font-semibold px-4 py-2">
                    Metal Kabasıva Profili
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Dayanıklı Duvar Kaplaması</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Duvar kaplamaları için özel üretilmiş metal profiller. Estetik görünüm ve uzun ömürlü kullanım.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Teknik Özellikler</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Paslanmaz çelik</li>
                        <li>• 0.60mm kalınlık</li>
                        <li>• Çok renkli seçenekler</li>
                        <li>• UV dayanımlı kaplama</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Avantajları</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Hava koşullarına dayanıklı</li>
                        <li>• Kolay montaj</li>
                        <li>• Bakım gerektirmez</li>
                        <li>• Estetik görünüm</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      className="bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                      onClick={() => scrollToSection("iletisim")}
                    >
                      Fiyat Teklifi Al
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-300 hover:bg-gray-900 hover:text-white bg-transparent"
                      onClick={() => scrollToSection("katalog")}
                    >
                      Katalog İndir
                    </Button>
                  </div>
                </div>
              </article>

              {/* Tavan U-C Profili */}
              <article id="tavan-uc-profili" className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200 font-semibold px-4 py-2">
                    Tavan U-C Profili
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Profesyonel Tavan Sistemleri</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Asma tavan sistemleri için özel tasarlanmış U-C profilleri. Kolay kurulum ve ekonomik çözümler.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Teknik Özellikler</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Hafif yapı</li>
                        <li>• 0.45mm kalınlık</li>
                        <li>• Standart boyutlar</li>
                        <li>• Galvanizli kaplama</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Kullanım Alanları</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Asma tavan sistemleri</li>
                        <li>• Ofis binaları</li>
                        <li>• Ticari mekanlar</li>
                        <li>• Konut projeleri</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      className="bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                      onClick={() => scrollToSection("iletisim")}
                    >
                      Fiyat Teklifi Al
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-300 hover:bg-gray-900 hover:text-white bg-transparent"
                      onClick={() => scrollToSection("katalog")}
                    >
                      Katalog İndir
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Tavan+U-C+Profili+Detay"
                    alt="Tavan U-C profili detayları ve uygulaması"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projeler" className="py-24 bg-white" aria-labelledby="projects-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-20">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200 font-semibold px-6 py-2">
                Projelerimiz
              </Badge>
              <h2 id="projects-heading" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Başarılı Projeler
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Gerçekleştirdiğimiz projelerle deneyimimizi ve kalitemizi gösteriyoruz.
              </p>
            </header>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12" role="tablist" aria-label="Proje kategorileri">
              {[
                { id: "all", label: "Tümü" },
                { id: "konut", label: "Konut" },
                { id: "ticari", label: "Ticari" },
                { id: "endustriyel", label: "Endüstriyel" },
                { id: "kamu", label: "Kamu" },
              ].map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                      : "border-gray-300 text-gray-700 hover:bg-yellow-50 hover:border-yellow-300"
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                  role="tab"
                  aria-selected={activeFilter === filter.id}
                >
                  {filter.label}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="tabpanel">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white"
                >
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} - ${project.description}`}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge className="mb-2 bg-yellow-500 text-gray-900 font-semibold">{project.category}</Badge>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.location}
                      </span>
                      <span>{project.year}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section
          id="sertifikalar"
          className="py-24 bg-gradient-to-br from-gray-50 to-white"
          aria-labelledby="certificates-heading"
        >
          <div className="container mx-auto px-4">
            <header className="text-center mb-20">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200 font-semibold px-6 py-2">
                Sertifikalar
              </Badge>
              <h2 id="certificates-heading" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Kalite Güvencemiz
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Uluslararası standartlara uygun üretim ve hizmet kalitemizi belgeleyen sertifikalarımız.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "ISO 9001:2015", desc: "Kalite Yönetim Sistemi", icon: Award },
                { title: "ISO 14001", desc: "Çevre Yönetim Sistemi", icon: Shield },
                { title: "CE Belgesi", desc: "Avrupa Uygunluk Belgesi", icon: CheckCircle },
                { title: "TSE Belgesi", desc: "Türk Standartları Belgesi", icon: Star },
              ].map((cert, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white"
                >
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <cert.icon className="h-10 w-10 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                    <p className="text-gray-600 mb-6">{cert.desc}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-yellow-300 text-yellow-600 hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-300 bg-transparent"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      İndir
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Catalog Section */}
        <section
          id="katalog"
          className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
          aria-labelledby="catalog-heading"
        >
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-6 bg-yellow-500/20 text-yellow-300 border-yellow-500/30 font-semibold px-6 py-2">
              Ürün Kataloğu
            </Badge>
            <h2 id="catalog-heading" className="text-4xl md:text-6xl font-bold mb-6">
              Detaylı Ürün Kataloğu
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Tüm ürünlerimizi, teknik özelliklerini ve uygulama alanlarını detaylı olarak incelemek için kataloğumuzu
              indirin.
            </p>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mr-4">
                        <FileText className="h-8 w-8 text-gray-900" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-white">2024 Ürün Kataloğu</h3>
                        <p className="text-gray-300">Güncel fiyat listesi dahil</p>
                      </div>
                    </div>
                    <ul className="text-left space-y-3 mb-8 text-gray-300">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        Tüm ürün spesifikasyonları
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        Teknik çizimler ve detaylar
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        Uygulama örnekleri
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        Güncel fiyat bilgileri
                      </li>
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        size="lg"
                        className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-200"
                      >
                        <Download className="h-5 w-5 mr-2" />
                        PDF İndir
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-semibold bg-transparent transform hover:scale-105 transition-all duration-200"
                      >
                        <ExternalLink className="h-5 w-5 mr-2" />
                        Online Görüntüle
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=400&width=500&text=Katalog+Önizleme"
                      alt="2024 Ürün Kataloğu Önizlemesi"
                      width={500}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/50"></div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="hakkimizda" className="py-24 bg-white" aria-labelledby="about-heading">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-200 font-semibold px-4 py-2">
                  Hakkımızda
                </Badge>
                <h2 id="about-heading" className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                  25 Yıllık Deneyim
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  1999 yılından bu yana hafif çelik yapı sektöründe öncü konumdayız. Modern teknoloji ve uzman
                  kadromuzla müşterilerimize en kaliteli hizmeti sunuyoruz.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Misyonumuz</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Sürdürülebilir, yenilikçi ve kaliteli hafif çelik yapı çözümleri sunarak müşterilerimizin
                        hayallerini gerçeğe dönüştürmek.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Vizyonumuz</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Türkiye'nin ve bölgenin en güvenilir hafif çelik yapı firması olmak, sektörde standartları
                        belirlemek.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Değerlerimiz</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Kalite, güvenilirlik, müşteri memnuniyeti ve çevreye saygı temel değerlerimizdir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400/20 to-gray-600/20 rounded-3xl transform rotate-3"></div>
                <Image
                  src="/placeholder.svg?height=600&width=700&text=Şirket+Binası"
                  alt="Master Steel House şirket binası ve üretim tesisi"
                  width={700}
                  height={600}
                  className="relative rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Mutlu Müşteri</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="sss" className="py-24 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-20">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200 font-semibold px-6 py-2">
                Sıkça Sorulan Sorular
              </Badge>
              <h2 id="faq-heading" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Merak Ettikleriniz
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Hafif çelik yapı sistemleri hakkında en çok sorulan soruların cevapları.
              </p>
            </header>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-6">
                <AccordionItem
                  value="item-1"
                  className="bg-white border border-gray-200 rounded-2xl px-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-yellow-600 text-lg py-6">
                    Hafif çelik yapı sistemleri nedir ve avantajları nelerdir?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                    Hafif çelik yapı sistemleri, galvanizli çelik profillerden oluşan modern yapı teknolojisidir.
                    Geleneksel yapı sistemlerine göre %30-40 daha hafif, depreme dayanıklı, hızlı montaj, çevre dostu ve
                    uzun ömürlü olma avantajlarına sahiptir. Ayrıca ısı yalıtımı açısından da üstün performans gösterir
                    ve enerji tasarrufu sağlar.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="bg-white border border-gray-200 rounded-2xl px-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-yellow-600 text-lg py-6">
                    Hafif çelik yapılar ne kadar dayanıklıdır?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                    Hafif çelik yapılar, doğru tasarım ve montaj ile 50-100 yıl ömre sahiptir. Galvanizli çelik
                    kullanımı sayesinde korozyona karşı dirençlidir. Deprem, rüzgar ve kar yüklerine karşı yüksek
                    dayanım gösterir. Türkiye Bina Deprem Yönetmeliği'ne uygun olarak tasarlanır ve üretilir.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="bg-white border border-gray-200 rounded-2xl px-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-yellow-600 text-lg py-6">
                    İnşaat süresi ne kadar kısalır?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                    Hafif çelik yapılarda inşaat süresi geleneksel yöntemlere göre %50-70 oranında kısalır. Fabrikada
                    önceden hazırlanan parçalar şantiyede hızlıca monte edilir. Hava koşullarından daha az etkilenir ve
                    kuru montaj tekniği kullanılır. Ortalama bir konut 2-4 hafta içinde tamamlanabilir.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="bg-white border border-gray-200 rounded-2xl px-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-yellow-600 text-lg py-6">
                    Maliyet açısından avantajlı mıdır?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                    İlk yatırım maliyeti geleneksel yapılarla benzer olsa da, hızlı inşaat, düşük işçilik maliyeti,
                    minimal atık ve uzun vadeli dayanıklılık nedeniyle toplam maliyet avantajı sağlar. Enerji
                    verimliliği sayesinde işletme maliyetleri de düşüktür. Ayrıca bakım maliyetleri minimumdur.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="bg-white border border-gray-200 rounded-2xl px-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-yellow-600 text-lg py-6">
                    Hangi tür yapılar için uygun?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                    Hafif çelik sistem konutlar, villalar, ofis binaları, okul binaları, sağlık tesisleri, endüstriyel
                    yapılar, depolar, çiftlik binaları ve ticari yapılar için uygundur. 1-4 katlı yapılarda ideal
                    performans gösterir. Özel tasarım gerektiren projeler için de uyarlanabilir.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="iletisim" className="py-24 bg-white" aria-labelledby="contact-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-20">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200 font-semibold px 6 py-2">
                İletişim
              </Badge>
              <h2 id="contact-heading" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Projeleriniz İçin
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Hayalinizdeki projeyi gerçeğe dönüştürmek için bizimle iletişime geçin. Uzman ekibimiz size en uygun
                çözümü sunacak.
              </p>
            </header>

            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <Card className="shadow-2xl border-0 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8">
                    <CardTitle className="text-2xl font-bold">Bize Ulaşın</CardTitle>
                    <CardDescription className="text-gray-300">
                      Projeniz hakkında detaylı bilgi almak için formu doldurun.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Adınız"
                        className="h-12 border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                        aria-label="Adınız"
                      />
                      <Input
                        placeholder="Soyadınız"
                        className="h-12 border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                        aria-label="Soyadınız"
                      />
                    </div>
                    <Input
                      placeholder="E-posta Adresiniz"
                      type="email"
                      className="h-12 border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                      aria-label="E-posta adresiniz"
                    />
                    <Input
                      placeholder="Telefon Numaranız"
                      className="h-12 border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                      aria-label="Telefon numaranız"
                    />
                    <Textarea
                      placeholder="Projeniz hakkında detayları paylaşın..."
                      rows={5}
                      className="resize-none border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                      aria-label="Proje detayları"
                    />
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 h-12 text-lg font-semibold rounded-xl transform hover:scale-[1.02] transition-all duration-200">
                      Mesaj Gönder
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-8 w-8 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Adresimiz</h3>
                    <address className="text-gray-600 leading-relaxed text-lg not-italic">
                      Organize Sanayi Bölgesi, 1. Cadde No:15
                      <br />
                      Nilüfer / Bursa, Türkiye
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-8 w-8 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Telefon</h3>
                    <p className="text-gray-600 text-lg">
                      <a href="tel:+902245550123" className="hover:text-yellow-600 transition-colors">
                        +90 224 555 0123
                      </a>
                    </p>
                    <p className="text-gray-600 text-lg">
                      <a href="tel:+902245550124" className="hover:text-yellow-600 transition-colors">
                        +90 224 555 0124
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-8 w-8 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">E-posta</h3>
                    <p className="text-gray-600 text-lg">
                      <a href="mailto:info@mastersteelhouse.com" className="hover:text-yellow-600 transition-colors">
                        info@mastersteelhouse.com
                      </a>
                    </p>
                    <p className="text-gray-600 text-lg">
                      <a href="mailto:info@mastersteelhouse.com" className="hover:text-yellow-600 transition-colors">
                        info@mastersteelhouse.com
                      </a>
                    </p>
                  </div>
                </div>

                <Card className="bg-gray-100 border-0 overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Çalışma Saatleri</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Pazartesi - Cuma</span>
                        <span className="font-medium">08:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cumartesi</span>
                        <span className="font-medium">09:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pazar</span>
                        <span className="font-medium text-yellow-600">Kapalı</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-gray-200 h-64 rounded-2xl flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 cursor-pointer">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                    <p className="text-gray-600 text-lg font-medium">Harita Konumu</p>
                    <p className="text-gray-500">Tıklayarak görüntüleyin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Corporate Footer */}
      <footer className="bg-gray-900 text-white py-16" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                  <Building className="h-7 w-7 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Master Steel House</h2>
                  <p className="text-sm text-gray-400 -mt-1">Hafif Çelik Yapı Sistemleri</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                25 yıllık deneyimimizle hafif çelik yapı sektöründe güvenin adı. Modern teknoloji ve kaliteli hizmet
                anlayışımızla yanınızdayız.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors cursor-pointer"
                  aria-label="Facebook"
                >
                  <span className="text-sm font-bold">f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <span className="text-sm font-bold">in</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors cursor-pointer"
                  aria-label="Instagram"
                >
                  <span className="text-sm font-bold">@</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Hizmetlerimiz</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#hizmetlerimiz" className="hover:text-yellow-400 transition-colors">
                    Tek Katlı Yapılar
                  </a>
                </li>
                <li>
                  <a href="#hizmetlerimiz" className="hover:text-yellow-400 transition-colors">
                    İki Katlı Yapılar
                  </a>
                </li>
                <li>
                  <a href="#hizmetlerimiz" className="hover:text-yellow-400 transition-colors">
                    Özel Yapılar
                  </a>
                </li>
                <li>
                  <a href="#hizmetlerimiz" className="hover:text-yellow-400 transition-colors">
                    Profil Üretimi
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Ürünlerimiz</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#urunlerimiz" className="hover:text-yellow-400 transition-colors">
                    Alçı Köşe Profili
                  </a>
                </li>
                <li>
                  <a href="#urunlerimiz" className="hover:text-yellow-400 transition-colors">
                    Metal Kabasıva Profili
                  </a>
                </li>
                <li>
                  <a href="#urunlerimiz" className="hover:text-yellow-400 transition-colors">
                    Tavan U-C Profili
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; 2025 Master Steel House Hafif Çelik Yapı Sistemleri. Tüm hakları saklıdır.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                  Gizlilik Politikası
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                  Kullanım Şartları
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                  Çerez Politikası
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
