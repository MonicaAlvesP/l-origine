import { FaFacebook, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";
import { FaPix } from "react-icons/fa6";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { SiPicpay } from "react-icons/si";


import s from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={s.container}>
      <section className={s.content}>
        <ul className={s.links}>
          <h2>links</h2>
          <li><a href="/">Home</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/produtos">Produtos</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>

        <div>
          <h2>Horário de Funcionamento</h2>
          <p>Segunda a Sexta: 9h às 18h</p>
          <p>Sábado: 9h às 13h</p>
        </div>

        <div>
          <h2>Contato</h2>
          <p>Telefone: (11) 99999-9999</p>
          <p>E-mail: lorigine.io</p>
          <p>Endereço: Rua dos Vinhedos, 123</p>
        </div>

        <div className={s.payment}>
          <h2>Formas de Pagamento</h2>
          <FaCcVisa />
          <FaCcMastercard />
          <SiPicpay />
          <FaPix />
        </div>

      </section>

      <section className={s.bottom}>
        <div className={s.social}>
          <h2>Redes Sociais</h2>
          <FaFacebook />
          <FaTwitter />
          <RiInstagramFill />
          <FaTiktok />
          <FaYoutube />
        </div>
        <div className={s.copy}>
          <p>
            A L&apos;Origine reconhece que os vinhos que oferecemos têm suas raízes em terras ancestrais, onde a natureza foi cuidadosamente respeitada e celebrada por gerações. Honramos e respeitamos a rica herança cultural dos povos que cultivaram e preservaram os vinhedos que hoje nos permitem oferecer vinhos de excelência.

            Estamos comprometidos em valorizar a história por trás de cada garrafa, promovendo uma compreensão mais profunda da conexão entre cultura, tradição e a terra fértil que nutre vinhedos em todo o mundo.
          </p>
        </div>
      </section>
      <p className={s.credits}>L`Origine Wines 2025&copy;. Todos os direitos Reservados. </p>
    </footer>
  );
}