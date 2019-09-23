import { components, environments, stages } from './config'

export interface IEnvironment {
  // prod/prud/che/whatever
  name: string

  // traceair.net / traceair.ru
  domain: string
}

// office/csu/fo-storage
export interface TaComponent {
  title: string
  urlPart: string
}

// blue/green
export type Stage = string

export type IPAddress = string
export type DNSName = string

export interface IInstance {
  env: IEnvironment
  stage: Stage
  component: TaComponent
  url: string
  ip?: IPAddress | null
}

export interface IBalancer {
  env: IEnvironment
  component: TaComponent
  // office.traceair.net/csu-api.traceair.ru
  url: string
  ip?: IPAddress | null
}

export function getInstanceUrl(instance: IInstance): DNSName {
  return `${instance.stage}-${instance.env.name}-${instance.component.urlPart}.${instance.env.domain}`
}

export function getInstances(): IInstance[] {
  const instances: IInstance[] = []
  Object.keys(environments).forEach(env => {
    const environment = environments[env]
    Object.keys(stages).forEach(stageName => {
      const stage = stages[stageName]
      Object.keys(components).forEach(cmp => {
        const instanceData = {
          component: components[cmp],
          env: environment,
          stage,
          ip: null,
          url: ''
        }
        instances.push({
          ...instanceData,
          url: getInstanceUrl(instanceData)
        })
      })
    })
  })
  return instances
}
