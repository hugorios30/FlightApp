module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      email: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    },
    { 
      timestamps: false
    });

    const BookedFlight = sequelize.define("booked_flight", {
      flight_id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      from_to: {
        type: Sequelize.STRING
      },
      date:{
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      }
    },
    { 
      timestamps: false
    });

    BookedFlight.belongsTo(User, {
      targetKey: "email",
      foreignKey: 'user_email',
    });


    return {
      user: User,
      bookedFlight: BookedFlight
    }

  };