import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './App.css'; // Import the App.css stylesheet


function App() {
  return (
    <>
    <Header />
    <main className="mx-3">
      <Outlet />
    </main>
    <Footer />
  </>
  );
}

export default App;
