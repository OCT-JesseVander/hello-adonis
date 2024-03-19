/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const CarsController = () => import('#controllers/cars_controller')
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home').as('home')
router.get('/cars', [CarsController, 'index']).as('cars.list')
router.get('cars/:name', [CarsController, 'show']).as('cars.show')
