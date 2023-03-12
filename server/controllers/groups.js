const Group = require('../sequelize/models').Group;
const TODO = require('../sequelize/models').TODO;

module.exports = {
    create(req, res) {
        return Group
            .create({
                groupTitle: req.body.groupTitle,
                groupDescription: req.body.groupDescription
            })
            .then(group => res.status(201).send(group))
            .catch(error => res.status(400).send(error));
    }, 
    retrieve(req, res) {
        return Group
            .findByPk(req.params.id, {
                include: [{
                    model: TODO,
                    as: 'todos'
                }]
            })
            .then(group => {
                if (!group) {
                    return res.status(404).send({
                        message: 'Group Not Found',
                    });
                }
                return res.status(200).send(group);
                })
            .catch(error => res.status(400).send(error));
        },
    update(req, res) {
        return Group
            .findByPk(req.params.id)
            .then(group => {
                if (!group) {
                    return res.status(404).send({
                    message: 'Group Not Found',
                    });
                }
                return group
                    .update({
                        groupTitle: req.body.groupTitle || group.groupTitle,
                        groupDescription: req.body.groupDescription || group.groupDescription
                    })
                    .then(() => res.status(200).send(group))
                    .catch((error) => res.status(400).send(error));
                })
            .catch((error) => res.status(400).send(error));
    },
    destroy(req, res) {
        return Group
            .findByPk(req.params.id)
            .then(group => {
            if (!group) {
                return res.status(400).send({
                message: 'Group Not Found',
                });
            }
            return group
                .destroy()
                .then(() => res.status(204).send())
                .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Group
            .findAll()
            .then(groups => res.status(200).send(groups))
            .catch(error => res.status(400).send(error));
    }
};