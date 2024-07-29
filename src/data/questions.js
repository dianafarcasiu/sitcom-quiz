const questions = [
  {
    question: "What is the name of Jay and Gloria's dog in Modern Family?",
    options: ["Stella", "Max", "Buddy", "Rocky"],
    correctOption: 0,
    points: 10,
  },
  {
    question:
      "What instrument does Ted steal for Robin in How I Met Your Mother?",
    options: ["Trumpet", "Guitar", "Saxophone", "French horn"],
    correctOption: 3,
    points: 10,
  },
  {
    question:
      "What is the name of Ron Swanson's ex-wife in Parks and Recreation?",
    options: ["Diane", "Wendy", "Tammy", "April"],
    correctOption: 2,
    points: 10,
  },
  {
    question:
      "What does Ross famously yell at the moving company when trying to move his couch in Friends?",
    options: ["Lift!", "Careful!", "Pivot!", "Turn!"],
    correctOption: 2,
    points: 10,
  },
  {
    question:
      "What is Jake Peralta's favorite Halloween activity in Brooklyn Nine-Nine?",
    options: [
      "Trick-or-treating",
      "Costume contest",
      "Halloween Heist",
      "Pumpkin carving",
    ],
    correctOption: 2,
    points: 10,
  },
  {
    question:
      "What job does Claire Dunphy take on after the kids get older in Modern Family?",
    options: [
      "Interior designer",
      "Teacher",
      "Councilwoman",
      "CEO of Pritchett's Closets",
    ],
    correctOption: 3,
    points: 10,
  },
  {
    question:
      "What playbook does Barney use to pick up women in How I Met Your Mother?",
    options: ["The Wingman", "The Bro Code", "The Playbook", "The Guide"],
    correctOption: 2,
    points: 10,
  },
  {
    question:
      "Who does Michael Scott accidentally hit with his car in The Office?",
    options: ["Pam", "Angela", "Meredith", "Kevin"],
    correctOption: 2,
    points: 10,
  },
  {
    question: "What is the name of Phoebe's most famous song in Friends?",
    options: ["Smelly Cat", "Sticky Shoes", "Two of Them", "Crazy Underwear"],
    correctOption: 0,
    points: 10,
  },
  {
    question:
      "What is the name of Mitch and Cam's adopted daughter in Modern Family?",
    options: ["Lily", "Sophie", "Emma", "Ella"],
    correctOption: 0,
    points: 10,
  },
  {
    question:
      "What is the nickname of Ted's future wife in How I Met Your Mother?",
    options: ["The Mother", "The Girl", "The One", "The Love"],
    correctOption: 0,
    points: 10,
  },
  {
    question:
      "What is the name of the company that Dunder Mifflin merges with in The Office?",
    options: ["Staples", "Sabre", "Vance Refrigeration", "Prince Paper"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "Which character famously says 'We were on a break!' in Friends?",
    options: ["Chandler", "Joey", "Ross", "Rachel"],
    correctOption: 2,
    points: 10,
  },
  {
    question: "What is Captain Holt's husband's name in Brooklyn Nine-Nine?",
    options: ["Terry", "Kevin", "Marcus", "Doug"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "What is the name of Jay Pritchett's ex-wife in Modern Family?",
    options: ["Gloria", "DeDe", "Claire", "Meredith"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "What job does Lily Aldrin have in How I Met Your Mother?",
    options: ["Architect", "Teacher", "Lawyer", "News Anchor"],
    correctOption: 1,
    points: 10,
  },
  {
    question:
      "What is the title of Michael Scott's self-made movie in The Office?",
    options: [
      "Threat Level Midnight",
      "Michael Scarn",
      "Agent Michael",
      "Midnight Danger",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question: "What is Joey Tribbiani's famous catchphrase in Friends?",
    options: ["How you doin'?", "What's up?", "Hey there!", "Yo!"],
    correctOption: 0,
    points: 10,
  },
  {
    question: "What is Terry Jeffords' favorite food in Brooklyn Nine-Nine?",
    options: ["Bacon", "Yogurt", "Pizza", "Burgers"],
    correctOption: 1,
    points: 10,
  },
  {
    question:
      "What is the name of the baby Jay and Gloria have in Modern Family?",
    options: ["Joe", "Tom", "Max", "Luke"],
    correctOption: 0,
    points: 10,
  },
  {
    question:
      "What does Robin Sparkles' song 'Let's Go to the Mall' relate to in How I Met Your Mother?",
    options: [
      "Her favorite pastime",
      "Her teenage years",
      "Her childhood",
      "Her dream job",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    question: "Who starts the fire in The Office episode 'The Fire'?",
    options: ["Jim", "Pam", "Ryan", "Michael"],
    correctOption: 2,
    points: 10,
  },
  {
    question: "What does Joey from Friends never share?",
    options: ["His food", "His clothes", "His money", "His car"],
    correctOption: 0,
    points: 10,
  },
  {
    question:
      "Who becomes the precinct captain after Holt in Brooklyn Nine-Nine?",
    options: ["Terry", "Amy", "Jake", "The Vulture"],
    correctOption: 3,
    points: 10,
  },
  {
    question: "What is Leslie Knope's favorite food in Parks and Recreation?",
    options: ["Pizza", "Burgers", "Pasta", "Waffles"],
    correctOption: 3,
    points: 10,
  },
  {
    question:
      "What is Cam's alter ego name when he becomes a country singer in Modern Family?",
    options: ["Slim Daddy", "Cowboy Cam", "Dusty Trails", "Kansas City Ken"],
    correctOption: 2,
    points: 10,
  },
  {
    question:
      "What is the name of the bar that Ted and Barney open for a night in How I Met Your Mother?",
    options: ["MacLaren's", "Puzzles", "The Hoser Hut", "The Drunken Clam"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "What kind of farm does Dwight own in The Office?",
    options: ["Beet farm", "Potato farm", "Carrot farm", "Wheat farm"],
    correctOption: 0,
    points: 10,
  },
  {
    question: "What is the name of Andy Dwyer's band in Parks and Recreation?",
    options: ["Mouse Rat", "Scarecrow Boat", "Rat Mouse", "Mouse Trap"],
    correctOption: 0,
    points: 10,
  },
  {
    question:
      "What is the name of the holiday Ross invents for Ben in Friends?",
    options: [
      "Festivus",
      "Chrismukkah",
      "The Holiday Armadillo",
      "Hanukkah Harry",
    ],
    correctOption: 2,
    points: 10,
  },
];

export default questions;
