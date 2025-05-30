"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsComponent = () => {
  return (
    <Tabs defaultValue="latest" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="latest">Derniers Articles</TabsTrigger>
        <TabsTrigger value="economy">Économie</TabsTrigger>
        <TabsTrigger value="banks">Banques</TabsTrigger>
        <TabsTrigger value="gold">Or & Argent</TabsTrigger>
      </TabsList>
      <TabsContent value="latest">
        <div className="mt-4">
          {/* Contenu des derniers articles */}
          <p>Contenu des derniers articles</p>
        </div>
      </TabsContent>
      <TabsContent value="economy">
        <div className="mt-4">
          {/* Contenu de l'économie */}
          <p>Contenu de l'économie</p>
        </div>
      </TabsContent>
      <TabsContent value="banks">
        <div className="mt-4">
          {/* Contenu des banques */}
          <p>Contenu des banques</p>
        </div>
      </TabsContent>
      <TabsContent value="gold">
        <div className="mt-4">
          {/* Contenu de l'or et argent */}
          <p>Contenu de l'or et argent</p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabsComponent;
