import React from 'react'
import Cards from '../Card/Cards'
import { Card, Grid, Image } from 'semantic-ui-react'
const Grids = ({ charaters }) => {
  return (
    <>
      {' '}
      <Grid columns={3}>
        {charaters.map((character) => (
          <Grid.Column key={character.id}>
            <Cards character={character}></Cards>
          </Grid.Column>
        ))}
      </Grid>
    </>
  )
}

export default Grids
