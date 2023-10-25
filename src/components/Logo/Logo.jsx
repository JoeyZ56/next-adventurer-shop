import styles from "./Logo.module.scss";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className={styles.container}>
      <div className={styles.Logo}>
        <div className={styles.title}>
          <span>Adventurer</span>
          <span>Shop</span>
        </div>
      </div>
    </div>
  );
}
