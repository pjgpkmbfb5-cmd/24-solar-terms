'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { solarTerms, seasonInfo, getTodayTerm } from '@/data/terms'
import { useState, useEffect } from 'react'

export default function Home() {
  const [todayTerm, setTodayTerm] = useState(getTodayTerm())
  const [showBlessing, setShowBlessing] = useState(false)
  
  useEffect(() => {
    if (todayTerm) {
      const timer = setTimeout(() => setShowBlessing(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [todayTerm])

  const seasons: Array<'spring' | 'summer' | 'autumn' | 'winter'> = ['spring', 'summer', 'autumn', 'winter']

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* 今日节气快捷入口 */}
      {todayTerm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href={`/detail/${todayTerm.id}`}>
            <div className={`card card-${todayTerm.season} p-6 cursor-pointer gradient-${todayTerm.season}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">今日节气</p>
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <span className="text-3xl">{todayTerm.spirit.emoji}</span>
                    {todayTerm.name}
                    <span className="text-lg font-normal">· {todayTerm.spirit.name}</span>
                  </h2>
                </div>
                <div className="text-4xl animate-pulse">
                  →
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      )}

      {/* 节气列表 */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        {seasons.map((season) => (
          <section key={season}>
            <motion.div variants={itemVariants} className="mb-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <span className="text-3xl">{seasonInfo[season].emoji}</span>
                {seasonInfo[season].name}
                <span className="text-sm font-normal text-gray-500">
                  {solarTerms.filter(t => t.season === season).length} 个节气
                </span>
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {solarTerms
                .filter(term => term.season === season)
                .map((term) => (
                  <motion.div key={term.id} variants={itemVariants}>
                    <Link href={`/detail/${term.id}`}>
                      <div className={`card card-${season} p-5 h-full flex flex-col`}>
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-4xl">{term.spirit.emoji}</span>
                          <span className={`season-badge ${
                            season === 'spring' ? 'bg-green-100 text-green-700' :
                            season === 'summer' ? 'bg-pink-100 text-pink-700' :
                            season === 'autumn' ? 'bg-orange-100 text-orange-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {term.date}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {term.name}
                        </h3>
                        
                        <p className="text-sm text-gray-600 mb-2">
                          {term.spirit.name}
                        </p>
                        
                        <p className="text-xs text-gray-500 flex-1">
                          {term.features}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </section>
        ))}
      </motion.div>

      {/* 祝福弹窗 */}
      <AnimatePresence>
        {showBlessing && todayTerm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowBlessing(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-6xl mb-4 animate-float">
                {todayTerm.spirit.emoji}
              </div>
              <h3 className="text-2xl font-bold text-amber-600 mb-2">
                {todayTerm.name}
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                {todayTerm.spirit.name} · {todayTerm.spirit.description}
              </p>
              <div className="bg-amber-50 rounded-2xl p-4 mb-6">
                <p className="text-gray-700 italic">
                  "{todayTerm.blessing}"
                </p>
              </div>
              <Link href={`/detail/${todayTerm.id}`}>
                <button className="btn-primary w-full">
                  查看详情 →
                </button>
              </Link>
              <button
                onClick={() => setShowBlessing(false)}
                className="mt-3 text-gray-400 text-sm hover:text-gray-600"
              >
                稍后再说
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
