export default function SkillsMatrix({ groups }) {
  return (
    <div className="skills">
      {groups.map((g) => (
        <section className="skills-group" key={g.title}>
          <h3 className="skills-title">{g.title}</h3>
          <div className="skills-grid">
            {g.items.map((s) => (
              <div className="skill" key={s.name}>
                <div className="skill-row">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-level">{s.level}</span>
                </div>
                <div className="skill-bar" aria-hidden="true">
                  <div
                    className="skill-bar-fill"
                    style={{ width: s.percent + "%" }}
                    title={String(s.percent) + " percent"}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
