import React from 'react'

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent animate-spin-slow shadow-lg"></div>
    </div>
  )
}
