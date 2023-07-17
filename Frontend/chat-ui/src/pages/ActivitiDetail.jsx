import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, Card, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import activitiService from "../services/activitiService";
import UserService from "../services/userService";
import { useHistory } from "react-router";
import Loading from "react-loading";
export default function ActivitiDetail() {
  let { name } = useParams();

  const [activiti, setActiviti] = useState({});

  const [users, setUsers] = useState([]);

  useEffect(() => {
    let userService = new UserService();
    userService.getUsers().then((result) => setUsers(result.data.data));
  });

  useEffect(() => {
    let activitiServices = new activitiService();
    activitiServices
      .getByActivityName(name)
      .then((result) => setActiviti(result.data.data));
    console.log(activiti);
    let userService = new UserService();
    userService.getUsers().then((result) => setUsers(result.data.data));
  }, []);

  const getImageSrc = (activityType) => {
    if (activityType == "1") {
      return "https://blog.obilet.com/wp-content/uploads/2018/05/kamp.jpg"; //kamp
    } else if (activityType == "2") {
      return "https://st4.depositphotos.com/1005632/27642/i/450/depositphotos_276424450-stock-photo-tourist-girl-taking-photos-and.jpg"; //tarihi
    } else if (activityType == "3") {
      return "https://www.konyaboks.com/wp-content/uploads/2019/10/images.jpg"; //spor
    } else {
      return "https://img.piri.net/mnresize/900/-/resim/imagecrop/2020/09/18/01/06/resized_150ea-5be43b37travel01.jpg"; // Varsayılan resim
    }
  };

  const getTxt = (activityType) => {
    if (activityType == "1") {
      return "Camp activities promote being immersed in nature, encouraging adventure and exploration. Camping reduces stress, provides relaxation, and offers a sense of tranquility in the natural environment. It also fosters learning new skills, teamwork, and independence. It supports physical and mental well-being, encouraging an active lifestyle in the outdoors. Camping provides an opportunity for self-discovery, forging new friendships, and creating unforgettable memories."; //kamp
    } else if (activityType == "2") {
      return "Historical tours provide cultural enrichment, fostering appreciation for the past and promoting a deeper understanding of different civilizations. They offer insights into heritage, shaping our identity, and inspire a sense of connection to history. Through historical tours, we gain knowledge, broaden perspectives, and cultivate a lifelong love for learning."; //tarihi
    } else if (activityType == "3") {
      return "Sports activities support health, increase physical fitness, improve energy and endurance. It encourages teamwork, leadership and discipline skills. It reduces stress, increases self-confidence and strengthens social bonds. Sports activities increase the quality of life and support happiness"; //spor
    } else {
      return "Participating in events offers new experiences, supports personal development and strengthens social bonds. It gives energy, increases motivation and offers the opportunity to meet new people. Participating in events colors life and helps to collect unforgettable memories."; // Varsayılan resim
    }
  };

  const getCreativeInfo = async (creativeId) => {
    if (!creativeId) {
      return "Kamil";
    }

    let userName = "";
    users.forEach((user) => {
      if (user.id === creativeId) {
        userName = user.name;
      }
    });

    return userName;
  };

  const history = useHistory();

  const Join = () => {
    console.log("katılındı");
    history.push("/");
    window.location.reload();
  };
  const HomePage = () => {
    history.push("/");
    window.location.reload();
  };

  return (
    <div style={{ marginLeft: "150px", marginRight: "150px" }}>
      <Card.Group>
        <Card fluid>
          <Image
            src={getImageSrc(activiti.activityType)}
            wrapped
            ui={false}
            style={{ margin: "0 auto", display: "table" }}
          />
          <Card.Content>
            <Card.Header>
              <h1>{activiti.name}</h1>
            </Card.Header>
            <Card.Description>
              <p>{getTxt(activiti.activityType)}</p>
            </Card.Description>
          </Card.Content>

          <Card.Content extra>
            <a>
              <p>Quota </p>
              <Icon name="user" size="big" color="red">
                {" "}
                <h2>{activiti.quota}</h2>
              </Icon>
            </a>
          </Card.Content>
          <Card.Content extra>
            <h3><a>Contact for detailed information:   </a>
              <a href={`mailto:${activiti.creativeId}`}>
                <Icon name="mail" />
                {activiti.creativeId}
              </a>
            </h3>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
