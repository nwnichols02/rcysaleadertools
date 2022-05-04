/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("prayers").truncate()
    // .del()
    .then(function () {
      return knex("prayers").insert([
        {
          prayer_id: 1,
          prayer_name_opening: "Kenley K",
          prayer_name_closing: "Kenny O",
          prayer_date: "2022-01-09",
        },
        {
          prayer_id: 2,
          prayer_name_opening: "Sydnee C",
          prayer_name_closing: "Karoly D",
          prayer_date: "2022-01-23",
        },
        {
          prayer_id: 3,
          prayer_name_opening: "Abby S",
          prayer_name_closing: "Cole N",
          prayer_date: "2022-02-06",
        },
        {
          prayer_id: 4,
          prayer_name_opening: "Katie C",
          prayer_name_closing: "Preston C",
          prayer_date: "2022-02-13",
        },
      ]);
    });
  // await knex('table_name').del()
  // await knex('table_name').insert([
  //   {id: 1, colName: 'rowValue1'},
  //   {id: 2, colName: 'rowValue2'},
  //   {id: 3, colName: 'rowValue3'}
  // ]);
};
