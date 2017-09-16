var app = angular.module('chatApp',['ngMaterial']);
	
app.controller('chatController',function($scope){
	$scope.messages = [{ 
		sender: "BOT",
		text:"Hi",
		time: "01:12 PM"
	},
	{  
		sender: "USER",
		text: "Hello",
		time: "01:12 PM"
	},
	{
		sender: "BOT",
		text:"How are you?",
		time: "01:12 PM"
	}];
    var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
    exampleSocket.onmessage  =   function  (event) {
           var jsonData = JSON.parse(event.data);
           console.log(jsonData);
       };
});