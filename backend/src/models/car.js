/* L’API Rest et la Base de données : Créer un modèle Sequelize */
export default (sequelize, DataTypes) => {
    const Car = sequelize.define('Car', {
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
      pricePerDay: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      numberOfSeat: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      timestamps: true,
      createdAt: true,
      updatedAt: false
    })
    
    Car.associate = models => {
      Car.hasMany(models.Booking, { foreignKey: 'carId', as: 'reservations' });
  };
  
  return Car;
}