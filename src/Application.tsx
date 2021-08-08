// import * as PropTypes from "prop-types";

type NameTagProps = {
  name:string
}

const NameTag = (props: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>Hello</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{props.name}</p>
      </section>
      <footer />
    </main>
  );
};

// NameTag.prototype = {
//   name: PropTypes.string
// }

const Application = () => <NameTag name="Thomas" />;

export default Application;
