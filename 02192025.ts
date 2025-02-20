// Fix casing in names.

function capMe(names): string[] {
  return names.map(elem => elem[0].toUpperCase() + elem.slice(1).toLowerCase());
}
