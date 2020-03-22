
exports.seed = async function(knex) {
  //clears out all rows in table when we run this seed ( npx knex seed:run )
  await knex("fruits").truncate()

  await knex("fruits").insert([
    { name: "moonberry" , avgWeightOz: 20.1, delicious: true, color: "blue"},
    { name: "juniperberry" , avgWeightOz: 55.1, delicious: true, color: "red"},
    { name: "elderberry" , avgWeightOz: 42.1, delicious: true, color: "purple"},
    { name: "saturnberry" , avgWeightOz: 12.1, delicious: false, color: "orange"},
    { name: "sunberry" , avgWeightOz: 45.1, delicious: true, color: "orange"}
  ])
};
