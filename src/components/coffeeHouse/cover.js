import styled from 'styled-components'

import { Container } from 'react-bootstrap'

import Background from '../background'
import Nav from '../nav'
import Title from '../title'
import Icon from '../icon'
import Button from '../button'

const SBackground = styled(Background)`
    padding-top: 30px;
`

const SHeader = styled.header`
    margin-bottom: 110px;
`

const STitle = styled(Title)`
    margin-bottom: 20px;
`

const SIcon = styled(Icon)`
    margin-bottom: 35px;
`

const Cover = ({data}) => {
    return (
        <SBackground img={data.img.coffeeAndMac} height="600">
          <SHeader>
            <Container>
              <Nav navItems={data.navItems} color="white" />
            </Container>
          </SHeader>
          <Container className="text-center">
            <STitle as='h1' size="40" color="white">Everything You Love About Coffee</STitle>
            <SIcon name="divider" color="white" />
            <STitle as='h2' size="24" color="white">We make every day full of energy and taste</STitle>
            <STitle as='h2' size="24" color="white">Want to try our beans?</STitle> 
            <Button>More</Button>       
          </Container>
        </SBackground>
    )
}

export default Cover