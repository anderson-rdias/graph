import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import Constants from 'expo-constants';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <ScrollView style = {styles.container}>
  <LineChart
    data={{
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
      datasets: [
        {
          data: [
            30,
            50,
            70,
            25,
            32,
            28
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    // yAxisLabel="$"
    // yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
      marginTop: 10,
      marginBottom: 70,
    }}
  />

  <PieChart style = {styles.container}
    data={exercicios}
    width={screenWidth}
    height={220}
    chartConfig={chartConfig}
    accessor={"qtd"}
    backgroundColor={"transparent"}
    paddingLeft={"15"}
    center={[10, 50]}
    absolute
  />
</ScrollView>

  );
}

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const exercicios = [
  {
    name: "Meditação",
    qtd: 30,
    color: "#ea5545",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Respiração",
    qtd: 50,
    color: "#474440",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Ioga",
    qtd: 15,
    color: "#009fff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "5 sentidos",
    qtd: 20,
    color: "yellow",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    
  },

  // titulo: {
  //   color: 'black',
  //   fontSize: 20,
  //   marginTop: 5,
  //   marginBottom: 5,
  //   paddingBottom: 0,
  //   textAlign: 'center',
  //   fontWeight: 'bold',
  // },
});
