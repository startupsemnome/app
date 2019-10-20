import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { getResource } from "../../api/resourceApi"
import { CardList } from 'react-native-card-list';

const cards = [
  {
    id: "0",
    title: "Starry Night",
    picture: require('./../../static/google.jpg'),
    content: <Text>Starry Night</Text>
  },
  {
    id: "1",
    title: "Wheat Field",
    picture: require('./../../static/google.jpg'),
    content: <Text>Wheat Field with Cypresses</Text>
  },
  {
    id: "2",
    title: "Bedroom in Arles",
    picture: require('./../../static/google.jpg'),
    content: <Text>Bedroom in Arles</Text>
  }
]

export default class ResourceScreen extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      resources: []
    }
  }

  loadResource = async () => {
    
    this.setState({ resources: await getResource()});
  }
  componentDidMount = async () =>{
   this.loadResource()
  }

  render() {
    const { resources } = this.state;
    return (
      <View style={styles.container}>
        <CardList cards={resources} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

ResourceScreen.navigationOptions = {
  title: 'Recursos por Projeto',
  textAlign: 'center'
}