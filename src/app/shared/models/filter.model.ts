export class Filter {
  enabled: boolean;
  name: string;


  constructor(resource?) {
    resource = resource || {};

    this.enabled = resource.enabled || false;
    this.name = resource.name || null;
  }
}
