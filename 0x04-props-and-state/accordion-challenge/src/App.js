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
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [hidden, setHidden] = useState(false);

  function revealSection(e) {
    if (e.target !== hidden) setHidden(true);
  }

  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <div className="item" onClick={revealSection}>
          <span className="number">{i + 1}</span>
          <span className="title">{faq.title}</span>
          <span className="icon">+</span>
          {hidden && <p className="content-box">{faq.text}</p>}
        </div>
      ))}
    </div>
  );
}
