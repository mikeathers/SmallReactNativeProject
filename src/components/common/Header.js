import React from "react"
import { View, StyleSheet, Text } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>

    </View>

  )
}


const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 45,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: .5 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    marginBottom: 10,

  },
  textStyle: {
    fontSize: 20
  }
}

export { Header }