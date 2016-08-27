export default (sequelize, DataTypes) => {
  const schema = {
    id: {
      field: 'id',
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    sectionId: {
      field: 'section_id',
      type: DataTypes.INTEGER
    },
    name: {
      field: 'name',
      type: DataTypes.STRING
    },
    content: {
      field: 'content',
      type: DataTypes.STRING
    }
  };

  const methods = {
    tableName: 'faq_questions',
    timestamps: false,
    classMethods: {
      associate: (models) => {
        models.faqQuestion.belongsTo(models.faqSection, {
          foreignKey: 'section_id'
        });
      }
    }
  };

  return sequelize.define('faqQuestion', schema, methods);
};
