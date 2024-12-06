import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "./layouts";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "./context";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <MaterialTailwindControllerProvider>
          <Routes>
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/societies/*" element={<Dashboard />} />
            <Route path="/auth/*" element={<Auth />} />
            <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
          </Routes>
        </MaterialTailwindControllerProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
