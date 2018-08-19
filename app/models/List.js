const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let listSchema = new Schema(
    {
        listId: {
            type: String,
            unique: true
        },
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        bodyHtml: {
            type: String,
            default: ''
        },
        category: {
            type: String,
            default: ''
        },
        author: {
            type: String,
            default: ''
        },
        created: {
            type: Date,
            default: Date.now
        }, 

        lastModified: {
            type: Date,
            default: Date.now
        }

    }
)

mongoose.model('List', listSchema);