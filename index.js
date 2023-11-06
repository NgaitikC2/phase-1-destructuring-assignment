const moo = "cow";
const neigh = "horse";
const baa = "sheep";
const oink = "pig";
const cluck = "chicken";

const bessie = "cow";
const dolly = "sheep";
const babe = "pig";
const little = "chicken";

const blackAndWhite = "cow";
const black = "sheep";
const pink = "pig";

const r = "red";
const o = "orange";
const y = "yellow";
const g = "green";
const b = "blue";
const i = "indigo";
const v = "violet";

const red = "red";
const orange = "orange";
const yellow = "yellow";
const green = "green";
const blue = "blue";
const indigo = "indigo";
const violet = "violet";

const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const indg = rainbowColors[5];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const { muppetName, color, song, job, partner } = muppet;

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const { album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;
