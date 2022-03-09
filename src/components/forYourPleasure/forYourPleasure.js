import styled from 'styled-components'
import { Container } from 'react-bootstrap'

import Cover from '../general/cover'
import About from '../general/about'
import Paragraph from '../paragraph'
import Icon from '../icon'
import Catalogue from '../catalogue'
import Footer from '../general/footer'

const SCatalogue = styled(Catalogue)`
    padding: 60px 0;
`

const SParagraph = styled(Paragraph)`
    margin-bottom: 30px;
`

const ForYourPleasure = ({data}) => {
    const filters = {
        search: '',
        country: []
    }

    const text = data.texts.aboutBeans
    const Text = (
        <>
            <SParagraph>{text[0]}</SParagraph>
            <SParagraph>{text[1]}</SParagraph>
            <Paragraph>{text[2]}</Paragraph>
        </>
    )

    return (
        <>
            <Cover img={data.img.cupOfCoffee} title="For Your Pleasure" navItems={data.navItems} />
            <About img={data.img.coffeeWithSteam} title="About Our Goods" Text={Text} />
            <Container className="text-center">
                <Icon name="line" color="black" className="text-center"/>
            </Container>
            <SCatalogue cards={data.cards} filters={filters} />
            <Footer navItems={data.navItems} />
        </>
    )
}

export default ForYourPleasure