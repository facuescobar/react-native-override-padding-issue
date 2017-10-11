import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={ScreenStyles.screen}>
        <View style={ScreenStyles.content}>
          <Text>{'Hello there!'}</Text>
          <Text>{'Looks like "padding:50" is not working!'}</Text>
        </View>
      </View>
    );
  }
}

const LayoutStyles = {
  screen: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  }
}

const ScreenStyles = StyleSheet.create({
  screen: {
    ...LayoutStyles.screen,
    padding: 50, //PADDING NOT
    flex: 1,
    backgroundColor: 'coral',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cornflowerblue',
  }
});
