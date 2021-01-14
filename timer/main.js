/* const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

function days_calculate() {
  const choice = select.value;
	switch (choice) {
		case "February":
			let days = 28;
		case "April" || "June" || "September" || "November":
			let days = 30;
		default: 
			let days = 31;
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select.addEventListener ("change", days_calculate);
select.addEventListener ("change", createCalendar); */







/*const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');
let days = 0;

select.onchange = function() {
  const choice = select.value;
  switch (choice) {
		case "February":
      days = 28;
      break;
		case "April":
      days = 30;
      break;
    case "June":
      days = 30;
      break;
    case "September":
        days = 30;
        break;
    case "November":
          days = 30;
          break;
		default: 
      days = 31;
  }
  createCalendar(days, choice);

}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
} */




/* const select = document.querySelector('select');
const html = document.querySelector('.output');

select.onchange = function() {
  const choice = select.value;
  let bgColor = 'white';
  let textColor = 'black';
	switch (choice) {
		case 'black':
			bgColor = 'black';
			textColor = 'white';
			break;
		case 'purple':
			bgColor = 'purple';
			textColor = 'black';
			break;
		case 'yellow':
			bgColor = 'yellow';
			textColor = 'black';
			break;
		case 'psychedelic':
			bgColor = 'pink';
			textColor = 'yellow';		
      break;
}
  update(bgColor, textColor)
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}	 */






/* let output = document.querySelector('.output');
output.innerHTML = '';

for (let i = 10; i >= 0; i--) {
  switch (i) {
    case 10:
      para = document.createElement('p');
      para.textContent += `countdown ` + i + ` `;
    break;
    case 0:
      para = document.createElement('p');
      para.textContent += `Blast off!`;
    break;
    default:
      para = document.createElement('p');
       para.textContent += i + ` `;
  } 
  output.appendChild(para);
} */




/* const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for(i=0; i<people.length; i++) {
  if (people[i] === `Phil` || people[i] === `Lola`) {
    refused.textContent += people[i] + ", ";
  }
  else {
    admitted.textContent += people[i] + `, `;
  }
}
refused.textContent = refused.textContent.slice(0, refused.textContent.length-2) + `.`;
admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length-2) + `.`; */




/* function display_message(msgText,msgType) {
  const html = document.querySelector('html');
  const panel = document.createElement(`div`);
  panel.setAttribute(`class`, `msgBox`);
  html.appendChild(panel);

  const msg = document.createElement(`p`);
  msg.textContent = msgText;
  panel.appendChild(msg);

  const closeBtn = document.createElement(`button`);
  closeBtn.textContent = `x`;
  panel.appendChild(closeBtn);

  closeBtn.onclick = function() {
    panel.parentNode.removeChild(panel);
  }

  if (msgType === `warning`) {
    msg.style.d = `url(warning.png)`;
    panel.style.backgroundColor = `red`;
  } else if (msgType === `chat`) {
    msg.style.backgroundImage = `url(chat.png)`;
    panel.style.backgroundColor = `aqua`;
  } else {
    msg.style.paddingLeft = `20px`;
  }
}


const btn = document.querySelector(`button`);
btn.onclick = function() {
  display_message(`A very big error!`,`chat`);
} */




/* const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function squared(num) {
  return num*num;
}

function root(num) {
  let i = 0;
  for (i = 0; i*i < num; i++) {
    i*i;
}
return i;
}

function cubed(num) {
  return num*num*num;
}

function factorial(num) {
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  } 
  return num;
}

input.onchange = function() {
  const num = input.value;
  if (isNaN(num)) {
    para.textContent = `You need to enter a number!`;
  } else {
    para.textContent = num + ` squared is ` + squared(num) + `. ` +
                       num + ` cubed is ` + cubed(num) + `. ` +
                       num + ` factorial is ` + factorial(num) + `. ` +
                       `root of ` + num + ` is ` + root(num) + `.`;
  }
} */



// SuperButton.addEventListner(`click`, e.target)


/*const form = document.querySelector(`form`);
const fname = document.getElementById(`fname`);
const lname = document.getElementById(`lname`);
const para = document.querySelector(`p`);
form.onsubmit = function(e) {
  if (fname.value === `` || lname.value === ``) {
    e.preventDefault();
    para.textContent = `You need...`;
  }
} */

 // e.stopPropagation() 13421412414221421421414214124124124124






/*const images = document.querySelector(`.thumb-bar`);
const image = document.querySelector(`.displayed-img`) */


