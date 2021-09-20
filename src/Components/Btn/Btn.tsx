

import React from 'react';
import styled from 'styled-components';
const Btn = (props) => {

  return (
     <BtnPrimary  bgColor={props.bgColor} onPress={props.onPress}><BtnTxt>{props.children}</BtnTxt></BtnPrimary>
  );
};


export default Btn;

const TxtSec = styled.Text`
font-size: 18px;
color: #444;
`

const BtnPrimary = styled.TouchableOpacity`
background-color: ${props => props.bgColor ? props.bgColor : '#D20E4F'} ;
padding-left: 20px;
padding-right: 20px;
padding-top: 15px;
padding-bottom: 15px;
border-radius: 6px;
justify-content: center;
align-items: center;
marginTop: 10px
`
const BtnTxt = styled.Text`
font-size: 16px;
color: #FFF;
font-weight: bold;
`