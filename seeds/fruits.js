
exports.seed = async function(knex) {
  //this will delete data from databse
  await knex("fruits").truncate() //you can use del() as well, but .truncate is more powerful
  //this are our feeds for example data
  await knex("fruits").insert([
    { name: "dragon fruit", avgWeightOz: 16.7, delicious: true, color: "red" },
    { name: "durian", avgWeightOz: 52.9, delicious: false, color: "yellow" },
    { name: "rambutan", avgWeightOz: 1.1, delicious: true, color: "pink" },
    { name: "lingonberry", avgWeightOz: 0.01, delicious: true, color: "red" },
    { name: "golden gooseberry", avgWeightOz: 0.02, delicious: false, color: "yellow" },

  ])
};
