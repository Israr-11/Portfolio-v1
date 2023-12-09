import uniqid from "uniqid";
import { SKILLS } from "../../Portfolio";
import "./Skills.css";

const Skills = () => {
  if (!SKILLS.length) return null;

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {SKILLS.map((skill) => (
          <li key={uniqid()} className="skills__list-item btn btn--plain">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
