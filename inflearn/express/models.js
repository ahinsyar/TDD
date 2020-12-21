const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite',
    logging:false
});

const User = sequelize.define('User', {
    name: {
        type:Sequelize.DataTypes.STRING,//varchar 255
        unique:true
    }
})

module.exports = {
    Sequelize,
    sequelize,
    User
}