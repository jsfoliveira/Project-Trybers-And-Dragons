import { EnergyType } from '../Energy';

// Os atributos da classe Archetype podem ser lidos, mas não podem ser alterados. Ou seja, precisa criar uma classe especializada para herdar seus atributos e instanciá-las.
export default abstract class Archetype {
  constructor(
    private _name:string,
    private _special: number = 0,
    private _cost: number = 0,
  ) {

  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances():number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}