import LoadingSvg from "@/shared/icons/loading.svg?react";
import styles from "./Loader.module.css";

const Loader = () => {
  return <LoadingSvg className={styles.root} />;
};

export { Loader };
