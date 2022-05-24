import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}
