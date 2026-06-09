'use client'; 
import Link from 'next/link';
export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '4rem', margin: '0', color: '#ff4d4f' }}>404</h1>
      <h2 style={{ fontSize: '1.8rem', margin: '10px 0' }}>Page Not Found</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link 
        href="/" 
        style={{
          padding: '10px 20px',
          background: '#0070f3',
          color: '#fff',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
}
