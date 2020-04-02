const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const dados = await connection('dados').select('*');

        return response.json(dados);
    },

    async create(request, response){
        const { name, email, whatsapp, endereco, job, hobby, team } = request.body;

        await connection('dados').insert({
            name,
            email,
            whatsapp,
            endereco,
            job,
            hobby,
            team
        })

        return response.status(204).send();
    }
};