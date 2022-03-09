import styled from 'styled-components'

const SBackground = styled.div`
    background-image: url(${props => props.img});
    height: ${props => props.height + 'px'};

`

const Background = ({img, height, children, className}) => {
    return (
        <SBackground img={img} height={height} className={className}>
            {children}
        </SBackground>
    )
}

export default Background;