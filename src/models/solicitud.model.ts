import {belongsTo, Entity, hasOne, model, property} from '@loopback/repository';
import {Estado} from './estado.model';
import {Inmueble} from './inmueble.model';
import {Usuario} from './usuario.model';

@model({settings: {strict: false}})
export class Solicitud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_solicitud: string;

  // Cada solicititud...
  @belongsTo(() => Usuario) // Pertenece a un usuario
  usuarioId: string;

  @hasOne(() => Inmueble) // Tiene un inmueble
  inmueble: Inmueble;

  @hasOne(() => Estado) // Tiene un estado
  estado: Estado;

  @property({
    type: 'string',
  })
  inmuebleId?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
