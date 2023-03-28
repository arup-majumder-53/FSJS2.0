# DOM Assignment 1

**Task 1** 

 In the navigation menu part Change "Contact" name to "Projects" and append a new element in the navigation menu named "Hire Menu" after that hide social icons in the bottom right part.

 ![Task1 Image](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task1Output.png)

**Solution**


  // "Contact" to "Projects"

       const ul = document.getElementsByTagName("ul") ['0'];
       ul.lastElementChild.innerHTML = "<a>Projects</a>";

// add Hire Me

       let newLI = document.createElement("li");
       newLI.innerHTML = "<a>Hire Me</a>";
       ul.appendChild(newLI);

// hiding social icons   
    
       const socialUL = document.getElementsByTagName("ul") ['1'];
       socialUL.style.display = "none";


**Task 2** 

Change input placeholder value Search to Search My Project.

![Task2 Image](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task2Output.png)

**Solution**      
      

      let input = document.querySelector("input");
      input.placeholder = "Search My Project"


**Task 3**

Change the "a Freelancer" and " National and Internation Client" to "ineuron intelligence Pvt Ltd." display the social icons .

![Task3 Image](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task3Output.png)

**Solution**

// changing text

      let span = document.querySelectorAll(".hero-left-section p span");
      span[1].innerText = "an employee";
      span[2].innerText = "ineuron inteligence Pvt Ltd.";


// displaying social icons

        const socialUL = document.getElementsByTagName("ul") ['1'];
        socialUL.style.display = "flex";



**Task 4**

Change the "Avtar" image with the image of "Hitesh Sir" 

![Task4 Image](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task4Output.png)

**Solution**        

       let hsimg =document.querySelector(".hero-right-section>img");
       hsimg.src ="https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";



**Task 5**

Append Support-Me Button

![Task5 Image](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task5Output.png)

**Solution**    
    
       let Supportbtn = document.createElement("button");
       Supportbtn.innerText = "Support Me";
       let btn = document.querySelector('.hero-right-section-btns');
       btn.appendChild(Supportbtn);


# DOM Assignment 2

**Task 1**    

 change background color of heading of the accordian

 ![Task1 Image](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task1Output.png)

 **Solution** 

       let heading = document.querySelectorAll(".accordian h3");
       heading.forEach(h3 => {h3.style.backgroundColor = "#dadaf8"});

 **Task 2**

 Add a new accordian(name-"Skills")  and also add new paragraph

![Task2](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task2Output.png)

**Solution**
    
       let parent = document.querySelector(".accordian-wrapper");
       let element = document.createElement("div");
       element.classList.add("accordian");

       let header = document.createElement("h3");
       header.innerText ="skills";

       let paragraph = document.createElement("p");
       paragraph.innerText = "I posses a very good command over the Full Stack 
       Development technologies like MERN which can be seen in my work over GitHub";   
       paragraph.style.display = "block"; 
       
       element.appendChild(header);
       element.appendChild(paragraph);
       parent.appendChild(element);
       
       heading = document.querySelectorAll(".accordian h3");
       heading.forEach(h3 => {h3.style.backgroundColor = "#dadaf8"});





# DOM Assignment 3

**Task** 

Change the placeholder values according to the given image.

![Task Image](./DOM%20Assignment%202.0%201%2C2%2C3/thirdAssignmentImage/task1Output.png)

// for output board

       document.querySelector(".enterName").placeholder = "FSJS 2.0";
       document.querySelector(".enterMail").placeholder = "fsjs@ineuron.ai";
       document.querySelector(".enterMessage").placeholder = "Hello World";

// for input board

       document.querySelector(".userName").placeholder = "FSJS 2.0";
       document.querySelector(".userEmail").placeholder = "fsjs@ineuron.ai";
       document.querySelector(".userMessage").placeholder = "Hello World";

    

   
# DOM Assignment 4

**Task** 

Change the character names then Change background and text color at the bottom of the cards.

![Task](./04_DOM%20Project/04_DOM%20Project/Output/DOM%20P1%20SS.png)


//Changing the character names
    
       document.querySelector(".clash-card__level--archer").nextElementSibling.   innerHTML = "The Archer";
       document.querySelector(".clash-card__level--goblin").nextElementSibling.   innerHTML = "The Goblin";

// Changing background color at the bottom of the cards

       document.querySelector(".clash-card__unit-stats--barbarian").style.   backgroundColor = "#EC9B3B";
       document.querySelector(".clash-card__unit-stats--archer").style.backgroundColor    = "#EE5487"; 
       document.querySelector(".clash-card__unit-stats--giant").style.backgroundColor    = "#F6901A"; 
       document.querySelector(".clash-card__unit-stats--goblin").style.backgroundColor    = "#82BB30"; 
       document.querySelector(".clash-card__unit-stats--wizard").style.backgroundColor    = "#4FACFF";