/* const person = {
  name: {
    fname: `Bob`, 
    lname: ` Cain`
  },
  age: 32,
  gender: `male`,
  interests: [`music`, `skiing`],
  bio: function() {
    alert(this.name[0] + ` ` + this.name[1] + ` is ` + this.age + ` years old. He likes ` + this.interests[0] ` and ` + this.interest[1] + `.`);
  },
  greeting: function() {
    alert(`Hi! I\`m ` +this.name[0] + `.`);
  }
};
let myHeight = `height`;
let myHeightValue = "170";
person[myHeight] = myHeightValue;

console.log(person.name.lname)

person.shirt = `red`;
person.name.fname = `Jack`;

console.log(person.name.fname);

person.eyes = `green`;
person.look = function() {
  console.log(`His ` + person.eyes + ` looked at you`);
}
person.look(); */



/* const person1 = {
  name: `John`,
  greeting: function() {
    console.log(`Hi! I'm ` + this.name + `.`);
  }
}


const person2 = {
  name: `Mary`,
  greeting: function() {
    console.log(`Hi! I'm ` + this.name + `.`);
  }
} */

/* function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert(`Hi! I'm ` + this.name + `.`);
  };
}


let person1 = new Person(`Sarah`);
let person2 = new Person(`Nataniel`); */



/* function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    let sentence = ``;
    if (this.gender === `male`) {
      sentence = `He`;
    } else if (this.gender === `female`) {
      sentence = `She`;
    } else {
      sentence = `They`;
    };
    let personInterests = ``
    for (i = 0; i < this.interests.length; i++) {
      personInterests += this.interests[i] + `, `;
    }
    personInterests = personInterests.slice(0, -2) + `.`;
    alert(this.name.first + ` ` + this.name.last + ` is ` + this.age + `. ` + sentence +  ` loves ` + personInterests );
  };
  this.greeting = function() {
    alert(`Hi, I'm ` + this.name.first + `.`);
  };
}

let person1 = new Person(`Paul`, `Johnson`, 25, `male`, [`playing the guitar`, `skiing`, `jogging`]);
let person2 = new Person(`Johanna`, `Smith`, 20, `female`, [`cooking`, `dancing`]); */




/* const input = document.querySelector('input');
const btn = document.querySelector('button');
const para = document.querySelector('p');

btn.onclick = function() {
  const code = input.value;
  para.textContent = eval(code);
}

function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.bio = function() {
  // First define a string, and make it equal to the part of
  // the bio that we know will always be the same.
  let string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
  // define a variable that will contain the pronoun part of
  // the second sentence
  let pronoun;

  // check what the value of gender is, and set pronoun
  // to an appropriate value in each case
  if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    pronoun = 'He likes ';
  } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    pronoun = 'She likes ';
  } else {
    pronoun = 'They like ';
  }

  // add the pronoun string on to the end of the main string
  string += pronoun;

  // use another conditional to structure the last part of the
  // second sentence depending on whether the number of interests
  // is 1, 2, or 3
  if(this.interests.length === 1) {
    string += this.interests[0] + '.';
  } else if(this.interests.length === 2) {
    string += this.interests[0] + ' and ' + this.interests[1] + '.';
  } else {
    // if there are more than 2 interests, we loop through them
    // all, adding each one to the main string followed by a comma,
    // except for the last one, which needs an and & a full stop
    for(let i = 0; i < this.interests.length; i++) {
      if(i === this.interests.length - 1) {
        string += 'and ' + this.interests[i] + '.';
      } else {
        string += this.interests[i] + ', ';
      }
    }
  }

  // finally, with the string built, we alert() it
  alert(string);
};

Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};

Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
}

let person1 = new Person('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);

Object.defineProperty(Teacher.prototype, `constructor`, {
  value: Teacher,
  enumerable: false,
  writable: true});
  


  Teacher.prototype.greeting = function() {
    let prefix;

    if (this.gender === `male` || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
      prefix = `Mr.`;
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
      prefix = 'Ms.';
    } else {
      prefix = 'Mx.';
    }
  
    alert(`Hello. My name is ` + prefix + ` ` + this.name.last + `, and i teach ` + this.subject + `.`);
  }
  let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');


  function Student(first, last, age, gender, interests) {
    Person.call(this, first, last, age, gender, interests);
  }

  Student.prototype = Object.create(Person.prototype);


  Object.defineProperty(Student.prototype, `constructor`, {
    value: Student,
    enumerable: false,
    writable: true
  });

  Student.prototype.greeting = function() {
    alert(`Yo! I'm ` + this.name.first);
  };


  let student1 = new Student(`John`, `Paul`, `17`, `male`, [`sports`, `tv`]); */


  /* class Snek extends Animal {
    constructor(eat, sleep, bite) {
      super(eat, sleep);

      this.bite = `ouch`
    }
  
  get bite() {
    return this._subject;
  }

  set bite(newbite) {
    this._bite = newbite
  }
  } 
  
  
  
  */

 /* class Shape {
   constructor(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
   }
}

  Shape.prototype.calcPeremiter = function() {
    let peremiter = this.sides * this.sideLength;
    console.log(peremiter);
  }

  class Square extends Shape {
    constructor(sideLength) {
      super();
      this.sideLength = sideLength;
      this.sides = 4;
      this.name = `Square`;
      this.calcArea = function() { 
        let area = sideLength * sideLength;
        console.log(area);
    }
  }
}
  
  square = new Square(6);
  square.calcPeremiter();
  square.calcArea();

  let triangle = new Shape(`triangle`, 3, 3);

  triangle.calcPeremiter(); */



  /* const header = document.querySelector('header');
  const section = document.querySelector('section');

  let requestURL =`https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json`;
  let request = new XMLHttpRequest();
  request.open(`GET`, requestURL);
  request.responseType = `json`;
  request.send();

  request.onload = function() {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
  }

  function populateHeader(obj) {
    const myH1 = document.createElement(`h1`);
    myH1.textContent = obj[`squadName`];
    header.appendChild(myH1);

    const para = document.createElement(`p`);
    para.textContent = `hometown: ` + obj[`homeTown`] + ` // Formed: ` + obj[`formed`];
    header.appendChild(para);
  }

  function showHeroes(obj) {
    const heroes = obj[`members`];

    for (let i = 0; i < heroes.length; i++) {
      const Article = document.createElement(`article`);
      const H2 = document.createElement(`h2`);
      const para1 = document.createElement(`p`);
      const para2 = document.createElement(`p`);
      const para3 = document.createElement(`p`);
      const list = document.createElement(`ul`);

      H2.textContent = heroes[i].name;
      para1.textContent = `Secret identity: ` + heroes[i].secretIdentity;
      para2.textContent = `Age: ` + heroes[i].age;
      para3.textContent = `Superpowers:`;
      
      const superPowers = heroes[i].powers;
      for (let j = 0; j < superPowers.length; j++) {
        const listItem = document.createElement(`li`);
        listItem.textContent = superPowers[j];
        list.appendChild(listItem);
      }
    
      Article.appendChild(H2);
      Article.appendChild(para1);
      Article.appendChild(para2);
      Article.appendChild(para3);
      Article.appendChild(list);

      section.appendChild(Article);
    }
  }




  !!!!!!!!!!!!!!!!!!!!!!! JSON.parse()    ;   JSON.stringify()    */










