/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ListItem from './screens/list_item';
import List from './screens/list';

AppRegistry.registerComponent(appName, () => List);
