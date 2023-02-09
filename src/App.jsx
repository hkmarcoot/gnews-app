import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage/index.jsx";
import SearchPage from "./pages/SearchPage/index.jsx";
import FAQPage from "./pages/FAQPage/index.jsx";
import ContactPage from "./pages/ContactPage/index.jsx";

import RootLayout from "./components/RootLayout/RootLayout";
import NotFound from "./components/NotFound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="searchpage" element={<SearchPage />} />
      <Route path="faqpage" element={<FAQPage />} />
      <Route path="contactpage" element={<ContactPage />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
