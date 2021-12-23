import Head from "next/head";

export default function Home() {
  return (
    <div className="flex">
      <Head>
        <title>Co dneska vařit?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1>Co dneska vařit?</h1>
        <div className="">poraď mi</div>
      </main>
    </div>
  );
}
