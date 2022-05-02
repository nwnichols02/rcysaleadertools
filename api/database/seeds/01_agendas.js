/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("agendas").truncate()
    // .del()
    .then(function () {
      return knex("agendas").insert([
        {
          agenda_id: 1,
          conducting: "Justin J",
          presiding: "Bishop S.",
          date: '01/09/2022',
          opening_prayer: 'Kenley K',
          closing_prayer: 'Kenny O',
        },
        {
          agenda_id: 2,
          conducting: "Justin J",
          presiding: "Bishop S.",
          date: '01/09/2022',
          opening_prayer: 'Sydnee C',
          closing_prayer: 'Karoly D',
        },
        {
          agenda_id: 3,
          conducting: "Justin J",
          presiding: "Bishop S.",
          date: '01/09/2022',
          opening_prayer: 'Abby S',
          closing_prayer: 'Cole N',
        },
        {
          agenda_id: 4,
          conducting: "Justin J",
          presiding: "Bishop S.",
          date: '01/09/2022',
          opening_prayer: 'Katie C',
          closing_prayer: 'Preston C',
        },
      ]);
    });
};