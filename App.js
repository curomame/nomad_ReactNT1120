import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I created My APP!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


//좋은 자동완성기능을 제공
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    fontSize: 28,
    color:"green",
  }
});

//  1 웹사이트가 아니라 div 대신 view를 사용함 => view 는 콘테이너 같은 거임
// div 대신 view 로 임포트

//2. text는 text컴포넌트에 들억마
//span p 태그 이런것들이 없다

// 3 .view는 스타ㅣㅇㄹ이 있음 일부 스타일은 사용이 불가능하다
// border 같은거 사용 불가능함