/**
 * Result.js
 * Author: Bug Lee
 * Last modified: 12/3/21
 *
 * This module contains Result data structure.
 * Result screen contains the following:
 * 1. Indication of Win or lose
 * 2. score (number of keys collected and time taken)
 * 3. back to main menu button
 */


"use strict";


function Result() {
    var title;
    var result;
    var first = true;
    var backButton = Object.create(ButtonObj);

    backButton.init(160, CANVAS_HEIGHT * 3/4, 200, 50, undefined);
    backButton.text("Back to main menu");

    /**
     * Identify whether player won or lose the game,
     * then, initialize accordingly.
     */
    function init(gameResult) {
        result = gameResult;
        if (result === WIN) {
            title = "GAME CLEAR!";
        }
        else {
            title = "GAME OVER!";
        }
    }

    /**
     * Handle mouse click from the user.
     */
    function handleInput() {
        canvas.mouseClicked(ButtonObj.clicked);
    }

    /**
     * Go back to start screen when user click on the button.
     */
    function update() {
        backButton.clickEvent(gameStates.start);
    }

    /**
     * Set up and display the result window.
     */
    function setUpResultWindow() {
        // background window 
        fill(0, 0, 0, 170);
        rect(40, 50, CANVAS_WIDTH - 80, 300);
        // win or lose set up
        if (result == WIN) {
            // title window
            fill(150, 150, 150, 200);
            rect(40, 10, CANVAS_WIDTH - 80, 40);

            fill(0, 255, 255); // title color
        }
        else { // set up for lose
            // title window
            fill(100, 100, 100, 200);
            rect(40, 10, CANVAS_WIDTH - 80, 40);

            fill(255, 0, 0); // title color
        }
    }

    /**
     * Render result screen.
     */
    function render() {
        if (!first) {
            return;
        }
        first = false;

        setUpResultWindow();

        // title with win or lose indication 
        push();
        textSize(BIG_TEXT_SIZE);
        textStyle(BOLD);
        text(title, CANVAS_WIDTH / 2, 40);
        pop();

        // display score
        textSize(DEFAULT_TEXT_SIZE);
        fill(255);
        text("Score: " + floor(score) + " / " + NUM_OF_PRIZE, CANVAS_WIDTH / 2, 100);
        text("Time taken: " + (performance.now() - startTime) / ONE_SEC + " seconds", CANVAS_WIDTH / 2, 150);

        // back button
        fill(255,255,255, 170);
        rect(160, 300, 200, 40);
        backButton.render();
    }

    var publicAPI = {
        init: init,
        handleInput: handleInput,
        update: update,
        render: render
    }

    return publicAPI;
}
