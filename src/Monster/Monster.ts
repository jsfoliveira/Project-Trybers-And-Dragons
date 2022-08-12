import { SimpleFighter } from '../Fighter';

export default class Monster implements SimpleFighter {
  constructor(private _lifePoints: number = 85, private _strength:number = 63) {
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    // attackPoints deve ser decrescido de sua lifePoints, assim causando um damage
    const damage = attackPoints - this.lifePoints;
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

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }
}