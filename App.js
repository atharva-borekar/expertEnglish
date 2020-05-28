import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import HomeScreen from './screens/HomeScreen';
import {Entypo} from 'react-native-vector-icons';

import AboutScreen from './screens/AboutScreen';

export default class App extends React.Component {
  render() {
    const AppNavigator = createAppContainer(AppDrawerNavigator);
    return <AppNavigator />;
  }
}

const CustomDrawerComponent = props => (
  <SafeAreaView style={{flex: 1}}>
    <View style={{height: 150, backgroundColor: 'white'}}>
      <Image
        source={require('./images/Logo.jpg')}
        style={{
          height: undefined,
          width: undefined,
          flex: 1,
          resizeMode: 'contain',
        }}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    'About Us': AboutScreen,
  },
  {contentComponent: CustomDrawerComponent},
);

const styles = StyleSheet.create({});
