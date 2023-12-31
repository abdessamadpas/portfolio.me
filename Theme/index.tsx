import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";
import Head from 'next/head';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <> 
      <Head>
       
        <html lang="en" /> 
      </Head>
    <button
      onClick={() => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      }}
      className="text-xl lg:text-2xl xl:text-2xl z-10"
      aria-label="switch mode"
    >
      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <motion.div
            layout
            key="moon"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: -10, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 700,
              damping: 30,
            }}
          >
            {" "}
            <FiMoon />{" "}
          </motion.div>
        ) : (
          <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, rotate: 180 }}
            exit={{ y: 10, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 700,
              damping: 30,
            }}
            key="sun"
          >
            {" "}
            <BsSun />{" "}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
    </>
   
  );
};

export default ThemeSwitch;
