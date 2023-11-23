import { useNavigation } from '@react-navigation/native';
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            {/*IMAGE DE LOGIN*/}
            <ScrollView>
                <View style={styles.viewLoginImage}>
                    <Image
                        style={styles.loginImage}
                        // source={require('../image/login.png')}
                    />
                </View>

                <Text
                    style={styles.textLogin}> 
                    FAÇA LOGIN
                    NA MAIOR
                    LOJA DE JOGOS </Text>

                <View style={styles.loginBar}>
                    <View style={styles.textBarImput}>
                        <MaterialIcons name='email' size={20} color={'#999'} />
                        <TextInput
                            style={styles.textImput}
                            placeholderTextColor='#999'
                            placeholder='E-mail'
                            keyboardType='email-address' />
                    </View>

                    <View style={styles.textBarImput}>
                        <MaterialIcons name='lock' size={20} color={'#999'} />
                        <TextInput
                            style={styles.textImput}
                            placeholder='Senha'
                            placeholderTextColor='#999'
                            keyboardType='password'
                            secureTextEntry={true} />
                    </View>
                </View>


                <TouchableOpacity>
                    <Text
                        style={styles.textButton}
                        onPress={() => {
                            // navigation.navigate('FeedBook');
                            navigation.navigate('DrawerMenu');
                        }}>
                        LOGIN
                    </Text>
                </TouchableOpacity>

                <View style={styles.containerBarLoginWith}>
                    <View style={styles.barLoginWith}>
                    </View>
                    <Text style={styles.textLoginWith}>
                        ACESSAR COM OUTRAS REDES
                    </Text>
                    <View style={styles.barLoginWith}>
                    </View>
                </View>

                <View style={styles.viewLoginWith}>
                    <TouchableOpacity style={styles.btnLoginWith}>
                        <Image
                            source={require('../image/google.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnLoginWith}>
                        <Image
                            source={require('../image/facebook.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.viewCreateAccont}>
                    <Text style={styles.textCreateAccont}>
                        Não possue uma conta?
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('CreateUser');
                        }}
                    >
                        <Text style={styles.btnCreateAccont}>
                            CRIE UM
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdfdfd',
    },
    viewLoginImage: {
        alignItems: 'center',
        backgroundColor: '#fafafa',
    },
    loginImage: {
        width: 130,
        height: 40,
        backgroundColor: '#FF5C00',
    },
    textLogin: {
        marginLeft: '3%',
        fontSize: 28,
        fontWeight: '800',
        color: '#FF5C00',
        marginBottom: 20,
    },
    loginBar: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBarImput: {
        flexDirection: 'row',
        width: '90%',
        padding: 8,
        marginBottom: 20,
        borderColor: '#cccccc',
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 10,
    },

    textImput: {
        color: '#333',
        marginLeft: '3%',
    },
    textButton: {
        marginLeft: '4%',
        marginRight: '4%',
        fontSize: 16,
        fontWeight: '800',
        color: '#FFF',
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#FF5C00',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 6,
    },
    containerBarLoginWith: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        marginTop: 20,
    },
    barLoginWith: {
        margin: '1%',
        width: '20%',
        borderColor: '#999',
        borderBottomWidth: 1,
    },
    textLoginWith: {
        color: '#999',
    },
    viewLoginWith: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnLoginWith: {
        margin: 15,
        padding: 6,
        borderWidth: 2,
        borderColor: '#999',
        borderRadius: 100,
    },
    viewCreateAccont: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    btnCreateAccont: {
        fontSize: 16,
        fontWeight: '800',
        color: '#FF5C00',
        textAlign: 'center',
    },
    textCreateAccont: {
        fontSize: 16,
        fontWeight: '500',
        color: '#999',
        textAlign: 'center',
        marginRight: 10,
    },
});
