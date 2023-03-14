import Module from './node_modules/manifold-3d/manifold.js'

async function test(){
    console.log('test start');
    const wasm = await Module();
    console.log('wasm loaded', wasm);
    wasm.setup();
    console.log('wasm setup ok');
    const manifold_1 = wasm.cube([0.2, 0.2, 0.2], true);
    console.log({manifold_1});
}
test()