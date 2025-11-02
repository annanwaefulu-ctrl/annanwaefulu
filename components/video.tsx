"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Video {
  id: string;
  thumbnail: string;
  title: string;
}

const videos: Video[] = [
  {
    id: "9idLj40O3yo",
    thumbnail: "/client-1.jpg",
    title: "Client Review 1",
  },
  //   {
  //     id: "9bZkp7q19f0",
  //     thumbnail: "/client2.jpg",
  //     title: "Client Review 2",
  //   },
  //   {
  //     id: "3JZ_D3ELwOQ",
  //     thumbnail: "/client3.jpg",
  //     title: "Client Review 3",
  //   },
];

export function VideoReviews() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-6xl font-extrabold text-[#525359] mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          VIDEO REVIEW FROM CLIENTS
        </motion.h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setSelectedVideo(video.id)}
            >
              {/* Thumbnail */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Client Review"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <button
                className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-gray-300"
                onClick={() => setSelectedVideo(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
