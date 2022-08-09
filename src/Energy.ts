export default interface Energy {
  // O type_ deve ter o tipo EnergyType
  type_: EnergyType;
  // O amount deve ter o tipo number
  amount: number;
}

// Deve ser exportado e deve receber os valores: 'mana' ou 'stamina'
export type EnergyType = 'mana' | 'stamina';