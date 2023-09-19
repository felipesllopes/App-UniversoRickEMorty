import { useState } from "react";
import { Dimensions, Modal } from "react-native";
import styled from "styled-components/native";
import ModalPerson from "../../components/ModalPerson";

export default function Lista({ data }) {

    const screenWidth = Dimensions.get('window').width;
    const itemWidth = screenWidth / 2;
    const [modalVisible, setModalVisible] = useState(false);

    function openModal(visible) {
        setModalVisible(visible);
    }

    return (
        <Container activeOpacity={0.7} onPress={() => openModal(true)}
            style={{ width: itemWidth, height: itemWidth }}>
                
            <ImagePerson source={{ uri: data.image }} resizeMode="contain" />
            <Name>{data.name}</Name>

            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <ModalPerson
                    data={data}
                    close={() => setModalVisible(false)}
                />
            </Modal>

        </Container>
    )
}

const Container = styled.TouchableOpacity`
flex: 1;
margin: 2px;
`;

const ImagePerson = styled.Image`
width: 100%;
height: 100%;
border-radius: 15px;
`;

const Name = styled.Text`
background-color: rgba(0,0,0,0.8);
position: absolute;
bottom: 0;
width: 100%;
text-align: center;
color: #FFF;
font-size: 17px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
`;
