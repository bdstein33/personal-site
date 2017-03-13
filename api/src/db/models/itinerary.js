export default (sequelize, DataTypes) => {
  const schema = {
    id: {
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
    },
    deletedAt: {
      field: 'deleted_at',
      type: DataTypes.DATE
    }
  };

  const methods = {
    tableName: 'Itineraries',
    timestamps: true,
    paranoid: true
  };

  return sequelize.define('itinerary', schema, methods);
};
