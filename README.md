## Discord Minesweeper

Generates a Minesweeper grid that can be pasted into Discord channel. Each cell is a number, a mine (`@` symbol) or a space, if no mines around. Each symbol is wrapped in code and spoiler tags.

### How to play

Solve by clicking on cells. To reset, just switch to another channer and then switch back.

### How to generate grid

Download the Discord_Minesweeper.js and run `node Discord_Minesweeper.js`. Copy the output and paste into Discord channel.

Example output:

```
||`@`||||`1`||||`1`||||`1`||||`1`||||`1`||||`2`||||`@`||||`2`||
||`1`||||`1`||||`1`||||`@`||||`1`||||`2`||||`@`||||`4`||||`@`||
||`1`||||`1`||||`2`||||`1`||||`1`||||`2`||||`@`||||`3`||||`1`||
||`2`||||`@`||||`2`||||` `||||`1`||||`2`||||`2`||||`1`||||` `||
||`2`||||`@`||||`2`||||` `||||`1`||||`@`||||`2`||||`1`||||` `||
||`1`||||`1`||||`2`||||`1`||||`3`||||`3`||||`@`||||`1`||||` `||
||` `||||` `||||`2`||||`@`||||`4`||||`@`||||`2`||||`1`||||` `||
||` `||||` `||||`2`||||`@`||||`@`||||`2`||||`2`||||`1`||||`1`||
||` `||||` `||||`1`||||`2`||||`2`||||`1`||||`1`||||`@`||||`1`||
```

### Size of a grid

It seems that Discord has a limit of 99 spoilers per message. Can probably be solved by splitting the grid in several messages.
