import { Button, Platform, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, Component } from 'react'
import Checkbox from 'expo-checkbox'
import { Picker } from '@react-native-picker/picker';
import Logo from '../assets/OIP.jpg'
import { createPost } from '../Connection'
import MapView from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
import * as Location from 'expo-location';

const CreatePost = () => {

    const [uniList, setUniList] = useState(["University", "University of Colombo", "University of Peradeniya", "University of Ruhuna"])
    const [tenantTypes, setTenantTypes] = useState(["Gender", "girl", "boy"]);
    const [TenantNo, setTenantNo] = useState([0, 1, 2, 3, 4, 5])

    const [selectedUni, setSelectedUni] = useState("");
    const [selectedTenantType, setSelectedTenantType] = useState("");
    const [selectedTenantNo, setSelectedTenantNo] = useState(0);
    const [withMealse, setWithMealse] = useState(false)
    const [furniture, setFurniture] = useState(false)
    const [bills, setBills] = useState(false)

    const [monthlyFee, setMonthlyFee] = useState(0);
    const [advancePayment, setAdvancePayment] = useState(0);
    const [contactNumber, setContactNumber] = useState("");
    const [description, setDescription] = useState("");
    const [referenceNo, setReferenceNo] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [latitudeDelta, setLatitudeDelta] = useState("");
    const [longitudeDelta, setLongitudeDelta] = useState("");


    const componentDidMount = async () => {
        try {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            console.log("Loation");
            console.log(location.coords);
            //  "heading": 0, "latitude": 37.4219983, "longitude": -122.084, "speed": 0}, "mocked": false, "timestamp": 1678711708145}
            setLongitude(location.coords.longitude);
            setLatitude(location.coords.latitude);
            setLatitudeDelta(5);
            setLongitudeDelta(5);
            //   this.updateState(location);
        } catch (error) {
            console.log(error);
        }
    };



    const postAdClick = async () => {

        // Geolocation.getCurrentPosition((pos) => {
        //     const crd = pos.coords;
        //     setLatitude(crd.latitude);
        //     setLongitude(crd.longitude);
        //     setLatitudeDelta(0.0421);
        //     setLongitudeDelta(0.0421);
        //     }).catch((err) => {
        //     console.log(err);
        //   });



        //post ad clicked
        var post = {
            selectedUni: selectedUni,
            selectedTenantType: selectedTenantType,
            tenantNo: selectedTenantNo,
            withMeals: withMealse,
            withFurniture: furniture,
            withBills: bills,
            monthlyFee: monthlyFee,
            advancePayment: advancePayment,
            contactNumber: contactNumber,
            description: description,
            latitude: latitude,
            longitude: longitude,
            latitudeDelta, latitudeDelta,
            longitudeDelta: longitudeDelta
        }
        var res = await createPost(post);
        if (res > 0) {
            setReferenceNo(res);
        }

        console.log("post data.................");
        console.log(post);
    }



    return (
        <View>
            {/* Logo goes here */}
            <View style={{
                display: 'flex',
                padding: 10,
                backgroundColor: '#b5c9eb',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
                <Image source={Logo} style={{
                    height: 50,
                    width: 50
                }} />
                <Text style={{
                    fontSize: 15,
                    marginLeft: 20
                }} >Post Advertisement</Text>
            </View>
            <View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>Add Details</Text>
                    <TextInput style={{
                        borderColor: '#888888',
                        borderRadius: 12, padding: 8,
                        borderWidth: 1,
                        margin: 5
                    }} value={referenceNo} placeholder="Reference No" />
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    <View style={{
                        width: '50%'
                    }}>
                        <Picker selectedValue={selectedUni} style={styles.ps} onValueChange={(item, itemIndex) => {
                            setSelectedUni(item)
                        }} >
                            {
                                uniList.map(q => {
                                    return <Picker.Item label={q.toString()} key={q} value={q} />
                                })
                            }
                        </Picker>
                        <Picker selectedValue={selectedTenantType} onValueChange={(item, itemIndex) => {
                            setSelectedTenantType(item)
                        }} >
                            {
                                tenantTypes.map(q => {
                                    return <Picker.Item label={q.toString()} key={q} value={q} />
                                })
                            }
                        </Picker>
                        <View>

                            <Text>Number of Tenants</Text>
                           
                            <TextInput placeholder={'Number of Tenants'} keyboardType="numeric" onChangeText={value => setSelectedTenantNo(value)} />
                           
                           
                            {/* <Picker selectedValue={selectedTenantNo} onValueChange={(item, itemIndex) => {
                                setSelectedTenantNo(item)
                            }} >
                                {
                                    TenantNo.map(q => {
                                        return <Picker.Item label={q.toString()} key={q} value={q} />
                                    })
                                }
                            </Picker> */}



                        </View>

                        <View>
                            <View>
                                <TextInput style={styles.inp} value={monthlyFee} onChangeText={setMonthlyFee} placeholder="Monthly Fee" />
                                <TextInput style={styles.inp} value={advancePayment} onChangeText={setAdvancePayment} placeholder="Advance Payment" />
                            </View>
                            <View>
                                <TextInput style={styles.inp} value={contactNumber} onChangeText={setContactNumber} placeholder="Contact Number" />
                                <TextInput style={styles.inp} value={description} onChangeText={setDescription} placeholder="Description" />
                            </View>
                        </View>
                    </View>
                    <View style={{
                        width: "50%"
                    }}>
                        <View style={styles.cbox}>
                            <Checkbox value={withMealse} onValueChange={setWithMealse} />
                            <Text>With Meals</Text>
                        </View>
                        <View style={styles.cbox}>
                            <Checkbox value={furniture} onValueChange={setFurniture} />
                            <Text>With Furniture</Text>
                        </View>
                        <View style={styles.cbox}>
                            <Checkbox value={bills} onValueChange={setBills} />
                            <Text>Bills include</Text>
                        </View>
                    </View>
                </View>

            </View>
            <View>
                <MapView style={styles.map} onMapReady={componentDidMount} initialRegion={{
                    latitude: 7.8731,
                    longitude: 80.7718,
                    latitudeDelta: 5,
                    longitudeDelta: 5
                }}
                    showsUserLocation={true}>

                </MapView>

                <Button onPress={() => postAdClick()} title="Post an Advertisement" />
            </View>
        </View>
    )
}

export default CreatePost

const styles = StyleSheet.create({
    ps: {
        borderColor: '#999999',
        borderWidth: 1,
    },
    cbox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8
    },
    inp: {
        borderColor: "#000",
        borderWidth: 1,
        padding: 5,
        margin: 5,
        borderRadius: 5
    },
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '45%',
    },
})