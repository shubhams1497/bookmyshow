let noOfSeats = 1;

function expand_seat_list(e){
    var ulList = document.getElementById('no_seat_list');

    if(ulList.style.transform != "scaleY(1)"){
        ulList.style.transform = "scaleY(1)";
    }
    else{
        ulList.style.transform = "scaleY(0)";
    }

    // console.dir(e.target);

    if(e.target.nodeName == "LI"){
        // console.log(e.target.innerText);
        // console.dir(document.getElementById('no_seats_display').innerText);
        noOfSeats = e.target.innerText;
        let add=" Seat";
        document.getElementById('no_seats_display').innerText = e.target.innerText + add;
        if(e.target.innerText != "1")
        {
            document.getElementById('no_seats_display').innerText += "s";
        }
        // console.log(noOfSeats);
    }

    // console.log(ulList.style.transform);
}


document.getElementById('seat_list_div').addEventListener('click',expand_seat_list);