import React, {Component} from 'react';

import{
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
} from 'react-native';

import Swiper from 'react-native-swiper';

const Slider = props => (
    <View style={styles.container}>
       <View style={{flex: 1}}>
            <Image source={props.uri} style={styles.image} />
            <View style={styles.overlay}></View>
       </View>
    </View>
)

const styles = StyleSheet.create({
    overlay:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    container:{
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-100,
    },
    image:{
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'cover',
    }
});
export default class extends Component{
    constructor(props){
        super(props);
        this.state={
            imagesSlider: [
                require('./../assets/img1.jpg'),
                require('./../assets/img2.jpg'),
                require('./../assets/img3.png'),
            ]
        }
    }
    render(){
        return(
            <View>
                <Swiper
                    autoplay
                    height={Dimensions.get('window').height - 100}
                    width={Dimensions.get('window').width - 100}
                    showsPagination={false}
                    style={styles.swiper}
                >
                {
                    this.state.imagesSlider.map((item, i) => <Slider
                        uri={item}
                        key={i}
                    />)
                }
                </Swiper>
            </View>
        )
    }
}