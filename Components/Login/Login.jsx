import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Text></Text>
                    <Text style={styles.button}>English</Text>
                </View>
                <View style={styles.icons}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/bkashIcon.png')}
                    />
                    <Image
                        style={styles.qr}
                        source={require('../../assets/bkashQR.png')}
                    />
                </View>

                <View style={styles.accountInfo}>
                    <Text style={styles.textHeader}>একাউন্ট নাম্বার</Text>
                    <Text style={styles.textInput}>+88 01820003222</Text>
                </View>

                <View style={styles.pinContainer}>
                    <View style={styles.pinContent}>
                        <Text style={styles.textHeader}>বিকাশ পিন</Text>
                        <Text style={styles.forgetPin}>পিন ভুলে গিয়েছেন?</Text>
                    </View>
                    <View style={styles.pinInput}>
                        <TextInput style={styles.pin}
                            placeholder="বিকাশ পিন নাম্বার দিন"
                            secureTextEntry
                        />
                    </View>
                </View>

                <View style={styles.loginButtonContainer}>
                    <Text style={styles.loginButtonColor}>পরবর্তী</Text>
                    <AntDesign name="arrowright" size={24} color="white" />
                </View>

            </View >
        )
    }
}

export default Login

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        backgroundColor: '#fff',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
    },

    button: {
        borderWidth: 2,
        borderColor: '#E1136E',
        borderRadius: 30,
        fontSize: 15,
        padding: 10,
        color: '#E1136E',
    },

    icons: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    logo: {
        width: 80,
        height: 80,
        marginTop: 50,
    },

    qr: {
        width: 65,
        height: 65,
        marginTop: 50,
    },

    accountInfo: {
        margin: 20,
    },

    textHeader: {
        fontSize: 15,
        color: '#8F8F8F',
    },

    textInput: {
        marginTop: 10,
        fontSize: 20,
    },

    pinContainer: {
        margin: 20,
        borderWidth: 2,
        borderColor: '#fcfcfc',
    },

    forgetPin: {
        fontSize: 15,
        color: '#E1136E',
    },

    pinContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
        margin: 2,
    },

    loginButtonContainer: {
        backgroundColor: '#9E9E9E',
        padding: 12,
        marginTop: 145,
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 0,
    },

    loginButtonColor: {
        color: '#fff',
    }

});