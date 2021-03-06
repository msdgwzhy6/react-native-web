import React from 'react';
import { styles as helperStyles } from '../helpers';
import { StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';

export default class TouchableWrapper extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback importantForAccessibility="no" onPress={this._handlePress}>
        <View style={styles.container}>
          <TextInput multiline={false} ref={this._setRef} style={helperStyles.textinput} />
        </View>
      </TouchableWithoutFeedback>
    );
  }

  _handlePress = () => {
    if (this._input) {
      setTimeout(() => {
        this._input.focus();
      }, 0);
    }
  };

  _setRef = c => {
    this._input = c;
  };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 50
  }
});
