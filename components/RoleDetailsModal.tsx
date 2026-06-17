import { Role } from '@/types'

interface RoleDetailsModalProps {
  role: Role
  onClose: () => void
}

export default function RoleDetailsModal({ role, onClose }: RoleDetailsModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-96 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">ℹ️</span>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Role Details</h2>
              <p className="text-sm text-gray-600">ID: {role.id}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-6 space-y-6">
          {/* English Name */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                ROLE NAME (ENGLISH)
              </label>
              <p className="text-lg font-medium text-gray-900">{role.nameEnglish}</p>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                ROLE NAME (MARATHI)
              </label>
              <p className="text-lg font-medium text-gray-900">{role.nameMarathi}</p>
            </div>
          </div>

          {/* Status */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                STATUS
              </label>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                    role.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {role.status === 'Active' ? '● ' : '● '}
                  {role.status}
                </span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                CREATED BY
              </label>
              <p className="text-gray-900">{role.createdBy}</p>
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                CREATED ON
              </label>
              <p className="text-gray-900">{role.createdOn}</p>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                UPDATED BY
              </label>
              <p className="text-gray-900">{role.updatedBy}</p>
            </div>
          </div>

          {/* Updated On */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
              UPDATED ON
            </label>
            <p className="text-gray-900">{role.updatedOn}</p>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
              DESCRIPTION
            </label>
            <p className="text-gray-700 leading-relaxed">{role.description}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-200 px-8 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  )
}
