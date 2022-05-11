import { useState, useEffect } from "react";
import "./sidebar.css";
import axios from "axios";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/api/categories");
      // console.log(res.data)
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidbarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />

        <p>
        A full stack developer, self-led learner, team player, and a software enthusiast who loves
        to build products. Besides developing, I enjoy writing technical blogs. I am a person with
        clear goals to achieve and will work for them no matter what
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidbarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {
          cats.map((c) => {
            return <li className="sidebarListItem">{c.name}</li>;
          })
  
          }
          
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidbarTitle">Follow</span>

        <div className="sidebarSocials">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-discord"></i>
        </div>
      </div>
    </div>
  );
}
