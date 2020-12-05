import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
    .initializeApp({databaseURL: 'https://ugd9999-8d47e.firebaseio.com'})
    .database()

    export const dessRef = db.ref('Mobil')
    export const dessRef1 = db.ref('Motor')
    export const dessRef2 = db.ref('Pelanggan')