import React from 'react';

export default function ContactMe() {
  return (
    <div>
      <h2 className="title">Contact Me   <span id="phone">0401 455 252 </span></h2> 
        <div className="form-group">
              <form>
              <label> Name:<br /><input className="imput" type="text" name="name" /><br /></label><br />
              <label> E-mail:<br /><input className="imput" type="text" name="mail" /><br /></label><br />
              <label> Message:<br /><input className="imput" type="text" name="comment" size="50" /><br /></label><br />
                  <input className="btn" type="submit" value="Send" />
                  <input className="btn" type="reset" value="Reset" />
                  </form>
        </div>
    </div>
  );
}