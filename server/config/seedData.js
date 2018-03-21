const users = [
  {
    username: 'Gkolb',
    password: '123',
    email: 'gkolb@yahoo.com'
  },
  {
    username: 'BLittle',
    password: '456',
    email: 'brandon@testing.com'
  },
  {
    username: 'JFord',
    password: '789',
    email: 'joe@testing.com'
  },
  {
    username: 'KMaitski',
    password: 'abc',
    email: 'kevin@testing.com'
  },
  {
    username: 'bendandsnap',
    password: 'def',
    email: 'bendandsnap@testing.com'
  },
  {
    username: 'cumberbatch',
    password: 'ghi',
    email: 'cumberbatch@testing.com'
  },
  {
    username: 'curdlesnoot',
    password: 'jkl',
    email: 'curdlesnoot@testing.com'
  },
  {
    username: 'chuckecheese',
    password: 'mno',
    email: 'chuckecheese@testing.com'
  },
  {
    username: 'cragglethatch',
    password: 'pqr',
    email: 'cragglethatch@testing.com'
  },
  {
    username: 'crumplehorn',
    password: 'stu',
    email: 'crumplehorn@testing.com'
  },
  {
    username: 'snorkledink',
    password: 'vwx',
    email: 'snorkledink@testing.com'
  },
  {
    username: 'johnnycash',
    password: 'yz1',
    email: 'johnnycash@testing.com'
  }
];

const listings = [
  {
    user_id: '165a5baa-3846-4833-b19a-eba714077acf',
    title: 'Broken Car',
    description: 'My car is broken halp me',
    category: 'Automotive',
    location: 'Denver'
  },
  {
    user_id: '1406b551-995d-4cba-8734-28a50a4e9f1a',
    title: 'Slow computer',
    description: "I could really use some help upgrading my computer. I don't want to spend an arm and a leg",
    category: 'computer skills',
    location: 'Vancouver'
  },
  {
    user_id: '1406b551-995d-4cba-8734-28a50a4e9f1a',
    title: 'Sodastream fountain',
    description: "There seems to be some kind of leak",
    category: 'specialty',
    location: 'Los Angeles'
  },
  {
    user_id: '17682716-7c8c-4130-a8c2-692c878110ca',
    title: 'Lawnmower oil leak',
    description: "My lawnmower leaks oil. I'm not sure if it's from a hose or something else.",
    category: 'automotive',
    location: 'Miami'
  },
  {
    user_id: '17682716-7c8c-4130-a8c2-692c878110ca',
    title: 'Hair dryer short cycle',
    description: "It works for a moment and then shuts off. It doesn't even get very hot.",
    category: 'specialty',
    location: 'San Francisco'
  },
  {
    user_id: '2baf363a-8285-4d83-92ba-8f5a22bba152',
    title: 'Mixer',
    description: "I'm a DJ and I have an old Pioneer mixer that I don't want to throw away. Some of the lights don't work, and two output jacks need to be replaced",
    category: 'electronics',
    location: 'Phoenix'
  },
  {
    user_id: '2baf363a-8285-4d83-92ba-8f5a22bba152',
    title: 'Squeaky and stiff garage door',
    description: "The door is really stiff when opening. It doesn't open all of the way, and it makes a sound like it's scraping against something.",
    category: 'handyman',
    location: 'El Paso'
  },
  {
    user_id: '55bd721d-10c3-4cb8-988f-062780b160a7',
    title: 'Ripe oranges!',
    description: "Our house has two dozen citrus trees that are ready to be picked. We could use some help bringing in the harvest.",
    category: 'labour',
    location: 'Orange County'
  },
  {
    user_id: '682caa79-9313-40fe-ac7a-538aeb4891ba',
    title: 'Oil change needed',
    description: "I think it's time to change the oil in my car. It's a 2005 Toyota Camry.",
    category: 'automotive',
    location: 'San Antonio'
  },
  {
    user_id: '7176e0e6-864e-45cb-a947-80bf2ae53ea6',
    title: 'Refrigerator - needs coolant?',
    description: "Have an old fridge. Needs coolant.",
    category: 'handyman',
    location: 'Chicago'
  },
  {
    user_id: 'a8db40c5-e107-4d9d-a3c2-3743cc1fb066',
    title: 'Fallen tree',
    description: "A tall tree fell in my yard. I need someone to cut it up and haul it off.",
    category: 'labour',
    location: 'Santa Fe'
  },
  {
    user_id: 'b8a94c56-7adc-44cb-87f3-d816042681b4',
    title: 'Broken watch',
    description: "Needs new hands and battery. The glass is also broken, so if you can help with that it would be great.",
    category: 'stuff',
    location: 'San Diego'
  },
  {
    user_id: 'ccd32131-9509-4a51-894d-fe481bbbd474',
    title: 'Glasses frames falling apart',
    description: "I broke the arm on the frame of my glasses. It just needs to be reattached, but I don't have the tools.",
    category: 'stuff',
    location: 'Houston'
  },
  {
    user_id: 'dee11b83-449e-400c-8435-7066d7f6cf40',
    title: 'Torn sweatshirt',
    description: "My hoodie has a tear just under the hood. I'm looking for someone to sew it up for me",
    category: 'specialty',
    location: 'San Antonio'
  },
  {
    user_id: 'fe2db660-f092-434d-bb7f-7b192620dcc1',
    title: 'Space heater not hot',
    description: "Space heater just gets warm, not entirely hot. I think there may be a problem with the wiring.",
    category: 'stuff',
    location: 'Houston'
  },
]

module.exports.users = users;
module.exports.listings = listings;