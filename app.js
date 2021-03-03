// 1a. Create a const variable called mcuShows and set the value to an array with the following values "The Falcon And The Winter Soldier" and "WandaVision"
const mcuShows=[
    "The Falcon and the Winter Soldier",
    "WandaVision"
];
// 1b. Create another const variable called starWarsShows and set the value to an array with the following values "The Mandalorian" and "The Clone Wars"
const starWarsShows=[
    "The Mandalorian",
    "The Clone Wars"
];
// 1c. Create another const variable called disneyPlusShows. Using spread, set the value for disneyPlusShows to the items in the mcuShows and starWarsShows arrays as well as the following value "Muppets Now".
const disneyPlusShows=[...mcuShows,...starWarsShows,"Muppets Now"];
// 1d. Using a console log, display the value of the disneyPlusShows variable in terminal
console.log(disneyPlusShows);
// 2a. Create another const variable called netflixMovies and set the value to an object with the following key value pairs (key: "action" value: "Extraction") & (key: "drama" value: "The Irishman")
const netflixMovies={
    action:"Extraction",
    drama:"The Irishman"
};
// 2b. Create a const variable called disneyPlusMovies and set the value to an object with the following key value pairs (key: "musical" value: "Hamilton") & (key: "drama" value: "Togo")
const disneyPlusMovies={
    musical:"Hamilton",
    drama:"Togo"
};
// 2c. Create another const variable called streamingMovies. Using spread, set the value for streamingMovies to an object with the key value pairs in the netflixMovies and disneyPlusMovies objects as well as the following key value pair (key: "comedy" value: "Shazam!"). Also, spread the netflixMovies and disneyPlusMovies in the order that will set the value for the "drama" key to "The Irishman"
const streamingMovies={...disneyPlusMovies,...netflixMovies,comedy:"Shazam!"};
// 2d. Console log the value of the streamingMovies variable
console.log(streamingMovies);
// 3a. Create another const variable called disneyJunior and set the value to an array with the following values "PJ Masks" and "Jake and the Neverland Pirates"
const disneyJunior=["PJ Masks", "Jake and the Neverland Pirates"];
// 3b. Using destructuring, set the value of the "PJ Masks" item to a variable called pj. Also, set the value of the "Jake and the Neverland Pirates" item to a variable called jake.
const [pj, jake]=disneyJunior;
// 3c. Using a single console log, display the values of both the pj and jake variables in terminal
console.log(pj, jake);
// 4a. Create another const variable called "avengers" and set the value to an object with the following key value pairs (key: "captainAmerica" value: "Steve Rogers") & (key: "theHulk" value: "Bruce Banner")
const avengers={
    captainAmerica:"Steve Rogers",
    theHulk:"Bruce Banner"
};
// 4b. Using destructuring, create variables with each key value pair. Have the key be the variable name and the value be the value from the key value pair.
const {captainAmerica, theHulk}=avengers;
// 4c. Using a single console log, display the values of the two new variables in terminal
console.log(captainAmerica, theHulk);
// 4d. Create another const variable called "moreAvengers" and set the value to an object with the following key value pairs (key: "blackWidow" value: "Natasha Romanoff"), (key: "hawkeye" value: "Clint Barton"), & (key: "ironMan" value: "Tony Stark").
const moreAvengers={
    blackWidow:"Natasha Romanoff",
    hawkeye:"Clint Barton",
    ironMan:"Tony Stark"
};
// 4e. Using destructuring again, create brand new variable names for each value in the avengers object. For "Natasha Romanoff" use "nat" for the variable name and for the REST of the key value pairs use "others" for the variable name.
const {blackWidow:nat,...others}=moreAvengers;
// 4f. Using a single console log, display the values of the two new variables in terminal
console.log(nat, others);

// FOR BONUS
const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };

//   5a. Create a const variable named "all" and use the "bonus" object as well as spread to set the value of the "all" variable to an array with numbers 1 through 9 as the items (Example: [1, 2, 3, 4, 5, 6, 7, 8, 9])
all=[...bonus.first, ...bonus.second, ...bonus.third];
console.log(all);
// 5b. Use the "bonus" object as well as destructuring to create a variable for each of the nine numbers. Use the spelled out name of each number as the variable name (Example: const one = 1, const two = 2, etc.)
const [one, two, three]=bonus.first;
const [four, five, six]=bonus.second;
const [seven, eight, nine]=bonus.third;
console.log (one, two, three, four, five, six, seven, eight, nine);