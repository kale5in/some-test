import { Link } from "react-router";

import { Button, Card, Typography } from "@/shared/ui";
import { RoutePaths } from "@/shared/configs/routesPath";
import TrashSvg from "@/shared/icons/trash.svg?react";
import CopySvg from "@/shared/icons/copy.svg?react";
import CopyImgPath from "@/shared/icons/copied.png";
import { useStore } from "@/app/stores";

import PlusSvg from "@/shared/icons/plus.svg?react";

import styles from "./Dashboard.module.css";
import { copyToClipboard, showTemporaryImage } from "@/shared/lib";

const Dashboard = () => {
  const applications = useStore((state) => state.applications);

  const removeApplication = useStore((state) => state.removeApplication);

  const handleCopyToClipboard = (data: string) => () => {
    copyToClipboard(data).then(() => {
      showTemporaryImage(CopyImgPath);
    });
  };

  const handleDelete = (id: string) => () => {
    removeApplication(id);
  };

  return (
    <section className={styles.root}>
      <div className={styles.title}>
        <Typography as="h1" variant="title1" weight="semibold" color="primary">
          Applications
        </Typography>
        <Button
          as={Link}
          to={RoutePaths.APPLICATIONS_GENERATE}
          variant="filled"
          size="small"
          start={<PlusSvg />}
          className={styles.button}
        >
          Create New
        </Button>
      </div>
      {applications.length > 0 && (
        <div className={styles.container}>
          {applications.map((application) => (
            <Card
              key={application.id}
              text={application.text}
              actions={{
                start: (
                  <Button
                    onClick={handleDelete(application.id)}
                    size="small"
                    variant="default"
                    start={<TrashSvg />}
                  >
                    Delete
                  </Button>
                ),
                end: (
                  <Button
                    onClick={handleCopyToClipboard(application.text)}
                    size="small"
                    variant="default"
                    end={<CopySvg />}
                  >
                    Copy to clipboard
                  </Button>
                ),
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export { Dashboard };
