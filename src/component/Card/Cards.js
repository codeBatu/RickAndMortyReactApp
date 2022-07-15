import React from 'react'
import { Card, Image } from 'semantic-ui-react'
const Cards = ({ character }) => {
  return (
    <>
      {' '}
      <Card>
        <Image src={character.image} />
        <Card.Content>
          <Card.Header>{character.name}</Card.Header>
          <Card.Meta textAlign="left">
            <span className="date">{character.species}</span>
          </Card.Meta>
          <Card.Meta textAlign="right">
            <span>{character.status}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          {' '}
          <Card.Description>
            {character.episode.length} episodes
          </Card.Description>
        </Card.Content>
      </Card>
    </>
  )
}

export default Cards
