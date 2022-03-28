import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import React from "react";

const Placeholder = lazy(() => import("./Placeholder"));
const PlaceholderDetails = lazy(
  () => import("./Placeholder/PlaceholderDetails")
);

const queryClient = new QueryClient();

const App = () => {
  return (
    <Suspense fallback={<>loading...</>}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<PlaceholderDetails />} path="/posts/:id" />
            <Route element={<Placeholder />} path="*" />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Suspense>
  );
};
export default App;
