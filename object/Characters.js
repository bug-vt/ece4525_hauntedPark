/**
 * Characters.js
 * Author: Bug Lee
 * Last modified: 12/3/21
 *
 * This module contain data structures for player and Npc.
 * Player and Npc are special type of Actors that accept
 * commands and act according to their state.
 * See Command.js, Actor.js, and State.js for more detail.
 */


"use strict";



function Player() {
    
    var player = Object.create(Actor);
    player.setImg([]);
    player.setSpeed(PLAYER_SPD);
    player.setDirection([-1, 0]); // direction vector
    player.plane = [0, 0.66]; // camara (projection) plane
    player.caughtOffGaurd = true;
    

    return player;
} 


function Npc() {

    var npc = Object.create(Actor);
    npc.setImg(ghostImgs)
    npc.setSpeed(NPC_SPD);
    npc.setDirection([0, -1]);
    npc.state = Wondering();
    npc.path = [];
    npc.setID = function(id) { // id to better distribute when to perform search
        this.id = id;
    };
    npc.stuck = 0; // counter to check if npc is stuck
 

    return npc;
}
