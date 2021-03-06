import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import Sample from '../sample';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Grid from '../grid';
import {Header, Left, Right} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon
        name="home-outline"
        size={24}
        stye={{fontSize: 24, color: tintColor}}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Right>
            <Text style={{alignSelf: 'center', fontSize: 24, color: '#ffffff'}}>
              Menu
            </Text>
            <Icon
              name="menu"
              size={50}
              color={'#ffffff'}
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Right>
        </Header>
        <View style={{alignContent: 'center', justifyContent: 'center'}}>
          <Grid />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({container: {}});
