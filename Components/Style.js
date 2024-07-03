// Global styling for the app
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    //Basic styling
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    //TopBar styling and it's children
    Topbar: {
        flexDirection: 'row', // Row direction to align text and image horizontally
        justifyContent: 'center', // Space between text container and button
        alignItems: 'center', // Center vertically
        width: '100%',
        padding: 10,
        borderBlockColor: 'black',
        borderRadius: 20,
        borderWidth: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        paddingTop: 40,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TopbarTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 5,
    },
    TopbarAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    buttonImage: {
        width: 48,
        height: 48,
    },
    //Block styling and it's children
    ClickContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    BlockButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    BlockSize: {
        width: 200,
        height: 200,
    },
});
export default styles;
