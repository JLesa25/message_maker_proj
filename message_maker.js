// Message Array
const messageCenter = [`Sometimes life gives you lemons, whatever it gave you this time seems worse`, `Today is the day, probably not a good one but, you know... it's the day still.`, `The fact that you're looking for this probably means it isn't going all that well.`, `Good luck! You for sure need it`]

// Function to bring out a random message
const linePicker = (arr) => {
    let generator = Math.floor(Math.random() * 4);
    return messageCenter[generator]
};
console.log(`Your unhelpful, sarcastic quote of the day is "${linePicker(messageCenter)}"`)
