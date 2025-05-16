/**
 * Routes
 */
import { AppRoutes } from "@/routes/AppRoutes";
import { QueryProvider } from "./providers/QueryProvider";

const App = () => {
  return (
    <QueryProvider>
      <AppRoutes />
    </QueryProvider>
  );
};

export default App;
