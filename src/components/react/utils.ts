// src/components/react/ItecceLoading/utils.ts
import type { MediaEngagement } from './types'

export const getStoredEngagement = (): MediaEngagement => {
  if (typeof window === 'undefined') {
    return {
      visits: 0,
      significantPlaybacks: 0,
      lastPlayback: 0,
      hasHighScore: false
    };
  }

  try {
    const stored = window.localStorage.getItem('itecce_media_engagement');
    return stored ? JSON.parse(stored) : {
      visits: 0,
      significantPlaybacks: 0,
      lastPlayback: 0,
      hasHighScore: false
    };
  } catch (error) {
    console.error('Error accessing localStorage:', error);
    return {
      visits: 0,
      significantPlaybacks: 0,
      lastPlayback: 0,
      hasHighScore: false
    };
  }
};

export const calculateMEIScore = (engagement: MediaEngagement): number => {
  if (engagement.visits < 5) return 0;
  const score = engagement.significantPlaybacks / engagement.visits;
  console.log('MEI Score calculation:', {
    visits: engagement.visits,
    playbacks: engagement.significantPlaybacks,
    score: score
  });
  return score;
};

export const shouldShowPermissionPopup = (engagement: MediaEngagement): boolean => {
  const score = calculateMEIScore(engagement);
  return score < 0.7;
};

export const shouldAutoplay = (engagement: MediaEngagement): boolean => {
  const score = calculateMEIScore(engagement);
  const shouldAuto = score >= 0.7;
  console.log('Autoplay decision:', {
    score,
    shouldAutoplay: shouldAuto,
    hasHighScore: engagement.hasHighScore
  });
  return shouldAuto;
};

export const getScrollbarWidth = () => {
  const outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.overflow = 'scroll'
  document.body.appendChild(outer)

  const inner = document.createElement('div')
  outer.appendChild(inner)

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth
  outer.parentNode?.removeChild(outer)

  document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`)

  return scrollbarWidth
}
