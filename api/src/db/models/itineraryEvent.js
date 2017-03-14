export default (sequelize, DataTypes) => {
  const schema = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    itineraryId: {
      field: 'itinerary_id',
      type: DataTypes.INTEGER
    },
    name: {
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
    status: {
      type: DataTypes.INTEGER
    }
  };

  const methods = {
    tableName: 'Itinerary_Events',
    timestamps: false
  };

  return sequelize.define('itineraryEvent', schema, methods);
};
