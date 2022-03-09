import styled from 'styled-components'

import Paragraph from '../paragraph'

const SParagraph = styled(Paragraph)`
    text-align: left;
    margin-bottom: 16px;

    &:last-child:before {
        content: 'Price:';
        margin-right: 8px;
        font-weight: bold;
        font-size: 16px;
    }
`

const CoffeeDescription = ({country, descr, price}) => {
    return (
        <>
            <SParagraph color="black" textAlign='left'><b>Country: </b>{country}</SParagraph>
            <SParagraph color="black" textAlign='left'><b>Description: </b>{descr}</SParagraph>
            <SParagraph color="black" textAlign='left' fontSize="24px">{price}$</SParagraph>
        </>
    )
}

export default CoffeeDescription