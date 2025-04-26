import { useMemo } from "react";
import { Link, Outlet } from "react-router";
import { useStore } from "@/app/stores";

import { TOTAL_GENERATE_APPLICATIONS_FOR_GOAL } from "@/entities/applications/constant";
import { RoutePaths } from "@/shared/configs/routesPath";

import { Progress, Button, Banner } from "@/shared/ui";

import LogoSvg from "@/shared/icons/logo.svg?react";
import HomeSvg from "@/shared/icons/home.svg?react";
import PlusSvg from "@/shared/icons/plus.svg?react";

import styles from "./Main.module.css";

const Main = () => {
  const createdApplicationsCount = useStore(
    (state) => state.createdApplicationsCount
  );

  const currentApplicationsCount = useMemo(
    () =>
      Math.min(createdApplicationsCount, TOTAL_GENERATE_APPLICATIONS_FOR_GOAL),
    [createdApplicationsCount]
  );

  const isShownBanner =
    currentApplicationsCount < TOTAL_GENERATE_APPLICATIONS_FOR_GOAL;

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <Link to={RoutePaths.HOME} className={styles.logoLink}>
            <LogoSvg className={styles.logo} />
          </Link>
          <Progress
            className={styles.progress}
            label={
              <>
                <span>{`${currentApplicationsCount}/5 `}</span>
                <span>applications generated</span>
              </>
            }
            current={currentApplicationsCount}
            total={TOTAL_GENERATE_APPLICATIONS_FOR_GOAL}
          />
          <Button
            as={Link}
            to={RoutePaths.HOME}
            start={<HomeSvg />}
            variant="outlined"
            size="small"
            className={styles.homeButton}
          />
        </header>
        <main className={styles.main}>
          <Outlet />
        </main>
        {isShownBanner && (
          <footer>
            <Banner
              title="Hit your goal"
              description="Generate and send out couple more job applications today to get hired faster"
              action={
                <Button
                  as={Link}
                  to={RoutePaths.APPLICATIONS_GENERATE}
                  variant="filled"
                  start={<PlusSvg />}
                >
                  Create New
                </Button>
              }
              bottom={
                <Progress
                  indicator="line"
                  rootOrientation="vertical"
                  label={`${currentApplicationsCount} out of 5`}
                  current={currentApplicationsCount}
                  total={TOTAL_GENERATE_APPLICATIONS_FOR_GOAL}
                />
              }
            />
          </footer>
        )}
      </div>
    </div>
  );
};

export { Main as MainLayout };
