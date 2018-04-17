import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Footer = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>Copyright@thessaumami98</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: '#000080',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingBottom: 10,
      position: 'relative',
    },
    textStyle: {
      fontSize: 13,
      color: '#fff',
      textAlign: 'center'
    }
}
export default Footer;
