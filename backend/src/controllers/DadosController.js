const pdf = require('html-pdf');
const nodeMailer = require('nodemailer');
const fs = require('fs');

const pdfTemplate = require('../documents');
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

        pdf.create(pdfTemplate(request.body), {}).toFile('src/documents/result.pdf', (err) => {
            if(err){
                response.send(Promise.reject());
            }
        })

        var transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'MeuNegocioTeste.contato@gmail.com',
              pass: 'Senha1234'
            }
        });

        var mailOptions = {
            from: 'MeuNegocioTeste.contato@gmail.com',
            to: [email],
            subject: 'Sending Email using Node.js',
            text: 'That was easy!',
            attachments: {
                filename: "Arquivo.pdf",
                path: 'src/documents/result.pdf'
            }
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });

        /* fs.unlink('src/documents/result.pdf', function (err) {
            if (err) throw err;
            console.log('File deleted!');
        }); */

        return response.status(204).send();
    }
};





