import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "react-feather";
import styles from "./styles.module.css";

interface Props {
  Icon: Icon;
  Name: string;
  selected: boolean;
  handleClick: (name: string) => void;
  iconColor: string;
}

const Icons = ({ Icon, Name, selected, handleClick, iconColor }: Props) => {
  return (
    <motion.div
      onClick={() => handleClick(Name)}
      layout
      className={styles.icons}
      style={{
        color: selected ? iconColor : "",
        backgroundColor: selected ? "#EA4C891A" : "",
      }}
    >
      <motion.span layout>
        <Icon />
      </motion.span>
      <AnimatePresence exitBeforeEnter>
        {selected && (
          <motion.span key={Name} className={styles.iconsName}>
            {Name}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Icons;
