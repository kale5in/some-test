import { useMemo } from "react";
import { Link, Outlet } from "react-router";
import { useStore } from "@/app/stores";

import { MAX_MAIL_CREATED_FOR_GOAL } from "@/entities/mails/constant";
import { RoutePaths } from "@/shared/configs/routesPath";

import { Progress, Button, Banner } from "@/shared/ui";

import LogoSvg from "@/shared/icons/logo.svg?react";
import HomeSvg from "@/shared/icons/home.svg?react";
import PlusSvg from "@/shared/icons/plus.svg?react";

import styles from "./Main.module.css";

const Main = () => {
  const createdMailCount = useStore((state) => state.createdMailCount);

  const currentMailsCount = useMemo(
    () => Math.min(createdMailCount, MAX_MAIL_CREATED_FOR_GOAL),
    [createdMailCount]
  );

  const isShownBanner = currentMailsCount < MAX_MAIL_CREATED_FOR_GOAL;

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
                <span>{`${currentMailsCount}/5 `}</span>
                <span>applications generated</span>
              </>
            }
            current={currentMailsCount}
            total={MAX_MAIL_CREATED_FOR_GOAL}
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
                  to={RoutePaths.MAIL_CREATE}
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
                  label={`${currentMailsCount} out of 5`}
                  current={currentMailsCount}
                  total={MAX_MAIL_CREATED_FOR_GOAL}
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
