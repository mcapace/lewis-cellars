'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import WineBottle from '@/components/WineBottle'
import PlaceholderImage from '@/components/PlaceholderImage'
import PageNavigation from '@/components/PageNavigation'

const wines = [
  {
    name: 'LEWIS CELLARS',
    type: 'CHARDONNAY',
    region: 'NAPA VALLEY',
    bottleType: 'chardonnay' as const,
    emblemColor: 'gold' as const
  },
  {
    name: 'LEWIS CELLARS',
    type: 'CABERNET SAUVIGNON',
    region: 'NAPA VALLEY',
    bottleType: 'cabernet' as const,
    emblemColor: 'gold' as const
  },
  {
    name: 'LEWIS CELLARS',
    type: 'THE BIG BLEND',
    region: 'NAPA VALLEY',
    bottleType: 'big-blend' as const,
    emblemColor: 'bronze' as const
  }
]

const pages = [
  {
    id: 'hero',
    title: 'Discover Lewis Wines',
    subtitle: 'THE CELLAR AWAITS',
    description: 'Explore Lewis\' cellar of legendary wines and discover your favorite big reds and sexy chardonnays.',
    cta: 'EXPLORE WINES'
  },
  {
    id: 'culinary',
    title: 'Culinary Experiences',
    description: 'Indulge in their MICHELIN-Starred chef\'s culinary experiences curated to heighten your every sensation.',
    cta: 'BOOK A TASTE OF LEWIS'
  },
  {
    id: 'salon',
    title: 'Salon Privé',
    subtitle: 'ENTER A SECLUDED WORLD',
    description: 'Luxuriate in the intimacy of your own private enclave for two. You and one guest will enjoy white glove, on-call concierge service, customizable menus, access to both indoor and outdoor Salons Privés, access to their private cellar, private car service, and more.',
    cta: 'EXPLORE THE SALON PRIVÉ'
  },
  {
    id: 'tastings',
    title: 'Wine Tastings',
    subtitle: 'A SENSORY EXPERIENCE',
    description: 'Explore the passion and craftsmanship of Lewis\' winemaking with unique experiences designed to delight your every sense.',
    cta: 'BOOK A WINE TASTING'
  },
  {
    id: 'spectator',
    title: 'Napa Valley\'s Ultimate Experience Awaits',
    subtitle: 'THE HOME OF BIG REDS AND SEXY CHARDONNAYS',
    description: 'With exquisite, award-winning wines, succulent cuisine from their MICHELIN-Starred chef, evocative artwork, and their exclusive Salon Privé – the new Lewis Estate is more than a tasting room. It\'s Napa Valley\'s ultimate indulgence.'
  }
]

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault()
          nextPage()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault()
          previousPage()
          break
        case 'Home':
          e.preventDefault()
          setCurrentPage(0)
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length)
  }

  const previousPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length)
  }

  const restartPages = () => {
    setCurrentPage(0)
  }

  const pageVariants = {
    enter: {
      x: 300,
      opacity: 0
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: {
      zIndex: 0,
      x: -300,
      opacity: 0
    }
  }

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={pageTransition}
          className="min-h-screen flex items-center justify-center pt-20 pb-20"
        >
          {currentPage === 0 && (
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="hero-bg absolute inset-0 pointer-events-none" />
              
              {/* Wine Bottles */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex justify-center items-end space-x-8 md:space-x-12 mb-16"
              >
                {wines.map((wine, index) => (
                  <WineBottle key={wine.type} wine={wine} index={index} />
                ))}
              </motion.div>

              {/* Hero Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="section-subtitle">{pages[0].subtitle}</h2>
                <h1 className="section-title text-gradient mb-6">{pages[0].title}</h1>
                <p className="section-description mx-auto mb-8">{pages[0].description}</p>
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {pages[0].cta}
                </motion.button>
              </motion.div>
            </section>
          )}

          {currentPage === 1 && (
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <PlaceholderImage 
                    alt="Gourmet food presentation with wine glass" 
                    aspectRatio="video"
                    className="h-96"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-center lg:text-left"
                >
                  <h1 className="section-title mb-6">{pages[1].title}</h1>
                  <p className="section-description mb-8">{pages[1].description}</p>
                  <motion.button
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {pages[1].cta}
                  </motion.button>
                </motion.div>
              </div>
            </section>
          )}

          {currentPage === 2 && (
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <PlaceholderImage 
                    alt="Intimate couple in luxury setting" 
                    aspectRatio="tall"
                    className="h-[500px]"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-center lg:text-left"
                >
                  <h2 className="section-subtitle">{pages[2].subtitle}</h2>
                  <h1 className="section-title mb-6">{pages[2].title}</h1>
                  <p className="section-description mb-8">{pages[2].description}</p>
                  <motion.button
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {pages[2].cta}
                  </motion.button>
                </motion.div>
              </div>
            </section>
          )}

          {currentPage === 3 && (
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-center lg:text-left order-2 lg:order-1"
                >
                  <h2 className="section-subtitle">{pages[3].subtitle}</h2>
                  <h1 className="section-title mb-6">{pages[3].title}</h1>
                  <p className="section-description mb-8">{pages[3].description}</p>
                  <motion.button
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {pages[3].cta}
                  </motion.button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="order-1 lg:order-2"
                >
                  <PlaceholderImage 
                    alt="Wine tasting experience with couple" 
                    aspectRatio="video"
                    className="h-96"
                  />
                </motion.div>
              </div>
            </section>
          )}

          {currentPage === 4 && (
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-12"
              >
                <PlaceholderImage 
                  alt="Group wine experience in luxury setting" 
                  aspectRatio="wide"
                  className="h-80"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="section-subtitle">{pages[4].subtitle}</h2>
                <h1 className="section-title text-gradient mb-6">{pages[4].title}</h1>
                <p className="section-description mx-auto">{pages[4].description}</p>
              </motion.div>
            </section>
          )}
        </motion.div>
      </AnimatePresence>

      <PageNavigation
        currentPage={currentPage + 1}
        totalPages={pages.length}
        onPrevious={previousPage}
        onNext={nextPage}
        onRestart={restartPages}
      />
    </main>
  )
}