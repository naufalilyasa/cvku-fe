import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./routes/Home";
import FormPersonalDetails from "./routes/cv-builder/FormPersonalDetails";
import Layout from "./routes/Layout";
import NotFoundPage from "./routes/NotFoundPage";
import CVBuilderLayout from "./routes/cv-builder/CVBuilderLayout";
import GeneratePdf from "./routes/cv-builder/GeneratePdf";
import FormExperiences from "./routes/cv-builder/FormExperiences";

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/cv-builder",
          element: <CVBuilderLayout />,
          children: [
            {
              path: "/cv-builder/personal-details",
              element: <FormPersonalDetails />,
            },
            {
              path: "/cv-builder/experiences",
              element: <FormExperiences />,
            },
            {
              path: "/cv-builder/generate-pdf",
              element: <GeneratePdf />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();
  return <RouterProvider router={router} />;
};
