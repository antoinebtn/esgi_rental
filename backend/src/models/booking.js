export default (sequelize, DataTypes) => {
    return  sequelize.define('Booking', {
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
}
  