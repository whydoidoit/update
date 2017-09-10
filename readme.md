### Introduction

Specifies a function to be called every game frame until it returns false.

### Installation

```language-shell
npm install --save playcanvas-update-fn
```

### Usage

```language-javascript
import update from 'playcanvas-update-fn'

...

let w = new pc.Vec3;

MyScript.prototype.moveTo = function(position) {
    let t = 0;
    this.startPosition.copy(this.entity.getPosition());
    //Call update until the movement is complete
    update(dt=>{
        t += dt;
        this.entity.setPosition(w.lerp(this.startPosition, position, t));
        return t < 1;
    });
} 
 

```

### Requirements

Requires PlayCanvas Engine to be running on the page.  Uses ES6/Babel/PlayCanvas template.
