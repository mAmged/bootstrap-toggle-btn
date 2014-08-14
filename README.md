bootstrap-toggle-btn
====================
by: mAmged<br>
this plugin adding toggle buttons<br>
binding toggle events<br><br>

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

attributes<br>

data-toggle = "toggle-btn"<br>
    you must add this to the element to use the plugin<br><br>


data-values = "_innerText : _classes"<br>
    this is the toggled class and inner text<br>
    add this to swich class and inner text separated by ":"<br>
    data-values = "Resume:btn btn-success first"

data-bind = "_selector"<br>
    this value is the selector of the binded element to switch when clicking on this element<br>
    data-bind=".first
    
