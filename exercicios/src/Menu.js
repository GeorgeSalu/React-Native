import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'

const megasena = () => <MegaSena numeros={8} />
const parimpar = () => <ParImpar numero={20} />
const inverter = () => <Inverter texto="texto invertido"/>
const simples = () => <Simples texto="Teste" />
const contador = () => <Contador numeroInicial={100} />
const plataforma = () => <Plataformas />

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Simples">
        <Drawer.Screen name="Plataformas" component={plataforma } />
        <Drawer.Screen name="Contador" component={contador } />
        <Drawer.Screen name="Mega Sena" component={megasena } />
        <Drawer.Screen name="Par & Ímpar" component={parimpar } />
        <Drawer.Screen name="Inverter" component={inverter } />
        <Drawer.Screen name="Simples" component={simples } />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}