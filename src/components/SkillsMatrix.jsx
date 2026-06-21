export default function SkillsMatrix({ groups }) {
  return (
    <div className="skills">
      {groups.map((group) => (
        <section className="skills-group" key={group.title}>
          <h3 className="skills-title">{group.title}</h3>

          <div className="skills-grid">
            {group.items.map((skill) => (
              <div className="skill skill-card" key={skill.name}>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}