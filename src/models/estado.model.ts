import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Estado extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;

  @property({
    type: 'string',
    default: 'Enviado', // por implementar
  })
  estado_solicitud?: string;

  @property({
    type: 'string',
  })
  comentarios?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Estado>) {
    super(data);
  }
}

export interface EstadoRelations {
  // describe navigational properties here
}

export type EstadoWithRelations = Estado & EstadoRelations;
