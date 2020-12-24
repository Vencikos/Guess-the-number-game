Guess the number game project using javascript.

Game flow

1. A random number gets generated.
2. The user have to write a number in the input field - if no number is written and error message is generated.
3. After the user writes the number it is compared to the random generated number with the "check" button. 
   - if the number is correct - the message on the right changes to 'Correct number',the background color changes to green,and the secret number is shown in the plase of the '?' sign.
   - if the number is greater than the random number - the message on the right changes to 'Number is high'.
   - the number is lower than the random number - the message on the right changes to 'Number is low'.
4. The score starts at 20 and decreases by one for every wrong prediction.
5. If the score reaches 0 a message is the message on the right changes to 'Game over',the background color changes to red.
6. The highscore is recorded every time the user guesses the number faster.
7. The game resets with 'Again!' button - clears the ibput field, background color changes to starting color, the secret number changes to '?', he score is reset to 20. The highscore remains unchanged.
