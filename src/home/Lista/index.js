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

            <ImagePerson source={{ uri: data.image }} />
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
margin: 2px 0;
align-items: center;
`;

const ImagePerson = styled.Image`
width: 98%;
height: 100%;
border-radius: 15px;
`;

const Name = styled.Text`
background-color: rgba(0,0,0,0.8);
position: absolute;
bottom: 0;
width: 98%;
text-align: center;
color: #FFF;
font-size: 17px;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
`;
