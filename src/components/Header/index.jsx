import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import { OurWines } from "../../pages/OurWines";
import { Experience } from "../../pages/Experience";
import { Contact } from "../../pages/Contact";

import LOrigine from '../../assets/l-origine.png';

import s from './header.module.scss';

export const Header = () => {
  return (
    <Router>
      <header>
        <section className={s.container}>
          <img src={LOrigine} alt="Logotipo da lorigine" className={s.logo} />
          <nav className={s.menu}>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/about">Sobre</Link>
              </li>
              <li>
                <Link to="/ourwines">Nossos Vinhos</Link>
              </li>
              <li>
                <Link to="/experience">Experiências</Link>
              </li>
              <li>
                <Link to="/contact">Contato</Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="ourwines" element={<OurWines />} />
        <Route path="experience" element={<Experience />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}