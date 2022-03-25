import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Transactions extends BaseSchema {
  protected tableName = 'transactions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('transaction_id')
      table.date('transaction_date').notNullable()
      table
        .integer('product_id')
        .unsigned()
        .references('product_id')
        .inTable('products')
        .onDelete('CASCADE')
      table.integer('transaction_qty', 3).defaultTo(0).notNullable()
      table.integer('user_id').unsigned().references('user_id').inTable('users').onDelete('CASCADE')
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
