import React from "react";
import joke from "../images/Am_i_a_joke_to_you.PNG"
import hero from "../images/Hero.png"
import weather from "../images/Weather_Dashboard.PNG"
import generate from "../images/Generate_Password.PNG"

export default function Portfolio() {
    return (
            <section>
                <h2 className="title1">My Work </h2><br /><br /><br />
                <div className="row">
                    <div className="smallerCard col s12 m12">
                        <div className="card">
                            <div className="card-image">
                                <a href="https://rach-gee.github.io/Hero-Attributes-and-Gif-generator/"
                                    target="blank"><img className='opacity' src={hero}
                                        alt="preview of Hero webpage"/></a>
                                <span id='textcolor' className="card-title">Hero's Attributes</span>
                            </div>
                            <div className="card-content" id="margin">
                                <a href="https://github.com/Rach-Gee/Hero-Attributes-and-Gif-generator"
                                    target="blank">Hero's Attributes - GitHub Link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="smallerCard col s6 m6">
                        <div className="card">
                            <div className="card-image">
                                <a href="https://rach-gee.github.io/GeneratePassword_RG/" target="blank"><img
                                        className='opacity' src={generate}
                                        alt="preview of password generater webpage" /></a>
                                <span id='textcolor' className="card-title card-title1">Generate Password</span>
                            </div>
                            <div className="card-content" id="margin">
                                <a className="blackTxt" href="https://github.com/Rach-Gee/GeneratePassword_RG"
                                    target="blank">Generate a password - GitHub Link</a>
                            </div>
                        </div>
                    </div>
                    <div className="smallerCard col s6 m6">
                        <div className="card">
                            <div className="card-image">
                                <a href="https://am-i-a-joke-to-you.herokuapp.com/" target="blank"><img className='opacity'
                                        src={joke} alt="preview of am I a joke to you webpage" /></a>
                                <span id='textcolor' className="card-title card-title1">Am I a Joke to you</span>
                            </div>
                            <div className="card-content" id="margin">
                                <a className="blackTxt" href="https://github.com/Rach-Gee/Am-I-a-Joke-to-you" target="blank">Am I a Joke to You -
                                    GitHub Link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card">
                            <div className="card-image">
                                <a href="https://rach-gee.github.io/Weather_Dashboard_By_RG/" target="blank"><img
                                        className='opacity' src={weather}
                                        alt="preview of Weather Dashboard webpage"/></a>
                                <span id='textcolor' className="card-title">Weather dashboard</span>
                            </div>
                            <div className="card-content" id="margin">
                                <a className="blackTxt" href="https://github.com/Rach-Gee/Weather_Dashboard_By_RG"
                                    target="blank">Weather Dashboard - GitHub Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
  }