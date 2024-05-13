import React from "react";
import logo from "/logo.png";

export default function Header() {
  return (
    <header className="flex justify-between w-full py-4 px-16">
      <img src={logo} alt="Japanese Reader Homepage" className="w-16" />
      <button className="button button--secondary">Get in Touch</button>
    </header>
  );
}
