import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import './Portfolio.css';


const useIntersectionObserver = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);
  return [containerRef, isVisible];
};


const Portfolio = () => {
  const [containerRef, isVisible] = useIntersectionObserver({
    rootMargin: "-200px 0px 0px 0px"
  });
  const nav_state = () => {
    if (!isVisible) {
      return "nav-scrolled";
    }
    return "";
  }
  
  return <div className="portfolio-page">
    <header className={nav_state()}>
      <nav className="top-nav" ref={containerRef}>
        <ul className="nav_list">
          <li className="nav_list-item">
            <Link to="/" className="nav_link">
              About
            </Link>
          </li>
          <li className="nav_list-item">
            <Link to="/" className="nav_link">
              GitHub
            </Link>
          </li>
          <li className="nav_list-item">
            <Link to="/" className="nav_link">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <section className="portfolio-intro" ref={containerRef}>
        <h1>Hello, my name is Matthew</h1>
      </section>
      <div className="portfolio-about">
        <h2>About Me</h2>
        <p>
          I am a senior curious and interested in learning about how to use
          data to make better decisions. Growing up, I have always been
          interested in learning and understanding how things work and in
          college, I began exploring what I can do with data. My interest
          in data has led to take courses like modeling and simulation and
          data mining while trying to find ways on how I can use data to
          improve my everyday life. For example, I was curious on how I can
          be more productive throughout the day so I decided to keep track
          of the time that I started doing work. Just from the data alone,
          I realized that I prefer doing things in the evening to night time.
          After graduation, I am looking to work in a position that can help
          me remain curious and want to understand and learn what is going,
          whether it's a position in data science or a software engineering
          role at a tech company.
        </p>
      </div>
    </main>
  </div>;
};

export default Portfolio;