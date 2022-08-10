import Archetype from './Archetype';
import { EnergyType } from '../Energy';

// A classe Mage existe, precisa ser exportada e herdar Archetype
export default class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _instanceCount = 0;

  // O atributo name da classe Mage pode ser lido
  constructor(name: string) {
    super(name);
    Mage._instanceCount += 1;
  }

  // O método energyType da Classe Mage existe e retorna um EnergyType
  public get energyType(): EnergyType {
    return this._energyType;
  }

  // O método createdArchetypeInstances deve retornar o número correto de instâncias criadas da classe Mage
  static createdArchetypeInstances(): number {
    return Mage._instanceCount;
  }
}