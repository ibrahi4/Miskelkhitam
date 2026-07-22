import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Calendar, Clock, ArrowLeft, ArrowRight, ChevronLeft,
  Phone, MessageCircle, User, Share2, BookOpen,
} from "lucide-react";
import { blogPosts, blogCategories } from "@/config/blog";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${slug}`,
    image: post.image,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const category = blogCategories.find((c) => c.slug === post.category);
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  // Convert markdown-like content to HTML sections
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let key = 0;

    lines.forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed) return;

      if (trimmed.startsWith("## ")) {
        elements.push(
          <h2
            key={key++}
            className="text-2xl md:text-3xl font-black text-[#1C1C1C] mt-10 mb-4 tracking-tight"
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
      } else if (trimmed.startsWith("### ")) {
        elements.push(
          <h3
            key={key++}
            className="text-xl md:text-2xl font-bold text-[#1C1C1C] mt-8 mb-3 tracking-tight"
          >
            {trimmed.replace("### ", "")}
          </h3>
        );
      } else if (trimmed.startsWith("- ") || trimmed.startsWith("• ")) {
        elements.push(
          <li key={key++} className="text-[#1C1C1C]/80 leading-relaxed mr-6 mb-2">
            {trimmed.replace(/^[-•]\s/, "")}
          </li>
        );
      } else if (/^\d+\.\s/.test(trimmed)) {
        elements.push(
          <li key={key++} className="text-[#1C1C1C]/80 leading-relaxed mr-6 mb-2 list-decimal">
            {trimmed.replace(/^\d+\.\s/, "")}
          </li>
        );
      } else {
        elements.push(
          <p key={key++} className="text-[#1C1C1C]/80 leading-relaxed mb-4">
            {trimmed}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#F5F2EC] border-b border-[#E5E1DA]">
        <div className="container-custom py-3">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <Link href="/" className="hover:text-[#3F4F44] transition-colors">
              الرئيسية
            </Link>
            <ChevronLeft className="w-4 h-4" />
            <Link href="/blog" className="hover:text-[#3F4F44] transition-colors">
              المدونة
            </Link>
            <ChevronLeft className="w-4 h-4" />
            <span className="text-[#1C1C1C] font-semibold line-clamp-1">
              {post.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#1C1C1C] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3F4F44] rounded-full blur-3xl" />
        </div>

        <div className="relative container-custom py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-[#3F4F44] text-white border-0 mb-5">
              {category?.name}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#E8E3D9]" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#E8E3D9]" />
                {new Date(post.publishedAt).toLocaleDateString("ar-EG", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E8E3D9]" />
                {post.readTime} دقائق قراءة
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-[#F5F2EC] pb-0">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl -mt-8 md:-mt-12 border border-[#E5E1DA]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-[#F5F2EC]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="border-[#E5E1DA] bg-white shadow-sm">
              <CardContent className="p-6 md:p-10 lg:p-14">
                <article className="prose prose-lg max-w-none">
                  {renderContent(post.content)}
                </article>

                {/* Tags */}
                {post.keywords && post.keywords.length > 0 && (
                  <div className="mt-10 pt-8 border-t border-[#E5E1DA]">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold text-[#1C1C1C] ml-2">
                        الكلمات المفتاحية:
                      </span>
                      {post.keywords.map((kw) => (
                        <Badge
                          key={kw}
                          variant="outline"
                          className="border-[#E5E1DA] text-[#6B6B6B]"
                        >
                          {kw}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Prev/Next */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {prevPost ? (
                <Link href={`/blog/${prevPost.slug}`}>
                  <Card className="hover:border-[#3F4F44] hover:shadow-md transition-all cursor-pointer border-[#E5E1DA] h-full bg-white">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 text-xs text-[#6B6B6B] mb-2">
                        <ArrowRight className="w-3 h-3" />
                        <span>المقال السابق</span>
                      </div>
                      <h4 className="font-bold text-[#1C1C1C] line-clamp-2 text-sm">
                        {prevPost.title}
                      </h4>
                    </CardContent>
                  </Card>
                </Link>
              ) : (
                <div />
              )}

              {nextPost && (
                <Link href={`/blog/${nextPost.slug}`}>
                  <Card className="hover:border-[#3F4F44] hover:shadow-md transition-all cursor-pointer border-[#E5E1DA] h-full bg-white">
                    <CardContent className="p-5 text-left">
                      <div className="flex items-center justify-end gap-2 text-xs text-[#6B6B6B] mb-2">
                        <span>المقال التالي</span>
                        <ArrowLeft className="w-3 h-3" />
                      </div>
                      <h4 className="font-bold text-[#1C1C1C] line-clamp-2 text-sm">
                        {nextPost.title}
                      </h4>
                    </CardContent>
                  </Card>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Badge variant="outline" className="border-[#3F4F44] text-[#3F4F44] mb-4">
                <BookOpen className="w-3 h-3 ml-1.5" />
                مقالات ذات صلة
              </Badge>
              <h2 className="text-3xl md:text-4xl font-black text-[#1C1C1C] tracking-tight">
                اقرأ أيضاً
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`}>
                  <Card className="h-full overflow-hidden hover:shadow-lg hover:border-[#3F4F44] transition-all duration-300 group cursor-pointer border-[#E5E1DA]">
                    <div className="relative aspect-video overflow-hidden bg-[#F5F2EC]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 text-xs text-[#6B6B6B] mb-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {p.readTime} د
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-[#1C1C1C] leading-tight group-hover:text-[#3F4F44] transition-colors line-clamp-2">
                        {p.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#F5F2EC] py-12 md:py-16">
        <div className="container-custom">
          <Card className="bg-[#1C1C1C] border-0 text-white overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">
                هل تحتاج خدمة نقل أثاث؟
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                فريقنا جاهز لخدمتك على مدار الساعة. تواصل معنا الآن
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#E8E3D9] hover:bg-[#D4CCB8] text-[#1C1C1C] h-12 px-8"
                >
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="w-4 h-4 ml-2" />
                    اتصل الآن
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/5 hover:bg-white/10 border-white/20 text-white hover:text-white h-12 px-8 backdrop-blur"
                >
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 ml-2" />
                    واتساب
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}