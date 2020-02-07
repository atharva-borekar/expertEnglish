import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';

export default class Reading extends React.Component {
  text_state = {
    // Flashcard Text
    TextHolder:
      "graphic or web desighave scrorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, g out print, graphic ographic or web desighave scrorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, g out print, graphic ographic or web desighave scrorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, g out print, graphic ographic or web desighave scrorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, g out print, graphic o graphic or web desighave scrorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, g out print, graphic or web desighave scrorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes knog out print, graphic or web desighave scrorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes knog out print, graphic or web desighave scrorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes knog out print, graphic or web desighave scrorum for use in a type specimen book.Lorem ipsum, or lipsum is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
  };

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.instruction}>
          <Text style={styles.ins_text}>INSTRUCTIONS</Text>
        </View>
        <View style={styles.card}>
          <ScrollView>
            <Text style={{padding: '5%'}}>{this.text_state.TextHolder}</Text>
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.submit_button}>
          <Text style={styles.submit_button_text}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#ede6e3',
    height: '100%',
  },
  instruction: {marginTop: '5%'},
  ins_text: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    width: '95%',
    backgroundColor: '#ede6e9',
    borderRadius: 15,
    marginTop: '10%',
    height: '60%',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 20,
  },
  submit_button: {
    width: '50%',
    height: 45,
    borderRadius: 25,
    backgroundColor: '#8b0000',
    marginTop: '8%',
    marginLeft: '25%',
    marginRight: '25%',
    marginBottom: '3%',
  },
  submit_button_text: {
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 25,
  },
});
