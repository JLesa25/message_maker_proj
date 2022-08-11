// Message Array
const messageCenter = [`Sometimes life gives you lemons, whatever it gave you this time seems worse`,
                       `Today is the day, probably not a good one but, you know... it's the day still.`,
                       `The fact that you're looking for this probably means it isn't going all that well.`,
                        `Good luck! You for sure need it`,
                        `Well, I don't know that you can do it, but it'd be super cool if you did`,
                        `When the going gets tough, we'll see how you do.`]

// Function to bring out a random message
const linePicker = (arr) => {
    let generator = Math.floor(Math.random() * 6);
    return messageCenter[generator]
};

console.log(`Your unhelpful, sarcastic quote of the day is "${linePicker(messageCenter)}"`);
