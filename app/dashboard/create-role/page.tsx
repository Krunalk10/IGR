'use client'

import CreateRoleForm from '@/components/CreateRoleForm'
import Link from 'next/link'

export default function CreateRolePage() {
  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-600">
        <Link href="/dashboard" className="hover:text-blue-600">System Administration</Link>
        <span className="mx-2">›</span>
        <Link href="/dashboard" className="text-blue-600 hover:underline">Role Management</Link>
        <span className="mx-2">›</span>
        <span className="text-blue-600 font-medium">Create Role</span>
      </div>

      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          ← Back to Role List
        </Link>
      </div>

      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Create Role</h1>
        <p className="text-gray-600 mt-2">System Administration › Role Management › Create Role</p>
      </div>

      {/* Form */}
      <div className="max-w-4xl">
        <CreateRoleForm />
      </div>
    </div>
  )
}
