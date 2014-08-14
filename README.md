bootstrap-toggle-btn
====================
by: mAmged
this plugin adding toggle buttons
binding toggle events

example

    <div  class="btn-warning btn first" 
          data-toggle="toggle-btn" 
          data-values="Resume:btn btn-success first"
          data-bind=".status">Pause
    </div>
    
    <div  class="btn btn-success status" 
          data-toggle="toggle-btn" 
          data-values="Paused:btn-warning btn status" 
          data-bind=".first">Live
    </div>

attributes

data-toggle = "toggle-btn"
    you must add this to the element to use the plugin


data-values = "_innerText : _classes"
    this is the toggled class and inner text
    add this to swich class and inner text separated by ":"
    data-values = "Resume:btn btn-success first"

data-bind = "_selector"
    this value is the selector of the binded element to switch when clicking on this element
    data-bind=".first
    
