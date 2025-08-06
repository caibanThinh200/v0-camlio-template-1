'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeUpProps {
  children: ReactNode
  delay?: number
  duration?: number
}

export default function FadeUp({ children, delay = 0.1, duration = 0.6 }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}
