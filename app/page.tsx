"use client"

import { useState, useMemo, useEffect } from "react"
import { menuData, type MenuCategory } from "@/lib/menu-data"
import { MenuCard } from "@/components/menu-card"
import { Sidebar } from "@/components/sidebar"
import { MessageCircle, Dessert } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function MenuCatalog() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState(menuData[0].category)

  const categories = useMemo(() => menuData.map((c) => c.category), [])

  const filteredMenu = useMemo(() => {
    if (!search) return menuData

    return menuData
      .map((cat) => {
        const filteredItems = cat.items?.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())) || []

        const filteredSubcats =
          cat.subcategories
            ?.map((sub) => ({
              ...sub,
              items: sub.items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())),
            }))
            .filter((sub) => sub.items.length > 0) || []

        if (filteredItems.length > 0 || filteredSubcats.length > 0) {
          return { ...cat, items: filteredItems, subcategories: filteredSubcats }
        }
        return null
      })
      .filter(Boolean) as MenuCategory[]
  }, [search])

  // Observer to update active category on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id)
          }
        })
      },
      { threshold: 0.5, rootMargin: "-10% 0px -70% 0px" },
    )

    menuData.forEach((cat) => {
      const el = document.getElementById(cat.category)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToCategory = (category: string) => {
    const el = document.getElementById(category)
    if (el) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={scrollToCategory}
        search={search}
        onSearchChange={setSearch}
      />

      <div className="flex-1 lg:pl-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-24 lg:pt-12">
          {/* Hero Section */}
          <header className="mb-12 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic mb-2">
              Our <span className="text-primary">Chill</span> Collection
            </h2>
            <p className="text-muted-foreground font-medium max-w-xl">
              Handcrafted happiness in every scoop. Browse our premium selection of ice creams, desserts, and shakes.
            </p>
          </header>

          <main className="space-y-24">
            <AnimatePresence mode="popLayout">
              {filteredMenu.map((cat) => (
                <motion.section
                  key={cat.category}
                  id={cat.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="scroll-mt-32"
                >
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b pb-4">
                    <div>
                      <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase italic">
                        {cat.category}
                      </h2>
                      <div className="h-1.5 w-24 bg-primary rounded-full mt-1" />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em]">
                      {cat.items?.length || 0} Flavors Available
                    </span>
                  </div>

                  {/* Grid Layout Improvements */}
                  {cat.items && cat.items.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10">
                      {cat.items.map((item, idx) => (
                        <MenuCard key={idx} item={item} />
                      ))}
                    </div>
                  )}

                  {cat.subcategories?.map((sub, sidx) => (
                    <div key={sidx} className="mt-12 space-y-6">
                      <div className="flex items-center gap-4">
                        <h3 className="text-xl font-black italic uppercase text-secondary-foreground">{sub.name}</h3>
                        <div className="flex-1 h-[1px] bg-border" />
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10">
                        {sub.items.map((item, idx) => (
                          <MenuCard key={idx} item={item} />
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.section>
              ))}
            </AnimatePresence>

            {/* Empty State */}
            {filteredMenu.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-32 text-center"
              >
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
                  <Dessert className="text-muted-foreground/30" size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Meltdown!</h3>
                <p className="text-muted-foreground">We couldn't find any "{search}" in our freezer.</p>
                <button onClick={() => setSearch("")} className="mt-6 text-primary font-bold hover:underline">
                  Show all flavors
                </button>
              </motion.div>
            )}
          </main>

          <footer className="fixed bottom-6 right-6 z-50">
            <motion.a
              href="https://wa.me/918169976985"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center gap-2"
            >
              <MessageCircle size={24} />
              <span className="font-bold hidden md:block">Order Now</span>
            </motion.a>
          </footer>
        </div>
      </div>
    </div>
  )
}
