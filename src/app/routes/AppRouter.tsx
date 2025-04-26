import { createBrowserRouter } from "react-router";
import { Dashboard as DashboardPage } from "@/pages/applications/Dashboard/Dashboard";
import { GeneratePage } from "@/pages/applications/Generate/Generate";
import { RoutePaths } from "@/shared/configs/routesPath";
import { MainLayout } from "@/app/layouts/Default/Main";

const AppRouter = createBrowserRouter([
  {
    path: RoutePaths.HOME,
    Component: MainLayout,
    children: [
      { index: true, Component: DashboardPage },
      { path: RoutePaths.APPLICATIONS_GENERATE, Component: GeneratePage },
    ],
  },
]);

export { AppRouter };
