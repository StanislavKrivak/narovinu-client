import "./assets/styles/index.scss";
import Home from "./pages/Home/Home";
import { CustomerForm } from "./components/ui/index";
import { Layout } from "./components/layout/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="form" element={<CustomerForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App