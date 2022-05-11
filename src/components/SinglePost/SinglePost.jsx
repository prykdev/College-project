import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
import "./SinglePost.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const url = typeof window !== 'undefined' ? window.location.origin : '';
  const PF = `${url}/images/`
  
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/api/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleUpdate = async()=>{

    console.log("update wala function")
    try {
      await axios.put(`/api/posts/${post._id}`, {
         username: user.customFieldInputValues.Username, title,desc,
      });

      setUpdateMode(false)
    } catch (err) {}
  }

  const handelDelete = async () => {
    try {
      await axios.delete(`/api/posts/${post._id}`, {
        data: { username: user.customFieldInputValues.Username },
      });
      window.location.replace("/");
    } catch (err) {}
  };
  console.log(post.username === user.customFieldInputValues.Username);
  console.log(`posts/${post._id}`);
  return (
    <div className="SinglePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt="" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            onChange={(e)=> setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {post.title}
            {post.username === user?.customFieldInputValues.Username && (
              <div className="singlepostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>

                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handelDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span>
            Author:
            <Link to={`/?user=${post.username}`} className="Link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea className="singlePostDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode&&(
        <button className="singlePostButton" onClick={handleUpdate}>Update</button>
        )}
      </div>
    </div>
  );
}
