


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




function createSeat(seatType,seatNumber = 0){
    seat = document.createElement('div');
    seat.setAttribute('class',seatType);
    if(seatNumber != 0) {
        seat.textContent = seatNumber;
    }
    return seat;
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

    seats.appendChild(createSeat('single-seat',1));
    seats.appendChild(createSeat('single-seat',2));
    seats.appendChild(createSeat('single-seat',3));
    seats.appendChild(createSeat('single-seat',4));
    seats.appendChild(createSeat('single-seat',5));
    seats.appendChild(createSeat('booked-seat',6));
    seats.appendChild(createSeat('empty-seat'));
    seats.appendChild(createSeat('empty-seat'));
    seats.appendChild(createSeat('single-seat',7));
    seats.appendChild(createSeat('single-seat',8));
    seats.appendChild(createSeat('single-seat',9));
    seats.appendChild(createSeat('single-seat',10));
    seats.appendChild(createSeat('single-seat',11));
    seats.appendChild(createSeat('single-seat',12));

    row.appendChild(txt);
    row.appendChild(seats);

    return row;
}

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

// row-type 3

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