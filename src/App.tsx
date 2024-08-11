import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Home from './pages/Home'
import Table from './pages/Table'
import Graphs from './pages/Graphs'
import LineChart from './pages/LineChart'
import ExcelToJsonConverter from './pages/DataConvert'
import BarChart from './pages/BarChart'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<Table />} />
        <Route path="/graph" element={<Graphs />} />
        <Route path="/line-chart" element={<LineChart />} />
        <Route path="/bar-chart" element={<BarChart />} />
        <Route path="/dataconvert" element={<ExcelToJsonConverter />} />
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
