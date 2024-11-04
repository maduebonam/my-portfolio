import type { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const Home: NextPage = () => (
  <div>
    <Header />
    <main className="p-10 text-center">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg font-semibold">Explore my projects, learn about my skills, and get in touch.</p>
      <Image 
        src="/images/profile.jpg"  
        alt="My Profile Picture"
        width={200}
        height={200}
        className="rounded mx-auto mt-6"
      />
    </main>
    <Footer />
  </div>
);

export default Home;
