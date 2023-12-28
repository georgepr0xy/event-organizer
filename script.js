function regitrationDetails() {
    validateControls();
}
var gender;
var specialization = [];
function validateControls() {
    //fullName
    var fname = document.getElementById("fname")
    if (fname.value == "") {
        window.alert("please enter your first name");
        fname.focus();
        return false;
    }
    //Email
    var email = document.getElementById("email")
    if (email.value == "") {
        window.alert("please enter your valid email Id");
        email.focus();
        return false;
    }
    //Mobile number
    var mobile = document.getElementById("mobile")
    if (mobile.value == "") {
        window.alert("please enter your 10 digits mobile no.");
        mobile.focus();
        return false;
    }
    //Gender   
    gender = document.querySelector('input[name="gender"]:checked');
    if (gender === null) {
        window.alert("Gender required!");
        gender.focus();
        return false;
                return false;
    }
    //Address
    var address = document.getElementById("address")
    if (address.value == "") {
        window.alert("please enter your address details");
        address.focus();
        return false;
    }
    //Date of birth
    var dob = document.getElementById("dob")
    if (dob.value == "") {
        window.alert("please enter your Date of Birth");
        dob.focus();
        return false;
    }
    //Time of birth
    var tob = document.getElementById("time of birth")
    if (dob.value == "") {
        window.alert("please enter your time of Birth");
        tob.focus();
        return false;
    }
    //Favorite color
    var Favorite color = document.getElementById("favorite color")
    if (address.value == "") {
        window.alert("please enter your favorite color ");
        address.focus();
        return false;
    }
    //States
    var state = document.getElementById("state")
    if (state.value == "") {
        window.alert("please enter your state name");
        state.focus();
        return false;
    }
    //total price
    var total price = document.getElementById("total price")
    if (total price.selectedIndex < 1) {
        window.alert("please choose your total price");
        qualification.focus();
        return false;
    } 
     //photo
    var photo = document.getElementById("photo")
    if (photo.selectedIndex < 1) {
        window.alert("please choose your photo");
        photo.focus();
        return false;
    }
    //events
    var eventsArray = document.getElementsByClassName('events');
    for (var i = 0; eventsArray[i]; ++i) {
        if (eventsArray[i].checked) {
            events.push(eventsArray[i].value);
        }
    }
    if (events == "") {
        alert("events required!");
        return false;
    }

    getControlValues();

}
 function getcontrolvalues()  {
        alert("full name= " + fname.value + "\n" + "email= " + email.value + "\n" +
               "mobile number= " + mobile number.value + "\n" "gender= " + gender.value + "\n"
                "address= " + address.value + "\n" "date of birth= " + date of birth.value + "\n"
                 "time of birth= " + time 0f birth.value + "\n" "favorite color= " + favorite color.value + "\n"
                "states= " + states.value + "\n" "total price= " + total price.value + "\n"
               "photo= " + photo.value + "\n" "events= " + events.value + "\n"