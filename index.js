let updateFns = []

function updater(dt) {

    for (var i = updateFns.length - 1; i >= 0; i--) {
        var fn = updateFns[i];
        if (fn) {
            var result = fn(dt);
            if (result === false) {
                updateFns.splice(i, 1);
            }
        }
    }
}

pc.ComponentSystem.on('update', updater);

export default function(fn) {
    updateFns.push(fn)
}
