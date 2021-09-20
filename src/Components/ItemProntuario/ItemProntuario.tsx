

import React from 'react';
import styled from 'styled-components';
import ItemDoenca from '../ItemDoenca/ItemDoenca';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClock, faChevronUp} from '@fortawesome/free-solid-svg-icons'

const meses = ['JAN','FEV', 'MAR', 'ABR', 'MAIO', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
const ItemProntuario = (props) => {
 var T = new Date(props.val.created_at);
 console.log(T)
  return (
  <Box>
    <Time>
        <Txt bold={true} color="#099393" size="24px">{T.getDate()}</Txt>
        <Txt bold={false} color="#099393" size="20px">{meses[T.getMonth()]}</Txt>
        <Txt bold={false} color="#099393" size="18px">{T.getFullYear()}</Txt>
    </Time>
    <Card>
        <HeadTime>
             <FontAwesomeIcon  color={'#FFF'} icon={faClock} />
          <Txt bold={false} ml='5px' color="#FFF" size="20px">{`${T.getHours()}:${T.getMinutes()}`}</Txt>
        </HeadTime>
        <HeadCard>
            <HeadTile>
                Anamnese
            </HeadTile>
        </HeadCard>
        <CardBody>
            <Label>Queixa Principal</Label>
            <Txt ml='10px' mt='5px' mb='5px' size='16px'>{props.val.queixa.label}</Txt>
            <Label>Doenças Adulto</Label>

            <TagContainer>
            {props.val.doencas.map(val => (
                <ItemDoenca unX={true}>{val.label}</ItemDoenca>
            ))}
             </TagContainer>
            <Label>Histórico de Moléstia</Label>
            <Txt  ml='10px' mt='5px' mb='5px' size='16px'>{props.val.historico}</Txt>
        </CardBody>
    </Card>
  </Box>
  );
};


export default ItemProntuario;
const Box = styled.View`
padding: 5px;
flex-direction: row;
`
const Time = styled.View`
width: 60px;
align-items: center;
`
const Card = styled.View`
border-radius: 10px;
flex: 1;

`
const Txt = styled.Text`
font-size: ${props => props.size ? props.size : '18px'};
color: ${props => props.color ? props.color : '#000'};
${props => props.bold ? 'font-weight: bold;' : ''};
margin-left:${props => props.ml ? props.ml : '0'};
margin-right:${props => props.mr ? props.mr : '0'};
margin-top:${props => props.mt ? props.mt : '0'};
margin-bottom:${props => props.mb ? props.mb : '0'};
`
const HeadTime = styled.View`
background-color: #4CB1B1;
align-items: center;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
height: 35px;
width: 100%;
padding-left: 15px;
flex-direction: row
`
const HeadCard = styled.View`
background-color: #B2DDDC;
justify-content: center;
height: 30px;
width: 100%;
padding-left: 15px;
`
const HeadTile = styled.Text`
font-size: 18px;
color: #277778;
font-weight: bold;
`

const CardBody = styled.View`
background-color: #FFF;
width: 100%;
padding: 15px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
`
const Label = styled.Text`
font-size: 18px;
color: #000;
font-weight: 500;
`
const TagContainer = styled.View`
width: 100%;
padding: 5px;
flex-direction: row;
flex-wrap: wrap; 
`