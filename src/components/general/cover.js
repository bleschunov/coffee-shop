import styled from 'styled-components'
import { Container } from 'react-bootstrap'

import Background from '../background'
import Nav from '../nav'
import Title from '../title'

const SBackground = styled(Background)`
    padding-top: 30px;
`

const SHeader = styled.header`
    margin-bottom: 60px;
`

const Cover = ({img, navItems, title}) => {

    return (
        <SBackground img={img} height="260">
          <SHeader>
            <Container>
              <Nav navItems={navItems} color="white" />
            </Container>
          </SHeader>
          <Container className="text-center">
            <Title as='h1' size="40" color="white">{title}</Title>
          </Container>
        </SBackground>
    )
}

export default Cover