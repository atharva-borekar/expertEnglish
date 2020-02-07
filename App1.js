import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import HomeScreen from './screens/HomeScreen';
import ReferralScreen from './screens/ReferralScreen';
import Sample from './sample';
import {Entypo} from 'react-native-vector-icons';
import Reading1 from './reading_js/reading1';
import Flashcard from './components/flashcard';

import AboutScreen from './screens/AboutScreen';

export default class App1 extends React.Component {
  render() {
    return (
      <Flashcard
        flash_text="Google Sheets: Create and edit spreadsheets online.
      Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
      You have received this email because someone shared a spreadsheet with you from Google Sheets.Google Sheets: Create and edit spreadsheets online.
      Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
      You have received this email because someone shared a spreadsheet with you from Google Sheets.
      Google Sheets: Create and edit spreadsheets online.
    Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
    You have received this email because someone shared a spreadsheet with you from Google Sheets.
    Google Sheets: Create and edit spreadsheets online.
    Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
    You have received this email because someone shared a spreadsheet with you from Google Sheets.
    Google Sheets: Create and edit spreadsheets online.
    Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
    You have received this email because someone shared a spreadsheet with you from Google Sheets.
    Google Sheets: Create and edit spreadsheets online.
    Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
    You have received this email because someone shared a spreadsheet with you from Google Sheets.
    Google Sheets: Create and edit spreadsheets online.
    Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
    You have received this email because someone shared a spreadsheet with you from Google Sheets.
    Google Sheets: Create and edit spreadsheets online.
    Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
    You have received this email because someone shared a spreadsheet with you from Google Sheets."
      />
    );
  }
}
