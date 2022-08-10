import Archetype from './Archetype';
import { EnergyType } from '../Energy';

// A classe Ranger existe, precisa ser exportada e herdar Archetype
export default class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _instanceCount = 0;

  // O atributo name da classe Ranger pode ser lido
  constructor(name: string) {
    super(name);
    Ranger._instanceCount += 1;
  }

  // O método energyType da Classe Ranger existe e retorna um EnergyType
  public get energyType(): EnergyType {
    return this._energyType;
  }

  // O método createdArchetypeInstances deve retornar o número correto de instâncias criadas da classe Ranger
  static createdArchetypeInstances(): number {
    return Ranger._instanceCount;
  }
}