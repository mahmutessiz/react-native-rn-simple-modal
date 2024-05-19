import * as React from 'react';

import { useState } from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';
import { OpenDetailsWithButtons } from 'react-native-rn-simple-modal';
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <Pressable style={[styles.box]} onPress={() => setIsOpen(!isOpen)}>
          <Text>Open Details</Text>
        </Pressable>
        <Pressable style={[styles.box]} onPress={() => setIsOpen(!isOpen)}>
          <Text>Open Details Buttons</Text>
        </Pressable>
      </View>

      {/* add this component to bottom of your app. It will work better. */}
      {/* <OpenDetails
        title="Open Details"
        isOpen={isOpen}
        onToggle={() => {
          setIsOpen(!isOpen);
        }}
        details=" aliqua.This his ir sit amet, consectetur adiphe detailed information. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        titleColor="teal"
        closeBtnColor="white"
        closeBtnBgColor="teal"
        detailsColor="black"
        bgLayerColor="rgba(0, 0, 0, 0.5)"
        popupBgColor="skyblue"
        marginTop={-20}
      /> */}
      <OpenDetailsWithButtons
        title="Open Details"
        isOpen={isOpen}
        onToggle={() => {
          setIsOpen(!isOpen);
        }}
        buttonLeftFunc={() => console.log('left')}
        buttonRightFunc={() => console.log('right')}
        details=" aliqua.This his ir sit amet, consectetur adiphe detailed information. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        titleColor="teal"
        closeBtnColor="white"
        closeBtnBgColor="teal"
        detailsColor="black"
        bgLayerColor="rgba(0, 0, 0, 0.5)"
        popupBgColor="skyblue"
        marginTop={-20}
        rightBtnColor="darkgoldenrod"
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
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
    marginTop: '30%',
    borderRadius: 10,
    elevation: 5,
  },
});
