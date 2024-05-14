import { useState } from "react";
import Header from "./sections/header";
import Analyzer from "./sections/analyzer";
import Features from "./sections/features";

function App() {
  return (
    <>
      <Header />
      <Analyzer />
      <Features />
    </>
  );
}

export default App;
