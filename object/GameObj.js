/**
 * GameObj.js
 * Author: Bug Lee
 * Last modified: 10/29/21
 *
 * This module contains data structure for Lightning and AniamtionObj.
 */


/**
 * Lightning object mimic the lightning effect.
 */
var Lightning = {
    init: function(x, y) {
        this.x = x;
        this.y = y;
        this.alpha = 150;
        this.size = 400;
        this.timeCheck = performance.now();
        this.flashTime = performance.now();
        this.flashAlpha = 255;
    },
    
    /**
     * update the oppacity of lightning.
     */
    update: function() {
        if (performance.now() - this.flashTime > HALF_SEC)
        {
            if (this.alpha >= -20) {
                this.alpha -= 6;
            }
        }
        if (this.flashAlpha >= 0) {
            this.flashAlpha -= 6;
        }
    },
    
    /**
     * render lightning.
     */
    render: function() {
        push(); 
        fill(255, 255, 255, this.flashAlpha);
        rect(0, 0, 550, 400);
        tint(255, this.alpha + 20);
        image(lightningImg, this.x, this.y);
        pop();
    }
};

/**
 * Animation object cotains its position and
 * its current frame in animation.
 */
var AnimationObj = {
    init: function(x, y) {
        this.x = x;
        this.y = y;
        this.frame = 0;
    }
}


   
