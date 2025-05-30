"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsComponent = () => {
  return (
    <Tabs defaultValue="latest" className="w-full pb-3">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-1 md:gap-2 p-1 md:p-2">
        <TabsTrigger
          value="latest"
          className="text-xs md:text-sm whitespace-nowrap px-2 md:px-4 py-1.5 md:py-2"
        >
          Derniers Articles
        </TabsTrigger>
        <TabsTrigger
          value="economy"
          className="text-xs md:text-sm whitespace-nowrap px-2 md:px-4 py-1.5 md:py-2"
        >
          Économie
        </TabsTrigger>
        <TabsTrigger
          value="banks"
          className="text-xs md:text-sm whitespace-nowrap px-2 md:px-4 py-1.5 md:py-2"
        >
          Banques
        </TabsTrigger>
        <TabsTrigger
          value="gold"
          className="text-xs md:text-sm whitespace-nowrap px-2 md:px-4 py-1.5 md:py-2"
        >
          Or & Argent
        </TabsTrigger>
      </TabsList>
      <TabsContent value="latest" className="mt-4">
        <div className="p-2 md:p-4">
          {/* Contenu des derniers articles */}
          <p>Contenu des derniers articles</p>
        </div>
      </TabsContent>
      <TabsContent value="economy" className="mt-4">
        <div className="p-2 md:p-4">
          {/* Contenu de l'économie */}
          <p>Contenu de l'économie</p>
        </div>
      </TabsContent>
      <TabsContent value="banks" className="mt-4">
        <div className="p-2 md:p-4">
          {/* Contenu des banques */}
          <p>Contenu des banques</p>
        </div>
      </TabsContent>
      <TabsContent value="gold" className="mt-4">
        <div className="p-2 md:p-4">
          {/* Contenu de l'or et argent */}
          <p>Contenu de l'or et argent</p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabsComponent;
