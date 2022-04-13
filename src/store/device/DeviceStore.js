import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = [
      {
        id: 1,
        name: 'Phones'
      },
      {
        id: 2,
        name: 'Refrigerators'
      },
      {
        id: 3,
        name: 'Watches'
      },
      {
        id: 4,
        name: 'Notebooks'
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
      }
    ]

    this._devices = [
      {
        id: 1,
        name: 'iPhone 13 Pro 128GB Graphite',
        price: 38445,
        rating: 0,
        image: '0144f3d0-5d99-43aa-8877-55ee1c6662c9.jpg'
      },
      {
        id: 2,
        name: 'Galaxy Z Fold3 12/256Gb Phantom Black',
        price: 56999,
        rating: 0,
        image: '579fa301-2464-44f3-a0fd-18b666373091.jpg'
      },
      {
        id: 3,
        name: 'iPhone 12 mini 64GB Black',
        price: 21087,
        rating: 0,
        image: '0b1f0a64-e0f1-4378-a317-bd6ec92732d3.jpg'
      },
      {
        id: 4,
        name: 'Galaxy S22 8/128GB Green',
        price: 29999,
        rating: 0,
        image: 'c4da2d11-90ed-4bf1-b281-153986e82073.jpg'
      }
    ]

    this._selectedType = {}

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

  setSelectedTypes(type) {
    this._selectedType = type
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
}