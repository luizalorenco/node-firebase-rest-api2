// definindo a utilização do 'strict' mode
'use strict'

// definindo os 'imports'
const firebase = require('../../db')
const firestore = firebase.firestore()

class repositoryBase {
    constructor(model) {
        this._model = model
    }

    modelBase = require('../../models/' + this._model)

    async create(data) {
        let res = await firestore.collection(this._collection)
        return res
    }

    async update(id,data) {
        let doc = await firestore.collection(this._collection).doc(id)
        let res = await doc.update(data)
        return res
    }

    async getAll() {
        let col = await firestore.collection(this._collection)
        let res = await col.get()
        let docArray = []
    }
}