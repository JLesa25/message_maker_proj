// Message Array
const messageCenter = [`Sometimes life gives you lemons, whatever it gave you this time seems worse`,
                       `Today is the day, probably not a good one but, you know... it's the day still.`,
                       `The fact that you're looking for this probably means it isn't going all that well.`,
                        `Good luck! You for sure need it`,
                        `Well, I don't know that you can do it, but it'd be super cool if you did`,
<<<<<<< Updated upstream
                        `When the going gets tough, we'll see how you do.`]
=======
                        `When the going gets tough, we'll see how you do I guess.`]

// Happy Message Array
const happyMessageCenter = ['Today is your day!',
                            `You can do anything you set your mind to!`,
                            `Let this be what your sign to go face the day. You've got this`,
                            `You're more than capable of doing the hard things!`,
                            `You're too boss to let something stop you today!`,
                            `Keep your head high, otherwise your crown will fall`]
>>>>>>> Stashed changes

// Function to bring out a random message
const linePicker = (arr) => {
    let generator = Math.floor(Math.random() * 6);
    return messageCenter[generator]
};

<<<<<<< Updated upstream
console.log(`Your unhelpful, sarcastic quote of the day is "${linePicker(messageCenter)}"`);
=======


console.log(`Your unhelpful, sarcastic quote of the day is "${linePicker(sarcasticMessageCenter)}"`);

console.log(`Your helpful, uplifting quote of the day is "${linePicker(happyMessageCenter)}"`);
>>>>>>> Stashed changes
