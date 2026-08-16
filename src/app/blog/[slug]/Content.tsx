"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Tag,
  ArrowLeft,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { siteConfig } from "@/config/site";
import type { BlogPost } from "@/config/blog";

interface Props {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostContent({ post, relatedPosts }: Props) {
  const contentParagraphs = post.content.split("\n").filter((line) => line.trim());

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 via-white to-white">
        <div className="container-custom py-12 md:py-16">
          <Breadcrumb
            items={[
              { label: "المدونة", href: "/blog" },
              { label: post.title },
            ]}
            variant="light"
          />
          <div className="mt-6 max-w-3xl">
            <Badge className="bg-green-100 text-green-700 border-green-200 mb-3">{post.category}</Badge>
            <h1 className="text-2xl md:text-4xl font-black text-green-950 mb-4 leading-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span>{post.author}</span>
              <span>{post.date}</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8 border border-green-100/60">
                <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" priority />
              </div>
              <div className="prose-custom max-w-none">
                {contentParagraphs.map((line, i) => {
                  const trimmed = line.trim();
                  if (trimmed.startsWith("## ")) {
                    return <h2 key={i}>{trimmed.replace("## ", "")}</h2>;
                  }
                  if (trimmed.startsWith("### ")) {
                    return <h3 key={i}>{trimmed.replace("### ", "")}</h3>;
                  }
                  if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
                    return (
                      <ul key={i}>
                        <li>{trimmed.replace(/^[-*]\s/, "")}</li>
                      </ul>
                    );
                  }
                  return <p key={i}>{trimmed}</p>;
                })}
              </div>

              {post.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-green-100">
                  <Tag className="w-4 h-4 text-green-600" />
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-green-200 text-green-700">{tag}</Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <Card className="border-green-100/60 shadow-md">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-green-950">محتاج تنقل اثاثك؟</h3>
                  <p className="text-sm text-slate-500">كلمنا دلوقتي واحصل على عرض سعر مجاني</p>
                  <Button className="w-full bg-green-700 hover:bg-green-800 text-white gap-2" asChild>
                    <a href={`tel:${siteConfig.phone}`}><Phone className="w-4 h-4" />اتصل دلوقتي</a>
                  </Button>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white gap-2" asChild>
                    <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4" />واتساب</a>
                  </Button>
                </CardContent>
              </Card>

              {relatedPosts.length > 0 && (
                <Card className="border-green-100/60">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-green-950 mb-4">مقالات ذات صلة</h3>
                    <div className="space-y-3">
                      {relatedPosts.map((rp) => (
                        <Link key={rp.id} href={`/blog/${rp.slug}`} className="flex items-start gap-3 group">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-green-100/60">
                            <Image src={rp.image} alt={rp.title} fill className="object-cover" sizes="64px" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm font-bold text-green-950 line-clamp-2 group-hover:text-green-700 transition-colors">{rp.title}</h4>
                            <div className="text-xs text-slate-400 mt-1">{rp.readTime}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}