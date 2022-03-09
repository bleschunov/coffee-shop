import Cover from '../general/cover'
import About from '../general/about'
import CoffeeDescription from './coffeeDescription'
import Footer from '../general/footer'

const CoffeePage = ({data}) => {
   
    const country = 'Brazil',
          descr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          price = '16.99',
          description = {
              country,
              descr,
              price
          },
          Text = (
              <CoffeeDescription {...description} />
          )

    return (
        <>
            <Cover img={data.img.cafe} title="Our Coffee" navItems={data.navItems} />
            <About img={data.img.promo} title="About it" Text={Text} />
            <Footer navItems={data.navItems} />
        </>
    )
}

export default CoffeePage