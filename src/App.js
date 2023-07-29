import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const PostsPage = lazy(() => import("./pages/PostsPage"));
const PostDetailsPage = lazy(() => import("./pages/PostDetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:id" element={<PostDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
