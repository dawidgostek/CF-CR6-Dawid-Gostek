var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arr = [];
var Location = /** @class */ (function () {
    function Location(image, place, address, zipCode, add) {
        this.image = image;
        this.place = place;
        this.address = address;
        this.zipCode = zipCode;
        this.add = add;
        arr.push(this);
    }
    Location.prototype.render = function () {
        return "\n        <img class=\"d-none d-md-flex rounded-top\" src=\"" + this.image + "\">\n        <div class=\"card-body\">\n            <h3 class=\"text-muted\">" + this.place + "</h3>\n            <h6 class=\"text-secondary\">" + this.address + "</h6>\n            <h6 class=\"text-secondary\">" + this.zipCode + "</h6>\n            <div class=\"add text-black-50\">Created: " + this.add + "</div>\n\t\t";
    };
    return Location;
}());
var Locations = /** @class */ (function (_super) {
    __extends(Locations, _super);
    function Locations(image, place, address, zipCode, add) {
        return _super.call(this, image, place, address, zipCode, add) || this;
    }
    Locations.prototype.display = function () {
        return "" + _super.prototype.render.call(this);
    };
    return Locations;
}(Location));
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(image, place, address, zipCode, type, telephoneNumber, website, add) {
        var _this = _super.call(this, image, place, address, zipCode, add) || this;
        _this.type = "";
        _this.telephoneNumber = "";
        _this.type = type;
        _this.website = website;
        _this.telephoneNumber = telephoneNumber;
        return _this;
    }
    Restaurant.prototype.display = function () {
        return _super.prototype.render.call(this) + "<p>" + this.type + " Restaurant</p><p>tel: " + this.telephoneNumber + "</p><a href=\"" + this.website + "\" target=\"_blank\" class=\"btn btn-secondary text-light\">Go to the Website</a>";
    };
    return Restaurant;
}(Location));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(image, place, address, zipCode, website, date, time, price, add) {
        var _this = _super.call(this, image, place, address, zipCode, add) || this;
        _this.website = website;
        _this.date = date;
        _this.time = time;
        _this.price = price;
        return _this;
    }
    Events.prototype.display = function () {
        return _super.prototype.render.call(this) + "<p>" + this.date + " - " + this.time + "</p><p>Price: " + this.price + "\u20AC</p><a href=\"" + this.website + "\" target=\"_blank\" class=\"btn btn-secondary text-light\">Go to the Website</a>";
    };
    return Events;
}(Location));
new Locations("../img/church.jpg", "St. Charles Church", "Karlsplatz 1,", "1010 Vienna", "24.03.2020 12:45");
new Locations("../img/zoo.jpg", "Zoo Vienna", "Maxingstraße 13b,", "1130 Wien", "20.04.2020 15:45");
new Restaurant("../img/lemon.png", "Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19,", "1050 Vienna", "Thai", "+43(1)5812308", "http://www.lemonleaf.at", "25.03.2020 17:45");
new Restaurant("../img/sixta.png", "SIXTA", "Schönbrunner Straße 21,", "1050 Vienna", "Viennese", "+43 1 58 528 56 | +43 1 58 528 56", "http://www.sixta-restaurant.at", "17.05.2020 11:35");
new Events("../img/kris.jpg", "Kris Kristofferson", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1,", "1150 Wien", "http://kriskristofferson.com", "Fr., 15.11.2021", "20:00", "58,50", "26.03.2020 16:45");
new Events("../img/lenny.jpg", "Lenny Kravitz", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1,", "1150 Wien", "http://www.lennykravitz.com", "Sat, 09.12.2029", "19:30", "47,80", "12.06.2020 18:15");
console.log(arr);
$(document).ready(function () {
    for (var i in arr) {
        $(".row").append("<div class=\"box col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-5\"><div class=\"card h-100 rounded\">" + arr[i].display() + "</div></div></div>");
    }
});
