import React from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';

class Indonesia extends React.Component{
    constructor(){
        super();
        this.state = {
            positive:'', 
            sembuh:'', 
            meninggal:'', 
            perawatan: '',
            update:''}
    }

    componentDidMount = () => {
        this.getDataApiGlobal();
    }
    getDataApiGlobal = async () => {
        const response = await fetch('https://kawalcovid19.harippe.id/api/summary')
        const json = await response.json()
            this.setState({positive: json.confirmed.value})
            this.setState({sembuh: json.recovered.value})
            this.setState({meninggal: json.deaths.value})
            this.setState({perawatanI: json.activeCare.value})
            this.setState({update: json.metadata.lastUpdatedAt})

            console.log(json)
    }
    
    render(){
        return(
            <View>
                <View style={{ marginTop: 60, marginBottom: 110 }}></View>
                    <Text style={{color: 'black', fontSize: 13, fontWeight:'bold', alignSelf: 'center'}}>{this.state.update}</Text>
                <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', justifyContent: 'space-between'}}>
                    
                    <View style={{flex: 1, height: 50,  backgroundColor: 'white', 
                    borderRadius: 15, justifyContent: 'center', marginHorizontal: 10, borderWidth: 0.6}}>

                        <Text style={{color: 'black', fontSize: 20, alignSelf: 'center'}}>Positive</Text>
                        <Text style={{color: 'black', fontSize: 20, fontWeight:'bold', alignSelf:"center"}}>{this.state.positive}</Text>
                    </View>

                    <View style={{flex: 1, height: 50,  backgroundColor: '#D973F0', 
                    borderRadius: 15, justifyContent: 'center', marginHorizontal: 10,borderWidth: 0.6}}>
                        <Text style={{color: 'black', fontSize: 17, alignSelf: 'center'}}>Recovered</Text>
                        <Text style={{color: 'black', fontSize: 20, fontWeight:'bold', alignSelf: 'center'}}>{this.state.sembuh}</Text>
                    </View>

                    <View style={{flex: 1, height: 50,  backgroundColor: '#F365E6', 
                    borderRadius: 15, justifyContent: 'center', marginHorizontal: 2, borderWidth: 0.6}}>
                        <Text style={{color: 'black', fontSize: 20, alignSelf: 'center'}}>Deaths</Text>
                        <Text style={{color: 'black', fontSize: 20, fontWeight:'bold', alignSelf: 'center'}}>{this.state.meninggal}</Text>
                    </View>

                    <View style={{flex: 1, height: 50,  backgroundColor: 'pink', 
                    borderRadius: 15, justifyContent: 'center', marginHorizontal: 10, borderWidth: 0.6}}>
                        <Text style={{color: 'black', fontSize: 20, alignSelf: 'center'}}>In Care</Text>
                        <Text style={{color: 'black', fontSize: 20, fontWeight:'bold', alignSelf: 'center'}}>{this.state.meninggal}</Text>
                    </View>
                </View>
            </View>
        )

    }
    
}

export default Indonesia;