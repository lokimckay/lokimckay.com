import { motion } from "framer-motion";

export default ({ items, renderItem }) => {
  const listAnim = {
    hidden: { opacity: 0, x: -10 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div variants={listAnim} initial="hidden" animate="show">
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={itemAnim}
          whileHover={{
            opacity: 0.85,
            transition: { duration: 0.15 },
          }}
          whileTap={{ opacity: 1, transition: { duration: 0.15 } }}
        >
          {renderItem(item, index)}
        </motion.div>
      ))}
    </motion.div>
  );
};
