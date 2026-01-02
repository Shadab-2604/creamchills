"use client"

import type { MenuItem } from "@/lib/menu-data"
import Image from "next/image"
import { motion } from "framer-motion"

interface MenuCardProps {
  item: MenuItem
}

export function MenuCard({ item }: MenuCardProps) {
  // Use a default query if imageQuery is missing
  const query = item.imageQuery || `delicious ${item.name} dessert`
  const imageUrl = `/placeholder.svg?height=300&width=300&query=${encodeURIComponent(query)}`

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "var(--shadow-brand)" }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-[2xl] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-pink-100/50"
    >
      <div className="relative aspect-square overflow-hidden group">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={item.name}
          width={300}
          height={300}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-brand-purple text-white text-xs font-black rounded-lg px-2.5 py-1 shadow-md">
          ₹{item.price}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow text-center gap-2">
        <div className="flex items-center justify-center gap-2">
          <h3 className="font-bold text-gray-800 text-sm md:text-base leading-snug">{item.name}</h3>
          {item.isVeg && (
            <div className="w-3.5 h-3.5 border border-brand-green flex items-center justify-center p-[2px] rounded-sm flex-shrink-0">
              <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
            </div>
          )}
        </div>
        {item.description && (
          <p className="text-[11px] text-gray-500 leading-tight line-clamp-2 italic">{item.description}</p>
        )}
      </div>
    </motion.div>
  )
}
