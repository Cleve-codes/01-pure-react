import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="nas_escobar.jpg" alt="Method Man" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Method Man</h1>
      <p>
        Method Man is one of the famous Wutang Clan group members, he is
        famously known for his genius lyrics and masterful word delivery. Method
        Man is also an actor havinf stared in 50cent'skill "Power" among others.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill member="Old dirty" color="green" />
      <Skill member="U-god" color="yellow" />
      <Skill member="GZA" color="blue" />
      <Skill member="RZA" color="orange" />
      <Skill member="Masta Killa" color="brown" />
      <Skill member="Raekwon" color="cyan" />
      <Skill member="Ghostface" color="purple" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.member}</span>
    </div>
  );
}

const rootEl = document.getElementById("root");
const root = createRoot(rootEl);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

////////////////////////////////////////////////////////////
// function Avatar() {
//   return <img src="nas_escobar.jpg" alt="Mr Meth" className="avatar" />;
// }

// function Intro() {
//   return (
//     <div>
//       <h1>Method Man</h1>
//       <p>
//         Method Man is one of Wutang Clan's rap group member. He is famously
//         known for his genius lyrics and word delivery. Method man is also an
//         actor having featured in 50cent's "Power" among others.
//       </p>
//     </div>
//   );
// }

// function SkillList() {
//   return (
//     <div className="skill-list">
//       <Skill song="U-god" color="green" />
//       <Skill song="Ghostface Killa" color="yellow" />
//       <Skill song="GZA" color="blue" />
//       <Skill song="RZA" color="orange" />
//       <Skill song="Old Dirty" color="brown" />
//       <Skill song="Raekwon" color="cyan" />
//       <Skill song="Masta Killa" color="purple" />
//     </div>
//   );
// }

// function Skill(props) {
//   return (
//     <div className="skill" style={{ backgroundColor: props.color }}>
//       <span>{props.song}</span>
//     </div>
//   );
// }

// const rootEl = document.getElementById("root");
// const root = createRoot(rootEl);
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
