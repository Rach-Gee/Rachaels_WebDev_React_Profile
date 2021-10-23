import React from "react";
import PDF from "../images/PDF.png"

export default function Resume() {
    return (
        <div>
        <h2 className="title1">Resume</h2>
            <ul className="resumeHolder">
                <li className="fa fa-file-pdf-o" id="pdf"> <a href={PDF}
                download target="blank">Download Rachaels Resume</a></li>
            </ul>
      </div>
    );
  }