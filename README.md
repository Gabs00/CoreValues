CoreValues
==========

Mobile App showcasing core values

## Description

  * Create mobile app showcasing 8 core values

## Spec:

  * Core Value of the Week
    * Show a different core value for each week
    * Show Category header and text, Text Description
  * Show All Core Values On a Single Page
    * Collapsible sections (default view below)
      * Core Values
      * Focus on Service
      * The Collaborative Way
      * Personal Effectiveness
    * Clicking a header shows associated values
  * Bonus
    * Use swipe gestures to change between VOTW and All Values
    * Cool things

## ToDo
 1. Set up stylings for each section
 2. Make each section collapsible
 3. Make mobile friendly
 4. Use local storage to save weekly core value
 
## Stack
  * Angular
  * angular-ui-router
    * SPA, using views and potentionally nested views
  * angular-bootstrap, bootstrap-less
    * Styling, also provides nice ui tweaks. Though, may switch for angular-material design
  * Requirejs
    * Easy bundling of src
  * Underscore
    * Mainly for templating, since we won't be using a server
  * Karma, Jasmine and friends
    * TDD
