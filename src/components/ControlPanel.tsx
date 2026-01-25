import React from 'react'

interface ControlPanelProps {
  children: React.ReactNode
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

export default function ControlPanel({ 
  children, 
  position = 'top-left' 
}: ControlPanelProps) {
  const positionStyles = {
    'top-left': { top: '20px', left: '20px' },
    'top-right': { top: '20px', right: '20px' },
    'bottom-left': { bottom: '20px', left: '20px' },
    'bottom-right': { bottom: '20px', right: '20px' },
  }

  return (
    <div style={{
      position: 'absolute',
      ...positionStyles[position],
      background: 'rgba(10, 10, 10, 0.7)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      padding: '20px',
      minWidth: '280px',
      maxWidth: '400px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      zIndex: 1000
    }}>
      {children}
    </div>
  )
}
