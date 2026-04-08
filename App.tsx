import React from 'react';
import { LinkedInIcon, GitHubIcon, InstagramIcon } from './components/BrandIcons';
import LinkButton from './components/LinkButton';
import profileImage from "./assets/images/image.webp";

import Galaxy from './Galaxy';
import OrbitImages from './OrbitImages'

const images = [
  "./assets/images/Earth.png",
  "./assets/images/moon.png",
  "./assets/images/pinkplanet.png",
  "./assets/images/yellowplanet.png",
  "./assets/images/greenplanet.png",
  "./assets/images/redblueplanet.png"
];
const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">

      {/* ── Fixed full-screen Antigravity background ── */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>

      {/* ── All page content sits above the background ── */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Name Header */}
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
              <div className="absolute inset-0 z-0">
                <OrbitImages
                  images={images}
                  shape="ellipse"
                  radiusX={800}
                  radiusY={550}
                  rotation={-8}
                  duration={30}
                  itemSize={500}
                  responsive={true}
                  radius={150}
                  direction="normal"
                  fill
                  showPath
                  paused={false}
                />
                {/* Gradient overlay to blend image into background */}
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
    </div>
  );
};

export default App;
