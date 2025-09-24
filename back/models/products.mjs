// Crear modelo a partir de SEQUELIZE
/*
 * el modelo debe contener
 * id INTEGER
 * name STRING
 * price FLOAT
 * stock INTEGER
 * created_at DATETIME  - Lo crea SEQUELIZE automaticamente
 * updated_at DATETIME - Lo crea SEQUELIZE automaticamente
 *
 */
// Guia https://sequelize.org/docs/v6/core-concepts/model-basics/
// Opción Extending Model
import { sequelize } from "../config/db.mjs";

import { DataTypes, Model } from "sequelize"

class Product extends Model { }

Product.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {

        sequelize, // We need to pass the connection instance
        modelName: 'Productos', // We need to choose the model name
        tableName: 'productos'
    },
);