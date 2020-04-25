module.exports = ({ name, email, whatsapp, endereco, job, hobby, team}) => {
    return `
        <!doctype html>
        <html>
            <body>
                <h2>Nome: ${name}</h2>
                <h2>E-mail: ${email}</h2>
                <h2>WhatsApp: ${whatsapp}</h2>
                <h2>Endereço: ${endereco}</h2>
                <h2>Endereço: ${job}</h2>
                <h2>Hobby: ${hobby}</h2>
                <h2>Team: ${team}</h2>
            </body>
        </html>
    `;
}