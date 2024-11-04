import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const Projects = () => (
  <div>
    <Header />
    <main className="flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className='ml-48'>
          <Image 
            src="/images/project1.jpg" 
            alt="Project 1"
            width={400} 
            height={300} 
          />
          <p className="text-center font-bold">Project Discusion</p>
        </div>
        <div>
          <Image 
            src="/images/project2.jpg" 
            alt="Project 2"
            width={400} 
            height={300} 
          />
          <p className="text-center font-bold">Project Inspection</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Projects;
