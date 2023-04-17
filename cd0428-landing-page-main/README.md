# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

This code is a JavaScript program that creates a navigation bar based on the sections present in an HTML document and highlights the active section and corresponding navigation link when the user scrolls through the page.

The program sets up several variables at the beginning, including variables to select the navbar list and the sections in the HTML document, an active class variable to be added to the active section, and several empty arrays to store data later.

The main function is then called, which loops through the sections in the HTML document and adds their ids to the listSectionId array. It then creates a list element for each section and adds it to the navbarList unordered list. The list items are given an id and an href that corresponds to the section's id. The sectionArray is then populated with the actual HTML elements with the ids that are stored in listSectionId.

The makeChanges() function is then called, which loops through each section and checks if it is currently within the user's viewport by using getBoundingClientRect(). If a section is in view, the active class is added to it, and its corresponding list item is styled with a blue background. Otherwise, the active class is removed, and the styling is removed.

Finally, the program sets up an event listener for the scroll event, which calls the makeChanges() function when the user scrolls. Alternatively, window.onscroll can be used to listen to the scroll event.

