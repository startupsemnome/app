import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { PieChart } from 'react-native-svg-charts'

const data = [
  {
      key: 1,
      value: 50,
      name: "Projetos",
      svg: { fill: '#633ebb' },      
  },
  {
      key: 2,
      value: 50,
      name: "Recursos",
      svg: { fill: '#f2b360' }
  }
]

export default class Chart extends Component {

  render() {
    
    const Labels = ({ slices, height, width }) => {
      return slices.map((slice, index) => {
          const { labelCentroid, pieCentroid, data } = slice;
          return (
              <Text
                  key={index}
                  x={pieCentroid[ 0 ]}
                  y={pieCentroid[ 1 ]}
                  style={{ height: 130}}
                  fill={'white'}
                  textAnchor={'middle'}
                  alignmentBaseline={'top'}
                  fontSize={24}
                  stroke={'black'}
                  strokeWidth={0.2}
              >
                  {data.value} - {data.name}
              </Text>
          )
      })
    }
  
  
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
        <View style={{width: "50%"}}>
          <PieChart
            style={{ height: 150 }}
            outerRadius={'70%'}          
            innerRadius={10}
            data={data}
          >
          </PieChart>          
        </View>        
        <View style={{width: "50%", backgroundColor: "#ee23", justifyContent: "center", alignItems: "center", padding: 20, height: "100%"}}>
          <Text>Total de Projetos: 5</Text>
          <Text>Total de Recursos: 5</Text>
        </View>
      </View>
    )
  }
}
