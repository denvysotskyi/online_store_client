import { makeAutoObservable } from 'mobx'
import iphone13pro128gb_graphite
  from '../../assets/images/iphone13pro_128gb_graphite.jpg'
import samsung_galaxy_z_fold3_12_256bg_phantom_black
  from '../../assets/images/samsung_galaxy_z_fold3_12_256bg_phantom_black.jpeg'
import iphone12_mini_64GB_black
  from '../../assets/images/iphone12_mini_64GB_black.jpeg'
import samsung_galaxy_s22_8_128gb_green
  from '../../assets/images/samsung_galaxy_s22_8_128gb_green.jpeg'
import xiaomi11T_128gb_meteorite_gray
  from '../../assets/images/xiaomi11T_128gb_meteorite_gray.jpeg'
import lenovo_legion_pro_256gb_blazing_blue
  from '../../assets/images/lenovo_legion_pro_256gb_blazing_blue.jpeg'

export default class DeviceStore {
  constructor() {
    this._types = [
      {
        id: 1,
        name: 'Телефоны'
      },
      {
        id: 2,
        name: 'Холодильники'
      },
      {
        id: 3,
        name: 'Часы'
      },
      {
        id: 4,
        name: 'Ноутбуки'
      }
    ]

    this._brands = [
      {
        id: 1,
        name: 'Apple'
      },
      {
        id: 2,
        name: 'Samsung'
      },
      {
        id: 3,
        name: 'Xiaomi'
      },
      {
        id: 4,
        name: 'Lenovo'
      }
    ]

    this._devices = [
      {
        id: 1,
        name: 'iPhone 13 Pro 128GB Graphite',
        price: 38445,
        rating: 5.0,
        image: iphone13pro128gb_graphite
      },
      {
        id: 2,
        name: 'Galaxy Z Fold3 12/256Gb Phantom Black',
        price: 56999,
        rating: 4.9,
        image: samsung_galaxy_z_fold3_12_256bg_phantom_black
      },
      {
        id: 3,
        name: 'iPhone 12 mini 64GB Black',
        price: 21087,
        rating: 4.3,
        image: iphone12_mini_64GB_black
      },
      {
        id: 4,
        name: 'Galaxy S22 8/128GB Green',
        price: 29999,
        rating: 4.1,
        image: samsung_galaxy_s22_8_128gb_green
      },
      {
        id: 5,
        name: '11T 8/128GB Meteorite Gray',
        price: 15499,
        rating: 4.4,
        image: xiaomi11T_128gb_meteorite_gray
      },
      {
        id: 6,
        name: 'Legion Pro 12/256Gb Blazing Blue',
        price: 24750,
        rating: 4.6,
        image: lenovo_legion_pro_256gb_blazing_blue
      }
    ]

    this._selectedType = {}
    this._selectedBrand = {}

    makeAutoObservable(this)
  }

  setTypes(types) {
    this._isTypes = types
  }

  setBrands(brands) {
    this._isBrands = brands
  }

  setDevices(devices) {
    this._isDevices = devices
  }

  setSelectedType(type) {
    this._selectedType = type
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }

  get selectedType() {
    return this._selectedType
  }

  get selectedBrand() {
    return this._selectedBrand
  }
}