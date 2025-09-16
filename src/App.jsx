import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyWebsite</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-gray-200">Home</a></li>
          <li><a href="#" className="hover:text-gray-200">Artikel</a></li>
          <li><a href="#" className="hover:text-gray-200">Tentang</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center bg-gray-100 px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Selamat Datang di Website Sederhana
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl">
          Website ini dibuat dengan React + Tailwind CSS. 
          Ini langkah awal menuju tak terbatas.
        </p>
        <button className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Mulai Belajar
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2025 MyWebsite. Dibuat dengan menggunakan React & Tailwind.</p>
      </footer>
    </div>
    </>
  )
}

export default App
