import { FontAwesome } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Keyboard } from "react-native";
import styled from 'styled-components/native';
import api from "../services/api";
import Lista from "./Lista";

export default function Home() {

    const [character, setCharacter] = useState([]);
    const [page, setPage] = useState(null);
    const [submitPage, setSubmitPage] = useState('1');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true)
            await api.get(`/character?page=${submitPage}`)
                .then(async (current) => {
                    setCharacter(await current.data);
                    setLoading(false)
                })
                .catch((err) => {
                    Alert.alert(
                        'Página não encontrada',
                        `${err}`
                    )
                    setLoading(false)
                    return;
                })
        })()
    }, [submitPage])

    function search() {
        if (page >= 1 && page <= 42) {
            setSubmitPage(page)
            setPage("");
            Keyboard.dismiss();
        } else {
            Alert.alert(
                'Página não encontrada',
                'Digite uma página de 1 a 42.',
            )
            setPage("")
            return;
        }
    }

    return (
        <Container>

            <ViewSearch>
                <Input
                    placeholder='Página'
                    keyboardType="numeric"
                    value={page}
                    onChangeText={(text) => setPage(text)}
                    maxLength={2}
                />
                <ButtonSearch name="search" size={30} onPress={search} />
            </ViewSearch>

            <TextPag>Página {submitPage} de 42</TextPag>

            {loading ?
                <Loading size={50} color={'#000'} />
                :
                <FlatList
                    data={character.results}
                    renderItem={({ item }) => <Lista data={item} screen={'lista'} />}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                />
            }

        </Container>
    )
}

const Container = styled.SafeAreaView`
flex: 1;
background-color: #32CD32;
`;

const ViewSearch = styled.View`
background-color: #FFF;
flex-direction: row;
justify-content: space-between;
padding: 6px 10px;
border-top-width: 3px;
border-bottom-width: 3px;
`;

const Input = styled.TextInput`
font-size: 18px;
flex: 1;
`;

const ButtonSearch = styled(FontAwesome)`
padding: 0 10px;
`;

const TextPag = styled.Text`
margin: 3px;
margin-left: 10px;
font-weight: bold;
`;

const Loading = styled(ActivityIndicator)`
align-items: center;
justify-content: center;
flex: 1;
`;