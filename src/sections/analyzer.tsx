import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Analyzer() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const analyzeText = () => {
    new Ve("ichi1").words(input, function (words) {
      for (i in words) {
        var word = words[i];
        console.log(word.lemma + "/" + word.part_of_speech);
      }
    });
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
