import styled from 'styled-components'

import { Container, Row, Col } from 'react-bootstrap'

import Background from '../background'
import Title from '../title'
import Card from '../card'

const SBackground = styled(Background)`
    padding: 80px 0 110px
`

const STitle = styled(Title)`
    margin-bottom: 40px;
`

const OurBest = ({data}) => {
    return (
        <SBackground img={data.img.wall} height="495">
          <Container className="text-center">
            <STitle as='h3' size="24" color="black">Our Best</STitle>
            <Row>
              <Col xs={4} className="d-flex justify-content-end">
                <Card 
                  img={data.img.coffee1}
                  alt="coffee"
                  title='Solimo Coffee Beans 2 kg'
                  price='10.99' />
              </Col>
              <Col xs={4} className="d-flex justify-content-center">
                <Card 
                  img={data.img.coffee2}
                  alt="coffee"
                  title='Presto Coffee Beans 1 kg'
                  price='15.99' />
              </Col>
              <Col xs={4} className="d-flex justify-content-start">
                <Card 
                  img={data.img.coffee3}
                  alt="coffee"
                  title='AROMISTICO Coffee 1 kg'
                  price='6.99' />
              </Col>
            </Row>
          </Container>
        </SBackground>
    )
}

export default OurBest