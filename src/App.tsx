import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Demo from './Demo/Demo'
import ButtonsDemo from './Demo/ButtonsDemo'
import CardsDemo from './Demo/CardsDemo'
import PanelsDemo from './Demo/PanelsDemo'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Demo />} />
                <Route path="/buttons" element={<ButtonsDemo />} />
                <Route path="/cards" element={<CardsDemo />} />
                <Route path="/panels" element={<PanelsDemo />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
