import "./index.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, i) => (
        <AccordionItem
          i={i}
          key={i}
          title={faq.title}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {faq.text}
        </AccordionItem>
      ))}
      <AccordionItem
        i={23}
        key={23}
        title="React"
        curOpen={curOpen}
        onOpen={setCurOpen}
      >
        <p>lorem10</p>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ i, title, children, curOpen, onOpen }) {
  const isOpen = i === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : i);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <span className="number">{i < 9 ? `0${i + 1}` : i + 1}</span>
      <span className="title">{title}</span>
      <span className="icon">{isOpen ? "-" : "+"}</span>
      {isOpen && <p className="content-box">{children}</p>}
    </div>
  );
}
