import * as React from 'react';

import { useState } from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';
import { OpenDetails } from 'react-native-rn-simple-modal';
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <OpenDetails
        title="Open Details"
        isOpen={isOpen}
        onToggle={() => {
          setIsOpen(!isOpen);
        }}
        details="Details"
        titleColor="teal"
        closeBtnColor="darkgray"
        closeBtnBgColor="yellow"
        detailsColor="black"
      />
      <View>
        <Pressable style={[styles.box]} onPress={() => setIsOpen(!isOpen)}>
          <Text>Open Details</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '50%',
    padding: 20,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',
    alignSelf: 'center',
    marginTop: '70%',
    borderRadius: 10,
    elevation: 5,
  },
});
