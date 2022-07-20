import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { SavedContextProvider } from "./context/savedContext";

import Saved from "./pages/Saved/Saved";
import Layout from "./components/Layout/Layout";
import Spinner from "./components/Spinner/Spinner";

import "./App.css";

function App(): JSX.Element {
  const Categories = lazy(() => import("./pages/Categories/Categories"));
  const Filtered = lazy(() => import("./pages/Filtered/Filtered"));
  const Home = lazy(() => import("./pages/Home/Home"));
  const Recipe = lazy(() => import("./pages/Recipe/Recipe"));
  const Search = lazy(() => import("./pages/Search/Search"));

  return (
    <Layout>
      <SavedContextProvider>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/s" element={<Home />} />
            <Route path="/s/*" element={<Search />} />
            <Route path="/s/:searchParams" element={<Search />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:params" element={<Filtered />} />
            <Route path="/a/:params" element={<Filtered />} />
            <Route path="/r/:id" element={<Recipe />} />
            <Route path="/saved" element={<Saved />} />
          </Routes>
        </Suspense>
      </SavedContextProvider>
    </Layout>
  );
}

export default App;
