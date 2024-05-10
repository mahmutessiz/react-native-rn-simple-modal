/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function OpenDetails(props: {
  isOpen: boolean;
  onToggle: () => void;
  title: string;
  details: string;
  // styling props
  popupBgColor?: string;
  detailsColor?: string;
  titleColor?: string;
  closeBtnColor?: string;
  closeBtnBgColor?: string;
  bgLayerColor?: string;
  marginTop?: number;
}) {
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
      </View>
    </View>
  );
}
