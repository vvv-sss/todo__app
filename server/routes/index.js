const usersController = require('../controllers').users;
const todosController = require('../controllers').todos;
const groupsController = require('../controllers').groups;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
    }));

    // #region

    // _______________________________________________________________________________________________________________

    /**
     * @swagger
     * components:
     *   schemas:
     *     TODO:
     *       type: object
     *       required:
     *         - id
     *         - taskTitle
     *         - isCompleted
     *       properties:
     *         id:
     *           type: integer
     *           description: The auto-generated id of the TODO
     *         taskTitle:
     *           type: string
     *           description: The title of the TODO
     *         groupId:
     *           type: integer
     *           description: The id of the Group for which the TODO is assigned to
     *         groupTitle:
     *           type: string
     *           description: The title of the Group for which the TODO is assigned to
     *         taskDescription:
     *           type: string
     *           description: The additional description of the TODO
     *         subtasks:
     *           type: array
     *           items:
     *             type: object
     *             properties:
     *               id:
     *                 type: integer
     *                 description: The manually-generated id of the subtask
     *               subtaskTitle:
     *                 type: string
     *                 description: The title of the subtask
     *               isChecked:
     *                 type: boolean
     *                 description: The completion status of the subtask
     *           description: The array with subtask objects of the TODO
     *         isCompleted:
     *           type: boolean
     *           description: The completion status of the TODO
     *       example:
     *         id: 3
     *         taskTitle: To complete Swagger documentation
     *         groupId: 2
     *         groupTitle: Test Task
     *         taskDescription: Write comprehensive API documentation using Swagger
     *         subtasks: [
     *           {id: 1, subtaskTitle: Install packages, isChecked: true}, 
     *           {id: 2, subtaskTitle: Connect swagger, isChecked: true}
     *         ]
     *         isCompleted: false
     *     Group:
     *       type: object
     *       required:
     *         - id
     *         - title
     *       properties:
     *         id:
     *           type: integer
     *           description: The auto-generated id of the Group
     *         groupTitle:
     *           type: string
     *           description: The title of the Group
     *         groupDescription:
     *           type: string
     *           description: The additional description of the Group
     *         todos:
     *           type: array
     *           items:
     *             $ref: '#/components/schemas/TODO'
     *           description: Associated TODOs with the Group
     *       example:
     *         id: 5
     *         groupTitle: Test Task
     *         groupDescription: Build TODO App using required technologies
     *         todos: []
     *     User:
     *       type: object
     *       required:
     *         - username
     *         - password
     *       properties:
     *         id:
     *           type: integer
     *           description: The auto-generated id of the User
     *         username:
     *           type: string
     *           description: Username for registration
     *         password:
     *           type: string
     *           description: Password for registration
     *       example:
     *         id: 14
     *         username: john_doe
     *         password: hashedPassword
     */

    // _______________________________________________________________________________________________________________

    /**
     * @swagger
     * tags:
     *   name: TODO
     *   description: The TODOs managing API
     */

    // _______________________________________________________________________________________________________________

    /**
     * @swagger
     * /api/todos:
     *   get:
     *     summary: Returns the list of all the TODOs
     *     tags: [TODO]
     *     responses:
     *       200:
     *         description: The list with all TODOs
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/TODO'
     */

    // _______________________________________________________________________________________________________________

    /**
     * @swagger
     * /api/todos/{id}:
     *   get:
     *     summary: Get the TODO by id
     *     tags: [TODO]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The TODO id
     *     responses:
     *       200:
     *         description: The TODO description by id
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/TODO'
     *       404:
     *         description: Todo Not Found
     */

    // ______________________________________________________________________________________________________________

    /**
     * @swagger
     * /api/todos:
     *   post:
     *     summary: Create a new TODO
     *     tags: [TODO]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/TODO'
     *     responses:
     *       201:
     *         description: The TODO was successfully created
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/TODO'
     *       400:
     *         description: Some server error
     */

    // _______________________________________________________________________________________________________________

    /**
     * @swagger
     * /api/todos/{id}:
     *  put:
     *    summary: Update the TODO by the id
     *    tags: [TODO]
     *    parameters:
     *      - in: path
     *        name: id
     *        schema:
     *          type: string
     *        required: true
     *        description: The TODO id
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/TODO'
     *    responses:
     *      200:
     *        description: The TODO was updated
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/TODO'
     *      404:
     *        description: The TODO was not found
     *      400:
     *        description: Some error happened
     */

    // _______________________________________________________________________________________________________________

    /**
     * @swagger
     * /api/todos/{id}:
     *   delete:
     *     summary: Remove the TODO by id
     *     tags: [TODO]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The TODO id
     *  
     *     responses:
     *       204:
     *         description: The TODO was deleted
     *       404:
     *         description: The TODO was not found
     *       400:
     *        description: Some error happened
     */

    // #endregion

    // ___TODOs routes________________________________________________________________________________________________
    app.get('/api/todos', todosController.list);
    app.get('/api/todos/:id', todosController.retrieve);
    app.post('/api/todos', todosController.create);
    app.put('/api/todos/:id', todosController.update);
    app.delete('/api/todos/:id', todosController.destroy);
    
    // _______________________________________________________________________________________________________________

    // #region

    /**
     * @swagger
     * tags:
     *   name: Group
     *   description: The Groups managing API
     */

    // _______________________________________________________________________________________________________________

    /**
     * @swagger
     * /api/groups:
     *   get:
     *     summary: Returns the list of all the Groups
     *     tags: [Group]
     *     responses:
     *       200:
     *         description: The list with all Groups
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Group'
     */

    // _______________________________________________________________________________________________________________

    /**
     * @swagger
     * /api/groups/{id}:
     *   get:
     *     summary: Get the Group by id
     *     tags: [Group]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The Group id
     *     responses:
     *       200:
     *         description: The Group description by id with all associated TODOs
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Group'
     *       404:
     *         description: Group Not Found
     */

    // ______________________________________________________________________________________________________________

    /**
     * @swagger
     * /api/groups:
     *   post:
     *     summary: Create a new Group
     *     tags: [Group]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Group'
     *     responses:
     *       201:
     *         description: The Group was successfully created
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Group'
     *       400:
     *         description: Some server error
     */

    // _______________________________________________________________________________________________________________

    /**
     * @swagger
     * /api/groups/{id}:
     *  put:
     *    summary: Update the Group by the id
     *    tags: [Group]
     *    parameters:
     *      - in: path
     *        name: id
     *        schema:
     *          type: string
     *        required: true
     *        description: The Group id
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/Group'
     *    responses:
     *      200:
     *        description: The Group was updated
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Group'
     *      404:
     *        description: The Group was not found
     *      400:
     *        description: Some error happened
     */
    // _______________________________________________________________________________________________________________

    /**
     * @swagger
     * /api/groups/{id}:
     *   delete:
     *     summary: Remove the Group by id
     *     tags: [Group]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The Group id
     *  
     *     responses:
     *       204:
     *         description: The Group was deleted
     *       404:
     *         description: The Group was not found
     *       400:
     *        description: Some error happened
     */

    // #endregion

    // ___Groups routes_______________________________________________________________________________________________
    app.get('/api/groups', groupsController.list);
    app.get('/api/groups/:id', groupsController.retrieve);
    app.post('/api/groups', groupsController.create);
    app.put('/api/groups/:id', groupsController.update);
    app.delete('/api/groups/:id', groupsController.destroy);

    // #region

    /**
     * @swagger
     * tags:
     *   name: User
     *   description: The Users managing API
     */

    // _______________________________________________________________________________________________________________

    /**
     * @swagger
     * /api/register:
     *   post:
     *     summary: Sign up a new user
     *     tags: [User]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/User'
     *     responses:
     *       201:
     *         description: The new user was successfully created
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *       409:
     *         description: User already exists
     *       500:
     *         description: Internal server error
     */

    // _______________________________________________________________________________________________________________

    /**
     * @swagger
     * /api/login:
     *   post:
     *     summary: Login the user
     *     tags: [User]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/User'
     *     responses:
     *       201:
     *         description: The user was successfully logged in
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *       401:
     *         description: Invalid credentials
     *       500:
     *         description: Internal server error
     */

        // _______________________________________________________________________________________________________________

    /**
     * @swagger
     * /api/logout:
     *   get:
     *     summary: Logout of the user
     *     tags: [User]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The User id
     *     responses:
     *       200:
     *         description: User logged out
     */

    // _______________________________________________________________________________________________________________

    /**
     * @swagger
     * /api/refresh:
     *   post:
     *     summary: Refresh of access token
     *     tags: [User]
     *     requestBody:
     *       required: true
     *     responses:
     *       200:
     *         description: The token was successfully refreshed
     *       401:
     *         description: Invalid token
     *       500:
     *         description: Internal server error
     */

    // _______________________________________________________________________________________________________________

    // #endregion

    // ___Auth routes_________________________________________________________________________________________________

    app.post('/api/register', usersController.register);
    app.post('/api/login', usersController.login);
    app.get('/api/logout', usersController.logout);
    app.post('/api/refresh', usersController.refreshAccessToken);
};