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
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
    startDate: {
      field: 'start_date',
      type: DataTypes.DATE
    },
    endDate: {
      field: 'end_date',
      type: DataTypes.DATE
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE
    },
    updatedAt: {
      field: 'updated_at',
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
