const path = require("path");
const { locales }= require ("./src/const");
module.exports= {
  i18n: {
    defaultLocale: "ca",
    locales: locales,
  },
  localePath: path.resolve("./src/data/locales"),
};
