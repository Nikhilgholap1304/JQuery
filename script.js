// console.log($(document)) //we will get the //ce.fn.init {0: document, length: 1} //object, since you know how we access window object direcly and so document also

// method to execute when the DOM is fully loaded.
$(document).ready(() => {

  // console.log($())
  // $ is a function and it returns object -> ce.fn.init {}

  // $ is a jquery shortcut

  // console.log(jQuery())
  //$ is same as jQuery ($ represents jQuery)

  // $('selector').action() - its the syntax

  // its equivalent to 
  // document.selectorMethod("selector").addEventListener('event_type', (e)=>{action})


  // console.log($('p'))

  // }
  // ce.fn.init {0: p, length: 1, prevObject: ce.fn.init}
  // 0:p
  // length : 1
  // prevObject : ce.fn.init {0: document, length: 1}
  // [[Prototype]] : Object

  //we just have to send selector in the form of argument and then it will again return one object which consists of that element, length and prevObject which is a document

  // console.log($('p')[0])
  // <p>...</p>
  // $('p')[0].onclick = () => {
  //   console.log('hii') 
  // see you can also do like this
  // bcuz the object that function is returing has element at 0th key and using that you can also use them to perform any usual operation/event handling

  // console.log($('h1'))
  //if the elements are more it will return the same object as above just the elements will get add at increasing key number like 0,1,2,3 and so on

  // console.log($('h1')[0]) //first ele
  // console.log($('h1')[1]) //second ele


  // $('button').click((e) => {
  //   $('body')[0].style.backgroundColor = 'purple'
  // });

  // $('button').dblclick((e) => {
  //   $('body')[0].style.backgroundColor = 'grey'
  //   console.log("you double clicked here")
  // });

  // $('button').mouseover((e) => {
  //   $('body')[0].style.backgroundColor = 'grey'
  //   console.log("you double clicked here")
  // });

  // $('button').mouseout((e) => {
  //   $('body')[0].style.backgroundColor = 'grey'
  //   console.log("you double clicked here")
  // });

  // $('button').hover((e) => { //combination of mouse enter and mouse leave
  //   $('body')[0].style.backgroundColor = 'grey'
  //   console.log("you double clicked here")
  // });



  //.click method is a shorcut in place of .addEventListener method rest of the working is same


  //hide method

  // $('h1').click(() => {
  //   $('h1').hide(); //this function is equivalent to property display:none
  // });

  //but what if you only want to select clicked element only
  //when you want to use this then you must use named function
  // $('h1').click(function () {
  //   $(this).hide();
  //   console.log(this) //this will return current clicked element only 
  // });

  // equivalent to this
  // $('h1')[1].addEventListener('click',function(){
  //   console.log(this)
  // })

  // $('.container').click(function (e) {
  //   console.log('this is the container', e.target)
  // });

  // $('#logo').click(function () {
  //   console.log('this is the logo', this)
  // });


  //if you don't pass the callback or any argument than click() will automatically click the target without touched by us and then our eventListener above will perform the actions
  //2 behaviours - one is to handle the click event after it gets triggered and second one is to click itself
  // $('button').click();


  // or directly a shortcut by passing directly one callback
  // $(()=>{
  //   console.log("this will run after dom content loaded")
  // })
  // Vanilla js
  // document.addEventListener("DOMContentLoaded", function() {
  //   // Code to run once the DOM is ready
  // });


  // $('div.container').click()
  //keep the eyes on scope also


  // Events in JS

  // Mouse Events -
  // click, mouseover, mouseout
  // Keyboard Events -
  // keydown, keyup, keypress 
  // Form Events - 
  // submit, change, input, focus
  // Window/Document Events
  // scroll, load, unload, resize


  // on method

  // $('*').on('click',()=>{
  //   console.log('Everything got clicked')
  // })

  // .on() method is very similar to addEventListener()

  //but for assigning multiple events we can pass calbacks in the form of object (key value pair)
  // $('button').on({
  //   click: () => console.log("clicked"),
  //   mouseover: () => console.log("mouse over"),
  //   mouseout: () => console.log("mouse out"),
  // })

  // $('button').on('click',()=>{
  //   // $('p').hide();
  //   // $('p').show();
  // })

  // $('p').hide()
  // $('button').on('click', () => {
  //   // $('p').hide(1000, () => {
  //   //   console.log("Yo this hide got completed")
  //   // });
  //   $('p').show(1000, () => {
  //     console.log("Yo this show got completed")
  //   });
  // })

  // hide also takes optional 2 arguments
  // 1) duration
  // 2) callback to execute after effect completes


  // $('button').on('click', ()=>{
  //   $('p').toggle(1000, ()=>{
  //     console.log("Yeah its toggling")
  //   })
  // })

  //its only toggle not the toggleClass, and its just an combination of hide and show
  //it will behave like classList.toggle but for hide and show purpose, if present then hide and if hidden then show and viceversa

  // $('button').on('click', () => {
  // $('p').fadeOut(1000, ()=>{
  //   console.log("Yeah its fading out")
  // })
  // $('p').fadeIn(1000, 'linear', () => {
  //   console.log("Yeah its fading in")
  // })
  // $('p').fadeToggle(1000, () => {
  //   console.log("Yeah its toggling the fade")
  // })
  // $('p').fadeTo(1000, 0.5, 'swing', () => {
  //   console.log("Yeah its fading in")
  // })
  // })

  // speed	Optional. Specifies the speed of the fading effect. Default value is 400 milliseconds
  // Possible values:
  // milliseconds
  // "slow"
  // "fast"

  // easing	Optional. Specifies the speed of the element in different points of the animation. Default value  is "swing"
  // Possible values:
  // "swing" - moves slower at the beginning/end, but faster in the middle
  // "linear" - moves in a constant speed

  // callback	Optional. A function to be executed after the fadeIn() method is completed

  // $('button').on('click', () => {
  // $('p').slideUp(1000, () => {
  //   console.log('sliding up')
  // })
  // $('p').slideDown(1000, () => {
  //   console.log('sliding down')
  // })
  //   $('p').slideToggle(1000, () => {
  //     console.log('toggle sliding')
  //   })
  // })


  // $('button').on('click', () => {
  //   $('p').animate({ opacity: 0.2, height: "10px" }, 2000) //object(containing css), duration
  // })

  // $('button').on('click', () => {
  //   $('p').animate({
  //     opacity: 0, 
  //     height: "10px",
  //     width: "10px"
  //   }, 'fast') //object(containing css), duration (slow or fast or number)
  // })

  // queue - promises in Jquery

  // $('p').animate({scale: 1}, 1000);
  // $('p').animate({scale: 0}, 4000);
  // $('p').animate({scale: 1}, 3000);
  // $('p').animate({width: '10px'});

  //this asynchronous functions will execute bcuz of promises has been internally embedded

  // if we want to stop the animation then we should use .stop() method, try using it in chrome



  // console.log($('p').text())
  // console.log($('p').text('This is the overwritten text'))
  //we will get the text = textContent

  // console.log($('p').html())
  // console.log($('p').html('This is the overwritten innerHTML <span>😁</span>'))
  //we will get the inner html = innerHTML


  // Jquery for forms

  // $('#name').on('input', function(){
  // console.log(this.value) //or
  // console.log($('#name').val('Ypo'))
  // console.log($('#name').val())
  // })

  // console.log(
  //   $('#name').val(),
  //   $('#passage').val(),
  // )

  //
  // $('button').on('click', ()=>{
  //   $('p').empty()
  // })
  // remove all child nodes of the set of matched elements from the DOM.

  // $('button').on('click', ()=>{
  //   $('p').remove()
  // })

  //This will remove the element itself

  // $('p').addClass('class1')
  // $('p').addClass('class2')
  //it will not overwrite, infact it will just add it

  //alternative of classList.add()

  // $('p').removeClass('class1 class2')
  //it will remove the class/classes

  // $('button').on('click', ()=>{
  //   $('p').toggleClass('newClass')
  // })
  //same as .classList.toggle('class)

  // $('button').css('background-color', 'orange')
  // equivalent to .style.backgr...... = "<orange></orange>"
  //we can also provide multiple styles

  // $('button').css({
  //   padding: "10px 20px",
  //   "background-color": "purple",
  //   color: "#fff"
  // })

  // Get Attributes - attr()
  // The jQuery attr() method is used to get attribute values.

  // console.log(
  //   $('span').attr("class", 'classvalue')
  //   //to set the atrr
  // )
  //multiple attr at the same time

  // $('span').attr({
  //   "class": "classvalue",
  //   "title": "this is span"
  // })

  // $("span").attr("id", function (i, origValue) {
  //   return origValue + "-1";
  // });
  //"logo-1" to the id 
  //we can add multiple attr and values in the object form as a single argument

  // append() - Inserts content at the end of the selected elements
  // prepend() - Inserts content at the beginning of the selected elements
  // after() - Inserts content after the selected elements
  // before() - Inserts content before the selected elements

  // var txt1 = "<p>Text.</p>";
  // var txt2 = "random text <br>";
  // var txt3 = "again text";
  // $("body").append(txt1, txt2, txt3);

  // equivalent to -
  // first to create the elements and put the content using innerHTML
  // .append(single to multiple elements at the end)

  // jQuery Dimension Methods
  // jQuery has several important methods for working with dimensions:

  // width() - method sets or returns the width of an element (excludes padding, border and margin)
  // height()
  // innerWidth() - method returns the width of an element (includes padding).
  // innerHeight()
  // outerWidth() - method returns the width of an element (includes padding and border).
  // outerHeight()

  // console.log(
  //   $('p').width(),
  //   $('p').height()
  //   // 645.333 62
  // )

  // $('p').width(500).height(500)

  // console.log(
  //   $("span").parent()
  //   //body
  // )

  // console.log(
  //   $("body").children()
  // )

  // console.log(
  // $("body").find('span'),
  // $("body").find('*') //it returns all the childs
  // )
  // The find() method returns descendant elements of the selected element, all the way down to the last descendant

  // There are many useful jQuery methods for traversing sideways in the DOM tree:

  // siblings()
  // next()
  // nextAll()
  // nextUntil()
  // prev()
  // prevAll()
  // prevUntil()

  // The most basic filtering methods are first(), last() and eq(), which allow you to select a specific element based on its position in a group of elements.

  // Other filtering methods, like filter() and not() allow you to select elements that match, or do not match, a certain criteria.

  // eq - The eq() method returns an element with a specific index number of the selected elements

  //filter - The filter() method lets you specify a criteria. Elements that do not match the criteria are removed from the selection, and those that match will be returned

  // console.log($("div").first())
  // console.log($("div").last())
  // console.log($("div").eq(0))
  // console.log($("div").filter(".container")) //it will not select other than .container

  // console.log($("div").not(".container")) //it will not select only .container


  //   AJAX = Asynchronous JavaScript and XML.

  //  In short; AJAX is about loading data in the background and display it on the webpage, without reloading the whole page.

  //  Examples of applications using AJAX: Gmail, Google Maps, Youtube, and Facebook tabs

  //With the jQuery AJAX methods, you can request text, HTML, XML, or JSON from a remote server using both HTTP Get and HTTP Post - And you can load the external data directly into the selected HTML elements of your web page!

  // AJAX - art of exchanging the data with server without reloading the page
  // Perform an asynchronous HTTP (Ajax) request.
  // $.get('https://cat-fact.herokuapp.com/#/cat',
  //   (data, status)=>{
  //     console.log(data)
  //     console.log(status)
  //     //success
  //   }
  // )
  //it returns an object of meta data not the real data

  // $.post('https://cat-fact.herokuapp.com/#/cat',
  //   (data, status)=>{
  //     // console.log(data)
  //     console.log(status)
  //     //success
  //   }
  // )

  // jQuery load() Method
  // The jQuery load() method is a simple, but powerful AJAX method.
  // The load() method loads data from a server and puts the returned data into the selected element.
  // Syntax:
  // $(selector).load(URL,data,callback);

  // $('div').first().load('./demo.txt')

  // The optional callback parameter specifies a callback function to run when the load() method is completed. The callback function can have different parameters:

  // responseTxt - contains the resulting content if the call succeeds
  // statusTxt - contains the status of the call
  // xhr - contains the XMLHttpRequest object

  // $('div').first().load('https://api.github.com/users/Nikhilgholap1304', (res, status, xhr) => {
  //   if (status == "success") {
  //     console.log("Success")
  //     // console.log(res)
  //   }
  //   if (status == "error") {
  //     console.log("Error: " + xhr.status + ": " + xhr.statusText)
  //   }
  // })

  // jQuery $.get() Method
  // The $.get() method requests data from the server with an HTTP GET request.
  // Syntax: $.get(URL,callback);
  // The required URL parameter specifies the URL you wish to request.
  // The optional callback parameter is the name of a function to be executed if the request succeeds.
  // The following example uses the $.get() method to retrieve data from a file on the server:


  // $('button').on('click', () => {
  //   $.get('https://api.github.com/users/Nikhilgholap1304', (data, status) => {
  //     if (status == "success") {
  //       console.log("good to go")
  //       console.log(data)
  //       // $(".empty").append(JSON.stringify(data))
  //     }
  //     if (status == "error") {
  //       console.log("error")
  //     }
  //   })
  // })

  // $("button").click(function(){
  //   $.post("demo_test_post.asp",
  //   {
  //     name: "Donald Duck",
  //     city: "Duckburg"
  //   },
  //   function(data, status){
  //     alert("Data: " + data + "\nStatus: " + status);
  //   });
  // });

  // $("button").click(function () {
  //   $.ajax({
  //     url: 'https://api.github.com/users/Nikhilgholap1304',
  //     success: (data) => {
  //       console.log(data)
  //       console.log("good to go")
  //     },
  //     error: (err) => {
  //       console.log('failed to get')
  //       console.log(err)
  //     }
  //   })
  //   //the argument must be in the form of an object and then there multiple keys and values we can pass
  // })
  
})






