import * as React from 'react';

import { useState } from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
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
      <Pressable style={[styles.box]} onPress={() => setIsOpen(!isOpen)}>
        <Text>Open Details</Text>
      </Pressable>
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
    width: '70%',
    padding: 20,
    marginVertical: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',
    alignSelf: 'center',
    marginTop: '80%',
    borderRadius: 10,
    elevation: 15,
  },
});
