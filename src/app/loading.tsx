import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <Loader2 className="h-10 w-10 text-sky-500 animate-spin mx-auto" />
        <p className="text-slate-500 text-sm">جاري التحميل...</p>
      </div>
    </div>
  );
}