/* const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function Shape(x, y, velX, velY, exists) {
  this.x = x,
  this.y = y,
  this.velX = velX,
  this.velY = velY,
  this.exists = exists
}

function Ball(x, y, velX, velY, exists, color, size) {
  Shape.call(x, y, velX, velY, exists),
  this.color = color,
  this.size = size
}

Ball.prototype = Object.create(Shape.prototype);


Object.defineProperty(Ball.prototype, `constructor`, {
  value: Ball,
  enumerable: false,
  writable: true});


Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

Ball.prototype.update = function() {
  if((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }
  
  this.x += this.velX;
  this.y += this.velY;
}
Ball.prototype.collisionDetect = function() {
  for (let j = 0; j <balls.length; j++) {
    if (!(this === balls[j]) && balls[j].exists) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy*dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
      }
    }
  }
}


let balls = [];

while (balls.length < 25) {
  let size = random(10,20);
  let ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7,7),
    random(-7,7),
    `rgb(` +random(0,255) + `,` + random(0,255) + `,` + random(0,255) + `)`,
    size,
    exists = true
    );

  balls.push(ball);
}

function loop() {
  ctx.fillStyle = `rgba(0, 0, 0, 0.25)`;
  ctx.fillRect(0, 0, width, height);

  for( let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop(); */







