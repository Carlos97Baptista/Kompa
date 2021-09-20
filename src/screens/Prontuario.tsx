

import React, {useState} from 'react';
import styled from 'styled-components';
import Btn from '../Components/Btn/Btn';
import ItemProntuario from '../Components/ItemProntuario/ItemProntuario';
import ModalCadastro from '../Components/Modal/Modal';
import {FlatList} from 'react-native'


const Prontuario = () => {
    const [visible, setVisible] = useState(false);
    const [prontuarios, setProntuarios] = useState([]);

    const handleAddProntuario = (val) => {
        let list = [...prontuarios];
        list.push(val);
        setProntuarios(list)
        console.log(val.created_at)
    }
  return (
    <Container>
        
        { prontuarios.length > 0 ? <FlatList data={prontuarios}  renderItem={({ item }) => <ItemProntuario val={item} />} />:
               <TxtSec>Nenhum prontuário cadastrado.</TxtSec>}
     <Btn onPress={() => setVisible(true)}>Adicionar novo prontuário</Btn>
     <ModalCadastro atualiza={handleAddProntuario} setClose={() => setVisible(false)} visible={visible}/>
   </Container>
  );
};


export default Prontuario;

const Container = styled.View`
background-color: #E3E3E3;
flex: 1;
padding: 15px;
`
const TxtSec = styled.Text`
font-size: 18px;
color: #444;
`

