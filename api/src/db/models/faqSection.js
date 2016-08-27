export default (sequelize, DataTypes) => {
  const schema = {
    id: {
      field: 'id',
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    faqId: {
      field: 'faq_id',
      type: DataTypes.INTEGER
    },
    name: {
      field: 'name',
      type: DataTypes.STRING
    }
  };

  const methods = {
    tableName: 'faq_sections',
    timestamps: false,
    classMethods: {
      associate: (models) => {
        models.faqSection.hasMany(models.faqQuestion, {
          foreignKey: 'section_id'
        });
      }
    }
  };

  return sequelize.define('faqSection', schema, methods);
};
