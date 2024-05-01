import React from 'react';
import { View, Text, Pressable } from 'react-native';
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
      style={{
        display: props.isOpen === true ? 'flex' : 'none',
        position: 'absolute',
        shadowOpacity: 0.5,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999,
      }}
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
          elevation: 5,
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
