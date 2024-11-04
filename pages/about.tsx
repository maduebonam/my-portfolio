import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => (
  <div>
    <Header />
    <main className="h-96 flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold mb-10">About Me</h1>
      <p className="my-4 text-lg font-semibold">My name is Egwu Kingsley Mmaduebonam</p>
      <p className="my-4 text-lg font-medium">Construction project manager</p>
      <p className="my-4 text-lg font-medium">I am a developer skilled in Next.js, React, and more...</p>
    </main>
    <Footer />
  </div>
);

export default About;
