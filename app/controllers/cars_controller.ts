import type { HttpContext } from '@adonisjs/core/http'

export default class CarsController {
  async index({ view }: HttpContext) {
    return view.render('pages/cars', {
      cars: [
        { name: 'BMW', slug: 'bmw', color: 'red', description: '<span>Das een BMW jongeuh</span>' },
        {
          name: 'Audi',
          slug: 'audi',
          color: 'green',
          description: '<span>Das een Audi jongeuh huuuuuujjjjjjjjjjjjjjjjjjjj</span>',
        },
      ],
    })
  }

  async show({ view, params }: HttpContext) {
    const cars = [
      { name: 'BMW', slug: 'bmw' },
      { name: 'Audi', slug: 'audi' },
    ]
    const car: { name: string; slug: string } | undefined = cars.find(
      (c: { name: string; slug: string }) => c.slug === params.name
    )
    return view.render('pages/cars', { car: car })
  }
}
