import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, Card, Image, Icon } from "semantic-ui-react";

import user1 from "../images/users/usr1.png";
import user2 from "../images/users/usr2.png";
import user3 from "../images/users/usr3.png";
import user4 from "../images/users/usr4.png";

import UserService from "../services/userService";
export default function ProductDetail() {
  let { name } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    let userService = new UserService();
    userService.getByUserName(name).then((result) => setUser(result.data.data));
  }, []);

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
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              src={getImageSrc()}
              wrapped
            
              style={{ margin: "0 auto", display: "table" }}
            />
            <Card.Header  style={{ margin: "0 auto", display: "table" }}>{user.name} {user.lastName}</Card.Header>
            
            <Card.Description>
                <h3>
              Kırıkkale Üneversitesinde Öğrenci</h3>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <h3><a href={`mailto:${user.email}`}>
              <Icon name="mail" />
              {user.email}
            </a></h3>
            
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
