/**
* ieError lib 
*
* @author : Louis Lainé
* 
*/
var ieError = (function($){
	'use strict';

	/* check for jQuery  */
	if(typeof $ === 'undefined'){
		return;
	}


	/* common vars */
	var bodyNode 	= $('body')
	,	img 		= "./assets/ieError.gif"
	,	idBoxError 	= "ieError"
	,	idBoxSnap 	= 'snap'
	,	style 		= "width: 419px; height: 282px; background-image: url(./assets/ieError.gif);"
	, 	zindex 		= " z-index: 100;"
	,	divError 	= "<div id='" + idBoxError + "' style='" + style  + ' ' + zindex + "'></div>"
	,	divSnap 	= "<div id='" + idBoxSnap + "' style='" + style +  " position: absolute;'></div>"
	, 	timeOut 	= 100;

	/**
	* the ieError object.
	* Display a log if debug is true
	*
	* @debug 
	*/
	function ieError(debug) {
		/* default parameter */
		debug = typeof debug !== 'undefined' ? debug : false; 
		this.debug = debug;

		/* setup */
		this.setup();
		/* launching  */
		this.launch(idBoxError, idBoxSnap);
	};

	/**
	* Append the ieError div to the DOM body element. 
	*/
	ieError.prototype.setup = function() {

		/* append to the body DOM element */
		bodyNode.append(divError);

		this.log('append div to body node')
		
	};

	/**
	* Bootstrap the ieError tricks.
	*
	* @idBoxError the id of the error div
	* @idBoxSnap the id of the snap div.
	*/
	ieError.prototype.launch = function(idBoxError, idBoxSnap){
		/* setup the ids */
		var idBoxError = "#" + idBoxError
		,	idBoxSnap  = "#" + idBoxSnap;

		/* check for jQuery ui */
		if(typeof $.ui !== 'undefined'){

			this.log('initialisation draggable');

			$(idBoxError).draggable({
				drag: function(evt, self){
					if(self !== 'undefined'){
						/* let's make some snap ! :) */
						setTimeout(function(){
							/* just creating a dom element for each snap !  */
							$(divSnap).
								css({
									top: self.offset.top,
									left: self.offset.left
								}).
								appendTo(bodyNode);

						}, timeOut);
					}else{
						throw new Error('self undefined');
					}
				}
			})
			
		}
	};

	/**
	* Logger function
	*
	* @msg : 
	*/
	ieError.prototype.log = function(msg) {
		if(console !== 'undefined'){
			if(this.debug){
				console.log("[i] ieError : " + msg);
			}
		}
	};


	return ieError;

})(jQuery);