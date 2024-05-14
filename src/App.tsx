import { useState } from "react";
import Header from "./sections/header";
import Analyzer from "./sections/analyzer";
import Features from "./sections/features";
import Footer from "./sections/footer";

function App() {
  return (
    <>
      <Header />
      <Analyzer />
      <Features />
      <Footer />
    </>
  );
}

export default App;
