import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css'

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import ContactsPage from './ContactsPage';
import HobbiesPage from './HobbiesPage';

import Galaxy from './components/Galaxy';

function App() {
  return (
    <div>
        <div>
			<div style={{
				width: '100%',
				height: '100%',
				position: 'fixed',
				inset: 0,
				zIndex: 0,
				background: 'black', 
			}}>
			<Galaxy 
				mouseRepulsion
				mouseInteraction={false}
				density={1}
				glowIntensity={0.2}
				saturation={0}
				hueShift={140}
				twinkleIntensity={0.1}
				rotationSpeed={0.1}
				repulsionStrength={2}
				autoCenterRepulsion={0}
				starSpeed={0.5}
				speed={1}
			/>
			</div>
			<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/projects" element={<ProjectsPage />} />
			<Route path="/contacts" element={<ContactsPage />} />
			<Route path="/hobbies" element={<HobbiesPage />} />
			</Routes>
        </div>
    </div>
  )
}

export default App;