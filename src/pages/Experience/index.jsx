import EmpordaRegion from '../../assets/experience/regiao emporda.jpg';
import PeraMancaRegion from '../../assets/experience/pedra-manca-regiao.jpg';
import ZenatoRegion from '../../assets/experience/zenato-winery-valpolicella-regiao.jpg';

import s from './experience.module.scss'

export const Experience = () => {

  const experiences = [
    {
      name: 'Emporda Region',
      image: EmpordaRegion,
      experience: 'A região de Empordà é conhecida por sua combinação única de mar e montanhas, o que se reflete nos vinhos. As vinícolas locais oferecem visitas guiadas que incluem passeios pelos vinhedos em terraços e degustações de vinhos acompanhados de produtos regionais, como queijos e azeites. Também é possível desfrutar do pôr do sol com vistas deslumbrantes da paisagem.',
      values: 'Empordà celebra a herança local, destacando a importância da comunidade e da sustentabilidade na produção de vinhos certificados pela Denominação de Origem Empordà.',
    },
    {
      name: 'Pera Manca Region',
      image: PeraMancaRegion,
      experience: 'Localizada no Alentejo, a Herdade dos Perdigões oferece uma experiência de imersão na produção de vinhos artesanais. Os visitantes podem explorar os vinhedos que utilizam práticas agrícolas sustentáveis e participam de degustações guiadas. Além disso, a arquitetura tradicional e a paisagem rural criam uma atmosfera relaxante e autêntica.',
      values: 'A vinícola valoriza a preservação ambiental e a manutenção de tradições locais, promovendo uma produção que reflete a cultura alentejana e o respeito à terra.',
    },
    {
      name: 'Zenato Region',
      image: ZenatoRegion,
      experience: 'Localizada na região do Vêneto, a Zenato é reconhecida por sua produção do Amarone. Os visitantes têm a oportunidade de conhecer os métodos tradicionais de secagem das uvas, aprender sobre a história da vinícola e experimentar os vinhos em uma elegante sala de degustação. A proximidade com o Lago de Garda adiciona um charme especial à visita',
      values: 'A Zenato se concentra na autenticidade e na inovação, preservando as práticas familiares enquanto adota tecnologias modernas para uma produção de alta qualidade.',
    }
  ]

  return (
    <section className={s.experience}>
      <section className={s.tittle}>
        <h2>Viagens entre Vinhedos</h2>
        <p>A Arte e Cultura das Vinícolas</p>
      </section>
      <section className={s.experienceList}>
        {experiences.map((experience, index) => (
          <div key={index} className={s.experienceItem}>
            <img src={experience.image} alt={experience.name} />
            <div className={s.experienceInfo}>
              <h3>{experience.name}</h3>
              <p><span>Localização: </span>{experience.experience}</p>
              <p><span>Valores: </span>{experience.values}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}