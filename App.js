import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    
      <View style={styles.contaier}>
        <View style={styles.city}>
          <Text style={styles.cityName}> BUSAN </Text>
        </View>

        <View style={styles.weather}>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.desc} >SUNNY</Text>
          </View>
        </View>
      </View>

  );
}

const styles = StyleSheet.create({
  contaier : {
    flex : 1,
    backgroundColor:"pink"
  },
  city : {
    flex:1,
    justifyContent: "center",
    alignItems:"center"
},
cityName : {
  fontSize:68,
  fontWeight:"500"
},
  weather : {
    flex:3,
    backgroundColor:"skyblue"
  },
  day:{
    flex:1,
    alignItems:"center",
    backgroundColor:"teal"
  },
  temp:{
    marginTop:20,
    fontSize:188
  },
  desc:{
    marginTop:-30,
    fontSize:25
  }
})


//좋은 자동완성기능을 제공
// const styles = StyleSheet.create({
//   container: {mmmmm
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text : {
//     fontSize: 28,
//     color:"green",
//   }
// });




//  1 웹사이트가 아니라 div 대신 view를 사용함 => view 는 콘테이너 같은 거임
// div 대신 view 로 임포트

//2. text는 text컴포넌트에 들억마
//span p 태그 이런것들이 없다

// 3 .view는 스타ㅣㅇㄹ이 있음 일부 스타일은 사용이 불가능하다
// border 같은거 사용 불가능함
