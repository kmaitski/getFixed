

module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('listing', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    user_id: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    location: DataTypes.STRING,
    image: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
  });
  return Listing;
};
