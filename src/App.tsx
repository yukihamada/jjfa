import { Outlet } from "react-router-dom";
import { GlobalNav } from "@/components/GlobalNav";
import { GlobalFooter } from "@/components/GlobalFooter";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <GlobalNav />
        <main className="flex-grow">
          <Outlet />
        </main>
        <GlobalFooter />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;