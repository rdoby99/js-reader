import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Analyzer() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [error, setError] = useState("");

  const analyzeText = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/words?text=${encodeURIComponent(input)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setOutput(data.words);
    } catch (error) {
      console.error("An error occurred:", error);
      setError(error.message);
    }
  };

  return (
    <section className="grid grid-cols-2 gap-16 items-center w-full py-16 px-16 min-h-[70vh]">
      <div className="text-center col-span-1 flex flex-col gap-4">
        <h1 className="h1">Japanese Text&nbsp;Analyzer</h1>
        <p className="h4">
          Input Japanese text to get a breakdown of vocabulary words by JLPT
          level
        </p>
      </div>
      <div className="col-span-1 flex flex-col gap-4">
        <Textarea
          placeholder="Input Japanese text here. ここに日本語のテキストを入力してください..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={analyzeText}>Analyze</Button>
        <ul>
          {output.map((item, index) => (
            <li key={index}>{item.surface}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
