import { useState } from "react";
import { Link } from "react-router-dom";
import s from './faq.module.scss';

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const FAQ = () => {
  const [visibleQuestion, setVisibleQuestion] = useState(null);

  const questions = [
    {
      title: "Como faço para comprar um vinho?",
      content: (
        <>
          Para comprar um vinho, basta acessar a página de <Link to="/ourwines">nossos vinhos</Link>, escolher o vinho desejado, adicionar ao carrinho e finalizar a compra.
        </>
      ),
    },
    {
      title: "Quais são as formas de pagamento?",
      content: "Aceitamos pagamentos com cartão de crédito, débito, boleto bancário e transferência bancária.",
    },
    {
      title: "Como faço para devolver um vinho?",
      content: (
        <>
          Para devolver um vinho, entre em contato com nossa equipe de suporte através do e-mail:
          <a href="#"> lorigine.io</a> ou pelo telefone (11) 9999-9999.
        </>
      ),
    },
    {
      title: "Qual é o prazo de entrega?",
      content: (
        <>
          O prazo de entrega varia de acordo com a localidade. Para mais informações, consulte a página de <Link to="/delivery">entrega</Link>.
        </>
      ),
    },
  ];

  const toggleQuestion = (index) => {
    setVisibleQuestion(visibleQuestion === index ? null : index);
  };

  return (
    <main className={s.container}>
      <section className={s.text}>
        <h2>Perguntas Frequentes</h2>
        <p>Confira as perguntas mais frequentes sobre nossos vinhos e serviços.</p>
      </section>

      <section className={s.questions}>
        {questions.map((question, index) => (
          <div
            key={index}
            className={`${s.question} ${visibleQuestion === index ? s.active : ""}`}
            onClick={() => toggleQuestion(index)}
          >
            <h3>
              {question.title}
              <span className={s.icon}>{visibleQuestion === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </h3>
            <div
              className={s.content}
              style={{ height: visibleQuestion === index ? "auto" : "0" }}
            >
              <p>{question.content}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
