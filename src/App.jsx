import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import WelcomePopup from "./components/WelcomePopup";

function App() {
  return (
    <div className="min-h-0 flex flex-col">
       <WelcomePopup />
      <Header />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;

  
