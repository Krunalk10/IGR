export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-lg font-bold text-white">
            🏛️
          </div>
          <div>
            <h1 className="font-bold text-gray-900">
              DEPARTMENT OF REGISTRATION AND STAMPS
            </h1>
            <p className="text-xs text-gray-600">GOVERNMENT OF MAHARASHTRA</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="relative hover:text-blue-600 transition-colors text-gray-600" title="Help Desk">
            <span className="text-xl">❓</span>
          </button>
          <div className="text-sm text-gray-600">
            English
            <span className="mx-2">▼</span>
          </div>
          <button className="relative hover:text-blue-600 transition-colors text-gray-600" title="Notifications">
            <span className="text-xl">🔔</span>
          </button>
          <button className="relative hover:text-blue-600 transition-colors text-gray-600" title="Profile">
            <span className="text-xl">👤</span>
          </button>
          <button className="relative hover:text-blue-600 transition-colors text-gray-600" title="Exit">
            <span className="text-xl">⤴️</span>
          </button>
        </div>
      </div>
    </header>
  )
}
