import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>PMM Al-Hikmah Undiksha</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: '#000080',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 5,
      position: 'relative',

    },
    textStyle: {
      fontSize: 18,
      color: '#fff',
      textAlign: 'center'
    }
}
export default Header;
