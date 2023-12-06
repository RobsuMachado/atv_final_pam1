import { useNavigation } from '@react-navigation/native';
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Book from '../components/Book';

const moldeBook = [
    { imagem: require('../image/teslaBookFace.jpg'), titulo: 'Tesla: A vida e a lou...', autor: 'Robson', valorPromo: '1', valor: '1', desc: '1' },
    { imagem: require('../image/teslaBookFace.jpg'), titulo: 'Tesla: A vida e a lou...', autor: 'Robson', valorPromo: '1', valor: '1', desc: '1' },
    { imagem: require('../image/teslaBookFace.jpg'), titulo: 'Tesla: A vida e a lou...', autor: 'Robson', valorPromo: '1', valor: '1', desc: '1' },
    { imagem: require('../image/teslaBookFace.jpg'), titulo: 'Tesla: A vida e a lou...', autor: 'Robson', valorPromo: '1', valor: '1', desc: '1' },
]

export default function FeedBook() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            {moldeBook.map((data, index) => (
                <Book
                    key={index}
                    imagem={data.imagem}
                    titulo={data.titulo}
                    autor={data.autor}
                    valorPromo={data.valorPromo}
                    valor={data.valor}
                    desc={data.desc}
                />
            ))}
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    }
});