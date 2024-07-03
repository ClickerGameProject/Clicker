// Global styling for the app
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    //Flatlst styling and it's children
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
        width: windowWidth,
        height: windowHeight / 2, // Half the height of the screen
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
    },
    gridItem: {
        backgroundColor: '#E0E0E0', // Gray background color for each grid item
        padding: 20,
        margin: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%', // Adjust width as needed for spacing
        aspectRatio: 1, // Ensure square shape, adjust as needed
    },
});
export default styles;
