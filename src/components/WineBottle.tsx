'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface WineBottleProps {
  wine: {
    name: string
    type: string
    region: string
    bottleType: 'chardonnay' | 'cabernet' | 'big-blend'
    emblemColor: 'gold' | 'bronze'
  }
  index: number
}

const WineBottle = ({ wine, index }: WineBottleProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
      className="flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Wine Bottle Container */}
      <motion.div
        className="relative mb-6"
        whileHover={{ 
          scale: 1.05,
          y: -10,
          transition: { duration: 0.3 }
        }}
        animate={{
          boxShadow: isHovered 
            ? '0 25px 50px rgba(212, 175, 55, 0.3)' 
            : '0 20px 40px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Main Bottle Body */}
        <div className={`relative w-24 h-72 md:w-32 md:h-96 rounded-lg ${
          wine.bottleType === 'chardonnay' 
            ? 'bg-gradient-to-b from-amber-50 via-amber-100 to-amber-200 border-2 border-amber-300' 
            : 'bg-gradient-to-b from-gray-900 via-gray-800 to-black border-2 border-gray-700'
        }`}>
          
          {/* Bottle Neck */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-gray-800 rounded-t-full"></div>
          
          {/* Bottle Cap/Foil */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-black rounded-t-full"></div>
          
          {/* Wine Level (for Chardonnay) */}
          {wine.bottleType === 'chardonnay' && (
            <div className="absolute bottom-4 left-2 right-2 h-2 bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent rounded-full"></div>
          )}
          
          {/* Label Area */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            {/* Circular Emblem */}
            <motion.div
              className={`w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto mb-2 flex items-center justify-center font-playfair text-lg md:text-xl font-bold text-black shadow-lg ${
                wine.emblemColor === 'gold' 
                  ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' 
                  : 'bg-gradient-to-br from-amber-600 to-amber-800'
              }`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              L
            </motion.div>
            
            {/* Label Text */}
            <div className="text-white text-xs md:text-sm leading-tight">
              <div className="font-semibold tracking-wide">{wine.name}</div>
              <div className="font-medium mt-1">{wine.type}</div>
              <div className="text-gray-300 mt-1 text-xs">{wine.region}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default WineBottle
