var str = 'урок-3-был слишком легким';
str = str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
console.log(str.replace(/-/g, ' '));
alert(str.replace(/легким/g, 'легкоо'));




var arr = [20, 33, 1, 'Человек', 2, 3];
arr[3] = arr[3].length;
var summ = 0;

for (var i = 0; i < arr.length; i++) {
	summ += Math.pow(arr[i], 3);
}
console.log(Math.sqrt(summ));	



function arg(text) {
	if( (typeof(text)) === 'string' ) {
		text = text.replace(/^\s*/,'').replace(/\s*$/,'');
		if ( 50 < text.length ) {
			alert(text.substr(0,50)+'...');
		}
		
	} else {
		alert ( 'Передана не строка' );
	}

}

arg('lgjldg fdgdfghd fg hjd ghfdgh dugd fghd ufgd fghdfdhfug dfgfd ghdg ogdfghu gdfgdgdhgdgdg dg gdg dgdg');