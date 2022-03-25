import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('product_id').primary()
      table.string('product_name', 101).notNullable()
      table.integer('product_stock', 3).defaultTo(0)
      table.string('product_image', 101).notNullable()
      table.decimal('product_price', 9, 2).defaultTo(0)
      table.text('product_description').notNullable()
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
