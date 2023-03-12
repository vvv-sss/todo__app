const TODO = require('../sequelize/models').TODO;

module.exports = {
    create(req, res) {
        return TODO
            .create({
                taskTitle: req.body.taskTitle,
                groupId: req.body.groupId,
                groupTitle: req.body.groupTitle,
                taskDescription: req.body.taskDescription,
                subtasks: req.body.subtasks,
                isCompleted: req.body.isCompleted
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => res.status(400).send(error));
    },
    retrieve(req, res) {
        return TODO
            .findByPk(req.params.id)
            .then(todo => {
                if (!todo) {
                    return res.status(404).send({
                    message: 'Todo Not Found',
                    });
                }
                return res.status(200).send(todo);
                })
            .catch(error => res.status(400).send(error));
    }, 
    update(req, res) {
        return TODO
            .findByPk(req.params.id)
            .then(todo => {
                if (!todo) {
                    return res.status(404).send({
                    message: 'Todo Not Found',
                    });
                }
                return todo
                    .update({
                        taskTitle: req.body.taskTitle || todo.taskTitle,
                        groupId: req.body.groupId || todo.groupId,
                        groupTitle: req.body.groupTitle || todo.groupTitle,
                        taskDescription: req.body.taskDescription || todo.taskDescription,
                        subtasks: req.body.subtasks || todo.subtasks,
                        isCompleted: req.body.isCompleted || todo.isCompleted
                    })
                    .then(() => res.status(200).send(todo))
                    .catch((error) => res.status(400).send(error));
                })
            .catch((error) => res.status(400).send(error));
    },
    destroy(req, res) {
        return TODO
            .findByPk(req.params.id)
            .then(todo => {
            if (!todo) {
                return res.status(400).send({
                message: 'Todo Not Found',
                });
            }
            return todo
                .destroy()
                .then(() => res.status(204).send())
                .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return TODO
            .findAll()
            .then(todos => res.status(200).send(todos))
            .catch(error => res.status(400).send(error));
    }
};