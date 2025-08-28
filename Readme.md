The answers of the following five questions are below.

✅ Answer to the question no - 1
The differences among getElementByID, getElementsByClassName, querySelector, querySelectorAll are -
(i) getElementByID selects only one element with the given ID. It returns a single element object. If nothing is found, returns Null.
(ii) getElementsByClassName selects all elements with the given class name. It returns a live HTML Collection. It's an array like object. So to access the specific elements we need to use indexing.
(iii) querySelector selects the first element with the given CSS selector. Selector can be an ID, class, tag or any other complex selectors.
(iv) querySelectorAll selects all matching elements for the CSS selector. It returns a static NodeList.

✅ Answer to the question no - 2
To create a new element and insert that into the DOM, we have to follow the below steps:
(i) create a new element by > document.createElement('tagname')
(ii) Add content or attributes to that element
(iii) To insert to the DOM, we have to use append(), appendChild(), prepend() or insertBefore()
Example:
let newDiv = document.createElement("div");
newDiv.innerText = "I am new here!";
document.body.appendChild(newDiv)

✅ Answer to the question no - 3
Event bubbling means when an event ('click', 'mouseover' etc) happens to a child element, it bubbles up to it's ancestors one by one gradually. First to the parent, then grandparent, up to the root.
Suppose, if we click a <button> inside a <div>, it will first trigger the button's event, then the div's event, then the upper parent's and so on to the root element's.

✅ Answer to the question no - 4
Event delegation implies, instead of attaching event listener to every child, attaching a single event listener to their parent.
Why is it useful -
(i) Saves memory
(ii) Works for dynamically added elements
(iii) Simple, easier code

✅ Answer to the question no - 5
Difference between preventDefault() and stopPropagation() -
(i) preventDefault() stops the default behavior of an element. Example: Browsers reload webpage when submitting a form by default, if we use preventDefault() it won't reload.
(ii) stopPropagation() stops the event bubbling process. Example: If we use stopPropagation(), when any events happen to a child element, it won't bubble up to it's parent.
