import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Tag, User, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { blogPosts, getRelatedPosts } from "@/config/blog";
import { siteConfig } from "@/config/site";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "غير موجود" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    slug: post.slug,
    image: post.image,
    datePublished: post.date,
    author: post.author,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: siteConfig.url },
    { name: "المدونة", url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
  ]);

  const contentHtml = post.content
    .split("\n")
    .map((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("### ")) return `<h3 class="text-lg font-bold text-sky-950 mt-6 mb-2">${trimmed.slice(4)}</h3>`;
      if (trimmed.startsWith("## ")) return `<h2 class="text-xl font-bold text-sky-950 mt-8 mb-3">${trimmed.slice(3)}</h2>`;
      if (trimmed === "") return "";
      return `<p class="text-slate-600 leading-relaxed mb-3">${trimmed}</p>`;
    })
    .join("\n");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gradient-to-b from-sky-50 via-white to-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <Breadcrumb
                items={[
                  { label: "المدونة", href: "/blog" },
                  { label: post.title },
                ]}
              />
            </div>

            <Badge className="bg-sky-100 text-sky-700 mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-black text-sky-950 mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1"><User className="h-4 w-4" />{post.author}</div>
              <div className="flex items-center gap-1"><Tag className="h-4 w-4" />{post.date}</div>
              <div className="flex items-center gap-1"><Clock className="h-4 w-4" />{post.readTime}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
                <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" priority />
              </div>
              <article className="prose-custom" dangerouslySetInnerHTML={{ __html: contentHtml }} />
              <div className="flex flex-wrap gap-2 mt-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-sky-100 bg-sky-50/60">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="font-bold text-sky-950">محتاج خدمة نقل؟</h3>
                  <p className="text-sm text-slate-500">كلمنا واحصل على عرض سعر مجاني</p>
                  <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white" asChild>
                    <a href={`tel:${siteConfig.phone}`}><Phone className="h-4 w-4" />اتصل دلوقتي</a>
                  </Button>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white" asChild>
                    <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" />واتساب</a>
                  </Button>
                </CardContent>
              </Card>

              {related.length > 0 && (
                <div>
                  <h3 className="font-bold text-sky-950 mb-4">مقالات تانية</h3>
                  {related.map((r) => (
                    <Link key={r.id} href={`/blog/${r.slug}`}>
                      <Card className="border-sky-100 hover:shadow-md transition-shadow cursor-pointer mb-3">
                        <CardContent className="flex items-center gap-3 p-4">
                          <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                            <Image src={r.image} alt={r.title} fill className="object-cover" sizes="64px" />
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-sky-950 text-sm line-clamp-2">{r.title}</div>
                            <div className="text-xs text-slate-400 mt-1">{r.readTime}</div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}