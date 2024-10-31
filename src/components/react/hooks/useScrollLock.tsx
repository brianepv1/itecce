// src/components/react/ItecceLoading/hooks/useScrollLock.ts
import { useEffect } from 'react'

export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow

    if (isLocked) {
      // Add a class instead of inline styles
      document.documentElement.classList.add('scroll-locked')
    }

    return () => {
      // Remove the class when component unmounts or lock is disabled
      document.documentElement.classList.remove('scroll-locked')
      // Restore original overflow
      document.body.style.overflow = originalStyle
    }
  }, [isLocked])
}
