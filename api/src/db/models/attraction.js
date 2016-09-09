export default (sequelize, DataTypes) => {
  const schema = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    cost: {
      type: DataTypes.DECIMAL
    },
    suggestedDuration: {
      field: 'suggested_duration',
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
    tableName: 'Attractions',
    timestamps: true,
    paranoid: true,
  };

  return sequelize.define('attraction', schema, methods);
};
