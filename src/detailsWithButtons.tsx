/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface OpenDetailsProps {
  /**
   * A boolean flag indicating whether the details modal is open.
   */
  isOpen: boolean;

  /**
   * A function to be called when the close button is pressed, toggling the modal's visibility.
   */
  onToggle: () => void;

  /**
   * The title text to be displayed in the details modal.
   */
  title: string;

  /**
   * The detailed information to be displayed in the modal.
   */
  details: string;

  /**
   * A function to be called when the left button is pressed.
   */
  buttonRightFunc: () => void;

  /**
   * A function to be called when the right button is pressed.
   */
  buttonLeftFunc: () => void;

  // Styling props with descriptions (similar format for others)
  /**
   * Background color for the modal popup.
   */
  popupBgColor?: string;
  /**
   * Color for the details text.
   */
  detailsColor?: string;
  /**
   * Color for the title text.
   */
  titleColor?: string;
  /**
   * Background color for the close button.
   */
  closeBtnBgColor?: string;
  /**
   * Color for the close button text.
   */
  closeBtnColor?: string;
  /**
   * Background color for the modal overlay layer.
   */
  bgLayerColor?: string;
  /**
   * Margin from the top of the screen for the modal content.
   */
  marginTop?: number;
}

export default function OpenDetailsWithButtons(props: OpenDetailsProps) {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          display: props.isOpen ? 'flex' : 'none',
          shadowOpacity: 0.5,
          backgroundColor: props.bgLayerColor || 'rgba(0, 0, 0, 0.1)',
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
    >
      <View
        style={{
          position: 'relative',
          width: '90%',
          minHeight: 250,
          marginTop: props.marginTop || 0,
          backgroundColor: props.popupBgColor || 'white',
          paddingHorizontal: 20,
          paddingVertical: 20,
          marginHorizontal: 20,
          borderRadius: 10,
          gap: 10,
          justifyContent: 'center',
          zIndex: 9,
          elevation: 9,
        }}
      >
        {/* Close button */}
        <Pressable
          style={{
            position: 'absolute',
            width: 30,
            height: 30,
            top: 10,
            right: 10,
            borderRadius: 5,
            backgroundColor: props.closeBtnBgColor || 'gray',
            alignSelf: 'flex-end',
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 5,
          }}
          pointerEvents="box-only"
          onPress={props.onToggle}
          accessibilityLabel="Close details modal" // Accessibility improvement
        >
          <Text
            style={{
              color: props.closeBtnColor || 'white',
              fontWeight: 'bold',
              fontSize: 16,
            }}
          >
            X
          </Text>
        </Pressable>

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            color: props.titleColor || 'black',
          }}
        >
          {props.title}
        </Text>
        <Text style={{ fontSize: 16, color: props.detailsColor || 'black' }}>
          {props.details}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            width: '100%',
            justifyContent: 'flex-end',
          }}
        >
          <Pressable
            style={{
              padding: 5,
              borderRadius: 5,
              backgroundColor: 'green',
              elevation: 5,
            }}
            onPress={props.buttonLeftFunc}
          >
            <Text>deneme2</Text>
          </Pressable>
          <Pressable
            style={{
              padding: 5,
              borderRadius: 5,
              backgroundColor: 'red',
              elevation: 5,
            }}
            onPress={props.buttonRightFunc}
          >
            <Text>deneme</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
