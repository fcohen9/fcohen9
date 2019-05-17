        /*var accordionItems = new Array();

        function init() {
    
          // Grab the accordion items from the page
          var divs = document.getElementsByTagName( 'content' );
          for ( var i = 0; i < divs.length; i++ ) {
            if ( divs[i].className == 'accordionItem' ) accordionItems.push( content[i] );
          }
    
          // Assign onclick events to the accordion item headings
          for ( var i = 0; i < accordionItems.length; i++ ) {
            var h5 = getFirstChildWithTagName( accordionItems[i], 'H5' );
            h5.onclick = toggleItem;
          }
    
          // Hide all accordion item bodies except the first
          for ( var i = 1; i < accordionItems.length; i++ ) {
            accordionItems[i].className = 'accordionItem hide';
          }
        }
    
        function toggleItem() {
          var itemClass = this.parentNode.className;
    
          // Hide all items
          for ( var i = 0; i < accordionItems.length; i++ ) {
            accordionItems[i].className = 'accordionItem hide';
          }
    
          // Show this item if it was previously hidden
          if ( itemClass == 'accordionItem hide' ) {
            this.parentNode.className = 'accordionItem';
          }
        }
    
        function getFirstChildWithTagName( element, tagName ) {
          for ( var i = 0; i < element.childNodes.length; i++ ) {
            if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
          }
        }
    
        
        
       function myFunction1() {
        document.getElementById("web").classList.toggle("show");
    }
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn web')) {
    
            var dropdowns = document.getElementsByClassName("dropdown-content web");
    
        }
    }
    
    function myFunction2() {
        document.getElementById("print").classList.toggle("show");
    }
    window.onclick = function (event) {
    
        if (!event.target.matches('.dropbtn print')) {
    
            var dropdowns = document.getElementsByClassName("dropdown-content print");
    
        }
    }
    
    function myFunction3() {
        document.getElementById("branding").classList.toggle("show");
    }
    window.onclick = function (event) {
    
        if (!event.target.matches('.dropbtn branding')) {
    
            var dropdowns = document.getElementsByClassName("dropdown-content branding");
        }
    }*/
    
   
    
    
    
    var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
    	var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');
        
       	if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}
    