/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
        email: 'teste@teste.com',
        password_hash: '$2b$10$HH76M6YxD7RBDqmCH.FmR.Ncr683de5JAPP.zwlgq3KfU5UtBOCJq',//123456
        name: 'User Teste'
    }
  ]);
};