// TODO: Declare any global variables we need
let headsRolls = 0;
let tailsRolls = 0;

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    //console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
  document.getElementById('flip').addEventListener('click', () => {

  
    // Flip Button Click Handler
        // TODO: Determine flip outcome, Math.random gives a value between 0 and 1, so < .5 gives a 50% chance its below .5
        let flippedHeads = Math.random() < 0.5;
        //take a different outcome if heads or tails is flipped
    // TODO: Update image and status message in the DOM
        if (flippedHeads) {
            //display image and message changes to Heads
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg';
            document.getElementById('message').textContent = 'You flipped Heads!';
            // add 1 to headsRolls count
            headsRolls += 1;
        }
        else {
            //display image as tails and change message
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg';
            document.getElementById('message').textContent = 'You flipped Tails!';
            //add 1 to tailsRolls count
            tailsRolls += 1;
        }

    })
        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        let total = headsRolls + tailsRolls;
        // Make variables to track the percentages of heads and tails
        let percentHeads = 0;
        let percentTails = 0;
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        if (total > 0) {
            //calculate percentage of heads or tails
            percentHeads = Math.round((headsRolls / total) * 100)
            percentTails = Math.round((tailsRolls / total) * 100)
        }
        // TODO: Update the display of each table cell
        document.getElementById('heads').textContent = headsRolls;
        document.getElementById('heads-percent').textContent = percentHeads + '%';
        document.getElementById('tails').textContent = tailsRolls;
        document.getElementById('tails-percent').textContent = percentTails + '%';

    // Clear Button Click Handler
        document.getElementById('clear').addEventListener('click', function () {
            // TODO: Reset global variables to 0
            headsRolls = 0;
            tailsRolls = 0;
            //update message 
            document.getElementById('message').textContent = 'Let\'s Get Rolling!';
            let total = headsRolls + tailsRolls;
            let percentHeads = 0;
            let percentTails = 0;

            if (total > 0) {
                percentHeads = Math.round((headsRolls / total) * 100);
                percentTails = Math.round((tailsRolls / total) * 100);
            }
            // TODO: Update the scoreboard (same logic as in flip button click handler)
            document.getElementById('heads').textContent = headsRolls;
            document.getElementById('heads-percent').textContent = percentHeads + '%';
            document.getElementById('tails').textContent = tailsRolls;
            document.getElementById('tails-percent').textContent = percentTails + '%';
        })
})