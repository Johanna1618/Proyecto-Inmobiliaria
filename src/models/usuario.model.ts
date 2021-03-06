import {Entity, model, property, hasMany, hasOne} from '@loopback/repository';
import {Solicitud} from './solicitud.model';
import {Rol} from './rol.model';

@model({settings: {strict: false}})
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  cedula: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    default: 0,
  })
  telefono?: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @hasMany(() => Solicitud)
  solicitudes: Solicitud[];

  @hasOne(() => Rol)
  rol: Rol;

  @property({
    type: 'string',
  })
  rolId?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
