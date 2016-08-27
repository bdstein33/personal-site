export default (sequelize, DataTypes) => {
  const schema = {
    id: {
      field: 'id',
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    userId: {
      field: 'user_id',
      type: DataTypes.INTEGER
    },
    name: {
      field: 'name',
      type: DataTypes.STRING
    }
  };

  const methods = {
    tableName: 'faqs',
    timestamps: false
  };

  return sequelize.define('faq', schema, methods);
};
