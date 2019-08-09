import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import './whoarewe.scss';

const WhoAreWe = () => (
  <div className="whoarewe">
    <Card.Group>
      <Card>
        <Image src="src/img/johann.jpg" wrapped ui={false} />
        <Card.Content>
          <Card.Header>Johann</Card.Header>
          <Card.Meta>
            <span className='date'>Product Owner</span>
          </Card.Meta>
          <Card.Description>
            Le meilleur Dev Front du monde
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://www.linkedin.com/in/johann-raoul/">
            Linkedin
          </a>
        </Card.Content>
      </Card>
      <Card>
        <Image src="src/img/maxime.png" wrapped ui={false} />
        <Card.Content>
          <Card.Header>Maxime</Card.Header>
          <Card.Meta>
            <span className='date'>Product Manager / Lead Dev Front</span>
          </Card.Meta>
          <Card.Description>
            Il essaye de toucher la latte
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://www.linkedin.com/in/maximerigaud-dev/">
            Linkedin
          </a>
        </Card.Content>
      </Card>
      <Card>
        <Image src="src/img/camille.png" wrapped ui={false} />
        <Card.Content>
          <Card.Header>Camille</Card.Header>
          <Card.Meta>
            <span className='date'>Git Master / Beer Master</span>
          </Card.Meta>
          <Card.Description>
            Il a un prénom de fille mais on l'aime bien
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://www.linkedin.com/in/camille-badique/">
            Linkedin
          </a>
        </Card.Content>
      </Card>
      <Card>
        <Image srcset="https://imgur.com/nucMwFK" wrapped ui={false} />
        <Card.Content>
          <Card.Header>Alexandre</Card.Header>
          <Card.Meta>
            <span className='date'>Lead Dev Back</span>
          </Card.Meta>
          <Card.Description>
            Un peu différent, mais on l'aime bien aussi
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="#">
            Linkedin
          </a>
        </Card.Content>
      </Card>
    </Card.Group>
  </div>
);

export default WhoAreWe;
