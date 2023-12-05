import { useNavigation } from '@react-navigation/native';
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/styles';


export default function CreateUser() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            {/*IMAGE DE LOGIN*/}
            <ScrollView>
                <View style={styles.containerLogo}>
                    <Image
                        style={styles.logoImage}
                        // source={require('../image/registration.png')}
                    />
                </View>

                <View style={styles.containerTitle}>
                    <Text style={styles.title}>CADASTRE-SE</Text>
                    <Text style={styles.title}>NA MAIOR</Text>
                    <Text style={styles.title}>LOJA DE JOGOS</Text>
                </View>

                <View style={styles.containerImput}>
                    <View style={styles.imput}>
                        <MaterialIcons name='email' size={20} color={'#999'} />
                        <TextInput
                            style={styles.textImput}
                            placeholderTextColor='#999'
                            placeholder='E-mail'
                            keyboardType='email-address' />
                    </View>

                    <View style={{margin: 5}}></View>

                    <View style={styles.imput}>
                        <MaterialIcons name='lock' size={20} color={'#999'} />
                        <TextInput
                            style={styles.textImput}
                            placeholder='Senha'
                            placeholderTextColor='#999'
                            keyboardType='password'
                            secureTextEntry={true} />
                    </View>

                    <View style={{margin: 5}}></View>

                    <View style={styles.imput}>
                        <MaterialIcons name='lock-alert' size={20} color={'#999'} />
                        <TextInput
                            style={styles.textImput}
                            placeholder='Confimar Senha'
                            placeholderTextColor='#999'
                            keyboardType='password'
                            secureTextEntry={true} />
                    </View>
                </View>

                <TouchableOpacity>
                    <Text
                        style={styles.button}>
                        CADASTRO
                    </Text>
                </TouchableOpacity>

                <View style={styles.containerAcessWith}>
                    <View style={styles.detailAcessWith}/>
                    <Text style={styles.acessWith}>
                        ACESSAR COM OUTRAS REDES
                    </Text>
                    <View style={styles.detailAcessWith}/>
                </View>

                <View style={styles.containerAcessWithIcon}>
                    <TouchableOpacity style={styles.buttonAcessWithIcon}>
                        <Image
                            source={require('../image/google.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonAcessWithIcon}>
                        <Image
                            source={require('../image/facebook.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerCreateAccont}>
                    <Text style={styles.labelCreateAccont}>
                        Já possue uma conta?
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Login');
                        }}
                    >
                        <Text style={styles.labelNavigate}>
                            ENTRAR
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </SafeAreaView >
    );
}