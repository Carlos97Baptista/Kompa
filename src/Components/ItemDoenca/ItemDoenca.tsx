

import React from 'react';
import styled from 'styled-components';

const ItemDoenca = (props) => {
    const handleClick = () => {
        props.onPress()
    }
  return (
     <Tag  bgColor={props.bgColor} onPress={props.onPress}>
         <TxtTag>
             {props.children}
        </TxtTag>
        <Btn  onPress={() => handleClick()}>
            {props.unX ? null :   <TxtTag>
            X
        </TxtTag>}
      
        </Btn>
    </Tag>
  );
};


export default ItemDoenca;
const Tag = styled.View`
background-color: #B2DDDC;
padding-left: 10px;
padding-right: 10px;
padding-top: 5px;
padding-bottom: 5px;
border-radius: 50px;
justify-content: space-between;
align-items: center;
margin: 5px;
marginTop: 10px;
flex-direction: row;
`
const Btn = styled.TouchableOpacity`
font-size: 18px;
color: #000;
justify-content: center;
align-items: center;
margin-left: 8px;
`
const TxtTag = styled.Text`
font-size: 16px;
color: #000;
font-weight: 500;
`