// Os atributos da classe Race podem ser lidos, mas não podem ser alterados. Ou seja, precisa criar uma classe especializada para herdar seus atributos e instanciá-las.
export default abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  // maxLifePoints corresponde à quantidade máxima de pontos de vida da raça e deverá ser definida em cada classe especializada
  abstract get maxLifePoints(): number;

  // createdRacesInstances corresponde à quantidade de instâncias criadas a partir das classes estendidas da classe Race e deverá ser definida em cada classe especializada
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}