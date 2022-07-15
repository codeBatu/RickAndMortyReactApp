import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
const NavbarTop = ({ setData }) => {
  return (
    <>
      {' '}
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

          <Menu.Item as="a" position="right" onClick={() => setData(1)}>
            Home
          </Menu.Item>
        </Container>
      </Menu>{' '}
    </>
  )
}

export default NavbarTop
