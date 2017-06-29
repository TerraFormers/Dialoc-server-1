# Dialoc-server

API root: https://dialoc-server.herokuapp.com

Get All users: /users

Get One User: /user/:id
  WebToken has to match id for access

Get Locations By User: /user/:id/location
  WebToken has to match id for access
  
Post A New Location To User: /user/:id/location
  WebToken has to match id for access
  Req Body Needs To Have
  {
    "name": "Name", //Optional
	  "latitude": 20,
	  "longitude": 20,
	  "user_id": 1
  }
  
Delete A Location: /user/:id/location
  WebToken has to match id for access
  Req Body Needs To Have
  {
    "id": 10 //id of location NOT USER
  }
  
Post Signup: /signup
    Req Body Needs To Have
    {
    	"name": "Rob",
	    "email": "rob@rob.com",
    	"password": "robpassword"
    }
    Res Is A WebToken
    
Post Login: /login
    Req Body Needs To Have
    {
	    "email": "rob@rob.com",
    	"password": "robpassword"
    } 
    Res Is A WebToken
    
Get All Locations: /location

Put for update "likes": /location
    Req Body Needs To Have
    {
      "id": 1       //id of the location NOT USER ID
      "rating" 3    //The new amount of "likes" you want it to have
    }
    
   
