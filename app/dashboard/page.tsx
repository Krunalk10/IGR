'use client'

import { useState } from 'react'
import RoleList from '@/components/RoleList'

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('role-management')

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-600">
        <span>System Administration</span>
        <span className="mx-2">›</span>
        <span className="text-blue-600 font-medium">Role Management</span>
      </div>

      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Role Management</h1>
      </div>

      {/* Content */}
      {activeSection === 'role-management' && <RoleList />}
    </div>
  )
}
