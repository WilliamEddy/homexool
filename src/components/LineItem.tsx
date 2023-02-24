import React from 'react'

const LineItem = ({ children }: { children: any }) => {
  return (
    <div>
      <div className="block">
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="border-3 h-8 w-8 ring-2 ring-gray-700/20"
            />
            <span className="ml-2">{children}</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default LineItem
