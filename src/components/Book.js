import { useNavigation } from '@react-navigation/native';
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/styles'

export default function Book({ titulo, autor, valorPromo, valor, desc, imagem }) {
    const navigation = useNavigation();
    return (
        <View style={styles.containerAddBook}>
            <View>
                <Image
                    style={styles.imageBook}
                    source={imagem}
                />
            </View>

            <View style={styles.infoBook}>
                <Text style={styles.titleBook}>{titulo}</Text>
                <Text style={styles.authorBook}>{autor}</Text>

                <View style={styles.priceBookView}>
                    <Text style={styles.priceBook}>R${valorPromo}</Text>
                    <Text style={styles.priceOriginalBook}>De: R${valor}</Text>
                </View>

                <Text style={styles.percentpriceBook}>(   {desc}%  de  desconto   )</Text>

                <View style={styles.containerButtonDetailsBook}>
                    <TouchableOpacity>
                        <Text
                            style={styles.buttonBuyBook}
                            onPress={() => {
                                navigation.navigate('FeedBook');
                            }}>
                            Comprar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text
                            style={styles.buttonDetailsBook}
                            onPress={() => {
                                navigation.navigate('FeedBook');
                            }}>
                            Detalhes
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}