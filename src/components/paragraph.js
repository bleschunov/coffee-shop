import styled from 'styled-components'

const SP = styled.p`
    color: ${props => props.color};
    font-size: ${props => props.fontSize ? props.fontSize : '16px'}
`

const Paragraph = ({color, children, fontSize, className}) => {
    return (
        <SP color={color} fontSize={fontSize} className={className}>{children}</SP>
    )
}

export default Paragraph;