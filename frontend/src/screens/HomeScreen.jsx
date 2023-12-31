import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { BASE_URL } from '../utils'
import { useNavigate } from 'react-router-dom'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';


function HomeScreen() {
      const navigate = useNavigate();

      const handleButtonClick = () => {
            navigate('/cotization');
      };


      const firstBanner = {
            // Antiguo
            // backgroundImage: `url(${BASE_URL + '/images/RecyclingFirstBanner1.png'})`, 
            // Nuevp
            backgroundImage: `url("https://reganvi-web-app.s3.amazonaws.com/images/RecyclingFirstBanner1.png")`,
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'center', 
            backgroundColor: '#f0f0f0', 
      }; //style={firstBanner}

      const secondBanner = {
            // Antiguo
            // backgroundImage: `url(${BASE_URL + '/images/RecyclingFirstBanner.png'})`, 
            // Nuevo
            backgroundImage: `url("https://reganvi-web-app.s3.amazonaws.com/images/RecyclingFirstBanner.png")`,
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'center', 
            backgroundColor: '#f0f0f0', 
      }; //style={secondBanner}
      
      const companyLogos = [
            {
                  // Antiguo
                  // image: `${BASE_URL + "/images/logo1sanmiguelindustrias.png"}`
                  // Nuevo
                  image: "https://reganvi-web-app.s3.amazonaws.com/images/logo1sanmiguelindustrias.png"
            },
            {
                  // Antiguo
                  // image: `${BASE_URL + "/images/logo2pamolsa.png"}`
                  // Nuevo
                  image: "https://reganvi-web-app.s3.amazonaws.com/images/logo2pamolsa.png"
            },
            {
                  // Antiguo
                  // image: `${BASE_URL + "/images/logo3solpack.png"}`
                  // Nuevo
                  image: "https://reganvi-web-app.s3.amazonaws.com/images/logo3solpack.png"
            },
            {
                  // Antiguo
                  // image: `${BASE_URL + "/images/logo4papelera.png"}`
                  // Nuevo
                  image: "https://reganvi-web-app.s3.amazonaws.com/images/logo4papelera.png"
            },
            {
                  // Antiguo
                  // image: `${BASE_URL + "/images/logo5g&f.png"}`
                  // Nuevo
                  image: "https://reganvi-web-app.s3.amazonaws.com/images/logo5g&f.png"
            },
      ]
      const mainProducts = [
            {
                  title: "Botellas de plástico",
                  description:"¡Descubre la belleza de la sostenibilidad con nuestras botellas de plástico recicladas! Cada botella ha pasado por un proceso de transformación que no solo contribuye al cuidado del medio ambiente, sino que también te ofrece un producto de alta calidad. Nuestro compromiso con la reutilización del plástico no solo reduce la cantidad de residuos, sino que también ofrece una opción ecológica y elegante para tus necesidades diarias.",
                  // Antiguo
                  // image: `${BASE_URL + "/images/1botellas.png"}`
                  // Nuevo
                  image: "https://reganvi-web-app.s3.amazonaws.com/images/1botellas.png"
            },
            {
                  title: "Cartón",
                  description:"Abraza la practicidad y la consciencia ecológica con nuestro cartón reciclado. Cada caja cuenta una historia de sostenibilidad, transformando materiales usados en soluciones innovadoras. Estas cajas recicladas no solo son resistentes y versátiles, sino que también representan un paso hacia un futuro más verde. Úsalas para envolver tus regalos o almacenar tus pertenencias con estilo, sabiendo que estás haciendo una elección responsable.",
                  // Antiguo
                  // image: `${BASE_URL + "/images/2carton.png"}`
                  // Nuevo
                  image: "https://reganvi-web-app.s3.amazonaws.com/images/2carton.png"
            },
            {
                  title: "Aluminio",
                  description:"Nuestro aluminio reciclado redefine la durabilidad y la elegancia. Proveniente de fuentes recicladas, este material ha sido cuidadosamente transformado para brindarte productos que destacan por su resistencia y ligereza. Desde envases hasta utensilios de cocina, cada artículo de aluminio reciclado es una declaración de compromiso con la preservación del planeta. Únete a nosotros en este viaje hacia un estilo de vida más sostenible sin sacrificar calidad ni estilo.",
                  // Antiguo
                  // image: `${BASE_URL + "/images/3aluminio.png"}`
                  // Nuevo
                  image: "https://reganvi-web-app.s3.amazonaws.com/images/3aluminio.png"
            },
            {
                  title: "Chatarra",
                  description:"La chatarra reciclada no solo es un conjunto de metales y materiales diversos, sino una oportunidad para la creatividad y la innovación. Cada pieza cuenta una historia única de reutilización y transformación. Desde esculturas hasta elementos decorativos, nuestra chatarra reciclada ofrece una segunda vida a materiales previamente descartados. Explora la belleza de la imperfección y la originalidad en cada pieza, contribuyendo al ciclo continuo de reciclaje y reinvención.",
                  // Antiguo
                  // image: `${BASE_URL + "/images/4chatarra.png"}`
                  // Nuevo
                  image: "https://reganvi-web-app.s3.amazonaws.com/images/4chatarra.png"
            },
      ]

      return (
            <> 
            <div className="w-full" style={firstBanner}>
                  {/* First Row */}
                  <div className='flex bg-gray-800 bg-opacity-50'>
                        <Container className='py-40 text-white' >                  
                              <h1 style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }} className="mt-3 p-3">Encuentra los mejores proveedores locales de materiales reciclados</h1>
                              <p style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }} className='px-3'>Cotiza tu plan con nosotros y recibe asistencia de Inteligencia Artificial</p>
                              <OverlayTrigger
                                    key="bottom"
                                    placement="bottom"
                                    overlay={<Tooltip id="tooltip-bottom">Ingresa los productos y cantidades que deseas para poder asesorarte.</Tooltip>}
                              >
                                    <button onClick={handleButtonClick} className="text-black w-48 m-3 p-3 bg-green-600 rounded-xl hover:bg-gray-400" style={{backgroundColor:"#C5DE82"}}>
                                          Cotiza tu pedido
                                    </button>
                              </OverlayTrigger>
                        </Container>
                  </div>
            </div>
            <Container className="my-20">
                  {/* Company Logos */}
                  <Row className="mb-4 align-center justify-center">
                        {
                              companyLogos.map((company, index) => (
                                    <Col xs={4} sm={2} className='p-4'>
                                          <img src={company.image}/>
                                    </Col>
                              ))
                        }
                  </Row>
            </Container>

            <Container className="my-5">
                  {/* Recyclable Products */}
                  <Row className="mb-4">
                        <Col>
                              <h2>Productos Principales</h2>
                        </Col>
                  </Row>
                  <Row className=''>
                        {
                              mainProducts.map((product, index) => (
                                    
                                    <Col md={6} className='my-4'>
                                          <Card>
                                                <Card.Img variant="top" src={product.image} />
                                                <Card.Body>
                                                      <Card.Title>{product.title}</Card.Title>
                                                      <Card.Text>
                                                            {product.description}
                                                      </Card.Text>
                                                      <OverlayTrigger
                                                            key="bottom"
                                                            placement="bottom"
                                                            overlay={<Tooltip id="tooltip-bottom">Ingresa los productos y cantidades que deseas para poder asesorarte.</Tooltip>}
                                                      >
                                                            <button onClick={handleButtonClick} className="text-white w-48 mx-3 p-3 bg-green-600 rounded-xl hover:bg-gray-400" style={{backgroundColor:"#442B48"}}>
                                                                  Cotiza tu plan
                                                            </button>
                                                      </OverlayTrigger>
                                                </Card.Body>
                                          </Card>             
                                    </Col>
                                    
                              ))
                        }
                  </Row>
            </Container>

            <div className='w-full' style={secondBanner}>
                  <div className='flex bg-gray-800 bg-opacity-50'>
                        <Container className="py-40">
                              {/* Banner */}
                  
                              <h1 style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }} className='mb-8 text-white'>Tu eliges la locación. Nosotros nos encargamos del resto.</h1>
                              <Row className='my-2'>
                                    <Col md={4}>
                                          <Card className='w-full border-0 text-white' style={{backgroundColor:"#442B48"}}>
                                                <Card.Body>
                                                      <Card.Title>Contactanos:</Card.Title>
                                                      <Card.Text>
                                                            +51 994 898 110
                                                      </Card.Text>
                                                </Card.Body>
                                          </Card>     
                                    </Col>
                              </Row>
                              <Row className='my-2'>
                                    <Col md={4}>
                                          <Card className='w-full border-0' style={{backgroundColor:"#C5DE82"}}>
                                                <Card.Body>
                                                      <Card.Title>Correo electrónico:</Card.Title>
                                                      <Card.Text>
                                                            reganvi.pe@gmail.com
                                                      </Card.Text>
                                                </Card.Body>
                                          </Card>   
                                    </Col>
                              </Row>  
                        
                        </Container>
                  </div>
            </div>
            
      </>
      );
}

export default HomeScreen;
