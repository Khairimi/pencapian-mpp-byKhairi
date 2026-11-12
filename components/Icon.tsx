import {
  BadgeCheck, BookOpen, Briefcase, Building2, CloudRain, Crown, Droplets, Dumbbell, Flag,
  Handshake, HeartHandshake, House, Landmark, Megaphone, MessagesSquare, Mic, Moon, Mountain,
  Palette, PartyPopper, Pin, Sandwich, Smartphone, Sparkles, Store, Users, WashingMachine,
  type LucideIcon, type LucideProps,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  BadgeCheck, BookOpen, Briefcase, Building2, CloudRain, Crown, Droplets, Dumbbell, Flag,
  Handshake, HeartHandshake, House, Landmark, Megaphone, MessagesSquare, Mic, Moon, Mountain,
  Palette, PartyPopper, Pin, Sandwich, Smartphone, Sparkles, Store, Users, WashingMachine,
};

export default function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = ICONS[name] ?? Sparkles;
  return <Cmp aria-hidden="true" {...props} />;
}
