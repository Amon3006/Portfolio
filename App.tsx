import React from 'react';
import { LinkedInIcon, GitHubIcon, InstagramIcon } from './components/BrandIcons';
import LinkButton from './components/LinkButton';
import profileImage from "./assets/images/image.webp";

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">

      {/* Name Header - Absolute positioned on desktop, relative on mobile */}
      <header className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
        <h1 className="flex flex-col text-3xl md:text-5xl font-normal tracking-wide leading-tight">
          <span>A m a n</span>
          <span>R a i b o l e</span>
        </h1>
      </header>

      <main className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full max-w-7xl mx-auto px-6 py-24 md:py-0 gap-12 md:gap-20">

        {/* Left Column: Image */}
        <div className="flex-1 flex justify-center md:justify-end w-full relative">
          <div className="relative w-full max-w-[400px] aspect-[4/5] md:aspect-square">
            {/* The image container */}
            <div className="absolute inset-0 z-0">
              {/* Note: In a real environment, ensure 'image.webp' exists in your public folder. */}
              <img
                src={profileImage}
                alt="Aman Raibole"
                className="w-full h-full object-cover object-top fade-bottom"
                onError={(e) => {
                  // Fallback if image.webp is missing
                  e.currentTarget.src = "https://picsum.photos/800/800?grayscale";
                  e.currentTarget.className += " opacity-50";
                }}
              />
              {/* Extra gradient overlay to ensure seamless blend with black background at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex-1 w-full max-w-lg flex flex-col justify-center space-y-8 md:space-y-12 z-10">

          {/* Social Links */}
          <div className="flex flex-col space-y-4 md:space-y-6 w-full">
            <LinkButton
              href="https://linkedin.com/in/aman-raibole-022b66225"
              label="Linked In"
              icon={<LinkedInIcon />}
            />
            <LinkButton
              href="https://github.com/Amon3006"
              label="Git Hub"
              icon={<GitHubIcon />}
            />
            <LinkButton
              href="https://instagram.com/amanraibole_"
              label="Instagram"
              icon={<InstagramIcon />}
            />
          </div>

          {/* Description Text */}
          <div className="px-1">
            <p className="text-gray-300 text-xs md:text-sm leading-7 tracking-wide text-justify uppercase font-medium">
              For Me, Software Development Is A Journey Of Continuous Learning—Breaking Things, Fixing Them, And Slowly Getting Better At Thinking Clearly. Every Bug Exposes A Gap In My Understanding, And Closing Those Gaps Is How I Improve, Not Just As A Developer, But As A Problem-Solver.
            </p>
          </div>

        </div>

      </main>
    </div>
  );
};

export default App;