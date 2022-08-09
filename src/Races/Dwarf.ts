import Race from './Race';

// A classe Dwarf existe e herda de Race
export default class Dwarf extends Race {
  // O atributo instanceCount não pode ser mexido e inicia com 0
  private static _instanceCount = 0;
  // O atributo maxLifePoints da classe Dwarf existe e é igual a 80
  private _maxLifePoints = 80;

  // Os atributos name e dexterity da classe Dwarf podem ser lidos
  constructor(name: string, dexterity: number) {
    // Chama o construtor da classe pai Race
    super(name, dexterity);
    Dwarf._instanceCount += 1;
  }

  // O método createdRacesInstances retorna o número correto de instâncias criadas da classe Dwarf
  static createdRacesInstances(): number {
    return Dwarf._instanceCount;
  }

  // Pegar a quantidade de pontos de vida da raça
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}