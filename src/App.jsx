import React from 'react';
import Navbar from './components/Navbar';
import AppRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto p-4">
          <AppRouter />
        </main>
      </div>
    </Router>
  );
}

export default App;
