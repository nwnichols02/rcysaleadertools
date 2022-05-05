/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("new_members").truncate()
      // .del()
      .then(function () {
        return knex("new_members").insert([
          {
            first_name: 'johnny',
            last_name: 'spartan',
            date_moved_in: '2022-05-01',
            gender: 'M',
            age: '21',
            phone: '555-555-5555',
            email: 'fake@email.com',
            met_with_bishopric: false,
            date_met_with_bishopric: ''
        },
        {
            first_name: 'susy',
            last_name: 'joes',
            date_moved_in: '2022-04-01',
            gender: 'F',
            age: '25',
            phone: '555-555-5555',
            email: 'fake@email.com',
            met_with_bishopric: true,
            date_met_with_bishopric: '2022-05-10'
        },
        {
            first_name: 'billy',
            last_name: 'smith',
            date_moved_in: '2022-01-01',
            gender: 'M',
            age: '27',
            phone: '555-555-5555',
            email: 'fake@email.com',
            met_with_bishopric: false,
            date_met_with_bishopric: ''
        },
        {
            first_name: 'ally',
            last_name: 'long',
            date_moved_in: '2021-07-01',
            gender: 'F',
            age: '20',
            phone: '555-555-5555',
            email: 'fake@email.com',
            met_with_bishopric: false,
            date_met_with_bishopric: ''
          },
        ]);
      });
  };