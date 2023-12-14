import { useNavigation } from '@react-navigation/native';
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Book from '../components/Book';

const moldeBook = [
    { imagem: require('../image/overwatch2.png'), titulo: 'Overwatch 2', autor: 'Blizzard', valorPromo: '100,00', valor: '120,00', desc: '13' },
    { imagem: require('../image/theescapists.png'), titulo: 'The Escapist', autor: 'Team 17', valorPromo: '80,00', valor: '100,00', desc: '20' },
    { imagem: require('../image/gtav.png'), titulo: 'GTA V', autor: 'Rockstar Games', valorPromo: '70,00', valor: '80,00', desc: '12' },
    { imagem: require('../image/callofduty.png'), titulo: 'Call of Duty', autor: 'Activision', valorPromo: '75,00', valor: '90,00', desc: '17' },
    { imagem: require('../image/reddead.png'), titulo: 'Red Dead Redemption 2', autor: 'Rockstar Games', valorPromo: '100,00', valor: '110,00', desc: '10' },
    { imagem: require('../image/thelastofus.png'), titulo: 'The Last of us 2', autor: 'Sony Studio', valorPromo: '120,00', valor: '150,00', desc: '20' },
    { imagem: require('../image/watchdogs.png'), titulo: 'Watch Dogs', autor: 'Ubsoft', valorPromo: '130,00', valor: '140,00', desc: '9' },
    { imagem: require('../image/uncharted4.png'), titulo: 'Uncharted 4', autor: 'Sony Studio', valorPromo: '40,00', valor: '50,00', desc: '20' },
    { imagem: require('../image/fortnite.png'), titulo: 'Fortnite', autor: 'Epic Games', valorPromo: '100,00', valor: '140,00', desc: '28' },
    { imagem: require('../image/godofwar.png'), titulo: 'God of War', autor: 'Sony Studio', valorPromo: '180,00', valor: '200,00', desc: '10' },
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