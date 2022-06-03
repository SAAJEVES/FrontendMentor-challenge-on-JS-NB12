# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JavaScript

### What I learned
Using the "preventDefault" function inhibited the original default of a particular element tag, trying to reverse it was the problem. After going through some series of web search, I was shown many ways to reverse it but one stood out the most which was easy to understand and it worked out well

```js
  submit.onclick = function(e) {
    e.preventDefault();
  };
```
To reverse the above as learnt online which worked,
```js
  submit.onclick = null;
```


### Continued development
JavaScript!
JavaScript!!
JavaScript!!!
JavaScript!!!!



### Useful resources

A lot of resources was helpful not just in this project but from the beginning of my learning of web development.
- (https://www.w3schools.com) 

- (https://www.freecodecamp.com)

- (https://www.youtube.com)

- And lots more. Surely, I will always recommend them days in and days out



## Author

- Github - (https://github.com/SAAJEVES)
- Frontend Mentor - (https://www.frontendmentor.io/profile/SAAJEVES)
- Twitter - (https://www.twitter.com/saajeves)
- LinkedIn - (https://www.linkedin.com/in/samuel-ajagun-020283150)


## Acknowledgments

I would love to acknowledge a very good friend of mine (https://github.com/wisdomosara) for his immense contribution on helping me in this project. You are well appreciated.