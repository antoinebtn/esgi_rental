/* L’API Rest et la Base de données : Créer un modèle Sequelize */
export default (sequelize, DataTypes) => {
    return sequelize.define('Car', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false
      },
    }, {
      timestamps: true,
      createdAt: true,
      updatedAt: false
    })
  }