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



//?????? ????????????????????? ??????
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




//  1 ??????????????? ????????? div ?????? view??? ????????? => view ??? ???????????? ?????? ??????
// div ?????? view ??? ?????????

//2. text??? text??????????????? ?????????
//span p ?????? ??????????????? ??????

// 3 .view??? ?????????????????? ?????? ?????? ???????????? ????????? ???????????????
// border ????????? ?????? ????????????
