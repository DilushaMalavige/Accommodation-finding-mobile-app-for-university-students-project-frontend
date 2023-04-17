import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import Checkbox from 'expo-checkbox'
import { Picker } from '@react-native-picker/picker';
import Logo from '../assets/OIP.jpg'
import AdvertisementContext from '../context/AdvertisementContext'
import { GetSelectedAds } from '../Connection'
import MapView from 'react-native-maps';

const HomeScreen = ({ navigation }) => {

    const [uniList, setUniList] = useState(["University", "University of Colombo", "University of Peradeniya", "University of Ruhuna"])
    const [tenantTypes, setTenantTypes] = useState(["Gender", "girl", "boy"]);
    const [TenantNo, setTenantNo] = useState([1, 2, 3, 4, 5])
    const [minMoFee, setMinMoFee] = useState([100, 200, 300])
    const [maxMoFee, setMaxMoFee] = useState([1000, 2000, 300])
    const { setAdList } = useContext(AdvertisementContext)
    const [selectedUni, setSelectedUni] = useState("");
    const [selectedTenantType, setSelectedTenantType] = useState("");
    const [selectedTenantNo, setSelectedTenantNo] = useState(0);
    const [selectedMoMin, setSelectedMoMin] = useState(0)
    const [selectedMoMax, setSelectedMoMax] = useState(0)
    const [withMealse, setWithMealse] = useState(false)
    const [furniture, setFurniture] = useState(false)
    const [bills, setBills] = useState(false)

    useEffect(() => {
    }, [])


    const SearchClick = async () => {
        //search clicked!
        var filter = {
            selectedUni: selectedUni,
            selectedTenantType: selectedTenantType,
            tenantNo: selectedTenantNo,
            withMeals: withMealse,
            withFurniture: furniture,
            withBills: bills,
            feesMin: selectedMoMin,
            feesMax: selectedMoMax
        }
        setAdList(await GetSelectedAds(filter));
        navigation.navigate("SearchResult")
    }

    const postAdClick = () => {
        navigation.navigate("CreatePost")
    }

    return (
        <View>
            {/* Logo goes here */}


            <View style={styles.centered}>
                <Image style={styles.image} source={Logo} />
            </View>
            <View style={{
                padding: 5,
                marginBottom: 20,
                backgroundColor: '#b5c9eb'
            }}>

                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>Search Boarding</Text>
                <View style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row'
                }}>
                    <View style={{
                        width: "50%"
                    }}>
                        <Picker selectedValue={selectedUni} onValueChange={(item, itemIndex) => {
                            setSelectedUni(item)
                        }} >
                            {
                                uniList.map(q => {
                                    return <Picker.Item label={q} key={q} value={q} />
                                })
                            }
                        </Picker>
                        <Picker selectedValue={selectedTenantType} onValueChange={(item, itemIndex) => {
                            setSelectedTenantType(item)
                        }} >
                            {
                                tenantTypes.map(q => {
                                    return <Picker.Item label={q} key={q} value={q} />
                                })
                            }
                        </Picker>

                        <View >
                            <Text>Number of Tenants</Text>
                            <TextInput placeholder={'Number of Tenants'} keyboardType="numeric" onChangeText={value => setSelectedTenantNo(value)}/>

                        </View>

                        {/* <Picker selectedValue={selectedTenantNo} onValueChange={(item,itemIndex)=>{
            setSelectedTenantNo(item)
        }} >
            {
                TenantNo.map(q=>{
                    return <Picker.Item label={q.toString()} key={q} value={q} />
                })
            }
        </Picker> */}




                    </View>
                    <View style={{
                        width: "49%"
                    }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            padding: 10
                        }}>
                            <Checkbox value={withMealse} onValueChange={setWithMealse} />
                            <Text>With Meals</Text>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            padding: 10
                        }}>
                            <Checkbox value={furniture} onValueChange={setFurniture} />
                            <Text>With Furniture</Text>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            padding: 10
                        }}>
                            <Checkbox value={bills} onValueChange={setBills} />
                            <Text>Bills include</Text>
                        </View>



                    </View>
                </View>
                <Text style={{
                    fontSize: 18
                }}>Monthly Fee</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        width: '50%'
                    }}>

                        <Text>Min</Text>
                        <TextInput placeholder={'Min'} keyboardType="numeric" onChangeText={value => setSelectedMoMin(value)} />




                        {/* <Picker selectedValue={selectedMoMin} onValueChange={(item, itemIndex) => {
                            setSelectedMoMin(item)
                        }} >
                            {
                                minMoFee.map(q => {
                                    return <Picker.Item label={q.toString()} key={q} value={q} />
                                })
                            }
                        </Picker> */}




                    </View>
                    <View style={{
                        width: '50%'
                    }}>

                        <Text>Max</Text>
                        <TextInput placeholder={'Max'} keyboardType="numeric" onChangeText={value => setSelectedMoMax(value)} />

                        {/* 
                        <Picker selectedValue={selectedMoMax} onValueChange={(item, itemIndex) => {
                            setSelectedMoMax(item)
                        }} >
                            {
                                maxMoFee.map(q => {
                                    return <Picker.Item label={q.toString()} key={q} value={q} />
                                })
                            }
                        </Picker> */}





                    </View>
                </View>
                <View style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#3333FF',
                        width: 100,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10,
                    }} onPress={() => SearchClick()} >
                        <Text style={{
                            color: "#fff"
                        }}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Button onPress={() => postAdClick()} title="Post an Advertisement" />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200
    },
    centered: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    map: {
        width: '100%',
        height: '50%',
    },
})