/**
 * Routes
 */
import { AppRoutes } from "@/routes/AppRoutes";
import { QueryProvider } from "./providers/QueryProvider";
import { AuthProvider } from "./contexts/AuthProvider";

const App = () => {
  return (
    <QueryProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </QueryProvider>
  );
};

export default App;
