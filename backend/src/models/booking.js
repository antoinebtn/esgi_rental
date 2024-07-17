export default (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    carId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: true,
    createdAt: true,
    updatedAt: false
  });
  Booking.associate = models => {
    Booking.belongsTo(models.Car, { foreignKey: 'carId' });
  };

  return Booking;
};