import "./JoinSection.css";
function JoinSection() {
  return (
    <section className="join">
      <h2> Join Today!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias
        a ea modi rem pariatur exercitationem voluptatum harum repellat delectus
        laudantium, beatae facilis blanditiis quos quae fugiat quam veritatis
        eaque.
      </p>
      <form action="">
        <input
          type="email"
          name="email"
          placeholder="Type Email here"
          required
        />
      </form>
    </section>
  );
}
export default JoinSection;
