import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdfdfd',
        // alignItems: 'center',
    },
    containerLogo: {
        alignItems: 'center',
    },
    logoImage: {
        width: 130,
        height: 40,
        backgroundColor: '#FF7305',
    },

    containerTitle: {
        display: 'flex',
        flexWrap: 'wrap',
        marginVertical: 50,
    },
    title: {
        width: 230,
        marginLeft: '5%',
        fontSize: 28,
        fontWeight: '800',
        color: '#FF7305',
    },

    containerImput: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imput: {
        flexDirection: 'row',
        width: '90%',
        padding: 8,
        borderColor: '#cccccc',
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 10,
    },
    textImput: {
        color: '#333',
        marginLeft: '3%',
    },
    button: {
        marginTop: 20,
        marginHorizontal: '4%',
        fontSize: 16,
        fontWeight: '800',
        color: '#fdfdfd',
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#FF7305',
        borderRadius: 10,
    },

    containerAcessWith: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        marginVertical: 20,
    },
    detailAcessWith: {
        width: '16%',
        marginHorizontal: 10,
        borderColor: '#aaa',
        borderBottomWidth: 1,
    },
    acessWith: {
        color: '#999',
        textAlign: 'center',
    },

    containerAcessWithIcon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonAcessWithIcon: {
        margin: 15,
        padding: 6,
        borderWidth: 2,
        borderColor: '#999',
        borderRadius: 100,
    },
    containerCreateAccont: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    labelNavigate: {
        fontSize: 16,
        fontWeight: '800',
        color: '#FF7305',
        textAlign: 'center',
    },
    labelCreateAccont: {
        fontSize: 16,
        fontWeight: '500',
        color: '#999',
        textAlign: 'center',
        marginRight: 10,
    },
});

export default styles;