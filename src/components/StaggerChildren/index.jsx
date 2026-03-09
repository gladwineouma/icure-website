import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const staggerContainer = (staggerDelay) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  },
});

const StaggerChildren = ({ 
  children, 
  className = "", 
  staggerDelay = 0.1 
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer(staggerDelay)}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerChildren;