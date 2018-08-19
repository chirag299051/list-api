const express = require('express');
const router = express.Router();
const listController = require("./../controllers/listController");
const appConfig = require("./../../config/appConfig")


module.exports.setRouter = function(app){

	let baseUrl = appConfig.apiVersion+'/lists';
	
	

    app.get(baseUrl+'/all',listController.getAllList);

	/**
	 * @api {get} /api/v1/lists/all Get all lists
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * 
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All list Details Found",
	    "status": 200,
	    "data": [
					{
						listId: "string",
						title: "string",
						description: "string",
						bodyHtml: "string",
						category: "string",
						author: "string",
						created: "date",
						lastModified: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find list Details",
	    "status": 500,
	    "data": null
	   }
	 */


    app.get(baseUrl+'/view/:listId',listController.viewByListId);

    /**
	 * @api {get} /api/v1/lists/view/:listId Get a single list
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * 
	 * @apiParam {String} listId The listId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "list Found Successfully.",
	    "status": 200,
	    "data": {
	    			_id: "string",
	    			__v: number
					listId: "string",
					title: "string",
					description: "string",
					bodyHtml: "string",
					category: "string",
					author: "string",,
					created: "date",
					lastModified: "date"
				}
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl+'/view/by/author/:author',listController.viewByAuthor);

    /**
	 * @api {get} /api/v1/lists/view/by/author/:author Get lists by author
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * 
	 * @apiParam {String} author author of the list passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "lists Found Successfully.",
	    "status": 200,
	    "data": [
					{
						listId: "string",
						title: "string",
						description: "string",
						bodyHtml: "string",
						category: "string",
						author: "string",
						created: "date",
						lastModified: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl+'/view/by/category/:category',listController.viewByCategory);

    /**
	 * @api {get} /api/v1/lists/view/by/category/:category Get lists by category
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * 
	 * @apiParam {String} category category of the list passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "lists Found Successfully.",
	    "status": 200,
	    "data": [
					{
						listId: "string",
						title: "string",
						description: "string",
						bodyHtml: "string",
						category: "string",
						author: "string",
						created: "date",
						lastModified: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(baseUrl+'/:listId/delete',listController.deleteList);

    /**
	 * @api {post} /api/v1/lists/:listId/delete Delete list by listId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * 
	 * @apiParam {String} listId listId of the list passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "list Deleted Successfully",
	    "status": 200,
	    "data": []
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    app.put(baseUrl+'/:listId/edit',listController.editList);

    /**
	 * @api {put} /api/v1/lists/:listId/edit Edit list by listId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * 
	 * @apiParam {String} listId listId of the list passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "list Edited Successfully.",
	    "status": 200,
	    "data": [
					{
						listId: "string",
						title: "string",
						description: "string",
						bodyHtml: "string",
						category: "string",
						author: "string",
						created: "date",
						lastModified: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(baseUrl+'/create',listController.createList);

    /**
	 * @api {post} /api/v1/lists/create Create list
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * 
	 * @apiParam {String} title title of the list passed as a body parameter
	 * @apiParam {String} description description of the list passed as a body parameter
	 * @apiParam {String} listBody listBody of the list passed as a body parameter
	 * @apiParam {String} category category of the list passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "list Created successfully",
	    "status": 200,
	    "data": [
					{
						listId: "string",
						title: "string",
						description: "string",
						bodyHtml: "string",
						category: "string",
						author: "string",
						created: "date",
						lastModified: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */


}

