import Head from "next/head";
import { useState } from "react";

const data = ["brambory", "hrusky", "nudle"];

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getText() {
  return data[randomIntFromInterval(0, data.length - 1)];
}

export default function Home() {
  const [text, setText] = useState("Co to denska bude?");
  return (
    <div className="w-full">
      <Head>
        <title>Co dneska vařit?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center min-h-screen justify-center">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Co dneska vařit?
        </h1>
        <button
          onClick={() => setText(getText())}
          className="p-4 bg-emerald-600 rounded-full drop-shadow-xl text-emerald-50 font-semibold uppercase text-xl"
        >
          poraď mi
        </button>
        <div className="text-lg mt-5 text-center">{text}</div>
      </main>
    </div>
  );
}
