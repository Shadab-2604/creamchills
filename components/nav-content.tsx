"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface NavContentProps {
  categories: string[]
  activeCategory: string
  onCategoryClick: (category: string) => void
  search: string
  onSearchChange: (value: string) => void
}

export function NavContent({ categories, activeCategory, onCategoryClick, search, onSearchChange }: NavContentProps) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-1">
        <h1 className="text-2xl font-black text-primary tracking-tighter uppercase leading-none">Creamchills</h1>
        <div className="h-1 w-12 mx-auto bg-primary rounded-full" />
        <p className="text-[10px] text-secondary-foreground font-bold tracking-[0.2em] uppercase">Everyday is Sundae</p>
      </div>

      <div className="relative group">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors"
          size={16}
        />
        <Input
          placeholder="Find your chill..."
          className="pl-9 h-11 bg-muted/50 border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/20"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-3 mb-2">Menu Sections</p>
        <nav className="grid gap-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryClick(category)}
              className={cn(
                "group flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:bg-primary/5 hover:text-primary",
              )}
            >
              <span
                className={cn(
                  "w-1.5 h-1.5 rounded-full mr-3 transition-all",
                  activeCategory === category
                    ? "bg-white scale-100"
                    : "bg-transparent scale-0 group-hover:bg-primary/40 group-hover:scale-100",
                )}
              />
              {category}
            </button>
          ))}
        </nav>
      </div>

      <div className="pt-8 mt-auto border-t border-dashed border-border/50">
        <div className="bg-secondary/10 rounded-2xl p-4 text-center">
          <p className="text-xs font-bold text-secondary-foreground uppercase mb-1">Dine In & Delivery</p>
          <a
            href="tel:8169976985"
            className="text-primary font-black hover:scale-105 transition-transform inline-block"
          >
            +91 816-997-6985
          </a>
        </div>
      </div>
    </div>
  )
}
