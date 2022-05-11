import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <br></br> <br></br> <br></br>
      <h1 className="head">Contact Our Team</h1>
      <div className="main">
      
        <div className="left">
         
          <p>
            <table className="table">
              <tr>
                ✓ One flexible tool for your entire company to share knowledge,
                ship projects, and collaborate.
              </tr>
              <tr>
                ✓ Enterprise features to securely manage user access and
                security.
              </tr>
              <tr>
                ✓ Dedicated support to work with you on your setup and help you
                build the best plan for your company.
              </tr>
            </table>

            <br />
            <span> Looking for support? Visit help support </span>
            <br />
          </p>
        </div>
        <div className="right">
         <div className="contact-form">
           <div>
             <label>Name</label>
             <input></input>
           </div>

           <div>
             <label>Email</label>
             <input></input>
           </div>

           <div>
             <label>Contact</label>
             <input></input>
           </div>

           <div>
             <label>Comment</label>
             <input></input>
           </div>

           <button className="button" type="submit">Submit</button>
         </div>
        </div>
      </div>
    </>
  );
}
