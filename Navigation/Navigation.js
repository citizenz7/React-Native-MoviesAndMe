import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import FilmDetail from '../Components/FilmDetail'

import Search from '../Components/Search'

const SearchStackNavigator = createStackNavigator({
  Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
})

export default createAppContainer(SearchStackNavigator)