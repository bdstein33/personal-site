export default (sequelize, DataTypes) => {
  const schema = {
    feature: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    coefficient: {
      type: DataTypes.DECIMAL
    }
  };

  const methods = {
    tableName: 'Number_Features',
    timestamps: false
  };

  return sequelize.define('numberFeature', schema, methods);
};
