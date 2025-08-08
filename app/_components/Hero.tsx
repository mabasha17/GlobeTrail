import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Globe2, Landmark, Plane, Send } from "lucide-react";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

const TravelIdeas = [
  {
    title: "Create a trip for Paris from India",
    icon: <Globe2 className="text-blue-400 h-5 w-5" />,
  },
  {
    title: "What are the top attractions in Rome?",
    icon: <Plane className="text-orange-500 h-5 w-5" />,
  },
  {
    title: "Create a romantic getaway plan for Venice",
    icon: <Landmark className="text-green-500 h-5 w-5" />,
  },
  {
    title: "Plan a solo adventure in Australia",
    icon: <Globe2 className="text-yellow-400 h-5 w-5" />,
  },
];

function Hero() {
  return (
    <div className="mt-24 w-full flex justify-center ">
      <div className="max-w-3xl w-full text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold ">
          Plan Your Next Adventure
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover the world with personalized travel plans powered by AI.
        </p>
        {/* input box */}
        <div className="max-w-xl mx-auto">
          <div className="border rounded-2xl p-4 relative">
            <Textarea
              placeholder="create a trip for Paris from India..."
              className="w-full h-28 bg-transparent border-none focus-visible:ring-0"
            />
            <Button size={"icon"} className="absolute bottom-6 right-6 hover:scale-105 transition-all duration-300">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* suggestions list */}
        <div className=" flex flex-wrap justify-center gap-3 max-w-xl mx-auto ">
          {TravelIdeas.map((s,i) => (
            <div
              key={i}
              className="flex items-center gap-2 border rounded-full
              cursor-pointer p-2 hover:bg-primary"
            >
              {s.icon}
              <span className="text-sm">{s.title}</span>
            </div>
          ))}
        </div>
        {/* video section */}
        {/* <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc=""
          thumbnailSrc=""
          thumbnailAlt="Hero Video"
        /> */}
      </div>
    </div>
  );
}

export default Hero;
