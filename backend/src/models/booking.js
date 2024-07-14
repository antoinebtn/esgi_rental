export default (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      carId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Cars',
          key: 'id'
        },
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        allowNull: false
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      timestamps: true,
      createdAt: true,
      updatedAt: false
    });

    Booking.associate = models => {
      Booking.belongsTo(models.Car, { foreignKey: 'carId', as: 'car' });
      Booking.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    };
}
  