// src/components/react/ItecceLoading/hooks/useMediaEngagement.ts
import { useState } from 'react'
import type { MediaEngagement } from '../types'
import { getStoredEngagement, calculateMEIScore, shouldAutoplay as checkAutoplay } from '../utils'

export const useMediaEngagement = () => {
  const [mediaEngagement, setMediaEngagement] = useState<MediaEngagement>(getStoredEngagement)

  const updateEngagement = (withAudio: boolean) => {
    const newEngagement = {
      ...mediaEngagement,
      visits: mediaEngagement.visits + 1,
      significantPlaybacks: withAudio ?
        mediaEngagement.significantPlaybacks + 1 :
        mediaEngagement.significantPlaybacks,
      lastPlayback: Date.now(),
      hasHighScore: calculateMEIScore(mediaEngagement) >= 0.7
    }

    setMediaEngagement(newEngagement)

    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem('itecce_media_engagement', JSON.stringify(newEngagement))
      } catch (error) {
        console.error('Error saving to localStorage:', error)
      }
    }
  }

  const markAsInteracted = () => {
    const newEngagement = {
      ...mediaEngagement,
      visits: mediaEngagement.visits + 1,
      hasHighScore: true, // Force high score for direct interactions
      lastPlayback: Date.now()
    }

    setMediaEngagement(newEngagement)

    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem('itecce_media_engagement', JSON.stringify(newEngagement))
      } catch (error) {
        console.error('Error saving to localStorage:', error)
      }
    }
  }

  return {
    mediaEngagement,
    updateEngagement,
    markAsInteracted,
    shouldAutoplay: () => checkAutoplay(mediaEngagement)
  }
}
