import React from 'react';
import { SafeAreaView, View, Image, Text, StyleSheet} from 'react-native';
import logo from '../assets/logo.png';

export default function Main() {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo}/>
            <View style={styles.cardsContainers}>
                <View style={[styles.stylesCard, { zIndex: 3 }]}>
                    <Image style={styles.avatar} source={{
                        uri: 'https://www.google.com/search?q=imagem&tbm=isch&source=iu&ictx=1&fir=gix4jb-SSOwM3M%253A%252CC9p-CW8uwnDZjM%252C_&vet=1&usg=AI4_-kQWWK7_-fca5Kz2DjzrzCrWyzBVZg&sa=X&ved=2ahUKEwjRjuWjkoDkAhW8IbkGHc3YBzwQ9QEwAHoECAcQBA#imgrc=gix4jb-SSOwM3M:'
                    }}/>
                    <View style={styles.footer}>
                        <Text style={styles.name}>Diego Fernandes</Text>
                        <Text style={styles.bio} numberOfLines={3}>CTO da Rocketseat</Text>
                    </View>
                </View>
            </View>

            <View>
                
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    logo: {
        marginTop: 30
    },

    cardsContainers: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        maxHeight: 500
    },

    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        margin: 30,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    
    avatar: {
        flex: 1,
        height: 300,
    },

    footer: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15
    },

    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },

    bio: {
        fontSize: 14,
        color: '#999',
        marginTop: 5,
        lineHeight: 18
    }
});