/* const count = document.querySelector(`p`)
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function countballs() {

}

function Shape(x, y, velX, velY, exists) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = exists;
}


function Ball(x, y, velX, velY, exists, color, size) {
  Shape.call(this, x, y, velX, velY, exists);
  this.color = color;
  this.size = size;
}

function Evil(x, y, velX, velY, exists, color, size) {
  Shape.call(this, x, y, 20, 20, exists);
  this.color = `white`;
  this.size = 10;
}


Evil.prototype = Object.create(Shape.prototype);


Object.defineProperty(Evil.prototype, `constructor`, {
  value: Evil,
  enumerable: false,
  writable: true
});


Ball.prototype = Object.create(Shape.prototype);


Object.defineProperty(Ball.prototype, `constructor`, {
  value: Ball,
  enumerable: false,
  writable: true
});



Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};



Evil.prototype.draw = function() {
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.lineWidth = 3;
  ctx.stroke();
};

Ball.prototype.update = function() {
  if((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
};


Evil.prototype.update = function() {
  if((this.x + this.size) >= width) {
    this.x -= this.size;
  }

  if((this.x - this.size) <= 0) {
    this.x += this.size;
  }

  if((this.y + this.size) >= height) {
    this.y -= this.size;
  }

  if((this.y - this.size) <= 0) {
    this.y += this.size;
  }
};

Evil.prototype.setControls = function() {
  let _this = this;
window.onkeydown = function(e) {
    if (e.key === 'a') {
      _this.x -= _this.velX;
    } else if (e.key === 'd') {
      _this.x += _this.velX;
    } else if (e.key === 'w') {
      _this.y -= _this.velY;
    } else if (e.key === 's') {
      _this.y += _this.velY;
    }
  }
}

Evil.prototype.collisionDetect = function() {
  for (let z = 0; z < balls.length; z++) {
    if (balls[z].exists === true) {
      const dx2 = this.x - balls[z].x;
      const dy2 = this.y - balls[z].y;
      const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
      if (distance2 < this.size + balls[z].size) {
        balls[z].exists = false;
      }
    }
  }
}

Ball.prototype.collisionDetect = function() {
  for (let j = 0; j < balls.length; j++) {
    if (!(this === balls[j]) && balls[j].exists) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
      }
    }
  }
}

let balls = [];

while(balls.length < 25) {
  const size = random(10,20);
  let ball = new Ball(
    random(0 + size,width - size),
    random(0 + size,height - size),
    random(-7,7),
    random(-7,7),
    true,
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    size
  );
  balls.push(ball);
}

let eBall = new Evil(10, 10, 20, 20, true, `white`, 10);

eBall.setControls()

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0,0,width,height);
  eBall.draw();
  eBall.update();
  eBall.collisionDetect();

  for(let i = 0; i < balls.length; i++) {
    if (balls[i].exists === true) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }
}

  requestAnimationFrame(loop);
}

loop(); */





/* const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  let myDate;
  for(let i = 0; i < 10000000; i++) {
    let date = new Date();
    myDate = date
  }

  console.log(myDate);

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
}); */




/*function loadAsset(url, type, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open(`GET`, url);
  xhr.responseType = type;

  xhr.onload = function() {
    callback(xhr.response);
  };

  xhr.send();
}

function displayimage(blob) {
  let objectURL = URL.createObjectURL(blob);

  let image = document.createElement(`img`);
  image.src = objectURL;
  document.body.appendChild(image);
}

loadAsset(`coffee.jpg`, `blob`, displayimage);*/


/* console.log(`Starting`);
let image;

fetch(`coffee.jpg`).then((response) => {
  console.log(`It worked!`);
  return response.blob();
}).then((myBlob)  => {
  let objectURL = URL.createObjectURL(myBlob);
  image = document.createElement(`img`);
  image.src = objectURL;
  document.body.appendChild(image);
  console.log(`All is done`);
}).catch((error)  => {
  console.log(`There has been an error` + error.message);
}); */


/*function Hello(name) {
  console.log(`Hello,  ${name}.`);
}

let Greeting = setTimeout(Hello, 2000, `Peter`);
clearTimeout(Greeting); */


/* function Time() {
  let date = new Date;
  let time = date.toLocaleTimeString();
  document.querySelector(`.demo`).textContent = time;
}

Time()

const Clock = setInterval(Time, 1000);


setTimeout(clearInterval(Clock), 5000);*/


const btnStop = document.querySelector(`.stop`);
const btnStart = document.querySelector(`.start`);
const btnReset = document.querySelector(`.reset`);

let i = 0;
let j = 0;
let t = 0;

let time = 0;

function Time() {
  time++;
  document.querySelector(`.seconds`).textContent = time;
  if ( time >= 60) {
    j++;
    time = 0;
    document.querySelector(`.minutes`).textContent = j;
  }
  if ( j >= 60) {
    t++;
    j = 0;
    document.querySelector(`.hours`).textContent = t;
  }
  }

function restart() {
  time = 0;
  j = 0;
  t = 0;
  document.querySelector(`.seconds`).textContent = time;
  document.querySelector(`.minutes`).textContent = j;
  document.querySelector(`.hours`).textContent = t;
}


function countTime() {
  if (time !== 0 && i !== 1) {
    alert(`You have already started the timer`);
  } else {
  TimeCount = setInterval(Time, 1000);
  i = 0;
}
}

function terminate() {
  if (time === 0) {
    alert(`Timer is not running`)
  }
  clearInterval(TimeCount);
  i = 1;
}


btnStart.addEventListener (`click`, countTime);
btnReset.addEventListener (`click`, restart);
btnStop.addEventListener (`click`, terminate);
