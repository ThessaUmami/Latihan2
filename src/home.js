import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, FlatList,  Button, Alert, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';

class NamaPengurusScreen extends React.Component {

  constructor()
    {
        super();
        this.state = {
          namapengurus: '',
          jabatan: '',
          ActivityIndicator_Loading: false,
        }
    }

    DeleteRecord = () =>{
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
          fetch('http://gusnando.com/mobile/thessa/deletepengurus.php', {
          headers: {
            method: 'POST',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            namapengurus : this.state.namapengurus
          })

          }).then((response) => response.json())
          .then((responseJson) => {
            this.setState({ ActivityIndicator_Loading : false });
            Alert.alert(responseJson);
          }).catch((error) => {
             console.error(error);
             this.setState({ ActivityIndicator_Loading : false });
          });
          });
      }

  submitData = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('https://gusnando.com/mobile/thessa/tambahpengurus.php',
            {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  namapengurus : this.state.namapengurus,
                  jabatan : this.state.jabatan,
                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                Alert.alert('SUCCES',responseJsonFromServer);
                this.setState(
                {
                  namapengurus: '',
                  jabatan: '',
                  ActivityIndicator_Loading : false
                });

            }).catch((error) =>
            {
                console.error(error);

                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }




  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('./alhikmah.png')}
          style={{marginBottom: 10}}
        />
        <Text>SELAMAT DATANG</Text>
        <Text>PENGURUS PMM AL-HIKMAH 2018/2019</Text>

          <TextInput
            style={{ height:40, width:200, textAlign:'center'}}
            placeholder="Masukkan Nama Pengurus"
            onChangeText={(namapengurus) => this.setState ({namapengurus})}
            value={this.state.namapengurus}
          />

          <TextInput
            style={{ height:40, width:200, textAlign:'center'}}
            placeholder="Masukkan Jabatan"
            onChangeText={(jabatan) => this.setState ({jabatan})}
            value={this.state.jabatan}
          />

          <Button onPress = {this.submitData}  title='SAVE' />
      </View>
    );
  }
}

class JabatanScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
    };
}

  componentDidMount()  {
      const url = 'http://www.gusnando.com/mobile/thessa/daftarpengurus.php';
       this.setState({ loading: true });
      fetch (url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("comp");
        console.log(responseJson);
        this.setState({
          data: responseJson,
          error: responseJson.error || null,
          loading: false,
          refreshing: false
        });
      }
    );
  }
  render() {
    return (
      <View style={styles.containerMain}>
      <View style={styles.Header}>
          <Text style={styles.TextHeader}>PENGURUS PMM AL-HIKMAH</Text>
      </View>
        <FlatList
          data={this.state.data}
          renderItem={({item}) =>
            <View style={styles.ListItem}>
              <Text style={styles.ListFirst}>{item.namapengurus}</Text>
              <Text style={styles.listItemText}>{item.jabatan}</Text>
            </View>
        }
        />
      </View>
    );
  }
}

export default TabNavigator({
  Home : { screen: NamaPengurusScreen },
  Detail: { screen: JabatanScreen },
});

const styles = StyleSheet.create({
  containerMain: {
    justifyContent: 'center',
  },
    Header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#3F51B5',
        marginBottom: 5,
    },

    TextHeader: {
        fontSize: 30,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    ListItem: {
        backgroundColor:'#5C6BC0',
        marginVertical: 5,
        flex: 1,
        paddingLeft: 10,
        marginHorizontal: 10,
        borderRadius: 6,
        paddingVertical: 10,
    },
    ListFirst: {
      fontSize: 20,
      color: '#FFFFFF'
    },
    listItemText:{
      marginVertical: 10,
      color: '#FFFFFF'
    }
  });
