import { Component } from 'react'
import { v4 } from 'uuid'

import CoffeeHouse from '../coffeeHouse/coffeeHouse'
import OurCoffee from '../ourCoffee/ourCoffee'
import CoffeePage from '../coffeePage/coffeePage'
import ForYourPleasure from '../forYourPleasure/forYourPleasure'

import './app.css';

import '../../fonts/Merienda-Regular.ttf'

import coffeeAndMac from '../../img/coffeeAndMac.png'
import cafe from '../../img/cafe.png'
import cupOfCoffee from '../../img/cupOfCoffee.png'
import wall from '../../img/wall.png'
import coffee1 from '../../img/coffee1.png'
import coffee2 from '../../img/coffee2.png'
import coffee3 from '../../img/coffee3.png'
import womanWithCoffee from '../../img/womanWithCoffee.png'
import coffeeWithSteam from '../../img/coffeeWithSteam.png'
import promo from '../../img/promo.png'


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      filters: {
        search: '',
        country: 'all'
      }
    }
    this.data = {
      navItems: [
        {
          title: 'Coffee house',
          src: '#',
          key: v4()
        },
        {
          title: 'Our coffee',
          src: '#',
          key: v4()
        },
        {
          title: 'For your pleasure',
          src: '#',
          key: v4()
        }
      ],
      texts: {
        aboutUs: [
          `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
          Afraid at highly months do things on at. Situation recommend objection do intention
          so questions. As greatly removed calling pleased improve an. Last ask him cold feel
          met spot shy want. Children me laughing we prospect answered followed. At it went
          is song that held help face.`,
    
          `Now residence dashwoods she excellent you. Shade being under his bed her, Much
          read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
          horrible but confined day end marriage. Eagerness furniture set preserved far
          recommend. Did even but nor are most gave hope. Secure active living depend son
          repair day ladies now.`
        ],
        aboutBeans: [
          `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.`,
  
          `Afraid at highly months do things on at. Situation recommend objection do intention
          so questions. `,
  
          `As greatly removed calling pleased improve an. Last ask him cold feel
          met spot shy want. Children me laughing we prospect answered followed. At it went
          is song that held help face.`
        ]
      },
      img: {coffeeAndMac, cafe, cupOfCoffee, wall, coffee1, coffee2, coffee3, womanWithCoffee,
        coffeeWithSteam, promo},
      cards: [
        {
          img: coffee1,
          title: 'Solimo Coffee Beans 2 kg',
          country: 'Brazil',
          price: '10.99',
          key: v4()
        },
        {
          img: coffee2,
          title: 'Presto Coffee Beans 1 kg',
          country: 'Kenya',
          price: '15.99',
          key: v4()
        },
        {
          img: coffee3,
          title: 'AROMISTICO Coffee 1 kg',
          country: 'Columbia',
          price: '6.99',
          key: v4()
        },
        {
          img: coffee1,
          title: 'Solimo Coffee Beans 2 kg',
          country: 'Brazil',
          price: '10.99',
          key: v4()
        },
        {
          img: coffee1,
          title: 'Solimo Coffee Beans 2 kg',
          country: 'Brazil',
          price: '10.99',
          key: v4()
        },
        {
          img: coffee1,
          title: 'Solimo Coffee Beans 2 kg',
          country: 'Brazil',
          price: '10.99',
          key: v4()
        }
      ]
    }
  }

  onChangeFilters = filters => {
    this.setState({filters})
  }

  render = () => {
    return (
      <>
        
        <CoffeeHouse data={this.data} />
        <OurCoffee data={this.data} />
        <CoffeePage data={this.data} />
        <ForYourPleasure data={this.data} />
       
      </>
    )
  }
}

export default App;
