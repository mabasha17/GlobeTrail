import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import { Popularcity } from "./_components/Popularcity";
export default function Home() {
  return (
    <div>
      <Hero />
      <Popularcity />
    </div>
  );
}
