import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({ response }: HttpContextContract) {
    const products = await Product.all()
    return response.status(200).json({ code: 200, status: 'success', data: products })
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const products = await Product.findBy('product_id', params.id)

      return response.status(200).json({ code: 200, status: 'success', data: products })
    } catch (error) {
      return response.status(500).json({ code: 500, status: 'error', message: error.message })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const input = request.only([
      'product_name',
      'product_stock',
      'product_image',
      'product_price',
      'product_description',
    ])
    try {
      const products = await Product.create(input)

      return response.status(200).json({ code: 200, status: 'success', data: products })
    } catch (error) {
      return response.status(500).json({ code: 500, status: 'error', message: error.message })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const input = request.only([
      'product_name',
      'product_image',
      'product_price',
      'product_description',
    ])
    try {
      const products = await Product.findBy('product_id', params.id)
      products?.merge(input)
      await products?.save()

      return response.status(200).json({ code: 200, status: 'success', data: products })
    } catch (error) {
      return response.status(500).json({ code: 500, status: 'error', message: error.message })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const products = await Product.findBy('product_id', params.id)
      products?.delete()

      return response.status(200).json({ code: 200, status: 'success', data: products })
    } catch (error) {
      return response.status(500).json({ code: 500, status: 'error', message: error.message })
    }
  }
}
