export default (sequelize, DataTypes) => {
  const schema = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.STRING
    },
    value: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE
    },
    deletedAt: {
      field: 'deleted_at',
      type: DataTypes.DATE
    }
  };

  const methods = {
    tableName: 'Number_Training_Data',
    timestamps: true
  };

  return sequelize.define('numberTrainingData', schema, methods);
};
