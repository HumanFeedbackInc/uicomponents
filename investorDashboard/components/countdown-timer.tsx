"use client"

import { useEffect, useState, useCallback } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = useCallback(() => {
    const difference = targetDate.getTime() - new Date().getTime()

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0 }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    }
  }, [targetDate])

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [calculateTimeLeft])

  return (
    <span>
      {timeLeft.days > 0 && `${timeLeft.days}d `}
      {timeLeft.hours > 0 && `${timeLeft.hours}h `}
      {`${timeLeft.minutes}m remaining`}
    </span>
  )
}

