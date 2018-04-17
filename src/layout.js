import React from 'react';
import { StyleSheet, text,view } from 'react-native';
export default class layout extends React.Component {
 render () {
  return(
  <view style={style.containerMain}>
   <view style={style.box1}>
    <text style={style.text}>Masukkan Nama Pengurus</text>
    <TextInput
      style={{ height:40, width:100, textAlign:'center'}}
      placeholder="Masukkan Nama Pengurus"
      onChangeText={(NamaPengurus) => this.setState ({NamaPengurus})}
      />
	</view>
	<view style={style.box2}>
    <TouchableOpacity style={style.button} onPress={() => this.props.navigation.navigate('NamaPengurus')}
      <Text style={styles.buttonText}>Input</Text>
    </TouchableOpacity>
	</view>
	<view style={style.box3}>
  <TouchableOpacity style={style.button} onPress={() => this.props.navigation.navigate('Jabatan')}
    <Text style={styles.buttonText}>Input</Text>
  </TouchableOpacity>
	</view>

  </view>
);
  }
  }
  const styles = StyleSheet.create({
    containerMain: {
    backgroundColor: 'blue'
    flex: 1,
    flexDirection: 'column'
  },
  box1:{
    flex; 1,
    backgroundColor: 'green',
  },
  box2:{
    flex; 1,
    backgroundColor: 'yellow'
  },
  box3:{
    flex; 1,
    backgroundColor: 'red'
  },
  text: {
    fontsize: 50
  },
}),
