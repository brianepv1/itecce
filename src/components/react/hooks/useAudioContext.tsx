// src/components/react/ItecceLoading/hooks/useAudioContext.ts
import { useRef, useCallback } from 'react'

export const useAudioContext = () => {
  const audioContextRef = useRef<AudioContext | null>(null)
  const audioBufferRef = useRef<AudioBuffer | null>(null)
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null)

  const initializeAudio = useCallback(async () => {
    try {
      const response = await fetch('/sounds/SonidoItecce.mp3')
      // Ensure we're getting an ArrayBuffer
      const arrayBuffer = await response.arrayBuffer()
      return arrayBuffer
    } catch (error) {
      console.error('Audio initialization failed:', error)
      return null
    }
  }, [])

  const startAudio = useCallback(async (buffer: ArrayBuffer) => {
    try {
      console.log('Starting audio...')
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext
      audioContextRef.current = new AudioContext()

      console.log('Audio context state:', audioContextRef.current.state)
      if (audioContextRef.current.state === 'suspended') {
        await audioContextRef.current.resume()
        console.log('Resumed audio context')
      }

      // Clone the buffer to ensure it's a fresh ArrayBuffer
      const newBuffer = buffer.slice(0)

      // Decode the audio data
      audioBufferRef.current = await audioContextRef.current.decodeAudioData(newBuffer)

      // Create and configure source node
      sourceNodeRef.current = audioContextRef.current.createBufferSource()
      sourceNodeRef.current.buffer = audioBufferRef.current

      // Create and configure gain node
      const gainNode = audioContextRef.current.createGain()
      gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime)
      gainNode.gain.linearRampToValueAtTime(1, audioContextRef.current.currentTime + 0.5)

      // Connect nodes
      sourceNodeRef.current.connect(gainNode)
      gainNode.connect(audioContextRef.current.destination)

      // Start playback
      sourceNodeRef.current.start()
      return true
    } catch (error) {
      console.error('Audio start failed:', error)
      return false
    }
  }, [])

  const cleanup = useCallback(() => {
    if (sourceNodeRef.current) {
      try {
        sourceNodeRef.current.stop()
      } catch (error) {
        console.error('Error stopping audio:', error)
      }
    }
    if (audioContextRef.current) {
      try {
        audioContextRef.current.close()
      } catch (error) {
        console.error('Error closing audio context:', error)
      }
    }
  }, [])

  return {
    initializeAudio,
    startAudio,
    cleanup
  }
}
