import { motion } from "framer-motion";
import { fadeIn } from "variants";

const Header = () => {
  return (
    <motion.nav variants={fadeIn("down")} initial="initial" animate="animate" className="header">
      <span className="header-logo">&apos;SONG OF GOD&apos;</span>
    </motion.nav>
  );
};

export default Header;
