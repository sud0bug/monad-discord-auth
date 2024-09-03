// Updated File: pages/offline.js
import Head from 'next/head';

export default function Offline() {
  return (
    <div style={{ minHeight: '100vh', padding: '0 0.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Head>
        <title>Offline - Your App Name</title>
        <meta name="description" content="You are currently offline" />
      </Head>

      <main style={{ padding: '5rem 0', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ margin: 0, lineHeight: 1.15, fontSize: '4rem', textAlign: 'center' }}>You're offline</h1>
        <p style={{ textAlign: 'center', lineHeight: 1.5, fontSize: '1.5rem' }}>
          Please check your internet connection and try again.
        </p>
      </main>
    </div>
  );
}
