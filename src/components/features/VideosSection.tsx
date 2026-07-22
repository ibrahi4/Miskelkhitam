"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { videos } from "@/config/media";
import { Play, Video, X, Film } from "lucide-react";

export function VideosSection() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="section-padding bg-[#1C1C1C] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3F4F44] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8E3D9] rounded-full blur-3xl" />
      </div>

      <div className="relative container-custom">

        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <Badge className="bg-white/5 text-[#E8E3D9] border border-white/10 mb-4 px-4 py-1.5">
            <Video className="w-3 h-3 ml-1.5" />
            شاهد بنفسك
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tight">
            من داخل
            <br />
            <span className="text-[#E8E3D9]">مشاريعنا الحقيقية</span>
          </h2>
          <p className="text-base text-white/60 leading-relaxed">
            شاهد كيف نتعامل مع مقتنياتك باحترافية من البداية للنهاية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {videos.map((video) => {
            const hasError = imageErrors[video.id];

            return (
              <div
                key={video.id}
                className="group relative aspect-video overflow-hidden rounded-2xl cursor-pointer bg-gradient-to-br from-[#2A2A2A] to-[#1C1C1C] border border-white/10 hover:border-[#E8E3D9]/40 transition-all duration-300"
                onClick={() => setSelectedVideo(video)}
              >
                {!hasError ? (
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-80"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={() => handleImageError(video.id)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#3F4F44]/30 to-[#1C1C1C]">
                    <Film className="w-20 h-20 text-white/10" />
                  </div>
                )}

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#E8E3D9] group-hover:bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-[#1C1C1C] fill-[#1C1C1C] mr-0.5" />
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/70 to-transparent p-5 z-10">
                  <h3 className="font-bold text-white text-base mb-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-white/60 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-[#1C1C1C] border-0">
          <DialogTitle className="sr-only">{selectedVideo?.title}</DialogTitle>
          {selectedVideo && (
            <div className="relative">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 left-4 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur"
              >
                <X className="w-5 h-5" />
              </button>
              <video
                src={selectedVideo.src}
                controls
                autoPlay
                className="w-full aspect-video"
              >
                متصفحك لا يدعم تشغيل الفيديو
              </video>
              <div className="bg-[#1C1C1C] p-5 md:p-6">
                <h3 className="text-white font-bold text-lg mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-white/60 text-sm">{selectedVideo.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}