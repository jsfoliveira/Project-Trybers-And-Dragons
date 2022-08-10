import Archetype, { Mage } from '../Archetypes';
import Energy from '../Energy';
import Fighter from '../Fighter';
import Race, { Elf } from '../Races';
import getRandomInt from '../utils';

export default class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._name = name;
    // dexterit, strength, defense com valores aleatórios de no mínimo 1 e no máximo 10 pontos
    this._dexterity = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._archetype = new Mage(this._name);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    // o objeto retornado não pode ser alterado
    // vi essa possibilidade no slack
    return JSON.parse(JSON.stringify({
      type_: this._energy.type_,
      amount: this._energy.amount,
    }));
  }

  receiveDamage(attackPoints: number): number {
    // attackPoints deve ser decrescido de sua defense, assim causando um damage
    const damage = attackPoints - this.defense;
    // Se o damage for maior que 0, você perde lifePoints
    if (damage > 0) {
      this._lifePoints -= damage;
      // Ao receber o ataque e perder pontos de vida (lifePoints), e se sua vida chegar a 0 ou menos, você deve fixá-la com o valor -1
      if (this.lifePoints <= 0) {
        this._lifePoints = -1;
      }
    }
    // Ao final sempre retorne lifePoints
    return this.lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    // Sempre que este método for chamado os atributos maxLifePoints, strength, dexterity e defense terão um incremento de no mínimo 1 e no máximo 10 pontos
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    // Assim como os atributos anteriores o montante de energia (amount dentro de energy) deve ser alterado também, ele deve ficar cheio, valendo exatamente 10
    this._energy.amount = 10;
    // O atributo maxLifePoints do Character nunca poderá ser maior que o maxLifePoints de sua raça (race). Se, ao incrementar o valor de maxLifePoints do Character esse valor ficar maior do que o maxLifePoints da raça, ele deve receber o valor igual ao do da raça.
    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    // o atributo lifePoints também deve ser atualizado, recebendo o novo valor de maxLifePoints
    this._lifePoints = this._maxLifePoints;
  }
}