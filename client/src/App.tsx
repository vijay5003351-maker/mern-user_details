import { Routes, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import Home from "./components/Home";
import { ThemeProvider } from "./components/ThemeProvider";
import { ModeToggle } from "./components/mode-toggle";
import { Toaster } from "sonner";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <header className="bg-secondary p-4 flex justify-end items-center">
        <ModeToggle />
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-user" element={<CreateUser />} />
        </Routes>
      </div>
      <Toaster duration={3000} closeButton={false} position="bottom-right" />
    </ThemeProvider>
  );
};

export default App;
