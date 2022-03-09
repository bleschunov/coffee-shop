import { Component } from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

const SText = styled.div``

const SInput = styled.input`
    border: none;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, .25);
    border-radius: 4px;
    width: 180px;
    height: 30px;
    text-align: center;
    font-family: inherit;

`

const SButtonGroup = styled.div``

const SButton = styled.button`
    border: none;
    background-color: white;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, .25);
    border-radius: 4px;
    font-family: inherit;
    width: 75px;
    height: 30px;
    cursor: pointer;
    transition: all 200ms linear;
    
    &:hover {
        background-color: gray;
        color: white;
    }

    ${props => 
        props.active &&
        css`
            background-color: gray;
            color: white;
        `
    };
`

class Filters extends Component {
    constructor (props) {
        super(props)

        this.filterButtons = [
            {
                title: 'Brazil',
                isActive: false
            },
            {
                title: 'Kenya',
                isActive: false
            },
            {
                title: 'Columbia',
                isActive: false
            }
        ]
    }

    onChangeFilters = event => {
        const { onChangeFilters, filters } = this.props

        if ( event.target.dataset.country ) {
            this.switchFilterButton(event.target)
        }

        const newFilters = this.makeNewFilters(event.target, filters)
       
        onChangeFilters(newFilters);
    }

    switchFilterButton = eventTarget => {
        const { country } = eventTarget.dataset

        this.filterButtons.forEach(btn => {
            if (country === btn.title) {
                btn.isActive = !btn.isActive
            }
        })
    }
    
    makeNewFilters = (eventTarget, oldFilters) => {
        const { country, search } = eventTarget.dataset
        
        const newFilters = {
            search: '',
            country: []
        } 

        if (country) {
            this.filterButtons.forEach(button => {
                if (button.isActive) newFilters.country.push(button.title)
            })
            newFilters.search = oldFilters.search
        }

        if (search) {
            newFilters.search = eventTarget.value
            newFilters.country = oldFilters.country
        }

        return newFilters
    }

    render = () => {
        const { className } = this.props

        const filterButtons = this.filterButtons.map(({title, isActive}) => {
            return (
                <SButton key={title} active={isActive} data-country={title} className="me-1">{title}</SButton>
            )
        })

        return (
            <Container className={className}>
                <Row className="justify-content-center">
                    <Col xs={4} className="d-flex justify-content-center align-items-center">
                        <SText className="me-3">Looking for</SText>
                        <SInput data-search onChange={this.onChangeFilters} type="text" placeholder="start typing here..." autoComplete="off" />
                    </Col>
                    <Col xs={4} className="d-flex justify-content-center align-items-center">
                        <SText className="me-5">Or Filter</SText>
                        <SButtonGroup onClick={this.onChangeFilters}>
                           {filterButtons}
                        </SButtonGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Filters