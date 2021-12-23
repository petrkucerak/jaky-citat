import Head from "next/head";
import { useState } from "react";
import {data} from "/pages/data/data.js"

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getText() {
  return data[randomIntFromInterval(0, data.length - 1)];
}

export default function Home() {
  const [text, setText] = useState("Fakt netušíš?");
  return (
    <div className="w-full dark:bg-black">
      <Head>
        <title>Co dneska vařit?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center min-h-screen justify-center">
        <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">
          Co dneska vařit?
        </h1>
        <button
          onClick={() => setText(getText())}
          className="p-4 bg-emerald-600 rounded-full drop-shadow-xl text-emerald-50 font-semibold uppercase text-xl"
        >
          poraď mi
        </button>
        <div className="text-lg mt-5 text-center dark:text-white mx-5">{text}</div>
      </main>
    </div>
  );
}
