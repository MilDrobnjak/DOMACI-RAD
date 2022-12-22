//Write a program that takes as input a city name and outputs the country where the city is. 
//You may choose which cities and countries you want to output yourself,
//however there has to be at least 5 countries and 15 cities. 
//Note that each country must have a different number of cities.
//Input different from the listed cities should output a message"Please choose a different city".
var  city = "Subotica";
var result = 'Novi Sad';

    switch (city) {
        case "Beograd":
        case "Novi Sad":
        case "Nis":
            result = "City in Serbia";
        break;
        case "Zagreb":
        case "Rijeka":
        case "Osijek":
        case "Zadar":    
             result = "City in Croatia";
        break;
        case "Berlin":
        case "Hamburg":
            result = "City in Germany";
        break;
        case "Budapest":
        case "Debrecen":
        case "Szeged":
        case "Miskolc":        
            result = "City in Hungary";
        break;
        case "Paris":
            result = "City in France";
        break; 
        default:
        result = "Please choose a different city";
       }
       
       console.log(result);






















