/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Speaking from './speaking_js/speaking';
import Reading from './reading_js/reading';
import Reading1 from './reading_js/reading1';
import Sample from './sample';
import Grid from './grid';
import GridBut from './gridbut';

AppRegistry.registerComponent(appName, () => Grid);
