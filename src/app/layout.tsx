import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: '二十四节气精灵助手 | 顺应时节 · 诗意生活',
  description: '探索二十四节气的智慧，每个节气都有专属的精灵卡片，感受中国传统文化的魅力',
  keywords: '二十四节气, 节气精灵, 中国传统文化, 节气卡片, 节气祝福',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased bg-pattern">
        <div className="min-h-screen flex flex-col">
          <header className="bg-gradient-to-r from-amber-400 to-amber-500 text-white py-4 px-6 shadow-md">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                <span className="text-2xl">🌿</span>
                <span>二十四节气精灵</span>
              </h1>
              <span className="text-sm opacity-90">2026</span>
            </div>
          </header>
          
          <main className="flex-1">
            {children}
          </main>
          
          <footer className="bg-amber-200 text-amber-700 py-4 px-6 text-center text-sm">
            <p>顺应时节 · 诗意生活 🌸</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
