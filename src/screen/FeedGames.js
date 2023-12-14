import { useNavigation } from '@react-navigation/native';
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Book from '../components/Book';

const moldeBook = [
    { imagem: require('../image/teslaBookFace.jpg'), titulo: 'Overwatch 2', autor: 'Robson', valorPromo: '100,00', valor: '120,00', desc: '00' },
    { imagem: require('../image/teslaBookFace.jpg'), titulo: 'The Escapist', autor: 'Robson', valorPromo: '80,00', valor: '100,00', desc: '1' },
    { imagem: require('../image/teslaBookFace.jpg'), titulo: 'GTA V', autor: 'Robson', valorPromo: '70,00', valor: '80,00', desc: '1' },
    { imagem: require('../image/teslaBookFace.jpg'), titulo: 'Call of Duty', autor: 'Robson', valorPromo: '75,00', valor: '90,00', desc: '1' },
    { imagem: require('../image/teslaBookFace.jpg'), titulo: 'Red Dead Redemption 2', autor: 'Robson', valorPromo: '100,00', valor: '110,00', desc: '1' },
    { imagem: require('../image/teslaBookFace.jpg'), titulo: 'The Last of us', autor: 'Robson', valorPromo: '120,00', valor: '150,00', desc: '1' },
    { imagem: require('../image/teslaBookFace.jpg'), titulo: 'Watch Dogs', autor: 'Robson', valorPromo: '130,00', valor: '140,00', desc: '1' },
    { imagem: require('../image/teslaBookFace.jpg'), titulo: 'Uncharted', autor: 'Robson', valorPromo: '40,00', valor: '50,00', desc: '1' },
    { imagem: require('../image/teslaBookFace.jpg'), titulo: 'Fortnite', autor: 'Robson', valorPromo: '100,00', valor: '140,00', desc: '1' },
    { imagem: require('../image/teslaBookFace.jpg'), titulo: 'God of War', autor: 'Robson', valorPromo: '180,00', valor: '200,00', desc: '1' },
]

export default function FeedGames() {
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