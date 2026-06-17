'use client'

import Link from 'next/link'
import { navMenuItems } from '@/data/staticData'
import { useState } from 'react'

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('role-management')

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 overflow-y-auto">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-sm font-bold text-gray-900 uppercase">
          🔐 Admin Portal
        </h2>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-2">
        {navMenuItems.map((item) => (
          <Link
            key={item.id}
            href={`/dashboard/${item.id}`}
            onClick={() => setActiveItem(item.id)}
            className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
              activeItem === item.id
                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Sidebar Footer */}
      <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200 bg-gray-50">
        <button className="w-full px-4 py-2 text-left text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
          🚪 Logout
        </button>
      </div>
    </aside>
  )
}
