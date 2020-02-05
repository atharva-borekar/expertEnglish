import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import HomeScreen from './screens/HomeScreen';
import ReferralScreen from './screens/ReferralScreen';
import Sample from './sample';

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
          height: 100,
          width: 250,
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 5,
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
    Referral: ReferralScreen,
    'About Us': AboutScreen,
  },
  {contentComponent: CustomDrawerComponent},
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