// changing text color at the bottom of the cards

       document.querySelectorAll(".one-third").forEach(clr => {
       clr.style.color = "#ffffff";})



# DOM Assignment 5


**Task**

Add "Pro Subscription" button next to "Contact" button then in the recipe section add new recipe "Chinese (7)" after that change the existing food cart's text color and add the 6th card.

![Task ](./05_DOM%20Project/05_DOM%20Project/Output/DOM%20P2%20SS.png)

**Solution**

// adding button

       let pros = document.querySelector(".btn");
       let clon = pros.cloneNode(true);​
       clon.innerText = "Pro Subscription"
       pros.insertAdjacentElement("afterend", clon);

// adding recipe

       let Chinese = document.createElement("a");
       Chinese.innerHTML = "Chinese (7)"; 
       document.querySelector(".tags-container div").appendChild(Chinese);

// changing the card text color

       document.querySelectorAll(".recipe-name").forEach(clr => {
       clr.style.color = "#8A2BE2";})
       document.querySelectorAll(".recipe-disp").forEach(clr => {
       clr.style.color = "#8A2BE2";})

// adding 6th card

       let card = document.getElementsByClassName("card")[4];
       let lastcard = card.cloneNode(true);
       lastcard.innerHTML = "<h3>add 6th card here</h3>";
       card.insertAdjacentElement("afterend", lastcard);
​



# DOM Assignment 6

Add Ineuron logo then change price to $10/month and add "linkedin" font awesome icon at end of the footer

**Task 1**

Add Ineuron logo

![Task](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-1.png)

**Solution**

       let inrn = document.querySelector("header img");              
       inrn.src = "./assets/ineuron-logo.png";


**Task 2**

 change price $4/month  to $10/month 

![Task](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-2.png)

**Solution**

       let price = document.querySelector(".app_price span");
       price.innerText = "$10";




# DOM Assignment 7


Remove the languages that have 2.0 in their name Use Javscript to write something in the input box and submit the form. This should refresh the page and languages in the left card should come back.

**Task 1**

Remove the languages that have 2.0 in their name

![Task](./DOM%20P7/DOM%20P7/ass7.1-after.png)

**Solution**

       let weblan = document.querySelectorAll(".main__languages > a");
       weblan.forEach(a => {
       if (a.innerText.includes("2.0")) {
           a.style.display = "none"
       }
       })

**Task 2**

![Task](./DOM%20P7/DOM%20P7/ass7.2-after.png)

**Solution**

       let weblan = document.querySelectorAll(".main__languages > a");
       weblan.forEach(a => {
       if (a.innerText.includes("2.0")) {
           a.style.display = "none"
       }
       })

**Task 2**

![Task](./DOM%20P7/DOM%20P7/ass7.2-after.png)
 
**Solution**
    
       let input = document.querySelector(".main__form-input"); 
       input.disabled = false;

       let submitBtn = document.querySelector(".main__form-btn"); 
       submitBtn.disabled = false;


       submitBtn.addEventListener('click', () => {
           weblan.forEach(a => {
          if (a.innerText.includes("2.0")) {
          a.style.display = "inline"
         }
       })

       });



# DOM Assignment 8



**Task 1**

 add new h2 , horizontal line  then add  to the div and add  scrollbar functionality.

![Task1](./DOM%20P8/DOM%20P8/ass8.1-after.png)

**Solution**

        const scrl = document.querySelector(".new");
        scrl.style.overflow = "scroll"

        const h2 = document.querySelector(".new-head");
        let h2_prime = h2.cloneNode(true);
        h2_prime.innerText = "This is my Custom Heading";
        scrl.appendChild(h2_prime);
        ​
        let hr = document.querySelector(".hr-line"); 
        let hr_prime = hr.cloneNode(true);   
        scrl.insertBefore(hr_prime, h2_prime);


**Task 2**

remove the background imgage to white

![Task2](./DOM%20P8/DOM%20P8/ass8.2-after.png)

**Solution**

        document.body.style.backgroundImage = "none";


**Task 3**

show the nav links to smaller devices

![Task3](./DOM%20P8/DOM%20P8/ass8.3-after.png)

**Solution**

        const navlink = document.querySelector('.collapse');
        navlink.style.display = "inline";




# DOM Assignment 9


**Task 1**

change the color of the heading

![Task1](./DOM%20P9/DOM%20P9/ass9.1-after.png)

**Solution**

        document.querySelector(".caption .title").style.color ="#DC143C";

**Task 2**

change the add-to-cart btn color on mouseover event

![Task2](./DOM%20P9/DOM%20P9/ass9.2-after.png)

**Solution**

       const btn = document.querySelector(".add-to-cart"); 
 
       btn.addEventListener("mouseover",() => {
             btn.style.backgroundColor = "#DC143C";
       })
 
       btn.addEventListener("mouseout",() => {
             btn.style.backgroundColor = "#3C8067";
       })
