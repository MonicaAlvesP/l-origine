import s from './about.module.scss';

export const About = () => {
  return (
    <section className={s.container}>
      <section className={s.hero}>
        <h2>Sobre Nós</h2>
        <p>
          A <span> L&apos;Origine</span> nasceu do desejo de criar uma ponte entre as melhores safras e as pessoas que apreciam a arte de degustar, acreditamos que cada garrafa de vinho conta uma história. Nosso objetivo é trazer até você os sabores mais autênticos, provenientes das melhores vinícolas do mundo, para transformar cada momento em uma experiência inesquecível.

          Somos apaixonados por vinhos e comprometidos em oferecer uma curadoria cuidadosa, selecionando rótulos que valorizam tradição, qualidade e inovação. Desde clássicos renomados até descobertas únicas, buscamos proporcionar uma jornada pelos sabores e aromas que tornam o universo do vinho tão fascinante.
        </p>
      </section>

      <section className={s.mission}>
        <div className={s.missionText}>
          <h2>Nossa Missão</h2>
          <p>Promover a cultura do vinho, conectando amantes da bebida com rótulos que representam o que há de melhor no mundo da enologia. Queremos tornar o vinho acessível a todos, celebrando o equilíbrio entre sofisticação e simplicidade.</p>
        </div>
        <ul className={s.values}>
          <h2>Nossos Valores</h2>
          <li>Qualidade</li>
          <li>Tradição</li>
          <li>Inovação</li>
          <li>Respeito</li>
          <li>Paixão</li>
        </ul>
      </section>

      <ul className={s.why}>
        <h2>Por Que Escolher a L&apos;Origine?</h2>
        <li>
          <h3>Curadoria Exclusiva</h3>
          <p>Trabalhamos diretamente com produtores que compartilham nosso amor pela excelência e respeito pela terra.</p>
        </li>
        <li>
          <h3>Variedade Exclusiva</h3>
          <p>Oferecemos uma seleção diversificada de vinhos tintos, brancos, rosés e espumantes para atender a todos os paladares.</p>
        </li>
        <li>
          <h3>Experiência Personalizada</h3>
          <p>Nossas recomendações são feitas pensando em cada detalhe, para harmonizar com seus momentos especiais.</p>
        </li>
      </ul>

      <div className={s.sustainability}>
        <h2>Compromisso com a Sustentabilidade</h2>
        <p>
          Apoiamos práticas sustentáveis e valorizamos vinícolas que priorizam a preservação do meio ambiente. Acreditamos que o futuro do vinho está intrinsecamente ligado ao cuidado com a terra e suas riquezas.
        </p>
      </div>
    </section>
  );
}