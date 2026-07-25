import { Shield, Award, Clock, ThumbsUp, CheckCircle2 } from "lucide-react";

const badges = [
  { icon: Shield, text: "ضمان شامل" },
  { icon: Award, text: "خبرة 7 سنوات" },
  { icon: Clock, text: "خدمة 24/7" },
  { icon: ThumbsUp, text: "رضا العملاء" },
  { icon: CheckCircle2, text: "أسعار واضحة" },
];

export function TrustBadges() {
  return (
    <div className="bg-white border-y border-sky-100">
      <div className="container-custom py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {badges.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.text} className="flex items-center gap-2 text-slate-600">
                <Icon className="w-5 h-5 text-sky-500" />
                <span className="text-sm font-semibold">{b.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}