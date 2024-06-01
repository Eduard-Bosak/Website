// Home.js

import React from 'react';
import Slider from '../../common/Slider/Slider';  // Обнови путь до Slider
import './Home.css';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1,
};

const Home = () => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    className="page"
  >
    <div className="home-container">
      <h1>Добро пожаловать в нашу компанию</h1>
      <p>Мы предлагаем лучшие решения для видеонаблюдения и интеграции 1С.</p>
      <Slider />  {/* Добавляем компонент Slider */}
    </div>
  </motion.div>
);

export default Home;
