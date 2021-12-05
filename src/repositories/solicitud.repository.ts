import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Solicitud, SolicitudRelations, Usuario, Inmueble, Estado} from '../models';
import {UsuarioRepository} from './usuario.repository';
import {InmuebleRepository} from './inmueble.repository';
import {EstadoRepository} from './estado.repository';

export class SolicitudRepository extends DefaultCrudRepository<
  Solicitud,
  typeof Solicitud.prototype.id,
  SolicitudRelations
> {

  public readonly usuario: BelongsToAccessor<Usuario, typeof Solicitud.prototype.id>;

  public readonly inmueble: HasOneRepositoryFactory<Inmueble, typeof Solicitud.prototype.id>;

  public readonly estado: HasOneRepositoryFactory<Estado, typeof Solicitud.prototype.id>;

  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>, @repository.getter('InmuebleRepository') protected inmuebleRepositoryGetter: Getter<InmuebleRepository>, @repository.getter('EstadoRepository') protected estadoRepositoryGetter: Getter<EstadoRepository>,
  ) {
    super(Solicitud, dataSource);
    this.estado = this.createHasOneRepositoryFactoryFor('estado', estadoRepositoryGetter);
    this.registerInclusionResolver('estado', this.estado.inclusionResolver);
    this.inmueble = this.createHasOneRepositoryFactoryFor('inmueble', inmuebleRepositoryGetter);
    this.registerInclusionResolver('inmueble', this.inmueble.inclusionResolver);
    this.usuario = this.createBelongsToAccessorFor('usuario', usuarioRepositoryGetter,);
    this.registerInclusionResolver('usuario', this.usuario.inclusionResolver);
  }
}
