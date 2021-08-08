// import * as PropTypes from "prop-types";



const NameTag = () => {
  return (
    <main>
      <header>
        <h1>Hello</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>[Pls input your name]</p>
      </section>
      <footer />
    </main>
  );
};

// NameTag.prototype = {
//   name: PropTypes.string
// }

const Application = () => <NameTag />;

export default Application;
