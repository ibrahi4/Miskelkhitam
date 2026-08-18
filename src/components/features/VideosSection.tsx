"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Video, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { videos } from "@/config/media";

export function VideosSection() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playing, setPlaying] = useState<Record<string, boolean>>({});
  const [muted, setMuted] = useState<Record<string, boolean>>({});

  if (videos.length === 0) return null;

  const togglePlay = (id: string, index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying((p) => ({ ...p, [id]: true }));
    } else {
      video.pause();
      setPlaying((p) => ({ ...p, [id]: false }));
    }
  };

  const toggleMute = (id: string, index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    video.muted = !video.muted;
    setMuted((m) => ({ ...m, [id]: video.muted }));
  };

  return (
    <section id="videos" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Video className="w-4 h-4" />
            فيديوهات
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-3">
            شاهد شغلنا بالفيديو
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {videos.map((vid, i) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-100/60"
            >
              <div className="relative aspect-video bg-slate-100">
                <video
                  ref={(el) => { videoRefs.current[i] = el; }}
                  src={vid.src}
                  poster={vid.poster}
                  className="w-full h-full object-cover"
                  playsInline
                  muted
                  loop
                  preload="metadata"
                />
                <div className="absolute bottom-3 right-3 flex gap-2">
                  <button
                    onClick={() => togglePlay(vid.id, i)}
                    className="w-10 h-10 bg-blue-600/90 hover:bg-blue-700 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
                    aria-label={playing[vid.id] ? "ايقاف" : "تشغيل"}
                  >
                    {playing[vid.id] ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 mr-[-2px]" />}
                  </button>
                  <button
                    onClick={() => toggleMute(vid.id, i)}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
                    aria-label={muted[vid.id] ? "تشغيل الصوت" : "كتم الصوت"}
                  >
                    {muted[vid.id] || !playing[vid.id] ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-blue-950">{vid.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{vid.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}