'use client'

import { useState } from 'react'
import Link from 'next/link'
import { staticRoles } from '@/data/staticData'
import RoleDetailsModal from './RoleDetailsModal'
import { Role } from '@/types'

export default function RoleList() {
  const [roles, setRoles] = useState(staticRoles)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Roles')
  const [selectedRole, setSelectedRole] = useState<Role | null>(null)
  const [showModal, setShowModal] = useState(false)

  const filteredRoles = roles.filter((role) => {
    const matchesSearch = role.nameEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.nameMarathi.includes(searchTerm) ||
      role.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'All Roles' || role.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const handleViewRole = (role: Role) => {
    setSelectedRole(role)
    setShowModal(true)
  }

  return (
    <div className="bg-white rounded-lg shadow-md">
      {/* Toolbar */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="Search Role (Name, Description, ID...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-4">
            <label htmlFor="status-filter" className="text-sm font-medium text-gray-700">
              STATUS
            </label>
            <select
              id="status-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option>All Roles</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Refresh Button */}
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg transition-colors">
            🔄
          </button>

          {/* Add Role Button */}
          <Link
            href="/dashboard/create-role"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors inline-block"
          >
            ➕ Add Role
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                ROLE ID ↕
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                ROLE NAME (ENGLISH)
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                ROLE NAME (MARATHI)
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                ROLE DESCRIPTION
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                STATUS ↕
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRoles.map((role) => (
              <tr key={role.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-blue-600">{role.id}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-900 font-medium">{role.nameEnglish}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-900">{role.nameMarathi}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-600 truncate">{role.description}</span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      role.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {role.status === 'Active' ? '● ' : '● '}
                    {role.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleViewRole(role)}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                      title="View"
                    >
                      👁️
                    </button>
                    <button className="text-gray-600 hover:text-blue-600 transition-colors" title="Edit">
                      ✏️
                    </button>
                    <button className="text-gray-600 hover:text-red-600 transition-colors" title="Delete">
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <span className="text-sm text-gray-600">
          Showing 1 to {filteredRoles.length} of {filteredRoles.length} roles
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Show</span>
          <select className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>5</option>
            <option>10</option>
            <option>20</option>
          </select>
          <span className="text-sm text-gray-600">/ page</span>
          <div className="flex gap-2 ml-4">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">‹</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">›</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedRole && (
        <RoleDetailsModal role={selectedRole} onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}
