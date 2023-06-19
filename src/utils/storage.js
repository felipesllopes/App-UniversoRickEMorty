import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getFavorites(key) {
    const favorites = await AsyncStorage.getItem(key)
    // console.log(favorites)
    return JSON.parse(favorites) || [];
}

// verificar se já é favorito quando abrir tela de detalhes do personagem
export async function isFavorite(key, value) {
    let myFavorites = await getFavorites(key);

    let hasItem = myFavorites.some(item => item.id === value.id)

    if (hasItem) {
        return true
    } else {
        return false;
    }
}

export async function adcFavorite(key, value) {

    let myFavorites = await getFavorites(key);

    let hasItem = myFavorites.some(item => item.id === value.id)

    if (hasItem) {
        alert("Este personagem já está salvo em seus favoritos")
        return;
    }

    myFavorites.push(value);

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites))
    console.log("Salvo com sucesso");
    alert("Personagem salvo com sucesso!")

}

export async function rmvFavorite(key, id) {

    let receipes = await getFavorites(key)

    let myFavorites = receipes.filter(item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites));

    console.log("Item deletado")
    alert("Personagem removido!")
    return myFavorites;
}