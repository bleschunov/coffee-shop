import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import Img from '../img'
import Title from '../title'
import Icon from '../icon'

const SContainer = styled(Container)`
    padding: 70px 0 60px;
`

const STitle = styled(Title)`
    margin-bottom: 20px;
`

const SIcon = styled(Icon)`
    margin-bottom: 25px;
`

const About = ({img, alt, title, Text}) => {
    const ImgComponent = img ? <Img src={img} alt={alt} /> : null

    

    return (
        <SContainer>
            <Row className="justify-content-center">
                <Col xs={4} className="text-center">
                    {ImgComponent}
                </Col>
                <Col xs={4} className="text-center">
                    <STitle as="h3" size="24">{title}</STitle>
                    <SIcon name="divider" color="black" />
                    {Text}
                </Col>
            </Row>
        </SContainer>
    )
}

export default About