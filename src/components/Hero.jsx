import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero({ title }) {
  const [circles, setCircles] = useState([])

  useEffect(() => {
    const colors = ['bg-amber-800', 'bg-green-800', 'bg-yellow-400']
    const newCircles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 200 + 50,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setCircles(newCircles)
  }, [])

  return (
    <section className='relative h-40% w-full overflow-hidden'>
      {circles.map((circle) => (
        <div
          key={circle.id}
          className={`absolute rounded-full opacity-20 ${circle.color}`}
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            left: `${circle.x}%`,
            top: `${circle.y}%`,
          }}
        />
      ))}
      <div className='absolute inset-0 bg-black bg-opacity-50' />
      <div className='relative z-10 flex h-full flex-col items-center justify-center pt-24 md:pt-32 lg:pt-40'>
        <motion.p
          className='mt-4 text-center lead text-white pb-6'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          {title}
        </motion.p>
      </div>
    </section>
  )
}
