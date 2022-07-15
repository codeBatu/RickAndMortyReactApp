import React from 'react'
import { Card, Grid, Button, Menu, Container, Image } from 'semantic-ui-react'
import toast, { Toaster } from 'react-hot-toast'
import { episodeWithPageService } from '../src/api/apiservice'

const App = () => {
  var [charaters, setCharacters] = React.useState([])
  var [characterImage, setCharacterImage] = React.useState('')
  var [page, setPage] = React.useState(1)

  React.useEffect(() => {
    toast.success('İf you see other characters, please click on Other Pages!')
    episodeWithPageService(page)
      .then((data) => {
        setCharacters(data.results)
        toast.success('Successfully loaded data')
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }, [page])

  return (
    <>
      <Toaster position="top-right" />
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item
            as="a"
            position="left"
            href="https://rickandmortyapi.com/"
            target="_blank"
          >
            Rick and Morty
          </Menu.Item>

          <Menu.Item as="a" position="right" onClick={() => setPage(1)}>
            Home
          </Menu.Item>
        </Container>
      </Menu>{' '}
      <Menu fixed="bottom" text>
        <Container>
          <Menu.Item as="a" position="right" onClick={() => setPage(++page)}>
            OtherPages
          </Menu.Item>
        </Container>
      </Menu>
      <Container text style={{ marginTop: '7em' }}>
        <Grid columns={3}>
          {charaters.map((character) => (
            <Grid.Column key={character.id}>
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
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default App
