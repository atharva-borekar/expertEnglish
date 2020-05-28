import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import {Header, Left, Right} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {WebView} from 'react-native-webview';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon
        name="contacts"
        size={24}
        style={{fontSize: 24, color: tintColor}}
      />
    ),
  };
  render() {
    return (
      <React.Fragment>
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

        <WebView
          source={{
            uri: 'https://expertenglish.co.in/index.php/company-profile/',
          }}
          style={{flex: 1, height: undefined}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
        />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
