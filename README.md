# Dialoc-server

API root: https://dialoc-server.herokuapp.com <br />
<br />
Get All users: /users<br />
<br />
Get One User: /user/:id<br />
  WebToken has to match id for access<br />
<br />
Get Locations By User: /user/:id/location<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  WebToken has to match id for access<br />
  <br />
Post A New Location To User: /user/:id/location<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  WebToken has to match id for access<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Req Body Needs To Have<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    "name": "Name", //Optional<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	  "latitude": 20,<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	  "longitude": 20,<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	  "user_id": 1<br />
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }<br />
  <br />
Delete A Location: /user/:id/location<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  WebToken has to match id for access<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Req Body Needs To Have<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    "id": 10 //id of location NOT USER<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  }<br />
  <br />
Post Signup: /signup<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Req Body Needs To Have<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    {<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    	"name": "Rob",<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	 "email": "rob@rob.com",<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    	"password": "robpassword"<br />
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   }<br />
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Res Is A WebToken<br />
    <br />
Post Login: /login<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Req Body Needs To Have<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	    "email": "rob@rob.com",<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    	"password": "robpassword"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    } <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Res Is A WebToken<br />
    <br />
Get All Locations: /location<br />
<br />
Put for update "likes": /location<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Req Body Needs To Have<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    {<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      "id": 1       //id of the location NOT USER ID<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      "rating" 3    //The new amount of "likes" you want it to have<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    }<br />
    
   
