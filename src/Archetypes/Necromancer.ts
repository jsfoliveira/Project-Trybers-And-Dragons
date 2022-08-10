import Archetype from './Archetype';
import { EnergyType } from '../Energy';

// A classe Necromancer existe, precisa ser exportada e herdar Archetype
export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _instanceCount = 0;

  // O atributo name da classe Necromancer pode ser lido
  constructor(name: string) {
    super(name);
    Necromancer._instanceCount += 1;
  }

  // O método energyType da Classe Necromancer existe e retorna um EnergyType
  public get energyType(): EnergyType {
    return this._energyType;
  }

  // O método createdArchetypeInstances deve retornar o número correto de instâncias criadas da classe Necromancer
  static createdArchetypeInstances(): number {
    return Necromancer._instanceCount;
  }
}