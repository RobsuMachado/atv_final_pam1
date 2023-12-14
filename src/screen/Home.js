import { useNavigation } from '@react-navigation/native';
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/styles';


export default function CreateUser() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.containerHome}>
            <Image
                            source={require('../image/GAMERlogo.png')}
                        />
        </SafeAreaView >
    );
}

