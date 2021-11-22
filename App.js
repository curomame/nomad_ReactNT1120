import * as Location from "expo-location"
import React from 'react';
import { useState,useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import { Fontisto } from '@expo/vector-icons'



const {width:SCREEN_WIDTH} = Dimensions.get("window");
// same to const SCREEN_WIDTH = Dimensions.get("window").width;

const API_KEY = "32d86a6f1473247c8b4fd7aca2ab71a2"

const icons = {
  Clouds:"cloudy",
  Clear:"day-sunny",
  Atmosphere:"",
  Snow:"snow",
  Rains:"rains",
  Drizzle:"rain",
  Thunderstorm:"lightning",
};


export default function App() {
  const [city, setCity] = useState("Loading....");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeather = async() => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    
    if(!granted){
      setOk(false);
    }

    
    const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy:5});

    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude},
      { useGoogleMaps : false}
      );
    setCity(location[0].city);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`)
      const json = await response.json();
  setDays(json.daily);
  };

  useEffect(() =>{
  getWeather();
},[]);



  return (
  
      <View style={styles.contaier}>
        <View style={styles.city}>
          <Text style={styles.cityName}> {city} </Text>
        </View>

        <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.weather}>

            {days.length === 0 ? 
            <View style={styles.day}><ActivityIndicator  style={{...styles.day, alignItems:"center"}}/></View> : 
            
            (days.map((day,index) => 
              <View key={index} style={styles.day}>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
                <Fontisto name={icons[day.weather[0].main]} size={68} color="white" />
                <Text style={styles.temp}>{parseFloat(day.temp.day).toFixed(1)}</Text>
                </View>
                <Text style={styles.desc}>{day.weather[0].main}</Text>
                <Text style={styles.tinyText}>{day.weather[0].description}</Text>
              </View>

            ))
            }


            </ScrollView>
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
    alignItems:"flex-start"
},
cityName : {
  color:"white",
  fontSize:50,
  fontWeight:"500"
},
  weather : {
  
  },
  day:{
    color:"white",
    
    marginTop:10,
    width:SCREEN_WIDTH,
    alignItems:"flex-end",
  },
  temp:{
    color:"white",
    marginTop:20,
    fontSize:100,
    marginRight:10

  },
  desc:{
    color:"white",
    marginTop:-20,
    fontSize:40,
    marginRight:10

  },
  tinyText:{
    color:"white",
    fontSize:20,
    marginRight:10
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
