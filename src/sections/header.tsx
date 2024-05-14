import React from "react";
import logo from "/logo.png";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex justify-between w-full py-4 px-16">
      <img src={logo} alt="Japanese Reader Homepage" className="w-16" />
      <Button variant="outline">Get In Touch</Button>
    </header>
  );
}
