import React from 'react'
import { Card, Grid, Button, Menu, Container, Image } from 'semantic-ui-react'
import toast, { Toaster } from 'react-hot-toast'
import { episodeWithPageService } from '../src/api/apiservice'
import Grids from './component/Grid/Grids'
import NavbarTop from './component/Navbar/top/Navbar'
import NavbarBottom from './component/Navbar/bottom/Navbar'
import styleLink from './style/style'

const App = () => {
  var [charaters, setCharacters] = React.useState([])

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
      <NavbarTop setData={setPage} />

      <Container text style={{ marginTop: '7em' }}>
        <Grids charaters={charaters}></Grids>
      </Container>
      <NavbarBottom setPage={setPage} page={page}></NavbarBottom>
    </>
  )
}

export default App
