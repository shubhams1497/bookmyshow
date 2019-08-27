let noOfSeats = 1;
let noOfSelectedSeats = 0;

// array to store id of selected seats
let selectedSeatsList = [];

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

        resetSeatSelection();

        // console.log(noOfSeats);
    }

    // console.log(ulList.style.transform);
}


document.getElementById('seat_list_div').addEventListener('click',expand_seat_list);

document.getElementById('cinema-structure').addEventListener('click',function(e) {
    if(e.target.classList.contains('single-seat') || e.target.classList.contains('selected-seat')){
        //console.log(e.target.id);
        performSeatSelection(e.target.id);
    }
});


function isSeatAvailable(seatId)
{
    return ( document.getElementById(seatId) != null && document.getElementById(seatId).classList.contains('single-seat'));
}

function selectSeat(seatId) {
    document.getElementById(seatId).classList.remove('single-seat');
    document.getElementById(seatId).classList.add('selected-seat');
    noOfSelectedSeats++;
    selectedSeatsList.push(seatId);
}

function nextSeat(seatId)
{
    seatno = parseInt(seatId.substring(1,seatId.length));
    nextseatId = seatId[0] + (seatno-1);
    return nextseatId;
}

function performSeatSelection(seatId){

    if(noOfSelectedSeats == noOfSeats) {
        resetSeatSelection();
    }

    while((noOfSelectedSeats < noOfSeats) && isSeatAvailable(seatId)) {
        selectSeat(seatId);
        seatId = nextSeat(seatId);
    }
}


function resetSeatSelection() {
    noOfSelectedSeats = 0;
    for(seatid of selectedSeatsList) {
        document.getElementById(seatid).classList.remove('selected-seat');
        document.getElementById(seatid).classList.add('single-seat');
    }
    selectedSeatsList = [];

}
