import { Container, Row, Col } from 'react-bootstrap'
import Card from './card'

const Catalogue = ({cards, filters, className}) => {
        const filteredCards = cards.filter(card => {
            const validateCountry = filters.country.length === 0 ? 
                true : filters.country.indexOf(card.country) !== -1

            const validateSearch = card.title.toLowerCase().includes(filters.search)

            if (validateSearch && validateCountry) {
                return true
            } else {
                return false
            }
        })

        const cardComponents = filteredCards.map((card, index) => {
            let classes = 'd-flex '
            if (index % 3 === 0) {
                classes += 'justify-content-end'
            } else if (index % 3 === 1) {
                classes += 'justify-content-center'
            } else if (index % 3 === 2) {
                classes += 'justify-content-start'
            }
    
            return (
                <Col key={card.key} className={classes}>
                    <Card
                        img={card.img}
                        alt="coffee"
                        title={card.title}
                        country={card.country}
                        price={card.price}
                        isShadow={true} />
                    </Col>
            )
        })

        return (
            <Container className={className}>
                <Row className="row-cols-3 gy-5">
                    {cardComponents}
                </Row>
            </Container>
        )
}

export default Catalogue