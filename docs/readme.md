# document querySelector usage 

```javascript
var element = document.querySelector('#myId');
console.log(element); // Logs the element with id="myId"

var element = document.querySelector('.myClass');
console.log(element); // Logs the first element with class="myClass"

var element = document.querySelector('div');
console.log(element); // Logs the first <div> element

var element = document.querySelector('[name="calendar"]');
console.log(element); // Logs the first element with name="calendar"

var element = document.querySelector('.parent .child');
console.log(element); // Logs the first element with class="child" that is a descendant of an element with class="parent"

var element = document.querySelector('div.myClass[name="calendar"]');
console.log(element); // Logs the first <div> element with class="myClass" and name="calendar"

var elements = document.querySelectorAll('.myClass');
elements.forEach(function(element) {
    console.log(element); // Logs each element with class="myClass"
});
```