import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "mentormedb",
  "prosperbanda",
  "Themanhimself09!",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
