let arr = [];

class Location {
    image: "";
    place: "";
    address: "";
    zipCode: "";
    add: "";

    constructor(image, place, address, zipCode, add){
		this.image = image;
		this.place = place;
        this.address = address;
        this.zipCode = zipCode;
        this.add = add

		arr.push(this);
    }
    render(){
		return `
        <img class="d-none d-md-flex rounded-top" src="${this.image}">
        <div class="card-body">
            <h3 class="text-muted">${this.place}</h3>
            <h6 class="text-secondary">${this.address}</h6>
            <h6 class="text-secondary">${this.zipCode}</h6>
            <div class="add text-black-50">Created: ${this.add}</div>
		`
	}
}
class Locations extends Location{
    constructor(image, place, address, zipCode, add){
        super(image, place, address, zipCode, add);
    }
    display(){
        return `${super.render()}`
    }
}
class Restaurant extends Location {
    type = "";
    website: "";
    telephoneNumber = "";

	constructor(image, place, address, zipCode, type, telephoneNumber, website, add){
		super(image, place, address, zipCode, add);
        this.type = type
        this.website = website;
        this.telephoneNumber = telephoneNumber
	}
	display(){
		return `${super.render()}<p>${this.type} Restaurant</p><p>tel: ${this.telephoneNumber}</p><a href="${this.website}" target="_blank" class="btn btn-secondary text-light">Go to the Website</a>`
	}
}
class Events extends Location {
    website: "";
    date: "";
    time: "";
    price: "";
    
	constructor(image, place, address, zipCode, website, date, time, price, add){
		super(image, place, address, zipCode, add);
        this.website = website;
        this.date = date;
        this.time = time;
        this.price = price;
	}
	display(){
		return `${super.render()}<p>${this.date} - ${this.time}</p><p>Price: ${this.price}€</p><a href="${this.website}" target="_blank" class="btn btn-secondary text-light">Go to the Website</a>`
	}
}

new Locations("../img/church.jpg", "St. Charles Church", "Karlsplatz 1,", "1010 Vienna", "24.03.2020 12:45");
new Locations("../img/zoo.jpg", "Zoo Vienna", "Maxingstraße 13b,", "1130 Wien", "20.04.2020 15:45");
new Restaurant("../img/lemon.png", "Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19,", "1050 Vienna", "Thai", "+43(1)5812308",  "http://www.lemonleaf.at", "25.03.2020 17:45");
new Restaurant("../img/sixta.png", "SIXTA", "Schönbrunner Straße 21,", "1050 Vienna", "Viennese", "+43 1 58 528 56 | +43 1 58 528 56",  "http://www.sixta-restaurant.at", "17.05.2020 11:35");
new Events("../img/kris.jpg", "Kris Kristofferson", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1,", "1150 Wien", "http://kriskristofferson.com", "Fr., 15.11.2021", "20:00", "58,50", "26.03.2020 16:45")
new Events("../img/lenny.jpg", "Lenny Kravitz", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1,", "1150 Wien", "http://www.lennykravitz.com", "Sat, 09.12.2029", "19:30", "47,80", "12.06.2020 18:15")
console.log(arr);

$(document).ready(function(){

	for (let i in arr){
        $(".row").append(`<div class="box col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-5"><div class="card h-100 rounded">${arr[i].display()}</div></div></div>`);
        }
})