
module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuario', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true, allowNull: false, primaryKey: true
        },
        login: {
            type: Sequelize.STRING, allowNull: false
        },
        senha: {
            type: Sequelize.STRING, allowNull: false
        },
        /* Tipo
            0: Admin
            1: Ténico
            2: Usuario
        */
        tipo: {
            type: Sequelize.INTEGER, allowNull: false
        }
    });
    return Usuario;
}