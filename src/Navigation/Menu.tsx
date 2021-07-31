import { motion, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import { Heart, Home, User, Search } from "react-feather";
import styles from "./styles.module.css";
import Icons from "./Icons";

const Menu = () => {
  const [isOpen, setIsOpen] = useState("");
  const toggleButton = (name: string) => setIsOpen(name);
  return (
    <AnimateSharedLayout>
      <motion.div layout className={styles.container}>
        <Icons
          Icon={Home}
          Name="Home"
          selected={isOpen === "Home"}
          handleClick={toggleButton}
          iconColor="#5841AB"
        />
        <Icons
          Icon={Heart}
          Name="Likes"
          selected={isOpen === "Likes"}
          handleClick={toggleButton}
          iconColor="#EA4C89"
        />
        <Icons
          Icon={Search}
          Name="Search"
          selected={isOpen === "Search"}
          handleClick={toggleButton}
          iconColor="#FFC186"
        />
        <Icons
          Icon={User}
          Name="Profile"
          selected={isOpen === "Profile"}
          handleClick={toggleButton}
          iconColor="#0A826C"
        />
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default Menu;
