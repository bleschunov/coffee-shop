import styled from 'styled-components'

const _Title = ({size, as, color, children, className}) => {
    if (as === 'h1') {
        return (
            <h1 size={size} color={color} className={className}>{children}</h1>
        )
    } else if (as === 'h2') {
        return (
            <h2 size={size} color={color} className={className}>{children}</h2>
        )
    } else if (as === 'h3') {
        return (
            <h3 size={size} color={color} className={className}>{children}</h3>
        )
    } else if (as === 'h4') {
        return (
            <h4 size={size} color={color} className={className}>{children}</h4>
        )
    } else if (as === 'h5') {
        return (
            <h5 size={size} color={color} className={className}>{children}</h5>
        )
    } else if (as === 'h6') {
        return (
            <h6 size={size} color={color} className={className}>{children}</h6>
        )
    }
}

const Title = styled(_Title)`
    color: ${props => props.color};
    font-size: ${props => props.size + 'px'};
`

export default Title;