import Head from "next/head";

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Co dneska vařit?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center min-h-screen justify-center">
        <h1 className="text-4xl font-bold mb-8 text-center">Co dneska vařit?</h1>
        <button className="p-4 bg-emerald-600 rounded-full drop-shadow-xl text-emerald-50 font-semibold uppercase text-xl">poraď mi</button>
      </main>
    </div>
  );
}
