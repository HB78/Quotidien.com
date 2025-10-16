"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Landmark, Coins, Newspaper } from "lucide-react";

const TabsComponent = () => {
  const categories = [
    { value: "latest", label: "Derniers Articles", icon: Newspaper },
    { value: "economy", label: "Économie", icon: TrendingUp },
    { value: "banks", label: "Banques", icon: Landmark },
    { value: "gold", label: "Or & Argent", icon: Coins }
  ];

  return (
    <Tabs defaultValue="latest" className="w-full">
      <TabsList className="inline-flex w-full items-center justify-start gap-2 p-1.5 bg-gray-100 rounded-xl overflow-x-auto">
        {categories.map(({ value, label, icon: Icon }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-transparent text-gray-700 hover:bg-white/50 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm transition-all duration-200 whitespace-nowrap"
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map(({ value, label }) => (
        <TabsContent key={value} value={value} className="mt-0">
          {/* Le contenu sera affiché ici si nécessaire */}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabsComponent;
