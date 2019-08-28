
// This script renders the cinema layout



//array of id of booked seats by other users

let bookedSeats = ['A12','B13','B6','E3','E4','H12','H11','I9','F15'];


function createRowType(rowHeading, seatMatrix) {
    div = document.createElement('div');
    div.setAttribute('class', 'row-type');
    div.appendChild(rowHeading);
    div.appendChild(seatMatrix);
    return div
}

function createRowHeading(heading) {
    div = document.createElement('div');
    div.setAttribute('class','row-heading');
    txt = document.createElement('p');
    txt.textContent = heading;
    div.appendChild(txt);
    return div;
}

function createSeat(seatType,seatId,seatNumber = 0){
    seat = document.createElement('div');
    seat.setAttribute('class',seatType);
    seat.setAttribute('id',seatId);
    //console.log(seatId);
    if(seatNumber != 0) {
        seat.textContent = seatNumber;
    }
    return seat;
}

function createSeatRows1(seats,rowName)
{
    for(let i=1;i<=8;i++)
    {
        seats.appendChild(createSeat('single-seat', rowName+i,i));
    }

    seats.appendChild(createSeat('empty-seat',rowName+9));
    seats.appendChild(createSeat('empty-seat',rowName+10));

    for(let i=11;i<=18;i++)
    {
        seats.appendChild(createSeat('single-seat', rowName+i, i-2));
    }
    return seats;
}

function createSeatRows2(seats,rowName)
{
    for(let i=1;i<=18;i++)
    {
        seats.appendChild(createSeat('single-seat', rowName+i,i));
    }

    return seats;
}

function createSeatRows3(seats,rowName)
{
    seats.appendChild(createSeat('empty-seat',rowName+1));
    seats.appendChild(createSeat('empty-seat',rowName+2));
    for(let i=3;i<=18;i++)
    {
        seats.appendChild(createSeat('single-seat', rowName+i,i-2));
    }

    return seats;
}


function createRow(rowName)
{
    row = document.createElement('div');
    row.setAttribute('class','row');
   
    txt = document.createElement('div');
    txt.setAttribute('class','row-name');
    txt.textContent = rowName;

    seats = document.createElement('div');
    seats.setAttribute('class','seats');

    if(rowName == 'H' || rowName == "I" || rowName == 'C') {
        seats = createSeatRows2(seats,rowName);
    }
    else if(rowName == 'A' || rowName == 'B') {
        seats = createSeatRows3(seats,rowName);
    } 
    else{ 
        seats = createSeatRows1(seats,rowName);
    }

    row.appendChild(txt);
    row.appendChild(seats);

    return row;
}









function renderCinemaLayout(){

    // row-type 1

    let seatMatrix = document.createElement('div');
    seatMatrix.setAttribute('class','seat-matrix');

    seatMatrix.appendChild(createRow('A'));
    seatMatrix.appendChild(createRow('B'));
    seatMatrix.appendChild(createRow('C'));

    let rowType1 = createRowType(createRowHeading("Normal"),seatMatrix);

    // another-row type 2

    seatMatrix = document.createElement('div');
    seatMatrix.setAttribute('class','seat-matrix');

    seatMatrix.appendChild(createRow('D'));
    seatMatrix.appendChild(createRow('E'));
    seatMatrix.appendChild(createRow('F'));


    let rowType2 = createRowType(createRowHeading("Executive"),seatMatrix);

    // another row-type 3

    seatMatrix = document.createElement('div');
    seatMatrix.setAttribute('class','seat-matrix');

    seatMatrix.appendChild(createRow('G'));
    seatMatrix.appendChild(createRow('H'));
    seatMatrix.appendChild(createRow('I'));


    let rowType3 = createRowType(createRowHeading("Premium"),seatMatrix);

    let cinemaLayoutDiv = document.getElementById("cinema-structure");

    cinemaLayoutDiv.appendChild(rowType1);
    cinemaLayoutDiv.appendChild(rowType2);
    cinemaLayoutDiv.appendChild(rowType3);


     // before rendering render booked seat in the cinema
    // provided in the array

    for(let i=0;i<bookedSeats.length;i++)
    {
        let seat = document.getElementById(bookedSeats[i]);
        seat.classList.remove('single-seat');
        seat.classList.add('booked-seat');
    }
}


renderCinemaLayout();


{/* <div class="row-type">
                <div class="row-heading">
                    <p>Normal</p>
                </div>

                <div class="seat-matrix">
                    <div class="row">
                        <p class="row-name">A</p>
                        <div class="seats">
                            <div class="single-seat">
                                1
                            </div>
                            <div class="single-seat">
                                2
                            </div>
                            <div class="empty-seat">
                    
                            </div>
                            <div class="single-seat">
                                3
                            </div>    
                        </div>
                    </div>
                    <div class="row">
                            <p class="row-name">B</p>
                            <div class="seats">
                                <div class="single-seat">
                                    1
                                </div>
                                <div class="single-seat">
                                    2
                                </div>
                                <div class="single-seat">
                                    3
                                </div>    
                            </div>
                    </div>
                </div>
            </div> */}