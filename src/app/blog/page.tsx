import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ArrowLeft, Clock, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/config/blog";

export const metadata: Metadata = {
  title: "المدونة",
  description: "مقالات ونصائح عن نقل الأثاث، التغليف الاحترافي، واختيار شركة النقل المناسبة.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-50 via-white to-white">
        <div className="container-custom py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700 mb-4">
            <BookOpen className="h-4 w-4" />
            المدونة
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-sky-950 mb-4">مقالات ونصائح</h1>
          <p className="text-slate-600 max-w-2xl mx-auto md:text-lg">نصائح عملية وأدلة مفيدة لتجربة نقل أثاث أفضل.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="group h-full overflow-hidden border-sky-100 hover:shadow-lg transition-all cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-sky-500 text-white">{post.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h2 className="font-bold text-sky-950 text-lg mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">{post.title}</h2>
                    <p className="text-sm text-slate-500 line-clamp-2 mb-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{post.readTime}</div>
                      <div className="flex items-center gap-1"><Tag className="h-3.5 w-3.5" />{post.date}</div>
                    </div>
                    <div className="flex items-center gap-1 text-sky-500 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                      <span>اقرأ المزيد</span>
                      <ArrowLeft className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}