import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Auth from './screens/Auth'
import TaskList from './screens/TaskList'

const menuRoutes = {
  Today: {
    name: 'Today',
    screen: props => <TaskList title='Hoje' daysAhead={0} {...props} />,
    navigationOptions: {
      title: 'Hoje'
    }
  },
  Tomorrow: {
    name: 'Tomorrow',
    screen: props => <TaskList title='Amanha' daysAhead={1} {...props} />,
    navigationOptions: {
      title: 'Amanha'
    }
  },
  Week: {
    name: 'Week',
    screen: props => <TaskList title='Semana' daysAhead={7} {...props} />,
    navigationOptions: {
      title: 'Semana'
    }
  },
  Month: {
    name: 'Month',
    screen: props => <TaskList title='Mes' daysAhead={30} {...props} />,
    navigationOptions: {
      title: 'Mes'
    }
  }
}

const menuNavigator = createDrawerNavigator(menuRoutes, )

const mainRoutes = {
  Auth: {
    name: 'Auth',
    screen: Auth
  },
  Home: {
    name: "Home",
    screen: menuNavigator
  }
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
  initialRouteName: 'Auth'
})

export default createAppContainer(mainNavigator)