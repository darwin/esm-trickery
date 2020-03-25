console.log("loading m1");
import g from './global.js';

// this "exports" a var into global scope to be consumed by others
console.log("exporting m1var into global");
g.m1var = ":-)";