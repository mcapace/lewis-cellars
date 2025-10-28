'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react'

interface PageNavigationProps {
  currentPage: number
  totalPages: number
  onPrevious: () => void
  onNext: () => void
  onRestart: () => void
}

const PageNavigation = ({ 
  currentPage, 
  totalPages, 
  onPrevious, 
  onNext, 
  onRestart 
}: PageNavigationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="glass-effect rounded-full px-6 py-3 flex items-center space-x-4 shadow-lg">
        {/* Previous Button */}
        <motion.button
          onClick={onPrevious}
          className="p-2 rounded-full hover:bg-gold-500/20 transition-colors duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-5 h-5 text-white group-hover:text-gold-400 transition-colors duration-300" />
        </motion.button>

        {/* Page Indicator */}
        <div className="flex items-center space-x-2">
          <span className="text-white font-medium text-sm">
            {currentPage}/{totalPages}
          </span>
        </div>

        {/* Next Button */}
        <motion.button
          onClick={onNext}
          className="p-2 rounded-full hover:bg-gold-500/20 transition-colors duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-5 h-5 text-white group-hover:text-gold-400 transition-colors duration-300" />
        </motion.button>

        {/* Restart Button */}
        <motion.button
          onClick={onRestart}
          className="ml-4 px-3 py-1 text-xs font-medium text-white hover:text-gold-400 transition-colors duration-300 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center space-x-1">
            <RotateCcw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
            <span>Restart R</span>
          </div>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default PageNavigation

