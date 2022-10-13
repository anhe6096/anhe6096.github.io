const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so :insertx: went to go jump in the creek. On the way to the creek, they changed their mind and decided to go to :inserty: instead. That was not a good idea... beauase upon arrival to :inserty:, they unfortunately :insertz:. Luckily, Bob witnessed the whole thing and called for help immediately! Unfortunately, they accidentally called Animal control instead of 911... the 300 pound :insertb: only made things worse.';

const insertX = [
    "Pete Davidson",
    "Abby Lee Miller",
    "The Great Pumpkin",
];

const insertY = [
    'the ATLS building',
    'Chicken on the hill',
    'Eldora',
];

const insertZ = [
    'accidentally fell',
    'broke an ankle at the bars',
    'put the I in team',
];

const insertB = [
    'squirrel',
    'worm',
    'ant',
];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    let bItem = randomValueFromArray(insertB);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    newStory = newStory.replace(':insertb:', bItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = (Math.round(300*0.071428571428571)) + ' stone';
    const temperature =  Math.round((94-32) * (5 / 9)) + ' centigrade';
    newStory = newStory.replace('300 pound', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);;
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

}