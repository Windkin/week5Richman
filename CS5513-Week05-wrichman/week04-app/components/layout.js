import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>Week 5 Next JS App W. Richman</title>
      </Head>
      <header>
        <nav className="text-center">
          <h1>Menu Of Random Things I Have Made</h1>
          {!home && (
          <h2>Enjoy</h2>
          )
          }
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
          <Link href="/">
            <a className="btn btn-primary mt-3">← Back to home</a>
          </Link>
        )
      }
      <footer className="text-center">
        <h6>Week 5 cs55.13 W. Richman</h6>
      </footer>
    </div>
  );
}