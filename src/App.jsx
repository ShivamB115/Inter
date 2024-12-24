
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="min-h-screen bg-gray-100 py-8">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
