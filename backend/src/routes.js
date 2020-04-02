const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const routes = express.Router();
const DadosController = require('./controllers/DadosController');

routes.get('/', DadosController.index);
routes.post('/', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required().min(2),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(2),
        endereco: Joi.string().required().min(2),
        job: Joi.string().required().min(2),
        hobby: Joi.string().required().min(2),
        team: Joi.string().required().min(2),
    })
}), DadosController.create);

module.exports = routes;