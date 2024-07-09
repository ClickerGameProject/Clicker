import { StyleSheet, View, Pressable, Text } from 'react-native';

// Straightforward Button component; use label to show text on the button,
// and onPress to declare the action taken upon pressing it
export default function Button({ label, onPress, disabled }) {
  return (
    <View style={[styles.buttonContainer]}>
      <Pressable
                style={({ pressed }) => [
                  styles.button,
                  pressed && styles.disabled,
                  disabled && styles.disabled, 
                ]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={[styles.buttonLabel]}>
          {label}
          </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 250,
    height: 34,
    marginHorizontal: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    borderWidth: 2,
    borderColor: '#000000', 
    borderRadius: 18,
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    fontSize: 16,
    color: '#25292e'
  },
  disabled: {
    opacity: 0.5,
  }
});