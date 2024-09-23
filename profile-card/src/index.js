import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="Ronan-Corr-2-sm.jpg" alt="Ronan Corr" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Ronan Corr</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue
        est id lorem fermentum pretium. Phasellus lobortis, lacus scelerisque
        facilisis commodo, ligula mi aliquam est, a viverra nunc mi ac turpis.{' '}
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💥" color="blue" />
      <Skill skill="Node JS" emoji="🤖" color="green" />
      <Skill skill="JavaScript" emoji="🔮" color="yellow" />
      <Skill skill="HTML & CSS" emoji="🔮" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span> {props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
