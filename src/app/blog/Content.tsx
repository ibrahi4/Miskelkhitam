"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, ArrowLeft, Clock, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/config/blog";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

export default function BlogContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <section className="bg-gradient-to-b from-green-50 via-white to-white">
        <div className="container-custom py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700 mb-4">
            <BookOpen className="h-4 w-4" />
            المدونة
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-green-950 mb-4">مقالات ونصائح</h1>
          <p className="text-slate-600 max-w-2xl mx-auto md:text-lg">
            نصائح عملية ومعلومات مفيدة تساعدك في نقل اثاثك بأمان.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {blogPosts.length === 0 ? (
            <p className="text-center text-slate-500">لا توجد مقالات حالياً.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <motion.div key={post.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="group h-full border-green-100/60 hover:shadow-lg hover:border-green-200 transition-all cursor-pointer overflow-hidden bg-white">
                      <div className="relative h-48 overflow-hidden">
                        <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-green-950/50 to-transparent" />
                        <Badge className="absolute top-3 right-3 bg-green-600 text-white text-xs">{post.category}</Badge>
                      </div>
                      <CardContent className="p-5">
                        <h2 className="font-bold text-green-950 text-lg mb-2 group-hover:text-green-700 transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-sm text-slate-500 line-clamp-2 mb-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1 text-green-600 font-medium group-hover:gap-2 transition-all">
                            <span>اقرأ المقال</span>
                            <ArrowLeft className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}