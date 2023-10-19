'use client';
import { motion } from 'framer-motion';

const ActiveUnderline = () => {
  return (
    <motion.div
      className="w-full h-1 rounded-[1px] bg-foreground absolute bottom-0"
      layoutId="activeUnderline"
    />
  );
};

export default ActiveUnderline;
