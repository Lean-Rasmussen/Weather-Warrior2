Making a small game in which you play gainst the ai, but wether conditions are determinded by a random location on the globe. 

Weather conditions change the combat system. 

The purpose if this game is to use test driven development to create an app with a lot of state manipulation. 
I am therefor implementing redux to keep track of the state. All of this is wrapped in a silly design and gifs, just to keep things light. 

The project stucture:

Src contains the majority of the actual code, 
In here there are 
__test__ which containes the test for the app.
    there are split up into:


appText containes written non logical text for the app. 

Component contain 
    Actions for redux- named after the screen or part of the Ui they handle ei. newCharAction are action for the newCharScreen. 
    reducers for redux -named after the screen or part of the Ui they handle.

the rest are components and containers for the app. 

styles containes Scss files the css file it is compiled into. Due to the focus being on TDD and state, the design is keept to a minimum. 


Structure of programmaing. 

First development is made on the development Branch.

    remotes:
        GitRepo - for developing form other stations, forking and cloning the project.
        heroku - active version of the project. heroku server : https://boiling-inlet-79559.herokuapp.com/
    
    branches:
        master - latest working version of the app.
        Development - Here development of new features logic and design will take place. 

    When a function or component is done and testing is green, it will be merged with the master branch. 
    From here it can be pushed into the gitRepo deposit. 

    When a complete functioning compoent has been finished the project can be pushed to heroku. 