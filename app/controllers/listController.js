const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib')
/* Models */
const listModel = mongoose.model('List')

/**
 * function to read all Lists.
 */
let getAllList = (req, res) => {
    listModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'List Controller: getAllList', 10)
                let apiResponse = response.generate(true, 'Failed To Find List Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No List Found', 'List Controller: getAllList')
                let apiResponse = response.generate(true, 'No List Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All List Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all Lists

/**
 * function to read single List.
 */
let viewByListId = (req, res) => {

    if (check.isEmpty(req.params.listId)) {

        console.log('ListId should be passed')
        let apiResponse = response.generate(true, 'ListId is missing', 403, null)
        res.send(apiResponse)
    } else {

        listModel.findOne({ 'listId': req.params.listId }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('List Not Found.')
                let apiResponse = response.generate(true, 'List Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("List found successfully","ListController:ViewListById",5)
                let apiResponse = response.generate(false, 'List Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function to read Lists by category.
 */
let viewByCategory = (req, res) => {

    if (check.isEmpty(req.params.categoryId)) {

        console.log('categoryId should be passed')
        let apiResponse = response.generate(true, 'CategoryId is missing', 403, null)
        res.send(apiResponse)
    } else {

        listModel.find({ 'category': req.params.category }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Lists Not Found.')
                let apiResponse = response.generate(true, 'Lists Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Lists Found Successfully')
                let apiResponse = response.generate(false, 'Lists Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function to read Lists by author.
 */
let viewByAuthor = (req, res) => {

    if (check.isEmpty(req.params.author)) {

        console.log('author should be passed')
        let apiResponse = response.generate(true, 'author is missing', 403, null)
        res.send(apiResponse)
    } else {

        listModel.find({ 'author': req.params.author }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Lists Not Found.')
                let apiResponse = response.generate(true, 'Lists Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Lists Found Successfully')
                let apiResponse = response.generate(false, 'Lists Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function to edit List by admin.
 */
let editList = (req, res) => {
    console.log(req.params.listId +" Sanjay "+JSON.stringify(req.body));
    if (check.isEmpty(req.params.listId)) {

        console.log('ListId should be passed')
        let apiResponse = response.generate(true, 'ListId is missing', 403, null)
        res.send(apiResponse)
    } else {

        let options = req.body;
        console.log(options);
        listModel.update({ 'ListId': req.params.listId }, options, { multi: true }).exec((err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('List Not Found.')
                let apiResponse = response.generate(true, 'List Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('List Edited Successfully')
                let apiResponse = response.generate(false, 'List Edited Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function to find the assignment.
 */
let findListToEdit = (listId) => {

    if (check.isEmpty(req.params.listId)) {

        console.log('ListId should be passed')
        let apiResponse = response.generate(true, 'ListId is missing', 403, null)
        reject(apiResponse)
    } else {
        return new Promise((resolve, reject) => {
            listModel.findOne({ 'ListId': req.params.listId }, (err, list) => {
                if (err) {
                    console.log('Error Occured.')
                    logger.error(`Error Occured : ${err}`, 'Database', 10)
                    let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(list)) {
                    console.log('List Not Found.')
                    let apiResponse = response.generate(true, 'List Not Found', 404, null)
                    reject(apiResponse)
                } else {
                    console.log('List Found.')
                    resolve(list)
                }
            })
        })
    }
}

/**
 * function to delete the assignment collection.
 */
let deleteList = (req, res) => {

    if (check.isEmpty(req.params.listId)) {

        console.log('ListId should be passed')
        let apiResponse = response.generate(true, 'ListId is missing', 403, null)
        res.send(apiResponse)
    } else {

        listModel.remove({ 'ListId': req.params.listId }, (err, result) => {
            if (err) {
                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('List Not Found.')
                let apiResponse = response.generate(true, 'List Not Found.', 404, null)
                res.send(apiResponse)
            } else {
                console.log('List Deletion Success')
                let apiResponse = response.generate(false, 'List Deleted Successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function to create the List.
 */
let createList = (req, res) => {
    let listCreationFunction = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            if (check.isEmpty(req.body.title) || check.isEmpty(req.body.description) || check.isEmpty(req.body.listBody) || check.isEmpty(req.body.category)) {

                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'required parameters are missing', 403, null)
                reject(apiResponse)
            } else {

                var today = Date.now()
                let listId = shortid.generate()

                let newList = new listModel({

                    listId: listId,
                    title: req.body.title,
                    description: req.body.description,
                    bodyHtml: req.body.listBody,
                    category: req.body.category,
                    author: req.body.fullName,
                    created: today,
                    lastModified: today
                }) // end new List model

                newList.save((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log('Success in List creation')
                        resolve(result)
                    }
                }) // end new List save
            }
        }) // end new List promise
    } // end create List function

    // making promise call.
    listCreationFunction()
        .then((result) => {
            let apiResponse = response.generate(false, 'List Created successfully', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
}



module.exports = {

    getAllList: getAllList,
    createList: createList,
    viewByListId: viewByListId,
    viewByCategory: viewByCategory,
    viewByAuthor: viewByAuthor,
    editList: editList,
    deleteList: deleteList,

}// end exports