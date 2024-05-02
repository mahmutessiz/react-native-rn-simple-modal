/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function OpenDetails(props: {
  isOpen: boolean;
  onToggle: () => void;
  title: string;
  details: string;
  // styling props
  bgColor?: string;
  detailsColor?: string;
  titleColor?: string;
  closeBtnColor?: string;
  closeBtnBgColor?: string;
}) {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          display: props.isOpen ? 'flex' : 'none',
          shadowOpacity: 0.5,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 8,
          elevation: 8,
        },
      ]}
    >
      <View
        style={{
          width: '90%',
          backgroundColor: props.bgColor || 'white',
          paddingHorizontal: 20,
          marginHorizontal: 20,
          borderRadius: 10,
          minHeight: 250,
          gap: 10,
          justifyContent: 'center',
          zIndex: 9,
          elevation: 9,
        }}
      >
        {/* Close button */}
        <View
          style={{
            width: '100%',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
        >
          <Pressable
            style={{
              padding: 5,
              paddingHorizontal: 10,
              marginTop: -25,
              borderRadius: 5,
              backgroundColor: props.closeBtnBgColor || 'gray',
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
        </View>

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
