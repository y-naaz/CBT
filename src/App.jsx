import React from 'react';
import Navbar from './components/Navbar';
import AppRouter from './routes';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto p-4">
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
