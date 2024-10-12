import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#E84F33',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'intermediate',
    color: '#C72C48',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#00FFFF',
  },
  {
    skill: 'React',
    level: 'beginner',
    color: 'blue',
  },
  {
    skill: 'Node JS',
    level: 'beginner',
    color: 'green',
  },
];

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
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && '👶🏻'}
        {level === 'intermediate' && '👍🏻'}
        {level === 'advanced' && '💪🏻'}
      </span>
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
