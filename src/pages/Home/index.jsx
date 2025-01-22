import { CarouselImages } from "../../components/CarouselImages";
import PeraManca from '../../assets/wines/Pera-Manca.png';
import Cabernet from '../../assets/wines/Cabernet-Sauvinon.png';
import Emparada from '../../assets/wines/Empardà2012.png';
import ZenatoAmarone from '../../assets/wines/zenato-amarone-della-valpolicella.png';

import s from './home.module.scss';
import { Link } from "react-router-dom";
import { FAQ } from "../../components/FAQ";

export const Home = () => {
  return (
    <main className={s.container}>
      <CarouselImages />
      <section className={s.text}>
        <h2>Decubra Vinhos saborosos e inesqueciveis</h2>
        <p>Sabores exclusivos, tradição e qualidade desde 1995.</p>
      </section>

      <section className={s.wines}>
        <div className={s.right}>
          <div className={s.info}>
            <h3>Pera Manca</h3>
            <p>
              Pera Manca é um vinho português de alta qualidade, conhecido por seu sabor encorpado e notas frutadas. Ideal para acompanhar carnes vermelhas, queijos curados e pratos de caça.
            </p>
          </div>
          <img src={PeraManca} alt="Pera Manca" />
        </div>

        <div className={s.left}>
          <img src={Cabernet} alt="Cabernet" />
          <div className={s.info}>
            <h3>Cabernet Sauvignon</h3>
            <p>
              Cabernet Sauvignon é um vinho tinto seco, com sabor intenso e marcante. Ideal para acompanhar carnes vermelhas, massas com molho vermelho e queijos curados.
            </p>
          </div>
        </div>

        <div className={s.right}>
          <div className={s.info}>
            <h3>Empordà</h3>
            <p>
              Empordà é um vinho tinto espanhol, com sabor frutado e aroma intenso. Ideal para acompanhar pratos de carne, massas e queijos curados.
            </p>
          </div>
          <img src={Emparada} alt="Emparada" />
        </div>

        <div className={s.left}>
          <img src={ZenatoAmarone} alt="Zenato Amarone" />
          <div className={s.info}>
            <h3>Zenato Amarone</h3>
            <p>
              Zenato Amarone é um vinho tinto italiano, com sabor encorpado e aroma intenso. Ideal para acompanhar pratos de carne, massas e queijos curados.
            </p>
          </div>
        </div>
      </section>
      <button className={s.btnWines}>
        <Link to="/ourwines">Veja nosso Menu de Vinhos</Link>
      </button>

      <FAQ />
    </main>
  )
}