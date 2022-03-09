import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import Title from '../title'
import Icon from '../icon'
import Paragraph from '../paragraph'

const SContainer = styled(Container)`
    padding: 80px 0 100px
`

const STitle = styled(Title)`
    margin-bottom: 20px;
`

const SIcon = styled(Icon)`
    margin-bottom: 40px;
`

const SParagraph = styled(Paragraph)`
    margin-bottom: 30px;
`

const About = ({data}) => {
    return (
        <SContainer className="text-center">
            <STitle as="h3" size="24">About Us</STitle>
            <SIcon name="divider" color="black" />
            <Row className="justify-content-center">
                <Col xs={6}>
                    <SParagraph color="black">
                        {data.texts.aboutUs[0]}
                    </SParagraph>
                    <Paragraph color="black">
                        {data.texts.aboutUs[1]}
                    </Paragraph>
                </Col>
            </Row>
        </SContainer>
    )
}

export default About