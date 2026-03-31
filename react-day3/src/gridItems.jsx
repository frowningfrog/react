function Program({ name, isProgram }) {
  return (
    <li className="item">
      {name} {isProgram ? " 🤖" : " 👤"}
    </li>
  );
}

export function ProgramList() {
  return (
    <section>
      <h1>The Grid</h1>
      <ul>
        <Program isProgram={true} name="Tron" />
      </ul>
      <ul>
        <Program isProgram={false} name="Flynn" />
      </ul>
      <ul>
        <Program isProgram={true} name="Ram" />
      </ul>
    </section>
  );
}
