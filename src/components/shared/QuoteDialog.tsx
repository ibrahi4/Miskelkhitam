"use client";

import { useState, type KeyboardEvent, type ReactNode } from "react";
import { Loader2, MessageCircle, Send } from "lucide-react";
import toast from "react-hot-toast";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface QuoteDialogProps {
  trigger?: ReactNode;
}

interface FormData {
  name: string;
  phone: string;
  from: string;
  to: string;
  details: string;
}

export function QuoteDialog({ trigger }: QuoteDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    from: "",
    to: "",
    details: "",
  });

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("الاسم ورقم التليفون مطلوبين");
      return;
    }

    setLoading(true);

    const message = [
      "*طلب عرض سعر جديد - مسك الختام*",
      `الاسم: ${form.name}`,
      `التليفون: ${form.phone}`,
      form.from ? `من: ${form.from}` : "",
      form.to ? `الى: ${form.to}` : "",
      form.details ? `تفاصيل: ${form.details}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encoded}`, "_blank");

    toast.success("تم فتح واتساب - ارسل الرسالة للحصول على عرض سعر");
    setLoading(false);
    setOpen(false);
    setForm({ name: "", phone: "", from: "", to: "", details: "" });
  };

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen(true);
    }
  };

  return (
    <>
      {trigger ? (
        <span
          role="button"
          tabIndex={0}
          onClick={() => setOpen(true)}
          onKeyDown={handleTriggerKeyDown}
          className="inline-flex"
        >
          {trigger}
        </span>
      ) : (
        <Button
          type="button"
          className="gap-2 bg-green-700 text-white hover:bg-green-800"
          onClick={() => setOpen(true)}
        >
          <Send className="h-4 w-4" />
          طلب عرض سعر
        </Button>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-green-900">
              <MessageCircle className="h-5 w-5 text-green-600" />
              طلب عرض سعر مجاني
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="mt-2 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="q-name">الاسم *</Label>
              <Input
                id="q-name"
                placeholder="اسمك الكريم"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="q-phone">رقم التليفون *</Label>
              <Input
                id="q-phone"
                type="tel"
                placeholder="01xxxxxxxxx"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                required
                dir="ltr"
                className="text-left"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="q-from">النقل من</Label>
                <Input
                  id="q-from"
                  placeholder="المنطقة"
                  value={form.from}
                  onChange={(e) => update("from", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="q-to">النقل الى</Label>
                <Input
                  id="q-to"
                  placeholder="المنطقة"
                  value={form.to}
                  onChange={(e) => update("to", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="q-details">تفاصيل اضافية</Label>
              <Textarea
                id="q-details"
                placeholder="عدد الغرف، اثاث خاص، ملاحظات..."
                value={form.details}
                onChange={(e) => update("details", e.target.value)}
                rows={3}
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full gap-2 bg-green-600 text-white hover:bg-green-700"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <MessageCircle className="h-4 w-4" />
              )}
              ارسال عبر واتساب
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}