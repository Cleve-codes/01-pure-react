import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import AppLayout from "./pages/AppLayout"
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />

        {/* Nested Routes */}
        <Route path="/app" element={<AppLayout />}>
          {/* Specifying the Index element which would
          be shown by default incase no path is specified */}
          <Route index element={<p>LIST</p>} />
          <Route path="cities" element={<p>List The Cities</p>} />
          <Route path="countries" element={<p>List The Countries</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>

        {/* To match all other paths which are not specified */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
