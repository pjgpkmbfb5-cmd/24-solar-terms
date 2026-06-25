'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getTermById, seasonInfo } from '@/data/terms'
import { useState } from 'react'

export default function DetailContent() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const term = getTermById(id)
  const [showBlessing, setShowBlessing] = useState(false)

  if (!term) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-600 mb-4">未找到该节气</p>
        <Link href="/" className="text-amber-600 hover:underline">
          返回首页
        </Link>
      </div>
    )
  }

  const season = seasonInfo[term.season]

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-6"
        >
          <span>←</span> 返回
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`card p-8 mb-8 gradient-${term.season}`}
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="spirit-emoji mb-4"
            >
              {term.spirit.emoji}
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-2"
            >
              {term.name}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-4"
            >
              {season.emoji} {term.date} · {season.name}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block bg-white/80 rounded-full px-4 py-2 mb-6"
            >
              <span className="text-lg">{term.spirit.name}</span>
              <span className="text-gray-400 mx-2">·</span>
              <span className="text-gray-600">{term.spirit.description}</span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-700 text-lg"
            >
              {term.features}
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mb-8"
        >
          <button
            onClick={() => setShowBlessing(true)}
            className="btn-primary text-lg"
          >
            💌 领取专属祝福
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="card p-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              📜 节气三候
            </h2>
            <ul className="space-y-2">
              {term.sanhou.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <span className="text-amber-500">{index + 1}.</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="card p-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              🎊 传统习俗
            </h2>
            <ul className="space-y-2">
              {term.customs.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <span>✨</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="card p-6 md:col-span-2"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              🌿 养生建议
            </h2>
            <div className="flex flex-wrap gap-2">
              {term.health.map((item, index) => (
                <span
                  key={index}
                  className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {showBlessing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowBlessing(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="text-7xl mb-4"
            >
              {term.spirit.emoji}
            </motion.div>
            <h3 className="text-2xl font-bold text-amber-600 mb-4">
              {term.name}专属祝福
            </h3>
            <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl p-6 mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {term.blessing}
              </p>
            </div>
            <button
              onClick={() => setShowBlessing(false)}
              className="btn-primary"
            >
              收到祝福 💕
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
