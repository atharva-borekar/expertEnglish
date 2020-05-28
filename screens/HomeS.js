import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header, Left, Right} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HomeS extends React.Component {
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
            <Text style={{alignSelf: 'center', fontSize: 24}}>Menu</Text>
            <Icon
              name="menu"
              size={50}
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Right>
        </Header>
        <View style={{alignContent: 'center', justifyContent: 'center'}}>
          <Text>Home</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'flex-start',
  },
});
