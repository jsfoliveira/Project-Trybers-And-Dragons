// A interface SimpleFighter existe e está sendo exportada
export default interface SimpleFighter {
  // A interface Fighter possui os atributos lifePoints lifePoints, strength
  lifePoints: number;
  strength: number;
  
  // A interface SimpleFighter possui o método attack(), que recebe um enemy do tipo SimpleFighter
  attack(enemy: SimpleFighter): void;

  // A interface Fighter possui o método receiveDamage(), que recebe um attackPoints do tipo number
  receiveDamage(attackPoints: number): number;
}