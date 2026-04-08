import { useEffect, useRef, useState } from "react";

function App() {
  const carRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // Initial load animation
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, []);

  // Scroll-based car animation (moves up smoothly)
  useEffect(() => {
    const handleScroll = () => {
      if (carRef.current) {
        const scrollY = window.scrollY;
        const moveUp = scrollY * -0.65;   // Change number to make it faster/slower
        carRef.current.style.transform = `translateY(${moveUp}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { percent: "58%", desc: "Increase in pick up point use" },
    { percent: "23%", desc: "Decreased in customer phone calls" },
    { percent: "27%", desc: "Increase in pick up point use" },
    { percent: "40%", desc: "Decreased in customer phone calls" },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <div className="hero">
        {/* Headline */}
        <div className={`headline ${loaded ? "show" : ""}`}>
          <h1>
            <span>W</span>
            <span>E</span>
            <span>L</span>
            <span>C</span>
            <span>O</span>
            <span>M</span>
            <span>E</span>
            <span className="space">I</span>
            <span>T</span>
            <span>Z</span>
            <span className="space">F</span>
            <span>I</span>
            <span>Z</span>
            <span>Z</span>
          </h1>
        </div>

        {/* Car Image */}
        <img
          ref={carRef}
          src="https://picsum.photos/id/1015/900/450"
          alt="Car"
          className="car"
        />

        {/* Statistics */}
        <div className={`stats ${loaded ? "show" : ""}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="percent">{stat.percent}</div>
              <div className="desc">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Extra scroll area so you can test the car movement */}
      <div className="extra-section">
        <h2>🎉 Scroll down to see the car move up smoothly!</h2>
        <p>The car animation is tied to your scroll position (exactly like the reference).</p>
      </div>

      <div className="extra-section" style={{ backgroundColor: "#1e2937", color: "white" }}>
        <h2>You reached the bottom! 🚀</h2>
      </div>
    </>
  );
}

export default App;