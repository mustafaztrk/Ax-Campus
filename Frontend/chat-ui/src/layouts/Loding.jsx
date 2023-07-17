import { red } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Link } from 'react-router-dom'
import { useHistory } from "react-router";
function PreLoader1() {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/");
      window.location.reload();
      localStorage.clear();
     
    }, 4000);
  }, []);
  const contentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };
  

  return (
    <div style={contentStyle}>
    {!done ? (
      <ReactLoading
        type={"bars"}
        color={"#07305b"}
        height={100}
        width={400}
      />
    ) : (
      <ul>
        <Link to={`/users`}>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </Link>
      </ul>
    )}
  </div>
  );
}

export default PreLoader1;