"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { NavContent } from "./nav-content"

interface SidebarProps {
  categories: string[]
  activeCategory: string
  onCategoryClick: (category: string) => void
  search: string
  onSearchChange: (value: string) => void
}

export function Sidebar({ categories, activeCategory, onCategoryClick, search, onSearchChange }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Nav Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-md border-b border-brand-pink/20 z-50 flex items-center justify-between px-4">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-brand-pink/10 rounded-full text-brand-pink transition-transform active:scale-95"
        >
          <Menu size={24} />
        </button>
        <div className="font-black text-brand-pink tracking-tighter uppercase text-xl">Creamchills</div>
        <div className="w-10" />
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[60] lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[280px] bg-white z-[70] shadow-2xl lg:hidden flex flex-col"
            >
              <div className="p-4 flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-accent rounded-full text-muted-foreground"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-4 pb-8">
                <NavContent
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryClick={(cat) => {
                    onCategoryClick(cat)
                    setIsOpen(false)
                  }}
                  search={search}
                  onSearchChange={onSearchChange}
                />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:flex flex-col w-72 h-screen sticky top-0 border-r border-brand-pink/10 bg-gradient-to-b from-white to-brand-lavender/30 backdrop-blur-xl overflow-hidden">
        {/* Decorative Wave Top */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-brand-pink/5 -translate-y-16 rounded-[100%] blur-3xl pointer-events-none" />

        <div className="flex-1 overflow-y-auto p-6 relative z-10">
          <div className="mb-8 px-2">
            <h1 className="font-black text-brand-pink text-3xl tracking-tighter uppercase leading-none">
              Creamchills
              <span className="block h-1 w-12 bg-brand-blue rounded-full mt-1" />
            </h1>
          </div>
          <NavContent
            categories={categories}
            activeCategory={activeCategory}
            onCategoryClick={onCategoryClick}
            search={search}
            onSearchChange={onSearchChange}
          />
        </div>

        {/* Decorative Wave Bottom */}
        <div className="h-20 bg-brand-pink/5 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-brand-blue/10 rounded-[100%] translate-y-8 blur-2xl" />
        </div>
      </aside>
    </>
  )
}
