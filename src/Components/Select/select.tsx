

import React, {useState} from 'react';
import styled from 'styled-components';
import Btn from '../Components/Btn/Btn';
import ModalCadastro from '../Components/Modal/Modal';
import {View, Animated,Easing } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
const Select = (props) => {
    const [visible, setVisible] = useState(false);

    //Animation 

   var spinValue = new Animated.Value(0);
    Animated.timing(
        spinValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear, // Easing is an additional import from react-native
        useNativeDriver: true  // To make use of native driver for performance
      }
    ).start()
    
    // Next, interpolate beginning and end values (in this case 0 and 1)
    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
        const handleSelect = (val) => {
            setVisible(false)
            props.selectItem(val)
        }

  return (
      <>
    <Box active={visible} activeOpacity={.7}  onPress={() => setVisible(!visible)}>
        <TxtValue >{props.selected?.id ? props.selected?.label : 'Selecione ...' }</TxtValue>
        <View>
        <FontAwesomeIcon  color={'#444'} icon={ visible ? faChevronUp :faChevronDown } />
        </View>
    </Box>
    <SelectBox
         animationType="fade"
         transparent={true}
         visible={visible}
    > 
        {props.list?.map((val) =>( <ItemSelect onPress={() => handleSelect(val)}><TxtValue >{val.label}</TxtValue></ItemSelect>))}
    </SelectBox>
    </>
  );
};


export default Select;

const SelectBox = styled.View`
background-color: #D8D8D8;
display: ${props => props.visible ? 'flex' : 'none'}
width: 100%;
padding: 15px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
border-bottom-left-radius:5px;
border-bottom-right-radius: 5px;
margin-bottom: 5px;
`
const Box = styled.TouchableOpacity`
background-color: #E3E3E3;
width: 100%;
padding: 15px;
margin-Top: 10px;
margin-Bottom: 5px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
border-bottom-left-radius:5px;
border-bottom-right-radius: 5px;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
const TxtValue = styled.Text`
font-size: 16px;
color: #444;
`
const ItemSelect = styled.TouchableOpacity`
background-color: transparent;
font-size: 16px;
margin: 5px;
`

