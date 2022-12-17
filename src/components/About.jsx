import "../styles/About.css";
import profilepic from "../profilepic.jpeg";

export default function About() {
  return (
    <div className="About section">
      <img className="profilepic" src={profilepic} alt="profilepic" />
      <div>
        <div className="name">Sanuja Methmal</div>
        <div className="post">Junior Fontend Web Developer</div>
        <div className="description">
          I'm an IT undergraduate at SLIIT Uni, Sri Lanka. Passionate in
          learning new programming related technologies. Programming, working
          out and journaling are my hobbies.
        </div>
      </div>
    </div>
  );
}
