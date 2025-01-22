import wines from '../../mock/wines.json';
import { FaStar } from 'react-icons/fa';
import s from './ourwines.module.scss';

export const OurWines = () => {
  const WinesList = wines;

  return (
    <section className={s.container}>
      <div className={s.title}>
        <h2>Nossos Vinhos</h2>
        <p>Conheça a nossa seleção de vinhos</p>
      </div>
      <ul className={s.content}>
        {WinesList.map((wine) => (
          <li key={wine.id} className={s.wineList}>
            <h2>{wine.vinho}</h2>
            <img src={wine.imagem} alt={wines.descricao} />
            <p>{wine.descricao}</p>
            <div className={s.wineInfo}>
              <span>
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar
                    key={index}
                    color={index < Math.round(wine.classificacao.avaliacoes) ? "#e2e2e2" : "#ffc107"}
                  />
                ))}
              </span>
            </div>

            <div className={s.price}>
              <b>{wine.preco}</b>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}