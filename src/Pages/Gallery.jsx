import { useEffect, useRef, useState } from 'react';
import Masonry from 'react-masonry-css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from "../Components/Footer";
import './Gallery.css';
import AnimatedTitle from "../Components/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

// Previous Hackathon Highlights
// Explore our gallery of memorable moments from HackByte 2.0 event at IIITDM Jabalpur.

const images = [
  { 
    id: 1, 
    src: '/img/img1.jpg', 
    category: 'Winners', 
    // title: 'Grand Prize Winners' 
  },
  { 
    id: 2, 
    src: '/img/img2.jpg', 
    category: 'Workshops', 
    // title: 'Web Dev Workshop' 
  },
  { 
    id: 3, 
    src: '/img/game1.jpg', 
    category: 'Participants', 
    // title: 'Team Collaboration' 
  },
  { 
    id: 4, 
    src: '/img/img3.jpg', 
    category: 'Winners', 
    // title: 'Best Innovation' 
  },
  { 
    id: 5, 
    src: '/img/img4.jpg', 
    category: 'Workshops', 
    // title: 'Pitch Practice' 
  },
  { 
    id: 6, 
    src: '/img/img5.jpg', 
    category: 'Participants', 
    // title: 'Late Night Coding' 
  },
  { 
    id: 7, 
    src: ' /img/workshop1.jpg', 
    category: 'Winners', 
    // title: 'Runner Up Project' 
  },
  { 
    id: 8, 
    src: '/img/game2.jpg', 
    category: 'Workshops', 
    // title: 'Mentorship Session' 
  },
  { 
    id: 9, 
    src: '/img/img6.jpg', 
    category: 'Participants', 
    // title: 'Team Building' 
  },
  { 
    id: 10, 
    src: ' /img/Workshop2.jpg', 
    category: 'Winners', 
    // title: 'Closing Ceremony' 
  },
  { 
    id: 11, 
    src: ' /img/game3.jpg', 
    category: 'Workshops', 
    // title: 'Ideation Workshop' 
  },
  { 
    id: 12, 
    src: '/img/img6.jpg', 
    category: 'Participants', 
    // title: 'Midnight Debugging' 
  }
];

const categories = ['All', 'Winners', 'Workshops', 'Participants'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(img => img.category === selectedCategory);

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  useEffect(() => {
    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, src]));
          resolve();
        };
      });
    };

    Promise.all(filteredImages.map(img => loadImage(img.src)))
      .then(() => {
        setIsLoading(false);
        const items = galleryRef.current.querySelectorAll('.gallery-item');
        
        gsap.fromTo(items, 
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top center+=100",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
  }, [selectedCategory, filteredImages]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    gsap.fromTo(
      ".lightbox-content",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }
    );
  };

  return (
    <div className="gallery-container">
     <div className="relative flex flex-col items-center container mx-auto px-4 text-[#198f51] mb-10">
            <AnimatedTitle
              title="<b>Previous</b> <b>Hackathon </b> </br> <b>Highlightes </b>"
              containerClass="mt-8 !text-black text-center reveal-element "
            />
          </div>
<p class="text-center text-white text-2xl">Explore our gallery of memorable moments from CodeHunt event at Nagpur.</p>

      

      <div className="filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div ref={galleryRef} className="relative min-h-[200px]">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#167d2c] border-t-transparent"></div>
          </div>
        ) : (
          <Masonry
            breakpointCols={breakpointColumns}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="gallery-item"
                onClick={() => handleImageClick(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className={`transition-opacity duration-300 ${
                    loadedImages.has(image.src) ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <div className="image-overlay">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <span className="text-sm opacity-75">{image.category}</span>
                </div>
              </div>
            ))}
          </Masonry>
        )}
      </div>

      {selectedImage && (
        <div 
          className="lightbox" 
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="lightbox-content"
            onClick={e => e.stopPropagation()}
          >
            <img src={selectedImage.src} alt={selectedImage.title} />
            <button 
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <span className="opacity-75">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
       
    </div>
 
  );
}


