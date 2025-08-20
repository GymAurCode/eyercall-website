import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Animated background component
const AnimatedBackground = () => {
  const meshRef = useRef();

  useEffect(() => {
    if (meshRef.current) {
      gsap.to(meshRef.current.rotation, {
        x: Math.PI * 2,
        y: Math.PI * 2,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }
  }, []);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color="#1e40af" transparent opacity={0.1} />
    </mesh>
  );
};

const About = () => {
  const sectionRefs = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    // Initial title animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );

    // Scroll-triggered animations for sections
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(section,
          { 
            opacity: 0, 
            y: 100,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const features = [
    {
      icon: "🎓",
      title: "Student-Focused Platform",
      description: "Designed specifically for students with intuitive navigation and educational content.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📚",
      title: "Comprehensive Courses",
      description: "Access to a wide range of courses covering various subjects and skill levels.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🎥",
      title: "Video Meeting Feature",
      description: "Built-in video conferencing similar to Zoom for seamless online learning.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "🚀",
      title: "Additional Services",
      description: "Extra features including study tools, progress tracking, and community support.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Animated 3D Background */}
      <div className="fixed inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <AnimatedBackground />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-20" ref={titleRef}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              About Our Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Empowering students with cutting-edge technology and innovative learning experiences
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="glass-effect rounded-2xl p-8 transform hover:scale-105 transition-all duration-500"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-3xl mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div 
            ref={addToRefs}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To revolutionize education by providing students with an immersive, interactive, 
              and engaging learning platform that combines cutting-edge technology with 
              proven educational methodologies.
            </p>
          </div>

          {/* Stats Section */}
          <div 
            ref={addToRefs}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {[
              { number: "10K+", label: "Active Students" },
              { number: "500+", label: "Courses Available" },
              { number: "99%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <div 
            ref={addToRefs}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Dedicated professionals committed to creating the best learning experience for students
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Dr. Sarah Johnson", role: "Lead Educator", avatar: "👩‍🏫" },
                { name: "Mike Chen", role: "Tech Lead", avatar: "👨‍💻" },
                { name: "Emma Rodriguez", role: "UX Designer", avatar: "👩‍🎨" }
              ].map((member, index) => (
                <div key={index} className="glass-effect rounded-2xl p-6">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
