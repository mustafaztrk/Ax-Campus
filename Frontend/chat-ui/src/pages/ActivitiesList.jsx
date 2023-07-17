import React, { useState, useEffect } from "react";
import { Icon, Label, Menu, Table, Card, Image,Header } from "semantic-ui-react";
import UserService from "../services/userService";
import ActivitiService from "../services/activitiService";
import { Link } from "react-router-dom";
export default function ActivitiList() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    let activitiService = new ActivitiService();
    activitiService
      .getActivities()
      .then((result) => setActivities(result.data.data));
  });

  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderildiğinde yapılacak işlemler
    console.log("Nere: ", destination);
    console.log("Gidiş Tarihi: ", departureDate);
    console.log("Dönüş Tarihi: ", returnDate);
    console.log("Kişi Sayısı: ", numberOfPeople);
  };

  const getImageSrc = (activityType) => {
    if (activityType == "1") {
      return "https://blog.obilet.com/wp-content/uploads/2018/05/kamp.jpg"; //kamp
    } else if (activityType == "2") {
      return "https://st4.depositphotos.com/1005632/27642/i/450/depositphotos_276424450-stock-photo-tourist-girl-taking-photos-and.jpg"; //tarihi
    } else if (activityType == "3") {
      return "https://www.konyaboks.com/wp-content/uploads/2019/10/images.jpg"; //spor
    } 
    else if (activityType == "4") {
      return "https://images.pexels.com/photos/11665480/pexels-photo-11665480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"; //masa oyunları
    } 
    else if (activityType == "5") {
      return "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"; //Ders
    } 
    else {
      return "https://img.piri.net/mnresize/900/-/resim/imagecrop/2020/09/18/01/06/resized_150ea-5be43b37travel01.jpg"; // Varsayılan resim
    }
  };
  return (
    <div style={{marginLeft:"300px",marginRight:"200px",marginBottom:"150px"}}>
      <h2></h2>
      <Header as='h2' icon='american sign language interpreting' content='Activity List'/>
      <Card.Group itemsPerRow="3">
      
        {activities.map((activiti) => (
          <Card>
            <Image
              src={getImageSrc(activiti.activityType)}
              wrapped
              ui={false}
            />
            <Card.Content>
            <Card.Header> <Link to={`/activities/${activiti.name}`}>  {activiti.name}</Link></Card.Header>
              <Card.Description>
                <span>
                  {activiti.strDate} - {activiti.endDate}{" "}
                </span>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                {activiti.quota}
              </a>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
