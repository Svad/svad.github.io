import { IBalancer, IEnvironment, IInstance, TaComponent } from './domain'

export const environments: { [key: string]: IEnvironment } = {
  prod: {
    name: 'prod',
    domain: 'traceair.net'
  },
  prud: {
    name: 'prud',
    domain: 'traceair.ru'
  },
  che: {
    name: 'che',
    domain: 'traceair.ru'
  }
}

export enum stages {
  blue = 'blue',
  green = 'green'
}

export const components: { [key: string]: TaComponent } = {
  FO: { title: 'Frontoffice', urlPart: 'fo' },
  CSU: { title: 'CSU', urlPart: 'csu' },
  Storage: { title: 'FOStorage', urlPart: 'fo-storage' },
  Printing: { title: 'Printing', urlPart: 'printing' }
}

export const balancerNames: IBalancer[] = [
  {
    component: components.FO,
    env: environments.prod,
    url: 'office.traceair.net'
  },
  {
    component: components.FO,
    env: environments.prud,
    url: 'office.traceair.ru'
  },
  {
    component: components.FO,
    env: environments.che,
    url: 'my.traceair.ru'
  },

  {
    component: components.CSU,
    env: environments.prod,
    url: 'csu-api.traceair.net'
  },
  {
    component: components.CSU,
    env: environments.prud,
    url: 'csu-api.traceair.ru'
  },
  {
    component: components.CSU,
    env: environments.che,
    url: 'csu-api-my.traceair.ru'
  },

  {
    component: components.Storage,
    env: environments.prod,
    url: 'fo-storage.traceair.net'
  },
  {
    component: components.Storage,
    env: environments.prud,
    url: 'fo-storage.traceair.ru'
  },
  {
    component: components.Storage,
    env: environments.che,
    url: 'fo-storage-my.traceair.ru'
  },

  {
    component: components.Printing,
    env: environments.prod,
    url: 'printing.traceair.net'
  },
  {
    component: components.Printing,
    env: environments.prud,
    url: 'printing.traceair.ru'
  },
  {
    component: components.Printing,
    env: environments.che,
    url: 'printing-my.traceair.ru'
  }
]

export const APIStackUrl = 'http://api.ipstack.com/'

export const APIStackKey = '91318f82b6dfb8201157e3f8c7fd29f0'
