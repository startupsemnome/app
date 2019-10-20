import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './../styles/SliderEntry.style';

export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        navigation: PropTypes.object,
        parallaxProps: PropTypes.object
    };

    get image () {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
              source={illustration ? illustration : require('../static/happy.png')}
              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
              style={styles.image}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={illustration ? illustration : require('../static/happy.png')}
              style={styles.image}
            />
        );
    }

    getImageEmotion = (emotion) => {
      if (emotion === 1) {
        return require("./../static/normal.png")
      }
      if (emotion === 2) {
        return require("./../static/sad.png")
      }
      return require("./../static/happy.png")
    }

    render () {
        const { data: { title, subtitle, emotion }, even } = this.props;

        const uppercaseTitle = title ? ( 
          <View style={{justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
            <Image source={emotion ? this.getImageEmotion(emotion) : require("./../static/happy.png")} style={{width: 20, height: 20, margin: 5}} />            
            <Text
              style={[styles.title, even ? styles.titleEven : {}]}
              numberOfLines={2}
            >
              { title.toUpperCase() }
            </Text>
          </View>
        ) : false;

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={() => { alert(`Você selecionou o projeto: ${title}`); }}
              >
                <View style={styles.shadow} />
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    { this.image }
                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
                </View>
                <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
                    { uppercaseTitle }
                    <Text
                      style={[styles.subtitle, even ? styles.subtitleEven : {}]}
                      numberOfLines={2}
                    >
                        { subtitle }
                    </Text>                    
                </View>
            </TouchableOpacity>
        );
    }
}