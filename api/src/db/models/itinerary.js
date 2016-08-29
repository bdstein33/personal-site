export default (sequelize, DataTypes) => {
  const schema = {
    id: {
      field: 'id',
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    creatorId: {
      field: 'creator_id',
      type: DataTypes.STRING
    },
    startTime: {
      field: 'start_time',
      type: DataTypes.DATE
    },
    endTime: {
      field: 'end_time',
      type: DataTypes.DATE
    }
  };

  const methods = {
    tableName: 'users',
    timestamps: true,
    paranoid: true
  };

  return sequelize.define('user', schema, methods);
};
