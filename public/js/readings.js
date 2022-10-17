// Readings Link Page Data

var priest_details = [{
    priest_name: "Ifalowo 'Khepra Ptah'",
    link: "www.google.com",
    photo_url: "/images/stock_profile.jpeg"
},
{
    priest_name: "Baba Fasanmi",
    link: "www.google.com",
    photo_url: "/images/stock_profile.jpeg"
},
{ 
    priest_name: "Iya Omitosin",
    link: "www.google.com",
    photo_url: "/images/stock_profile.jpeg"

},
{   priest_name: "Iya Omiseun",
    link: "www.google.com",
    photo_url: "/images/stock_profile.jpeg"

}];

$(window).on('load', function() {
    for (i = 0; i < priest_details.length; i++) {
        $('<div class="card_container" />').html('<div class="priest_card"><h2>' + priest_details[i].priest_name + '</h2><p><a class="priest_link" href=' + 'http://www.google.com' + '>'+ "Schedle a reading with " + priest_details[i].priest_name + '</a></p>' +'<img class="profile_pic" src=' + priest_details[i].photo_url + '><a href="Schedule a reading with' + priest_details[i].priest_name + '>link text</a></div>').appendTo('#cards');
    }
});