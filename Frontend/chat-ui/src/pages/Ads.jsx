import React from "react";
import { Card, Icon, Image,Header } from "semantic-ui-react";
import no13 from "../images/ads/noonuc.jpg";
import apart from "../images/ads/apart2.jpg";
import kalemlik from "../images/ads/kalemlik.jpg";
import bus from "../images/ads/ads2.jpg";
import makarna from "../images/ads/makarna.jpg";
export default function Ads() {
  return (
    <div style={{ marginLeft: "300px", marginRight: "200px" }}>
          <Header as='h2' icon='settings' content='Paid Collaboration(Advertising)' />
      <Card.Group itemsPerRow="5">
        <Card>
          <Image src={no13} wrapped ui={false} />
          <Card.Content>
            <Card.Header>No:13</Card.Header>
            <Card.Meta>
              <span className="date">Code:KKuCeng</span>
            </Card.Meta>
            <Card.Description>
              <a>
                <Icon name="percent" />
                20 indirim
              </a>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              20
            </a>
          </Card.Content>
        </Card>

        <Card>
          <Image src={apart} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Gökçe Apart</Card.Header>
            <Card.Meta>
              <span className="date">Code:KKuCeng</span>
            </Card.Meta>
            <Card.Description>
              <a>
                <Icon name="percent" />
                10 indirim
              </a>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10
            </a>
          </Card.Content>
        </Card>



        <Card>
          <Image src={kalemlik} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Fark Kırtasiye</Card.Header>
            <Card.Meta>
              <span className="date">Code:KKuCeng</span>
            </Card.Meta>
            <Card.Description>
              <a>
                <Icon name="percent" />
                20 indirim
              </a>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10
            </a>
          </Card.Content>
        </Card>


        <Card>
          <Image src={bus} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Es Turizm</Card.Header>
            <Card.Meta>
              <span className="date">Code:KKuCeng</span>
            </Card.Meta>
            <Card.Description>
              <a>
                <Icon name="percent" />
                40 indirim
              </a>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              20
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image src={makarna} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Cap Cap Makarna</Card.Header>
            <Card.Meta>
              <span className="date">Code:KKuCeng</span>
            </Card.Meta>
            <Card.Description>
              <a>
                <Icon name="percent" />
                30 indirim
              </a>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10
            </a>
          </Card.Content>
        </Card>


      </Card.Group>
    </div>
  );
}
