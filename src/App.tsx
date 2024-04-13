import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Home from './pages/Home'
import Table from './pages/Table'
import Graphs from './pages/Graphs'
import Dashboard from './pages/Dashboard'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<Table />} />
        <Route path="/graph" element={<Graphs />} />
      </Routes>
    </BrowserRouter>
  )
}


export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  )
}
