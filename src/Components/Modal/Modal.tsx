

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Btn from '../Btn/Btn';
import {Modal, View,ScrollView, TouchableWithoutFeedback    } from 'react-native';
import axios from 'axios';
import Select from '../Select/select';
import ItemDoenca from '../ItemDoenca/ItemDoenca'

const ModalCadastro = (props) => {

    const [queixasList, setQueixasList] = useState([]);
    const [queixa, setQueixa] = useState(null);
    const [doencasList, setDoencasList] = useState([]);
    const [doencas, setDoencas] = useState([]);
    const [historico, setHistorico] = useState('')
const getQueixas = async () => {
 await  axios.get('https://assina-prontuario.herokuapp.com/queixas')
    .then(function (response) {
      setQueixasList(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
const getDoencas = async () => {
    await  axios.get('https://assina-prontuario.herokuapp.com/doencas')
       .then(function (response) {
         setDoencasList(response.data.data);
       })
       .catch(function (error) {
         console.log(error);
       });
   }

useEffect(() => {
    getQueixas();
    getDoencas();
}, [])

 const setQueixaSelect = (val) => {
    setQueixa(val);
 }
const setDoencaSelect = (val) => {
    let list = [...doencas];
    list.push(val);
    setDoencas(list);
}  
const removeDoenca = (val) => {
    let list = [... doencas];
    let index = list.indexOf(val);
    list.splice(index, 1);
    setDoencas(list)
}

const handleSave = async () => {
    if(historico.length < 10){alert('Historico deve haver no mínimo 10 caracteres');return;}
    var listDoenca = [];
    doencas.map((val) => {
        listDoenca.push(val.id)
    })
    await  axios.post('https://assina-prontuario.herokuapp.com/prontuario',
    {
        queixa: queixa.id,
        doencas: listDoenca,
        historico: historico
    }
    )
    .then(function (response) {
     // console.log(response.data);
      props.atualiza(response.data);
      setDoencas([]);
      //setDoencasList([]);
      setQueixa(null);
      //setQueixasList([]);
      setHistorico('')
      props.setClose();
    })
    .catch(function (response) {
      console.log(response);
    });
}

const setDoencaValid = (val) =>{
    console.log(doencasList.indexOf(val));
    if(doencas.indexOf(val) < 0) {setDoencaSelect(val)} else{ return}
   
}
  return (
     <Modal
     animationType="fade"
     transparent={true}
     visible={props.visible}
     style={{flex: 1 ,justifyContent: 'center', alignItems: 'center'}}
     >
         <Ovarlay onPress={() => props.setClose()} />
         <View style={{width: '100%', higth: '100%',justifyContent: 'center', alignItems: 'center',paddingHorizontal:25, marginTop: 150}}>
            <HeadModal>
                <HeadTile>
                   Anamnese
                </HeadTile>
            </HeadModal>
            <BodyModal>
            <ScrollView contentContainerStyle={{flexGrow: 1}}
                     directionalLockEnabled={true} 
                     keyboardShouldPersistTaps='handled'
                    >
                 <Label>Queixa Principal</Label>
                 <Select list={queixasList} selectItem={setQueixaSelect}  selected={queixa}/>
                 <Label>Doenças Adulto</Label>
                 <Select list={doencasList} selectItem={setDoencaValid}/> 
                 <Txt>Selecionados:</Txt>
                 <TagContainer>
                    {doencas.length > 0 ? doencas.map(val => (
                    <ItemDoenca onPress={() =>removeDoenca(val)} >{val.label}</ItemDoenca>
                    )) : <Txt>Nenhuma doença selecionada.</Txt>}
                 
                </TagContainer>
                 <Label>Histórico de Moléstia</Label>
          
         
                 <TextInput
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={(text) => setHistorico(text)}
                  value={historico}
                /></ScrollView>
                <Btn onPress={() => handleSave()}>Salvar</Btn>
               
            </BodyModal>
            </View>
     </Modal>
  );
};


export default ModalCadastro;

const Ovarlay = styled.TouchableOpacity`
background-color: rgba(0,0,0,0.5);
position: absolute;
top: 0px;
bottom: 0px;
left: 0px;
right: 0px;
`
const HeadModal = styled.View`
background-color: #B2DDDC;
justify-content: center;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
height: 40px;
width: 100%;
padding-left: 15px;
`
const HeadTile = styled.Text`
font-size: 18px;
color: #277778;
font-weight: bold;
`
const BodyModal = styled.View`
background-color: #FFF;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
width: 100%;
padding: 15px;
`
const Label = styled.Text`
font-size: 18px;
color: #000;
font-weight: bold;
`
const Txt = styled.Text`
font-size: 18px;
color: #000;
margin-bottom: 5px;
margin-Top: 5px;
`

const TagContainer = styled.View`
width: 100%;
padding: 5px;
flex-direction: row;
flex-wrap: wrap; 
`

const TextInput = styled.TextInput`
background-color: #D8D8D8;
width: 100%;
padding: 15px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
border-bottom-left-radius:5px;
border-bottom-right-radius: 5px;
margin-bottom: 5px;
margin-top: 10px;
min-height:150px;
`