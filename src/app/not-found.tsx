import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-padding bg-white min-h-[60vh] flex items-center">
      <div className="container-custom text-center space-y-6 max-w-lg mx-auto">
        <div className="text-8xl font-black text-green-100">404</div>
        <h1 className="text-2xl font-bold text-green-950">الصفحة غير موجودة</h1>
        <p className="text-slate-500">الصفحة اللي بتدور عليها مش موجودة او تم نقلها.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button className="bg-green-700 hover:bg-green-800 text-white" asChild>
            <Link href="/">
              <Home className="h-4 w-4" />
              الرئيسية
            </Link>
          </Button>
          <Button variant="outline" className="border-green-200 text-green-700" asChild>
            <Link href="/services">
              خدماتنا
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}