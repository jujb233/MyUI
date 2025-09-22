import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Demo from './Demos/Demo'
import ButtonsDemo from './Demos/ButtonsDemo'
import CardsDemo from './Demos/CardsDemo'
import PanelsDemo from './Demos/PanelsDemo'

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
