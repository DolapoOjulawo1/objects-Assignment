/**
 * QUESTION 1: Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
 * Handle of author, content, An image link posted by the author of the post, Number of views, Number of likes, 
 */
 
function InstagramPost(HandleOfAuthor, Content, ImageLinkPostedByTheAuthorOfThePost, NumberOfViews, NumberOfLikes) {
    this.HandleOfAuthor = HandleOfAuthor;
    this.Content = Content;
    this.ImageLinkPostedByTheAuthorOfThePost = ImageLinkPostedByTheAuthorOfThePost;
    this.NumberOfViews = NumberOfViews;
    this.NumberOfLikes = NumberOfLikes;
}


//QUESTION 2: Create 2 Instagram post objects from the constructor function you created above

const InstagramPost1 = new InstagramPost("stuternhq", 
"we believe that the future of Nigeria is in our hands. If you have your PVC,please make sure to go out and vote wisely on February 25th! Don't forget to stay safe!",
 "https://wwww.instagram.com/p/CpDFVpONIMm/?igshid=YmMYMTA2M2Y=", "20 views", "14 likes");

const InstagramPost2 = new InstagramPost("ingressive4good", 
"Community is about the people in it! To get the best of any community you're in, you need to interact with the people- what we can also call networking.", 
"https://www.instagram.com/p/CpDDbaCDAIf/?igshid=YmMyMTA2M2Y=", "50 views", "71 likes");

console.log(InstagramPost1);
console.log(InstagramPost2);


/**
 * QUESTION 3: Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam
 *  and had the following scores in his combination: ENG - 70, GOVT - 85, LIT - 82, CRK - 94
 *  a. Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. 
 * Afterwards, create an object representing Musa from the factory function. 
*/

function createPerson(name, age, location) {
    return {
      Name: name,
      Age: age,
      Location: location,
    };
  }
  const Person = createPerson("Musa Dawodu", "19 years old", "Lekki,Lagos State");
  console.log(Person);


  /**
   * b. Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. 
   * Then create an object representing Muse’s JAMB scores.
   */

  function createJambScores(eng, govt, lit, crk) {
    return {
      ENG: eng,
      GOVT: govt,
      LIT: lit,
      CRK: crk,
    };
  }

  const JambScores = createJambScores(70, 85, 82, 94);
  console.log(JambScores);


// Add the object as a property to Musa object you created above in (a) above
 
const Person1 = {Name: "Musa Dawodu", Age: "19 years old", Location: "Lekki,Lagos State" };
const JambScores1 = {ENG: 70, GOVT: 85, LIT: 82, CRK: 94};

const personJambscores = Object.assign(Person1, JambScores1);

console.log(Person1);


/**
 * QUESTION 4: What are the different ways you can clone an object? Give examples for each of them.
 * ANSWER: Using Object.assign(), Using spread syntax, Using the method JSON.parse(JSON.stringify())
 */

//a. Using Object.assign()
const Phone = {
  deviceName: "A7S",
  brand: "UMIDIGI",
  androidVersion: 10,
  phoneStorage: "32GB",
  runMemory: "2GB",
};

const Phone1 = Object.assign({}, Phone);

console.log(Phone);
console.log(Phone1);

Phone1.brand = "Samsung";

console.log("After a change in the brand of second phone");
console.log(Phone);
console.log(Phone1);


//b. Using spread syntax i.e, ...

const Television = {
  brand:'Hisense',
  color: 'black',
  inch: '50 inch',
  isTouchScreen: true,
  speakers: 2,
  HDMports: 3,
  screenMirroring: true,
};

const Television1 = { ...Television };
console.log({ Television });
console.log({ Television1 });

Television1.color = "white";

console.log({ Television });
console.log({ Television1 });



//c. Using the method JSON.parse(JSON.stringify())

const Textbook = {
  author:'Anne Anastasi',
  title: 'Psychological Testing',
  edition: 'Forth edition',
  yearOfPublication: 1976,
  publisher: "Macmillan",
};

const Textbook1 = JSON.parse;

console.log({ Textbook });
console.log({ Textbook1 });

Textbook1.edition = "sixth edition";
Textbook1.yearOfPublication = 2001;

console.log({ Textbook });
console.log({ Textbook1 });


/**
 * As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:
 * const presidentialCandidates = {
 *  AAC: 'Omoyele Sowore',
 *  ACCORD: 'Christopher Imumolen',
 *  APC: 'Bola Ahmed Tinubu',
 * LP: 'Peter Obi',
 * NNPP: 'Rabiu Kwankwaso',
 * PDP: 'Atiku Abubakar',
 * }
 * Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
 * ’Omoyele Sowore is the presidential candidate of AAC’
 */

const presidentialCandidates = {
  AAC: 'Omoyele Sowore',
  ACCORD: 'Christopher Imumolen',
  APC: 'Bola Ahmed Tinubu',
  LP: 'Peter Obi',
  NNPP: 'Rabiu Kwankwaso',
  PDP: 'Atiku Abubakar',
  }

  //for..in loops
  for (const key in presidentialCandidates) {
  
    console.log(presidentialCandidates[key] + " is the presidential candidate of " + key);
  }







