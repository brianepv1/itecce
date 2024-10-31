// src/components/react/ItecceLoading/index.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PermissionPopup } from './components/PermissionPopup'
import { AnimatedLogo } from './components/AnimatedLogo'
import { useAudioContext } from './hooks/useAudioContext'
import { useMediaEngagement } from './hooks/useMediaEngagement'
import { useScrollLock } from './hooks/useScrollLock'
import { containerVariants, finalImageVariants } from './variants'

export default function ItecceLoading() {
  const [showLogo, setShowLogo] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [showPermissionPopup, setShowPermissionPopup] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const [audioBuffer, setAudioBuffer] = useState<ArrayBuffer | null>(null)

  useScrollLock(isVisible)

  const { initializeAudio, startAudio, cleanup } = useAudioContext()
  const { mediaEngagement, updateEngagement, shouldAutoplay } = useMediaEngagement()

  useEffect(() => {
    // Add the media capabilities check
    navigator.mediaCapabilities.decodingInfo({
      type: 'file',
      audio: {
        contentType: 'audio/mpeg',
        channels: "2",
        bitrate: 132000,
        samplerate: 44100
      }
    }).then(result => {
      console.log('Browser audio capabilities:', result)
    })

    const initialize = async () => {
      try {
        console.log('Initializing with engagement:', mediaEngagement)
        console.log('Should autoplay?', shouldAutoplay())

        const buffer = await initializeAudio()
        if (buffer) {
          setAudioBuffer(buffer)

          if (shouldAutoplay()) {
            console.log('High engagement detected, starting animation without popup')
            setHasUserInteracted(true)
            setShowPermissionPopup(false)
            startAnimation()

            // Try to start audio on first interaction with the page
            const handleFirstInteraction = async () => {
              try {
                await startAudio(buffer)
                console.log('Audio started on interaction')
                document.removeEventListener('click', handleFirstInteraction)
                document.removeEventListener('touchstart', handleFirstInteraction)
                document.removeEventListener('keydown', handleFirstInteraction)
              } catch (error) {
                console.error('Audio start failed:', error)
              }
            }

            document.addEventListener('click', handleFirstInteraction)
            document.addEventListener('touchstart', handleFirstInteraction)
            document.addEventListener('keydown', handleFirstInteraction)
          } else {
            console.log('Showing permission popup')
            setShowPermissionPopup(true)
            setShouldAnimate(false)
          }
        }
      } catch (error) {
        console.error('Initialization error:', error)
        startAnimation()
      }
    }

    initialize()
    return cleanup
  }, [])

  const startAnimation = () => {
    setAnimationKey(prev => prev + 1)
    setShowPermissionPopup(false)
    setShouldAnimate(true)

    setTimeout(() => setShowLogo(false), 2700)
    setTimeout(() => {
      setIsVisible(false)
      const mainContent = document.getElementById('mainContent')
      if (mainContent) {
        mainContent.style.opacity = '1'
      }
    }, 6200)
  }

  const handlePermissionResponse = async (withAudio: boolean) => {
    setHasUserInteracted(true)
    updateEngagement(withAudio)
    if (withAudio && audioBuffer) {
      try {
        await startAudio(audioBuffer)
      } catch (error) {
        console.error('Error starting audio:', error)
      }
    }
    startAnimation()
  }

  // Prevent click propagation from popup
  const handlePopupClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  // Handle page click for audio start
  const handlePageClick = async () => {
    if (!hasUserInteracted && showPermissionPopup && audioBuffer) {
      handlePermissionResponse(true)
    }
  }

  if (!isVisible) return null

  return (
    <div
      className="loading-overlay"
      onClick={handlePageClick}
    >
      {showPermissionPopup && (
        <div onClick={handlePopupClick}>
          <PermissionPopup
            onAccept={() => handlePermissionResponse(true)}
            onDecline={() => handlePermissionResponse(false)}
          />
        </div>
      )}
      <AnimatePresence mode="wait">
        {showLogo ? (
          <motion.div
            key={`loading-${animationKey}`}
            variants={containerVariants}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
            className="relative flex flex-col items-center"
          >
            <AnimatedLogo shouldAnimate={shouldAnimate} />
          </motion.div>
        ) : (
          <motion.div
            key={`final-${animationKey}`}
            variants={finalImageVariants}
            initial="hidden"
            animate="visible"
            className="w-64 h-64 flex items-center justify-center sm:w-80 sm:h-80 md:w-96 md:h-96"
          >
            <img
              src="/images/Logos/ItecceLogo.png"
              alt="Itecce Universidad Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
