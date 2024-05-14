import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Analyzer() {
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
        <Textarea />
        <Button>Analyze</Button>
      </div>
    </section>
  );
}
