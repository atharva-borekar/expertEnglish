/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Speaking from './speaking_js/speaking';
import Reading from './reading_js/reading';
import Checkbox_comp from './components/checkbox';

AppRegistry.registerComponent(appName, () => Reading);
