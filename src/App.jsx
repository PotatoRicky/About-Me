import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css'
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import DarkVeil from './components/DarkVeil';

function App() {
  return (
    <div>
        <div>
			<div style={{ width: '100%', height: '100%', position: 'fixed', inset: 0, zIndex: 0 }}>
				<DarkVeil
					hueShift={0}
					noiseIntensity={0}
					scanlineIntensity={0}
					speed={2}
					scanlineFrequency={0}
					warpAmount={0}
				/>
			</div>
			<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/about" element={<AboutPage />} />
			</Routes>
        </div>
    </div>
  )
}

export default App;