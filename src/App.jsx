import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css'
import HomePage from './HomePage';

function App() {
  return (
    <div>
        <div>
          <Routes>
          <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
    </div>
  )
}

export default App;