const producto = {
    productoId: 4
}

const weakMap = new WeakMap();

weakMap.set(producto, 'Monitor');

console.log(weakMap.has(producto));
console.log(weakMap.get(producto));
console.log(weakMap.delete(producto));

console.log(weakMap);