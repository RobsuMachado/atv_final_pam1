import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fdfdfd',
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
        // justifyContent: 'space-betwen',
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



    //FeedBook Styles
    containerAddBook: {
        flexDirection: 'row',
        width: '100%',
        height: 180,
        borderRadius: 20,
        backgroundColor: '#fff',
        shadowColor: '#333',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 10,
        marginBottom: 10,
    },
    imageBook: {
        flex: 1,
        width: 120,
        height: '100%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: '#FF7305',
        shadowColor: '#333',
        shadowOffset: {
            width: 10,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 10,
    },
    infoBook: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingHorizontal: '5%',
        paddingTop: '3%',
        flexDirection: 'column',
    },
    titleBook: {
        fontSize: 20,
        fontWeight: '800',
        color: '#333',
        marginBottom: 0,
    },
    authorBook: {
        fontSize: 14,
        fontWeight: '500',
        color: '#666',
        marginBottom: 0,
    },

    priceBookView: {
        flexDirection: 'row',
        marginLeft: '5%',
        marginTop: '5%',
    },
    priceOriginalBook: {
        fontSize: 12,
        fontWeight: '400',
        color: '#FF0000',
        marginBottom: 0,
        textDecorationLine: 'line-through',
        marginLeft: 10,
        marginTop: 4,
    },
    priceBook: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    percentpriceBook: {
        marginLeft: '3%',
        fontSize: 14,
        fontWeight: '400',
        color: '#68da3e',
        marginBottom: 0,
    },

    containerButtonDetailsBook: {
        flexDirection: 'row',
        // backgroundColor: 'pink',
        alignItems:'center',
        marginTop: 15,
    },


    buttonBuyBook: {
        fontSize: 16,
        width: '100%',
        fontWeight: '800',
        color: '#FFF',
        paddingHorizontal: 34,
        paddingVertical: 6,
        textAlign: 'center',
        backgroundColor: '#FF7305',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        // marginVertical: '9%',
        shadowColor: '#333',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 10,
    },

    buttonDetailsBook: {
        fontSize: 16,
        width: '100%',
        fontWeight: '800',
        color: '#555',
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: 'center',
        backgroundColor: '#fefefe',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        // marginVertical: '9%',
        shadowColor: '#333',
        shadowOffset: {
            width: 10,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 10,
    },
});

export default styles;