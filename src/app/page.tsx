import React, { useState, useEffect } from 'react';

export default function GalacticPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          twinkleDelay: Math.random() * 3,
        });
      }
      setStars(newStars);
    };

    generateStars();

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-['Alef']">
      {/* Google Fonts Link for Alef */}
      <link href="https://fonts.googleapis.com/css2?family=Alef:wght@400;700&display=swap" rel="stylesheet" />
      
      {/* Animated Background Gradient */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(139, 69, 19, 0.3) 0%, 
            rgba(75, 0, 130, 0.2) 25%, 
            rgba(25, 25, 112, 0.1) 50%, 
            rgba(0, 0, 0, 1) 100%)`
        }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.twinkleDelay}s`,
            animationDuration: '2s',
          }}
        />
      ))}

      {/* Comet Trails */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300 rounded-full animate-ping opacity-75" />
      <div className="absolute top-32 right-20 w-1 h-20 bg-gradient-to-b from-purple-400 to-transparent transform rotate-45 animate-pulse" />
      <div className="absolute bottom-40 left-1/4 w-1 h-16 bg-gradient-to-t from-cyan-400 to-transparent transform -rotate-12 animate-pulse" />

      {/* Black Hole Effect */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-black border-4 border-purple-500 animate-spin" style={{ animationDuration: '20s' }}>
        <div className="absolute inset-2 rounded-full bg-gradient-radial from-transparent via-purple-900 to-black opacity-80" />
        <div className="absolute inset-4 rounded-full bg-gradient-radial from-transparent via-blue-800 to-black opacity-60" />
        <div className="absolute inset-6 rounded-full bg-black" />
      </div>

      {/* Galaxy Spiral */}
      <div className="absolute bottom-10 right-10 w-48 h-48 opacity-30">
        <div className="absolute inset-0 rounded-full border border-purple-400 animate-spin" style={{ animationDuration: '30s' }} />
        <div className="absolute inset-8 rounded-full border border-blue-400 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
        <div className="absolute inset-16 rounded-full border border-cyan-400 animate-spin" style={{ animationDuration: '20s' }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-pink-300 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-green-300 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8 px-6">
          {/* Main Title with Cosmic Glow */}
          <div className="relative">
            <h1 
              className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-300 to-cyan-300 animate-pulse"
              style={{ 
                textShadow: '0 0 30px rgba(147, 51, 234, 0.5), 0 0 60px rgba(59, 130, 246, 0.3), 0 0 90px rgba(34, 211, 238, 0.2)',
                fontFamily: 'Alef'
              }}
            >
              کهکشان
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 rounded-lg blur-xl" />
          </div>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide" style={{ fontFamily: 'Alef' }}>
            سفری به اعماق فضای نامحدود
          </p>

          {/* Coming Soon Badge */}
          <div className="inline-block">
            <div className="relative px-8 py-4 bg-gradient-to-r from-purple-800/40 to-blue-800/40 rounded-full border border-purple-500/50 backdrop-blur-sm">
              <span className="text-xl text-purple-200 font-semibold" style={{ fontFamily: 'Alef' }}>
                به زودی
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse" />
            </div>
          </div>

          {/* Cosmic Description */}
          <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed" style={{ fontFamily: 'Alef' }}>
            در این سفر کیهانی، با اسرار سیاه‌چاله‌ها، زیبایی ستارگان درخشان، و رقص دنباله‌دارها در تاریکی بی‌پایان فضا آشنا خواهید شد.
          </p>

          {/* Animated Notification */}
          <div className="flex items-center justify-center space-x-4 space-x-reverse">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-300 font-medium" style={{ fontFamily: 'Alef' }}>
              آماده‌سازی در حال انجام...
            </span>
          </div>

          {/* Interactive Cosmic Button */}
          <div className="pt-8">
            <button 
              className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transform"
              style={{ fontFamily: 'Alef' }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 0 40px rgba(147, 51, 234, 0.8), 0 0 80px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '';
              }}
            >
              <span className="relative z-10">کاوش کیهان</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Cosmic Elements */}
      <div className="absolute top-10 left-10 text-6xl animate-spin text-purple-400 opacity-60" style={{ animationDuration: '15s' }}>
        ✦
      </div>
      <div className="absolute bottom-20 right-20 text-4xl animate-bounce text-cyan-300 opacity-70">
        ★
      </div>
      <div className="absolute top-1/2 left-10 text-3xl animate-pulse text-yellow-300">
        ✧
      </div>

      {/* Bottom Cosmic Wave */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 animate-pulse" />
    </div>
  );
}
