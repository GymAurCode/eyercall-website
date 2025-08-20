import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import StarField from '../components/StarField';

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

const Home = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    // Entry animations
    const tl = gsap.timeline();

    tl.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(scrollIndicatorRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.3'
    );

    // Typing effect for title
    gsap.to(titleRef.current, {
      duration: 2,
      text: "Welcome to the Future",
      ease: "none",
      delay: 0.5
    });

    // Continuous scroll indicator animation
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 2
    });

  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 1000], fov: 75 }}
          style={{ background: 'linear-gradient(to bottom, #0a0a0a, #1a1a2e, #16213e)' }}
        >
          <StarField count={8000} shootingStarCount={5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        {/* Main Title */}
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 opacity-0"
        >
          <span className="text-gradient">Welcome</span>
        </h1>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl opacity-0"
        >
          Experience the next generation of web design with stunning 3D animations, 
          cinematic transitions, and immersive user experiences
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="btn-primary text-lg px-8 py-4">
            Get Started
          </button>
          <button className="btn-secondary text-lg px-8 py-4">
            Learn More
          </button>
        </div>

        {/* Scroll Indicator */}
        <div 
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 cursor-pointer"
          onClick={handleScrollDown}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-gray-400 text-sm font-medium">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="relative z-10 min-h-screen bg-gradient-to-b from-transparent to-black/50 flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
            Discover Amazing Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "3D Graphics",
                description: "Immersive Three.js powered backgrounds and animations",
                icon: "🎨"
              },
              {
                title: "Smooth Animations",
                description: "Buttery smooth GSAP animations and transitions",
                icon: "✨"
              },
              {
                title: "Responsive Design",
                description: "Perfect experience on all devices and screen sizes",
                icon: "📱"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="glass-effect rounded-2xl p-8 transform hover:scale-105 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
