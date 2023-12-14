import { useNavigation } from '@react-navigation/native';
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Book from '../components/Categorie';

const moldeBook = [
    {categoria: 'Suspense', idade: '16+'},
    {categoria: 'Terror', idade: '16+'},
    {categoria: 'Aventura', idade: '10+'},
    {categoria: 'Drama', idade: '14+'},
    {categoria: 'Ação', idade: '14+'},
]

export default function FeedBook() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            {moldeBook.map((data, index) => (
                <Book
                    key={index}
                    categoria={data.categoria}
                    idade={data.idade}
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