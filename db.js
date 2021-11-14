const {Sequelize} = require('sequelize')

/*module.exports = new Sequelize(
    `${process.env.DB_NAME}`,
    `${process.env.DB_USER}`,
    `${process.env.DB_PASSWORD}`,
    {
        dialect: 'postgres',
        host: `${process.env.DB_HOST}`,
        port: `${process.env.DB_PORT}`,

    }
)*/
module.exports = new Sequelize(
    `datosabmmm3i9o`,
    `iryydpveublrtf`,
    `baa756f4bc3c6d0ddbf782b0f34a960dce71e3a36641e68f0c2623449c3d8248`,
    {
        dialect: 'postgres',
        host: `ec2-34-250-19-18.eu-west-1.compute.amazonaws.com`,
        port: `5432`,

    }
)