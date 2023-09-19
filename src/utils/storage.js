import AsyncStorage from '@react-native-async-storage/async-storage';

const key = "@apprickandmorty";

/**
 * List all favorite characters.
 * @param {*} key 
 * @returns 
 */
export async function getFavorites() {
    const favorites = await AsyncStorage.getItem(key)
    return JSON.parse(favorites) || [];
}

/**
 * Check if it is already favorite when opening character details screen.
 * @param {*} key 
 * @param {*} value 
 * @returns 
 */
export async function isFavorite(value) {
    let myFavorites = await getFavorites(key);

    let hasItem = myFavorites.some(item => item.id === value.id)

    if (hasItem) {
        return true
    } else {
        return false;
    }
}

/**
 * Add character to favorites.
 * @param {*} key 
 * @param {*} value 
 */
export async function adcFavorite(value) {

    let myFavorites = await getFavorites(key);

    myFavorites.push(value);

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites))
}

/**
 * Remove character to favorites
 * @param {*} key 
 * @param {*} id 
 * @returns 
 */
export async function rmvFavorite(id) {

    let receipes = await getFavorites(key)

    let myFavorites = receipes.filter(item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites));

    return myFavorites;
}