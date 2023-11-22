import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyArfx6svVP273dUWtEWz-7df6iDc9JNmeU',
    authDomain: 'm11-pokedex.firebaseapp.com',
    projectId: 'm11-pokedex',
    storageBucket: 'm11-pokedex.appspot.com',
    messagingSenderId: '261257816994',
    appId: '1:261257816994:web:25802a919debf79f69e0fb'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
