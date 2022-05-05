/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("talks").truncate()
      // .del()
      .then(function () {
        return knex("talks").insert([
          {
            talk_name_1st: "Darren B.",
            talk_name_2nd: "Karoly D.",
            talk_date: '2022-01-23'
        },
        {
              talk_name_1st: "Sister Case",
              talk_name_2nd: "Brother Case",
              talk_date: '2022-02-13'
            },
            {
                talk_name_1st: "Abby S.",
                talk_name_2nd: "Trey E.",
                talk_date: '2022-02-20'
            },
            {
                talk_name_1st: "Michelle B.",
                talk_name_2nd: "Josh B.",
                talk_date: '2022-02-27'
          },
        ]);
      });
  };