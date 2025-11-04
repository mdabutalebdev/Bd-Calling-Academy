"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AboutGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch("/Data/AboutGallery.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.images);
        setSelectedIndex(0); // default to first image
      });
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -150 : 150;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Update selected image index
      setSelectedIndex((prevIndex) => {
        const newIndex =
          direction === "left"
            ? Math.max(prevIndex - 1, 0)
            : Math.min(prevIndex + 1, images.length - 1);
        return newIndex;
      });
    }
  };

  return (
    <div className="bg-[#f0fdfa] py-16 px-4">
      <div className="container mx-auto space-y-6">
        {/* Large Image */}
        {images.length > 0 && (
          <div className="w-10/12 mx-auto h-[500px] overflow-hidden rounded-xl shadow-lg">
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Thumbnails */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#41bfb8] p-2 rounded-full shadow-md  cursor-pointer"
          >
            <FaArrowLeft />
          </button>

          <div
            ref={scrollRef}
            className="flex justify-center overflow-x-auto gap-4 mx-auto scrollbar-hide"
          >
            {images.map((img, index) => (
              <Image
                key={img.id}
                onClick={() => setSelectedIndex(index)}
                src={img.src}
                alt={img.alt}
                width={100}
                height={100}
                className={`w-32 h-32 object-cover rounded-lg cursor-pointer border-2 ${
                  selectedIndex === index
                    ? "border-[#41bfb8]"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#41bfb8] p-2 rounded-full shadow-md cursor-pointer"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutGallery;
