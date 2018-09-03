window.onload=function(){
	let con =document.querySelector('.con-i');
	let win =document.querySelector('.window');
	console.log(con)
	con.addEventListener('click',function(){
		win.style.display='black';
	})
}