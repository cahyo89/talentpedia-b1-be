import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
import User from './User'

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  public transaction_id: number

  @column()
  public transaction_date: Date

  @column()
  public product_id: number

  @column()
  public transaction_qty: number

  @column()
  public user_id: number

  @column()
  public transaction_price: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Product, {
    foreignKey: 'product_id',
  })
  public product: BelongsTo<typeof Product>

  @belongsTo(() => User, {
    foreignKey: 'user_id',
  })
  public user: BelongsTo<typeof User>
}
