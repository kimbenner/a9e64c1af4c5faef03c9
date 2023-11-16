$(document).ready(function() {
	//localStorage.clear();
	let regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
	
	$("body").on("click", "#enterBtn", function() {
		var enterUrl = $("#enterUrl").val();
		var arrUrl = getArrayStorage("enter_url");
		
		
		if (regex.test(enterUrl) == false) {
			alert("�낆옣留곹겕媛� �섎せ�섏뿀�듬땲��. \n\n�� �덈릺硫� �ㅽ뵂�≪쑝濡� 臾몄쓽�댁＜�몄슂.");
			return false;
		}
		
		if(!Array.isArray(arrUrl)){
			arrUrl = [];
		}
			
		if ( arrUrl.includes(enterUrl) == true) {
			alert("理쒓렐�� �ъ슜�� �낆옣 留곹겕二쇱냼�낅땲��. \n\n�덈줈怨좎묠 �� �ㅻⅨ �낆옣 留곹겕二쇱냼瑜� �낅젰�� 二쇱꽭��.");
		} else {
					
			if( arrUrl.length <= 1 ){
				arrUrl.push(enterUrl);
			} else {
				arrUrl.shift();
				arrUrl.push(enterUrl);
			}
			
			console.log(arrUrl);
			
			setArrayStorage("enter_url", arrUrl);
			$("#form_submit").submit();
		}
	});
});

function setArrayStorage(key, arr) {
	localStorage.setItem(key, JSON.stringify(arr));
}

function getArrayStorage(key) {
	var output = localStorage.getItem(key);		
	var arr = JSON.parse(output);
	
	return arr;
}
