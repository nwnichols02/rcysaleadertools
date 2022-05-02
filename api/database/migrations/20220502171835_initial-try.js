/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("prayers", (tbl) => {
      tbl.increments("prayer_id");
      tbl.string("prayer_name_opening", 64);
      tbl.string("prayer_name_closing", 64);
      tbl.date("prayer_date").notNullable();
    })
    .createTable("talks", (tbl) => {
      tbl.increments("talk_id");
      tbl.string("talk_name_1st", 64).notNullable();
      tbl.string("talk_name_2nd", 64).notNullable();
      tbl.date("talk_date").notNullable();
    })
    .createTable("new_members", (tbl) => {
      tbl.increments("new_member_id");
      tbl.string("first_name", 64).notNullable();
      tbl.string("last_name", 64).notNullable();
      tbl.date("date_moved_in");
      tbl.string("gender", 16).notNullable();
      tbl.integer("age").notNullable();
      tbl.string("phone", 16);
      tbl.string("email", 256);
      tbl.boolean("met_with_bishopric").defaultTo(false);
      tbl.date("date_met_with_bishopric");
    })
    .createTable("callings", (tbl) => {
      tbl.increments("calling_id");
      tbl.string("first_name", 64).notNullable();
      tbl.string("last_name", 64).notNullable();
      tbl.string("name_of_interviewer", 64).notNullable();
      tbl.date("calling_issued_date");
      tbl.string("calling_assigned", 64).notNullable();
      tbl.date("sustained_date");
      tbl.date("set_apart_date");
      tbl.string("notes", 2048);
      tbl.boolean("bishopric_approval").defaultTo(false);
      tbl.boolean("set_appointment").defaultTo(false);
      tbl.boolean("calling_accepted").defaultTo(false);
      tbl.boolean("calling_declined").defaultTo(false);
      tbl.boolean("sustained").defaultTo(false);
      tbl.boolean("set_apart").defaultTo(false);
      tbl.boolean("release_from_current_calling").defaultTo(false);
      tbl.string("release_from_current_calling_name", 64);
      tbl.boolean("updated_lcr").defaultTo(false);
      tbl.boolean("require_bishop").defaultTo(false);
      tbl.boolean("completed").defaultTo(false);
    })
    .createTable("agendas", (tbl) => {
      tbl.increments("agenda_id");
      tbl.string("conducting", 64);
      tbl.string("presiding", 64);
      tbl.date("date");
      tbl.string("special_acknowledgements", 256);
      tbl.string("chorister", 64);
      tbl.string("organist", 64);
      tbl.string("opening_hymn", 64);
      tbl.string("opening_prayer", 64);
      tbl.string("releases", 256);
      tbl.string("callings", 256);
      tbl.string("new_members", 256);
      tbl.string("sacrament_hymn", 64);
      tbl.string("speaker_1", 64);
      tbl.string("speaker_2", 64);
      tbl.string("intermediate_hymn", 64);
      tbl.string("closing_hymn", 64);
      tbl.string("closing_prayer", 64);
      tbl.string("announcements", 1048);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("prayers")
    .dropTableIfExists("talks")
    .dropTableIfExists("new_members")
    .dropTableIfExists("callings")
    .dropTableIfExists("agendas");
};
