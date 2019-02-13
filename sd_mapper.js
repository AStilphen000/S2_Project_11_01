"use scrict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Angelina Stilphen
   Date:   2.12.19

*/

// The local string converts the date and time of the content on the webite 
var thisTime = new Date();
var timeStr = thisTime.toLocaleString(); 
document.getElementById("timeStamp").innerHTML = timeStr;
// The get hours gets the hours in a date, in local time. The get month, using local time. 
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
// The number of the map to use with the given hour and month is calculated with the formula (2×month + hour) % 24. Where month is the value of the thisMonth variable and hour is the value of the thisHour variable. 
var mapNum = (2 * thisMonth + thisHour) % 24;
// for the inline element showing the sky image to use in the web page. Where Map is the value of the mapNum variable.
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";
// the ID planisphere, I used insertAdjancentHTML() to insert the value of the imgStr variable directly after the element’s opening tag.
document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr);
