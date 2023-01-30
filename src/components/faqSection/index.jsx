import { ArrowDropDownRounded, ArrowRightRounded } from "@mui/icons-material";
import { Divider } from "@mui/material";
import React from "react";
import { useState } from "react";
import Section from "../section";
import s from "./index.module.css";

const faqSectionContent = [
  {
    id: 1,
    question: "Як замовити навушники? Як довго буде доставка?",
    answer:
      "Ви можете замовити декількома способами.  Наложений платіж по передплаті 100 грн. Повна предоплата. Або через OLX безпечну доставку. Посилання на OLX э для кожного із товарів.    Ми продаємо навушники вже не перший рік тому можна довіряти. Після підтвердження замовлення, в той же або на наступний день товар надійде до курьерської служби. Сроки доставки згідно графікам курьерської служби.",
    isOpen: false,
  },
  {
    id: 2,
    question: "Як обрати навушники? Та які будуть кращі для мене?",
    answer:
      "Незалежно від вартості всі навушники які представлені у нас хорошої якості, тому перш за все ви повинні орієнтуватись на бюджет. Чим дорожчі навушники тим більший в них функціонал та кращі компоненти. В нас є YouTube канал де ми порівнюємо моделі та чіпи. Переглянувши декілька відео ви зможете більш детально ознайомитись.",
    isOpen: false,
  },
  {
    id: 3,
    question: "Щодо гарантії та повернення?",
    answer:
      "Всі товари потрібно заряджати звичайним блочком на 0.5А або 1А. Гарантія діє на тиждень. Хочете гарантію на пів року, як в магазині тоді платіть за це, як за додаткуво послугу. Якщо і виникають якісь технічні несправності то їх видно одразу. Мені китайці гроші не повертають. Я продаю як приватна особа, а не магазин. Якщо вам не підходить товар то повертати його потрібно одразу і в товарному вигляді. В повній комплектації та без слідів експлуатації (якщо будуть якісь подряпини, грязь або сліди ромонту), в іншому випадку я не прийму. Я вам надсилаю нову річ, назад Б/У мені не потрібна. У мене немає сервісного центру. Так як моделей телефонів сотні і у всих у них свої налаштування, я не можу по кожному випадку давати вичерпних консультації. Якщо виникли питання спочатку раджу пошукати в інструкції або відео в інтернеті (загуглити). В мене просто на все це немає часу (прошу зрозуміти). Всі ці товари ви можете купити самостійно в Китаї (і якщо буде брак то будете спорити з китайцем). Я просто даю можливість вам не чекати місяць, а придбати одразу. Дякую за розуміння.",
    isOpen: false,
  },
];

const ItemQuestion = ({ question, id, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onHandleClick = (e) => {
    if (Number(e.target.id) === id) {
      setIsOpen((prev) => !prev);
    }
  };
  return (
    <li key={id}>
      <button
        type="button"
        className={s.wrapperItem}
        id={id}
        onClick={onHandleClick}
      >
        <ArrowRightRounded fontSize="large" className={!isOpen ? s.icon : s.iconOpen} />
        <ArrowDropDownRounded fontSize="large" className={!isOpen ? s.iconOpen : s.icon} />
        {question}
      </button>
      <p className={!isOpen ? s.textNone : s.text}>{answer}</p>
      <Divider />
    </li>
  );
};

const FaqSection = () => {
  return (
    <Section>
      <div className={s.wrapperFaqSection}>
        <h2 className={s.title}>FAQ</h2>
        <ul className={s.faqList}>
          {faqSectionContent.map(({ question, answer, id }) => (
            <ItemQuestion
              question={question}
              // isOpen={isOpen}
              id={id}
              answer={answer}
            />
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default FaqSection;
