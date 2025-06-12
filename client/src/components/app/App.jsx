import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PaginatedBacklogList } from "./pagination-backlog/paginated-backlog-list";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        
      </div>
    </QueryClientProvider>
  );
}

export default App;
