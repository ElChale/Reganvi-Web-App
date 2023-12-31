import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { BASE_URL } from '../utils'
import { useNavigate } from 'react-router-dom'

function Header({ userInfo }) {
      const navigate = useNavigate()

      const homePage = () => {
            navigate('/')
      }
      const aboutPage = () => {
            navigate('/about')
      }
      const cotizationPage = () => {
            navigate('/cotization')
      }
      const userPage = () => {
            navigate('/user')
      }

      return (
            <Navbar expand="lg" className="bg-body-tertiary py-2 px-4 " style={{backgroundColor:"#442B48"}}>
                  <Container  className='px-4'>
                        <Navbar.Brand onClick={homePage}>
                              <img
                                    src="/Reganvi Logo.png"
                                    alt="Profile"
                                    className="w-20 h-auto p-2"
                              />
                        
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-black rounded-xl border-0 px-2 border-black'/>
                        <Navbar.Collapse id="basic-navbar-nav ">
                              <Nav className="w-full">
                                    <Nav.Link onClick={homePage} className='self-center text-white mx-2'>Inicio </Nav.Link>
                                    <Nav.Link onClick={aboutPage} className='self-center text-white mx-2'>Nosotros </Nav.Link>
                                    <Nav.Link onClick={cotizationPage} className='text-black w-auto px-3 text-center mx-4 rounded-3xl hover:bg-gray-400 self-center' style={{backgroundColor:"#C5DE82"}}>Cotiza tu pedido </Nav.Link>


                                    <div className='flex ml-lg-auto self-center'>
                                    {
                                          userInfo.user ? (
                                                <Nav.Link onClick={userPage} className='flex'>
                                                      <img
                                                            src={userInfo.user.profile_image}
                                                            alt="Profile"
                                                            className="w-10 h-auto rounded-full"
                                                      />
                                                </Nav.Link>
                                                
                                          ) : (
                                                <Nav.Link onClick={userPage}>
                                                      <img
                                                            // Antiguo
                                                            // src={BASE_URL + '/images/Profile.jpg'}
                                                            // Nuevo
                                                            src = "https://reganvi-web-app.s3.amazonaws.com/images/profile.jpg"
                                                            alt="Profile"
                                                            className="w-10 h-auto rounded-full"
                                                      />
                                                </Nav.Link>
                                          )
                                    }
                                    </div>
                              </Nav>
                        </Navbar.Collapse>
                        
                  </Container>
            </Navbar>
      )
}

export default Header