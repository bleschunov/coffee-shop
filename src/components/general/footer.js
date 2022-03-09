import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import Nav from '../nav'
import Icon from '../icon'

const SFooter = styled.footer`
    padding: 30px 0 20px
`

const SNav = styled(Nav)`
    margin-bottom: 20px;
`

const Footer = ({navItems}) => {
    return (
        <SFooter>
          <Container className="text-center">
            <Row className="justify-content-center">
              <Col xs={4} className="d-flex justify-content-center">
                <SNav navItems={navItems} color='black' />
              </Col>
            </Row>
            <Icon name='divider' color='black' />
          </Container>
        </SFooter>
    )
}

export default Footer