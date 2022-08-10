import Archetype from './Archetype';
import { EnergyType } from '../Energy';

// A classe Warrior existe, precisa ser exportada e herdar Archetype
export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _instanceCount = 0;

  // O atributo name da classe Warrior pode ser lido
  constructor(name: string) {
    super(name);
    Warrior._instanceCount += 1;
  }

  // O método energyType da Classe Warrior existe e retorna um EnergyType
  public get energyType(): EnergyType {
    return this._energyType;
  }

  // O método createdArchetypeInstances deve retornar o número correto de instâncias criadas da classe Warrior
  static createdArchetypeInstances(): number {
    return Warrior._instanceCount;
  }
}