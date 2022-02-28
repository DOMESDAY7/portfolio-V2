import { motion } from "framer-motion";
import Swiperproject from "../components/swiperProject";

const Portfolio = () => {

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
     
      className="overflow-hidden  my-auto  "
    >
    <Swiperproject />
    </motion.div>
  );
};

export default Portfolio;
