import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import ProductCategory from './ProductCategory'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public category_id: number

  @column()
  public category_name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => ProductCategory)
  public productCategories: HasMany<typeof ProductCategory>
}
