import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 m-4 rounded-2xl shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Tailwind работает 🎉</h1>
        <p className="text-gray-700 mb-6 text-center">
          Это тестовый блок с <span className="font-semibold">padding</span>,
          <span className="font-semibold"> margin</span>,<span className="font-semibold"> flex</span>, скруглёнными
          углами и тенью.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Кнопка 1</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            Кнопка 2
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
