import { createBrowserRouter } from "react-router";
import { Dashboard as DashboardPage } from "@/pages/mails/Dashboard/Dashboard";
import { Create as CreatePage } from "@/pages/mails/Create/Create";
import { RoutePaths } from "@/shared/configs/routesPath";
import { MainLayout } from "@/app/layouts/Default/Main";

const AppRouter = createBrowserRouter([
  {
    path: RoutePaths.HOME,
    Component: MainLayout,
    children: [
      { index: true, Component: DashboardPage },
      { path: RoutePaths.MAIL_CREATE, Component: CreatePage },
    ],
  },
]);

export { AppRouter };
