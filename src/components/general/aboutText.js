import styled from 'styled-components'

import Paragraph from '../paragraph'

const SParagraph = styled(Paragraph)`
    margin-bottom: 30px;
`

const AboutText = ({texts}) => {
    const Paragraphs = texts.map((text, index) => {
        if (index === text.length - 1) {
            return (
                <Paragraph key={index}>{text}</Paragraph>
            ) 
        } else {
            return (
                <SParagraph key={index}>{text}</SParagraph>
            )
        }
    })

    return (
        <>
           {Paragraphs}
        </>
    )
}

export default AboutText