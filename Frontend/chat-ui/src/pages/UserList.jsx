import React, { useState, useEffect } from "react";
import { Icon, Label, Menu, Table, Card, Image } from "semantic-ui-react";
import UserService from "../services/userService";
import { Link } from "react-router-dom";


import user1 from "../images/users/usr1.png";
import user2 from "../images/users/usr2.png";
import user3 from "../images/users/usr3.png";
import user4 from "../images/users/usr4.png";



export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("geldi");
    if (users.length > 0) return;

    console.log(users);
    let userService = new UserService();
    userService.getUsers().then((result) => setUsers(result.data.data));
  });

  const getImageSrc = () => {
    let tmp = Math.floor(Math.random() * 4) + 1;
    if (tmp == "1") {
      return user1; 
    } else if (tmp == "2") {
      return user2; 
    } else if (tmp == "3") {
      return user3; 
    } else if (tmp == "4") {
      return user4; 
    } else {
      return user1; 
    }
  };

  return (
    <div style={{ margin: "200px" }}>
    <Card.Group itemsPerRow="5">
      {users.map((user) => (
        <Card style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src={getImageSrc()} wrapped ui={false} style={{ objectFit: "contain", maxHeight: "100%", maxWidth: "100%" }} />
          </div>
          <Card.Content>
            <Card.Header>
              <Link to={`/users/${user.name}`}>{user.name}</Link>
            </Card.Header>
            <Card.Meta>
              <span>{user.lastName}</span>
            </Card.Meta>
            <Card.Description>Employee</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href={`mailto:${user.email}`}>
              <Icon name="mail" />
              {user.email}
            </a>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </div>
  
  );
}
