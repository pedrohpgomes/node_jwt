/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
    .createTable('devices', (table) => {
        table.increments('id').primary();
        table
            .integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE');
        table.string('device_identifier').notNullable();
        table.string('user_agent');
        table.string('ip');
        table.timestamps(true, true);

        // Índices
        table.index('user_id', 'idx_devices_user_id');
        table.index('device_identifier', 'idx_devices_identifier');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('devices');
};
