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
    name: {
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
    tableName: 'itineraries',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
  };

  return sequelize.define('itinerary', schema, methods);
};
