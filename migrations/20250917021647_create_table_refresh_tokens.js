/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
    .createTable('refresh_tokens', (table) => {
        table.increments('id').primary();
        table
            .integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE');
        table
            .integer('device_id')
            .unsigned()
            .references('id')
            .inTable('devices')
            .onDelete('CASCADE');
        table.string('token').notNullable().unique();
        table.boolean('is_revoked').defaultTo(false);
        table.timestamps(true, true);

        // Índices
        table.index('user_id', 'idx_refresh_tokens_user_id');
        table.index('device_id', 'idx_refresh_tokens_device_id');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('refresh_tokens');
};
