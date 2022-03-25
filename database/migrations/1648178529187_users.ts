import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('user_id').primary()
      table.string('email', 255).notNullable().unique()
      table.string('fullname', 53).notNullable()
      table.string('password', 183).notNullable()
      table.string('address', 255).nullable()
      table.string('phone', 18).nullable().unique()
      table.string('user_type', 23)
      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
