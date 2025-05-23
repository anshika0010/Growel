import React from "react";
import { Play } from "lucide-react"; // Make sure lucide-react is installed
import Video1 from "../assets/Videos/video1.mp4";

const videos = [
  {
    title: "Corporate Security Solutions",
    description:
      "Learn how we secure corporate environments with our integrated security approach.",
    thumbnail: Video1, // This is a .mp4 file
  },
  {
    title: "Residential Security",
    description:
      "Discover our comprehensive residential security services for homes and apartments.",
    thumbnail:
      "/placeholder.svg?height=720&width=1280&text=Video%20Thumbnail%202", // Image thumbnail
  },
  {
    title: "Event Security Management",
    description:
      "See how we handle security for large-scale events and ensure attendee safety.",
    thumbnail:
      "/placeholder.svg?height=720&width=1280&text=Video%20Thumbnail%203", // Image thumbnail
  },
];

const Video = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
            See Us In Action
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Watch our videos to learn more about our security services and how
            we can help protect your assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-video bg-gray-900 group cursor-pointer">
                {video.thumbnail.endsWith(".mp4") ? (
                  <video
                    src={video.thumbnail}
                    controls
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <img
                    src={video.thumbnail}
                    alt={`Video thumbnail ${index + 1}`}
                    className="object-cover w-full h-full group-hover:opacity-75 transition-opacity"
                  />
                )}

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-navy-blue">
                  {video.title}
                </h3>
                <p className="text-gray-600 mt-2">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Video;
