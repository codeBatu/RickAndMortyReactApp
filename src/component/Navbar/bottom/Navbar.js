import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
const NavbarBottom = ({ setPage, page }) => {
  return (
    <>
      {' '}
      <Menu fixed="bottom" text>
        <Container>
          <Menu.Item as="a" position="right" onClick={() => setPage(++page)}>
            OtherPages
          </Menu.Item>
        </Container>
      </Menu>
    </>
  )
}

export default NavbarBottom
