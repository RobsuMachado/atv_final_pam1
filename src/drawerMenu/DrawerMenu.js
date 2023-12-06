import { StyleSheet } from 'react-native';
import Drawer from "../components/Drawer"

export default function DrawerMenu() {
    return (
        <Drawer/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

