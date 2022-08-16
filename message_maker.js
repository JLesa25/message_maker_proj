// Helpful Action Array
const helpfulActionCenter = ['Smile at 5 people',
                             `write down 5 things you're grateful for in a gratitude journal`,
                             `compliment 5 people on whatever you'd like`,
                             `call a loved one and see how their day is going`,
                             `tell a loved one how you feel about them`,
                             `if the weather permits, take a walk outside. Otherwise, find a simple cleaning/organizing project you can do indoors.`]

// Happy Message Array
const happyMessageCenter = ['Today is your day!',
                            `You can do anything you set your mind to!`,
                            `Let this be your sign to go face the day. You've got this`,
                            `You're more than capable of doing the hard things!`,
                            `You're too boss to let something stop you today!`,
                            `Keep your head high, otherwise your crown will fall`]


// Lucky Number Generator
 const randomNumGen = () => {
    return Math.floor(Math.random() * 100)
 };

// Function to bring out a random message from the arrays
const linePicker = (arr) => {
    let generator = Math.floor(Math.random() * arr.length);
    return arr[generator]
};

// Function to compile the 3 data pieces to make the message
const goodDayMessage = () => {
    console.log(`Here are a few things to help your day go better! 
    First, something you can do to boost your mood is to ${linePicker(helpfulActionCenter)}.
    An uplifting message to think about is "${linePicker(happyMessageCenter)}".
    Finally, your lucky number to keep an eye out for today is ${randomNumGen()}. 
    Use these to make your day that much better!`)
};

goodDayMessage();
