import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import Routes
import routes from './routes.js';

// Import main app component
import App from '../app.f7.html';

var app = new Framework7({
  root: '#app', // App root element
  component: App, // App main component

  name: 'Klaudiusz', // App name
  theme: 'auto', // Automatic theme detection



  // App routes
  routes: routes,
});


$$(document).on('page:init', '.page[data-name="pesel"]', function () 
{
	$$('input').on('keyup change', function ()
	{

		var start = document.getElementById("pesel")
    	start.addEventListener('keyup', function()
    	{
        	sprawdzpesel(start.value)
    	})
 
    	function sprawdzpesel(pesel)
    	{
        	var wzor = [9, 7, 3, 1, 9, 7, 3, 1, 9, 7];
        	var ostatnia = 0;

        	for (var i = 0; i < 10; i++) 
        	{
        	    ostatnia += wzor[i] * pesel.charAt(i);
        	}

        	ostatnia %= 10;

        	var sprawdzostatnia = pesel.charAt(10);

        	var punktyX = document.getElementById("punkty")
        	var punkty = 0;
        	if (pesel.match(/^[0-9]{4}[0-3]{1}[0-9]{1}/))
        	{
         		punkty += 1
        	}   
        	if (pesel.match(/[0-9]{4}/))
        	{
            	punkty += 0
        	}
        	if (ostatnia == sprawdzostatnia) {
            	punkty +=1
        	}        
        	if (pesel.length == 11)
        	{
            	punkty += 1
        	}
        	if(punkty==0)
        	{
            	document.getElementById("kolor").style.backgroundColor="red";
        	}
        	if(punkty==1)
        	{
            	document.getElementById("kolor").style.backgroundColor="orange";
        	}
       
        	if(punkty==2)
        	{
            	document.getElementById("kolor").style.backgroundColor="yellow";
        	}
       
        	if(punkty==3)
        	{
            	document.getElementById("kolor").style.backgroundColor="green";
        	}  
    	};
 	});
})
