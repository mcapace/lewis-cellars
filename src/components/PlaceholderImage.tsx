'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface PlaceholderImageProps {
  alt: string
  className?: string
  aspectRatio?: 'square' | 'video' | 'wide' | 'tall'
  shimmer?: boolean
}

const PlaceholderImage = ({ 
  alt, 
  className = '', 
  aspectRatio = 'video',
  shimmer = true 
}: PlaceholderImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[16/9]',
    tall: 'aspect-[3/4]'
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${aspectClasses[aspectRatio]} ${className}`}>
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center ${
          shimmer ? 'shimmer' : ''
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center text-gray-500">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-sm font-medium">{alt}</p>
          <p className="text-xs text-gray-600 mt-1">Image coming soon</p>
        </div>
      </motion.div>
      
      {/* Placeholder content based on image type */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {alt.toLowerCase().includes('food') && (
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <p className="text-gold-400 font-semibold">Gourmet Cuisine</p>
          </div>
        )}
        
        {alt.toLowerCase().includes('couple') && (
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gold-400 font-semibold">Intimate Experience</p>
          </div>
        )}
        
        {alt.toLowerCase().includes('tasting') && (
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gold-400 font-semibold">Wine Tasting</p>
          </div>
        )}
        
        {alt.toLowerCase().includes('group') && (
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <p className="text-gold-400 font-semibold">Group Experience</p>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default PlaceholderImage
