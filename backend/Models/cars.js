export default (sequelize, DataTypes) => {
    let Cars = sequelize.define("cars", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        freezeTableName: true,
    });
    return Cars;
};


