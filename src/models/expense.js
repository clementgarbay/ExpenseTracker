export const TYPES = {
  TRANSPORT: {
    key: 'TRANSPORT',
    label: 'Transport'
  },
  ACCOMMODATION: {
    key: 'ACCOMMODATION',
    label: 'Hébergement'
  },
  EATING: {
    key: 'EATING',
    label: 'Restauration'
  },
  OTHER: {
    key: 'OTHER',
    label: 'Autre'
  }
}

export function valueOfKey (key) {
  return TYPES[key] && TYPES[key].label
}
