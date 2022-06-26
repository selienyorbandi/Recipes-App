import { Route, Routes } from "react-router-dom";
import { SavedContextProvider } from "./context/savedContext";

import Categories from "./pages/Categories/Categories";
import Filtered from "./pages/Filtered/Filtered";
import Home from "./pages/Home/Home";
import Recipe from "./pages/Recipe/Recipe";
import Search from "./pages/Search/Search";

import Layout from "./components/Layout/Layout";

import "./App.css";
import Saved from "./pages/Saved/Saved";

function App(): JSX.Element {
  return (
    <Layout>
      <SavedContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/s/*" element={<Search />} />
          <Route path="/s/:searchParams" element={<Search />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/c/:params" element={<Filtered />} />
          <Route path="/a/:params" element={<Filtered />} />
          <Route path="/r/:id" element={<Recipe />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </SavedContextProvider>
    </Layout>
  );
}

export default App;
