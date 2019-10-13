class MapService {
  constructor( service = {}) {
    this._service = { ...service };

    this.name = this._service.name;
    this.attribution = this._service.attribution;
    this.url = this._service.url;
  }
}

export default MapService;
