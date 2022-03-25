import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductCategories extends BaseSchema {
  protected tableName = 'product_categories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('product_id')
        .unsigned()
        .references('product_id')
        .inTable('products')
        .onDelete('CASCADE')
      table
        .integer('category_id')
        .unsigned()
        .references('category_id')
        .inTable('categories')
        .onDelete('CASCADE')
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
