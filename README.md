# WorkDayScheduler

## Description

This project utilizes dynamically updated `HTML` and `CSS` powered by `jQuery` to create a basic calendar application that allows an employee to save events for each hour of the workday.  In addition to `jQuery`, `Moment.js` is used to display and work with date and time.

## Task

The calendar application must display and perform the following:
* Current day and date
* Time blocks for a standard business day, designated as 9AM - 5PM
* Color-coded time blocks to indicate whether the time is in the past, present, or future
* Clickable and editable time blocks for entering event information
* Ability to save entered information in local storage
* Displayed event information upon webpage refresh

## Usage

This application can be used by employees who would like a basic way to digitally schedule their workday on a daily basis.  <i>For the simplicity of this project, the use of local storage is acceptable, but another method would likely be best for storing any data in case of sensitive information.</i>

## Installation

This project will require a user to have:
* `Git Bash` (Windows), `Terminal` (Mac), or another application for executing commands to/from one's local machine.
* Code editor installed, such as `Visual Studio Code`.
* Access to `Bootstrap`, which is freely available online at https://getbootstrap.com/.
* Access to `Moment.js`, which is freely available online at https://momentjs.com/.
* Version control system, such as `GitHub`, to fork, clone, push, and pull the original repository, and to upload the final project to one's own version control system account.

## Process

This project began with some starter code for `HTML` and `CSS`, but additional `HTML` and all `jQuery` functionality needed to be added and created from scratch.

* Time blocks were added to the `HTML` to create the individual rows needed for scheduling out the workdy from 9AM - 5PM.
* The `JavaScript` file required the creation of a loop to go over all available time blocks to color-code hours based on the current time, the creation of a function to save data entered, and the ability to pull saved data from local storage.

## Link to Deployed Website
https://mkindler.github.io/WorkDayScheduler/

## Demo of Deployed Website
![Demo of Scheduling Events, Saving, and Reloading Page](work-day-scheduler-demo.gif)

## Contributing

Please open a New Issue via GitHub for pull requests on this project that includes a description of what you would like to change.

## Acknowledgment

* Trilogy Education Services
* https://www.w3schools.com, with the following accessed and referenced as needed to set-up the `JavaScript` file
    * [JavaScript String split Method](https://www.w3schools.com/jsref/jsref_split.asp)
    * [jQuery val Method](https://www.w3schools.com/jquery/html_val.asp)
    * [jQuery attr Method](https://www.w3schools.com/jquery/html_attr.asp)
    * [jQuery Selectors](https://www.w3schools.com/jquery/jquery_selectors.asp)
    * [JavaScript parseInt Function](https://www.w3schools.com/jsref/jsref_parseint.asp)
* [The complete guide to using localStorage in JavaScript apps](https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/)
* https://www.screencastify.com/
* https://fontawesome.com/
* Book:  <i>JavaScript & JQuery:  Interactive Front-End Web Development</i>, Jon Duckett