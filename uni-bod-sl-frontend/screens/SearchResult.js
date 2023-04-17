import { Button, Image,StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import Logo from '../assets/OIP.jpg'
import AdvertisementContext from '../context/AdvertisementContext'
import MapView, { Marker } from 'react-native-maps';

const SearchResult = () => {

  const {AdList} = useContext(AdvertisementContext)
  const [index, setIndex] = useState(0)
  const [visibleAd, setVisibleAd] = useState(null)

  useEffect(() => {
    if(AdList == null || AdList == []){
      //
    }else{
      setVisibleAd(AdList[0]);
    }
  }, [])

  const onPrevious = () => {
    if(index > 0){
      var ni = index;
      setIndex(index - 1);
      setVisibleAd(AdList[ni - 1])
    }
  }

  const onNext = () => {
    if(AdList.length > index + 1){
      var ni = index;
      setIndex(index + 1);
      setVisibleAd(AdList[ni + 1]);
    }
  }
  

  return (
    visibleAd != null ? (<View>
      <View style={{
        display:'flex',
        padding:5,
        backgroundColor:'#b5c9eb',
        flexDirection:'row',
        alignItems:'center'
      }}>
        <Image style={styles.image} source={Logo} />
        <Text style={{
          margin:10,
          fontSize:23
        }}>SEARCH RESULTS</Text>
      </View>
      <View style={styles.buttoncontainer2}>
      <View>
      <View style={styles.buttoncontainer}>
        <TextInput value='12345'/>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>See Photos</Text>
        </TouchableOpacity>
        
        {/* Implement Google Maps Here! */}
      </View>
      
      </View>
      <View style={{
        width:"40%"
      }}>
        <Text>-Close to {visibleAd.uni}</Text>
        <Text>- Only for {visibleAd.selectedTenantType}</Text>
        <Text>{visibleAd.tenantNo} Beds are available</Text>
        <Text>-Rs {visibleAd.monthlyFee}/Month with {visibleAd.advance} Advance</Text>
        {
          visibleAd.withMeals ? (<Text>- With Breakfast</Text>):null
        }
        {
          visibleAd.withFurniture ? (<Text>- With Furniture</Text>):null
        }
        {
          visibleAd.withBills ? (<Text>- Bills Are included</Text>):null
        }
      </View>
      </View>
      <MapView style={styles.map} initialRegion={{
            latitude:7.8731,
            longitude:80.7718,
            latitudeDelta:5,
            longitudeDelta:5

          }}>
          <Marker coordinate={{
            latitude: parseFloat(visibleAd.latitude),
            longitude:parseFloat(visibleAd.longitude),
            latitudeDelta:0.01,
            longitudeDelta:0.01

          }} />
        </MapView>
      <Text>Contact : {visibleAd.contactNumber}</Text>
      <View>
        <View>
            {/* Stars Here */}

        </View>
      </View>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity onPress={()=>onPrevious()} style={styles.btn}>
          <Text style={styles.btnText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onNext()} style={styles.btn}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
      {/* <Button title='Previoud' />
      <Button  title='Next'/> */}
    </View>):(
      <View>
        <Text>No Advertisements Here!</Text>
      </View>
    )
  )
}

export default SearchResult

const styles = StyleSheet.create({
  image:{
    height:100,
    width:100
  },
  buttoncontainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  buttoncontainer2:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
  },
  btn:{
    backgroundColor:'#5555FF',
    padding:8,
    margin:8,
    width:100,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  btnText:{
    color:"#fff"
  },
  container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '55%',
    },
})