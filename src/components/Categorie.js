import { useNavigation } from '@react-navigation/native';
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/styles'

export default function Categorie({ categoria, idade}) {
    const navigation = useNavigation();
    return (
        <View style={styles.containerCategorie}>

            <View style={styles.infoBook}>
                <Text style={styles.titleBook}>{categoria}</Text>
                <Text style={styles.authorBook}>{idade}</Text>


                <View style={styles.containerButtonDetailsBook}>
                    <TouchableOpacity>
                        <Text
                            style={styles.buttonCategorieBook}
                            onPress={() => {
                                navigation.navigate('FeedBook');
                            }}>
                            Lista de Jogos
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}