import React from 'react'

const BannerSection = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-blue-800 text-white px-8 py-6 rounded-2xl shadow-lg max-w-xl w-full text-center">
        <h1 className="text-4xl font-extrabold mb-2">Welcome to Our Platform</h1>
        <p className="text-lg text-blue-100">
          Experience the future of simplicity and performance with our banner section.
        </p>
      </div>
    </div>
  )
}

export default BannerSection
