import "./assets/styles/index.scss";
import Home from "./pages/Home/Home";
import { Form } from "./components/ui/index";
import { Layout } from "./components/layout/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="create" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App

/*
<div>
        <Home />
        <Form/>
        <Footer/>
      </div>
*/