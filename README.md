# **QUIZY QUIZ - QUIZ APPLICATION GAME**

## **Purpose of the Project**

A simple, easy and fun quiz game application suitable for all age groups. This quiz game tests the audiance/users their knowledge on different aspects such as Science, Sports and Television.

**The game website is live on Github Pages [Linked Here](https://bella-aa.github.io/quiz-application/)

![am I responsive](https://user-images.githubusercontent.com/103276740/177038081-e29c30ea-a153-49b7-84b4-90a1ac4ee447.png)

## User Stories

### From a User's Perspective
As a user it is important: 

1. That it is easy to navigate the quiz game. 
2. To understand the rules of the quiz. 
3. To understand how to play the game. 
4. To see the totall number of questions I have answred correctly.
5. To return to the game after I recieved my score.
6. As a user, I want the game to be entertaining.

### Users Fulfilment

1. The quiz game is laid out simply so when first loaded the user sees the quiz questions and the answer options. 
2. There is an Instruction/information on how to play the quiz on top of the quiz questions, so the user sees it throughout the game. 
3. The information on how to play shows the user how to play the game and how to submit their answers. 
4. The user will choose their correect answer for the question from a list of options answers available.
5. There is a list of four option answers for each question in the quiz, and the user selects their desired option by clicking the buttons.
6. When the user has completed all the quiz questions, they get score report showing the number of questions they answerd correctly out of the total number of questions. 
7. The user can press the reload button to play the game again if the wish.

-----

## **UI Design**

### Strategy 

The game was created for people of all ages to play.  The game was designed for entertainment purpose.

The main aim is to be able to know how to play the game andthe correct answer from a list of possible answers from the available list of options.   

### **Wireframes**

I created the structure of the game using balsamic to make the wireframes. The design was focused on desktop first and then responsive for all the other device.

![New Wireframe 2 pp2](https://user-images.githubusercontent.com/103276740/177040786-f4ea80bf-5c98-4256-b7eb-2bece4513216.png)

## **Features**

#### **How to play**

* There are four answer options to choose from for each question .
* the user clicks on the button with their desired answer choice for the displayed question.
* When the user has answered all the available questions, they get a score report showing the number of questions they answered correctcly out of the total number of questions.
* The user then clicks the reload button to take the quiz again if they wish to.

#### **Game container**

* The quiz container is the largest  and contains the quiz question and answers and submit button

![quiz container](https://user-images.githubusercontent.com/103276740/177041450-08eb3f4e-f30e-460b-b9af-1437c3af1b9f.png)

* When the user has answered all the available question, a container showing the results appears with the score achieved out of the total answerd questions, and reload button that a user can click if they want to play the game again.

![results container](https://user-images.githubusercontent.com/103276740/177041626-e3316550-1efa-4a16-a70a-74a0084b14de.png)

## Future Implementation 

* I would like to add welcoming page for the quiz wher the user can see the quiz loading and enter their name to start the quiz
* I would love to add a game sounds for this quiz project probably some catchy background tunes
* I would like to add a timer, to give a countdown for the total time required to answer each quiz question.
* I would like to add  different quiz topic containers so that the user can choose the quiz they want based on the topics available.
* I would like to add background images to the quiz to make it eye catching.
* I would also like to add a leader board showing the results of all the games played


#### Colors 

The following palette of colors were chosen as they were eye-catching, vibrant for the game and worked well together: 

1. (87.4deg, rgb(181, 151, 174) 1.9%, rgb(154, 128, 181) 49.7%, rgb(158, 112, 112) 100.5%) - for gradient background
2.rgb(232, 212, 226) - for text colour for the game name and the next button text. 
3. rgb(228, 230, 238) - for the container with the quiz components
4. rgb(140, 49, 226) - the next button background color.
5. rgb(14, 1, 1) - for next button hover
6. rgb(42, 118, 42) - next button focus

##### Typography

* Throughout the site I used 'Poppins', sans-serif; as it is easy to read and I used Pacifico, Arial Helvetica for the quiz name and the next button text as it was very easy to read and stylish.

-----

## Technologies Used 


- HTML5 to provide content and structure to the website.
- CSS3 provides styles for the website. 
- Javascript  to provide interactivity to the site. 
- [Coolors.co](https://coolors.co/) to select colors for the website.  
- [Google Fonts](https://fonts.google.com/) for font styles.
- Balsamiq to create wireframes. 
- Gitpod to create and edit the website. 
- GibHub for hosting files and deployment of the website.
- Google Chrome DevTools for debug and testing site.
- GitBash to push changes to the GitHub repository.

-----

## **Testing and Debugging**

### **Testing**

* I did manual testing of the quiz application to see if all the buttons were working as expected.
* In addition, have sent the appplication with different mobile devices to see if the application is responsive.
* The devices that were included to check for responsiveness are iPad mini, S20 Ultra, S8 Galaxy and iPhone XR.
* I tested the application on the following web browsers:
  * Chrome,
  * Firefox,
  * Edge.

## **Post developement testing**

### **HTML Validation**

* To test my HTML code I used [W3C HTML Validator](https://validator.w3.org/nu/) and no errors were ruturned.

![HTML validation](https://user-images.githubusercontent.com/103276740/177057360-0c349bb7-a709-4ccc-905b-405dbae34a47.png)

### **CSS Validation**

* To test my CSS code I used [W3C Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/) and only one error shown.

![CSS validation](https://user-images.githubusercontent.com/103276740/177057405-dc786953-9d91-4da1-a54b-4aff4f954385.png)

### **JS Validation**
 
* To test my Javascript, I used [JS hint Validator] (https://jshint.com/)

#### ***JS report***
![JS validation cleared](https://user-images.githubusercontent.com/103276740/177058003-2f4996fd-a913-42cc-8c9d-b7ef4f0069e5.png)

### **Contrast Validation**

* To check for colour contrast issues, I used ["a11y Color Contrast Accessibility Validator"](https://color.a11y.com/) and there weree no colour contrast issues present.

![color contrast validator](https://user-images.githubusercontent.com/103276740/177057450-4d4d99ed-c5e9-47f3-bd58-a32a300ff34d.png)

### **Performance**

* Lighthourse performance
  * To check the performance of the website on mobile and desktop devices, I used lighthouse to check for the performance and accessibility score and the results were great.

  #### ***Desktop Lighthouse scores***

  ![desktop performance](https://user-images.githubusercontent.com/103276740/177057594-ed8fe436-c02e-415f-b728-993ea0139134.png)

  #### ***Mobile Lighthouse scores***

  ![mobile performance](https://user-images.githubusercontent.com/103276740/177057612-38d3b1aa-960a-477c-a049-fcdc1c6f2719.png)

  ### **Debugging**

  * There were no major isssues found within my code but when I ran my Java Script file on JS hint, the report indicated there were missing semi-colgnes within my code so I went on and added the semi colognes where they were needed.
  
  ## **Credits**

* Thanks to my mentor (Rohit Sharma) who helped me when I was stuck and not forgeting the slack community and student support which guided me all the way learning this module.

    **General reference:**

* To create this project, I used reference from the walk through project and a youtube video from Coding with Nick.

## **Deployment**

To deploy the website on GitHub pages, I used the following procedure:

1. From inside the website's repository I clicked on the "Settings" tab.
1. In the "Settings" select "Pages" on the left-handside of the page
1. Inside "GitHub Pages" and right under it there is a section with the title "Source" with 3 options:
    * Select Branch: main
    * Select Folder: /(root)
    * Click save: your website will be deployed.


  













    







