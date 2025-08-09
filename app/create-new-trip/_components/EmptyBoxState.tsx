import React from "react";
import { TravelIdeas } from "@/app/_components/Hero";

function EmptyBoxState({ onSelectOption }: any) {
  return (
    <div className="mt-4">
      <h2 className="text-3xl font-bold text-center text-gray-700">
        No <strong className="text-primary">Trip</strong> Created Yet
      </h2>
      <p className="text-center mt-2">
        Start planning your next adventure by creating a new trip.
      </p>
      <div className=" flex flex-col gap-4 mt-6">
        {TravelIdeas.map((s, i) => (
          <div
            key={i}
            onClick={() => onSelectOption(s.title)}
            className="flex items-center gap-2 border rounded-xl
              cursor-pointer p-3 hover:bg-primary"
          >
            {s.icon}
            <span className="text-sm">{s.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmptyBoxState;
