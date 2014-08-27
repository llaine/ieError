Internet Explorer error generator 
=================================
![ieError][1]

Reminds the old good times with this tiny library!

You also can draw with this !  

# Installation 

`bower install` 

# Usage 

```javascript

var ieError = new ieError();

```

If you want to enable the debug mode 

```javascript

var ieError = new ieError(true); 

```

And that's all ! 

# Configuration 

```javascript

/* the dom element to append */
var bodyNode = $('body') 
/* error image */
, img = "./assets/ieError.gif" 
/* number of millisecond between each snap */
, timeOut = 100; 


```


# Requirements

- _jQuery_
- _jQuery-ui_

[1]: ./assets/ieError.png
