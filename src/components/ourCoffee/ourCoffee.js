import { Component } from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

import Cover from '../general/cover'
import About from '../general/about'
import AboutText from '../general/aboutText'
import Icon from '../icon'
import Filters from '../filters'
import Catalogue from '../catalogue'
import Footer from '../general/footer'

const SContainer = styled(Container)`
    margin-bottom: 60px;
`

const SCatalogue = styled(Catalogue)`
    padding: 60px 0;
`

class OurCoffee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filters: {
                search: '',
                country: []
            }
        }
    }

    onChangeFilters = filters => {
        this.setState({filters})
    }

    render() {
        const { data } = this.props
        const cover = data.img.cafe
        const aboutImg = data.img.womanWithCoffee
        const navItems = data.navItems
        const title = 'Our Coffee'
        const Text = <AboutText texts={data.texts.aboutBeans} />

        return (
            <>
                <Cover img={cover} navItems={navItems} title={title} />
                <About img={aboutImg} alt='woman with a cup of coffee' Text={Text} title="About Our Beans" />
                <SContainer className="text-center">
                    <Icon name="line" color="black" className="text-center"/>
                </SContainer>
                <Filters onChangeFilters={this.onChangeFilters} filters={this.state.filters} />
                <SCatalogue cards={data.cards} filters={this.state.filters} />
                <Footer navItems={data.navItems} />
            </>
        )
    }
}

export default OurCoffee
