export const people = [
  {
    id: '0',
    name: 'Nicolas',
    age: 18,
    gender: 'male'
  },
  {
    id: '1',
    name: 'Jims',
    age: 11,
    gender: 'female'
  },
  {
    id: '2',
    name: 'Kelly',
    age: 19,
    gender: 'male'
  },
  {
    id: '3',
    name: 'Hodge',
    age: 19,
    gender: 'female'
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => String(id) === person.id);
  return filteredPeople[0];
}