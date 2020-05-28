import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import HomeS from './screens/HomeS';
import AboutS from './screens/AboutS';
import {createAppContainer} from 'react-navigation';

export default class App1 extends React.Component {
  render() {
    const AppNavigator = createAppContainer(AppDrawerNavigator);
    return <AppNavigator />;
  }
}

const CustomDrawerComponent = props => (
  <SafeAreaView style={{flex: 1}}>
    <View style={{height: 150, backgroundColor: 'white'}}>
      <Image
        style={{
          flex: 1,
          width: undefined,
          height: undefined,
          resizeMode: 'contain',
        }}
        source={require('./images/Logo.jpg')}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: HomeS,
    About: AboutS,
  },
  {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: '#0080ff',
    },
  },
);

const styles = StyleSheet.create({});
