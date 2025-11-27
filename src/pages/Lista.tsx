import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { ChatAssistant } from "@/components/ChatAssistant";

const Lista = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar isOpen={sidebarOpen} />
      
      <div className="flex-1">
        <DashboardHeader onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="p-6">
          <h2 className="text-2xl font-bold text-primary mb-4">Lista Completa de Visitantes</h2>
          <p className="text-muted-foreground">Em desenvolvimento...</p>
        </main>
      </div>
      
      <ChatAssistant />
    </div>
  );
};

export default Lista;
