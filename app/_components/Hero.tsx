import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Globe2, Landmark, Plane, Send } from "lucide-react";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

const suggestions = [
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
    <div className="mt-24 w-full flex justify-center">
      <div className="mx-w-3xl w-full text-center space-y-6">
        <h1 className="text-xl md:text-5xl font-bold ">
          Plan Your Next Adventure
        </h1>
        <p className="text-lg">
          Discover the world with personalized travel plans powered by AI.
        </p>
        {/* input box */}
        <div className="max-w-xl mx-auto">
          <div className="border rounded-2xl p-4 relative">
            <Textarea
              placeholder="create a trip for Paris from India..."
              className="w-full h-28 bg-transparent border-none focus-visible:ring-0"
            />
            <Button size={"icon"} className="absolute bottom-6 right-6">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* suggestion list */}
        <div className=" flex justify-center mx-w-xl mx-auto ">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="flex items-center gap-2 border rounded-full
              cursor-pointer p-2 hover:bg-primary"
            >
              {suggestion.icon}
              <span className="text-sm">{suggestion.title}</span>
            </div>
          ))}
        </div>
        {/* video section */}
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc=""
          thumbnailSrc=""
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
}

export default Hero;
