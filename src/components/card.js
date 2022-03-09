import styled from 'styled-components'

import Title from './title'

const SWrapper = styled.div`
    box-shadow: ${props => props.isShadow ?
      '5px 5px 15px rgba(0, 0, 0, .25)' : 'none'};
    border-radius: 5px;
    padding: 15px 20px;
    background-color: white;
    width: 220px;
`

const SImgWrapper = styled.div`
    height: 134px;
    display: grid;
    place-items: center;
    margin-bottom: 10px;
`

const STitle = styled(Title)`
    margin-bottom: 15px;
`

const SText = styled.div`
    text-align: right;
`

const Card = ({img, alt, title, country, price, isShadow, className}) => {
    const Country = country ? (<SText>{country}</SText>) : null;

    return (
        <SWrapper isShadow={isShadow} className={className}>
            <SImgWrapper>
                <img src={img} alt={alt} />
            </SImgWrapper>
            <STitle size='14' as='h4' color='black'>{title}</STitle>
            {Country}
            <SText>{price}</SText>
        </SWrapper>
    )
}

export default Card;