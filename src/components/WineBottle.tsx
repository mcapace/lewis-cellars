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

  const bottleClasses = {
    chardonnay: 'bottle-chardonnay',
    cabernet: 'bottle-cabernet',
    'big-blend': 'bottle-big-blend'
  }

  const emblemClasses = {
    gold: 'bg-gold-gradient',
    bronze: 'bg-bronze-gradient'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
      className="flex flex-col items-center space-y-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Wine Bottle */}
      <motion.div
        className={`wine-bottle ${bottleClasses[wine.bottleType]} relative overflow-hidden`}
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
        {/* Bottle neck */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gray-800 rounded-t-full"></div>
        
        {/* Bottle cap */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-900 rounded-t-full"></div>
        
        {/* Wine level indicator */}
        <div className="absolute bottom-8 left-2 right-2 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"></div>
        
        {/* Label */}
        <div className="bottle-label">
          <motion.div
            className={`label-emblem ${emblemClasses[wine.emblemColor]} shadow-lg`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            L
          </motion.div>
          <div className="label-text">
            <div className="font-semibold text-xs md:text-sm">{wine.name}</div>
            <div className="font-medium text-xs md:text-sm mt-1">{wine.type}</div>
            <div className="text-xs text-gray-300 mt-1">{wine.region}</div>
          </div>
        </div>
      </motion.div>

      {/* Wine name */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 + index * 0.2 }}
        className="text-center"
      >
        <h3 className="font-playfair text-lg font-semibold text-white">
          {wine.type}
        </h3>
        <p className="text-sm text-gray-400">{wine.region}</p>
      </motion.div>
    </motion.div>
  )
}

export default WineBottle
