import type { Metadata } from 'next'
import './mockup.css'

export const metadata: Metadata = {
  title: '블로그잇 - Landing Mockup',
  description: 'Dark theme landing page mockup preview',
}

export default function MockupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mockup-root">
      {children}
    </div>
  )
}
