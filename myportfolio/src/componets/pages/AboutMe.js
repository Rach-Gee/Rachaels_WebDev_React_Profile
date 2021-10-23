import React from 'react';
import me from '../images/Me.jpg';

export default function AboutMe() {
  return (
    <div>
      <aside>
          <img src={me} alt="Profile of Rachael Giancristofaro" />
          <div>Dream Bigger</div>
      </aside>
      <h2 className="title" >About Me</h2>
      <br />
      <p>I am a driven, professional individual eager to break into web development.
                Currently working as a Payroll Systems Analyst where I got my first taste of programming.
                I had been working in my company for five years in Operations and Finance when an opportunity arose to
                move
                into a systems role,
                I was officially hooked! This is where my love for computers, puzzle solving, and coding started.
                <br />
                <br />
                Being the sole person in my
                department to an 11 thousand employee large company meant I had to self-learn and learn quick!
                Developing
                live data,
                large scale reports using various BI tools as well as SQL and PayGlobal builds. Three years on and my
                passion for learning
                has not haltered. Wanting to take on a new challenge, I commenced a web developer and coding bootcamp
                with
                UWA. But enough
                about me, take a look as some of the things I have been creating by clicking the image.
            </p>
            <br />
            <br />
            <br />
            <br />
    </div>
  );
}