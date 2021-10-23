import React from 'react';

export default function ContactMe() {
  return (
    <div>
      <h2 id="aboutme">Contact Me</h2>
                <ul>
                    <li id="phone">0401 455 252</li>
                    <li id="email"> <a href="mailto:Rach-Gee@hotmail.com">Rach-Gee@hotmail.com</a></li>
                    <li class="fa fa-file-pdf-o"> <a href="./Assets/Rachael_Giancristofaro_Resume.pdf"
                            download target="blank">Download Rachaels Resume</a></li>
                    <li class="fa fa-linkedin"><a
                            href="https://linkedin.com/in/rachael-giancristofaro-32ab38204" target="blank"> LinkedIn</a>
                    </li>
                    <li class="fa fa-github"><a
                        href="https://github.com/Rach-Gee" target="blank"> GitHub</a></li>
                </ul>
    </div>
  );
}