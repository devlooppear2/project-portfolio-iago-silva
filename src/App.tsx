import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/common/Footer';
import NavBar from './components/common/NavBar';
import AppRouter from './components/routes/AppRouter';
import ParticlesComponent from './particles/ParticlesComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar />
        <div className="main-content">
          <ParticlesComponent />
          <AppRouter />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
