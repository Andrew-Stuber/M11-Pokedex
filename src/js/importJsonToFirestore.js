/* eslint-disable no-undef */
const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

const jsonFilePath = '../../db.json'

const jsonData = require(jsonFilePath)

const pokemonsData = jsonData['Pokemons']

pokemonsData.forEach(async (pokemon) => {
    try {
        await db.collection('pokemons').doc(pokemon.id.toString()).set(pokemon)
        console.log(`Pokemon ${pokemon.name} successfully added to Firestore`)
    } catch (error) {
        console.error(`Error adding Pokemon ${pokemon.name}: `, error)
    }
})

console.log('Data import process completed.')
