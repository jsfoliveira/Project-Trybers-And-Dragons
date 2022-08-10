import Energy from '../Energy';

// A interface Fighter existe e está sendo exportada
export default interface Fighter {
  // A interface Fighter possui os atributos lifePoints lifePoints, strength, defense, energy
  lifePoints: number;
  strength: number;
  defense: number;
  energy?:Energy;
  // A interface Fighter possui o método attack(), que recebe um enemy do tipo Fighter
  attack(enemy: Fighter): void;
  // A interface Fighter possui o método special(), que recebe um enemy do tipo Fighter
  special?(enemy: Fighter): void;
  // A interface Fighter possui o método levelUp(), que não recebe parâmetros nem retorna nada
  levelUp(): void;
  // A interface Fighter possui o método receiveDamage(), que recebe um attackPoints do tipo number
  receiveDamage(attackPoints: number): number;
}