import Cover from './cover'
import About from './about'
import OurBest from './ourBest'
import Footer from '../general/footer'

const CoffeeHouse = ({data}) => {
    return (
       <>
        <Cover data={data} />
        <About data={data} />
        <OurBest data={data} />
        <Footer navItems={data.navItems} />
       </>
    )
}

export default CoffeeHouse