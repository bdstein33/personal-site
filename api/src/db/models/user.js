export default (sequelize, DataTypes) => {
  const schema = {
    id: {
      field: 'id',
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    firstName: {
      field: 'first_name',
      type: DataTypes.STRING
    },
    lastName: {
      field: 'last_name',
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    apiToken: {
      field: 'api_token',
      type: DataTypes.STRING
    }
  };

  const methods = {
    tableName: 'users',
    timestamps: false
  };

  return sequelize.define('user', schema, methods);
};
