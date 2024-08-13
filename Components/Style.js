// Global styling for the app
import { StyleSheet, Dimensions } from 'react-native';

// Used for responsive UI design
const windowWidth = Dimensions.get('window').width;

const ITEM_SIZE = windowWidth / 5.5; // Size of each item
const GRID_MARGIN = 5; // Margin for each grid item
const ROWS = 3.3; // Number of rows

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
        color: 'white',
        textAlign: 'center',
        marginBottom: 5,
    },
    TopbarAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    buttonImage: {
        width: 48,
        height: 48,
        resizeMode: 'contain',
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

    //Flatlist styling and it's children
    overlay: {
        flex: 1,
        width: windowWidth,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 150,
    },
    gridContainer: {
        backgroundColor: '#A9A9A9',
        padding: 10,
        borderRadius: 10,
        width: '90%',
        height: ROWS * (ITEM_SIZE + 2 * GRID_MARGIN),
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 15,
    },
    gridContentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        margin: GRID_MARGIN,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: ITEM_SIZE - GRID_MARGIN * 2,
        height: ITEM_SIZE - GRID_MARGIN * 2,
        borderWidth: 2,
        borderColor: '#000',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 3,
    },
    gridItemText: {
        color: 'black',
    },
    //Kattendale image
    kattendalenContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
    },
    kattendalenImage: {
        width: 100, 
        height: 100, 
        resizeMode: 'contain', 
    },
    emptySlot: {
        width: 100,
        height: 100,
        marginHorizontal: 5,
        backgroundColor: 'transparent',
    },
    
    //Shop styling and it's children
    amountText: {
        fontSize: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    pickaxeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pickaxeText: {
        fontSize: 18,
        marginRight: 10,
    },
    shopItemsContainer: {
        marginTop: 20,
    },
    itemContainer: {
        backgroundColor: '#ecf0f1',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        width: 100,
        alignItems: 'center',
    },
    itemText: {
        fontSize: 16,
        textAlign: 'center',
    },
    ShopImage: {
        width: '100%', // Adjust this to fit within the container
        height: '100%',
        // Aspect ratio is maintained by the resizeMode="contain" property
    },
});
export default styles;
