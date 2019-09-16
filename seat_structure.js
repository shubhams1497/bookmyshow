
// This script renders the cinema layout



//array of id of booked seats by other users

let cinemaLayoutObject = [
    {
        rowheading: "Normal",
        seatmatrix: [[1,1,1,1,1,2,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,2,2,1,1,1,1,1,1], [1,1,1,1,1,1,2,2,1,1,1,1,1,1]]
    },
    {
        rowheading: "Executive",
        seatmatrix: [[1,1,1,1,1,2,0,0,1,1,1,1,1,1], [1,1,1,1,1,1,0,0,2,2,1,1,1,1], [1,1,2,1,1,1,1,1,1,1,1,1,1,2]]
    },
    {
        rowheading: "VIP",
        seatmatrix: [[1,1,1,1,1,0,0,0,0,1,1,1,1,1], [1,1,1,1,1,0,0,0,0,1,1,1,1,1], [1,1,2,1,1,1,1,1,1,1,1,1,1,2]]
    }
] 







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
    if(seatType != 'empty-seat') {
        seat.textContent = seatNumber;
    }
    return seat;
}

function createRow(seatRow,rowName) {

    let row = document.createElement('div');
    row.setAttribute('class','row');
   
    let txt = document.createElement('div');
    txt.setAttribute('class','row-name');
    txt.textContent = rowName;

    seats = document.createElement('div');
    seats.setAttribute('class','seats');

    let seatNo = 0;

    for (let i=0; i<seatRow.length; i++) {

        let seatType = 'empty-seat';
        if(seatRow[i] == 1)
        {
            seatType = 'single-seat';
            seatNo++;
        }
        else if(seatRow[i] == 2)
        {
            seatType = 'booked-seat';
            seatNo++;
        }

        seats.appendChild( createSeat(seatType, rowName+(i+1), seatNo) );
    }

    row.appendChild(txt);
    row.appendChild(seats);

    return row;
}

function createSeatMatrix(seatMatrix, charCode) {

    let el = document.createElement('div');
    el.setAttribute('class','seat-matrix');

    for (let row of seatMatrix) {
        el.appendChild( createRow(row, String.fromCharCode(charCode)) );
        charCode++;
    }

    return el;

}

function renderCinemaLayout(cinemaLayoutObject) {

    let cinemaLayoutDiv = document.getElementById("cinema-structure");
    
    let charCode = 65;

    for (let rowType of cinemaLayoutObject) {
        let seatMatrix = createSeatMatrix(rowType.seatmatrix, charCode);
        charCode += rowType.seatmatrix.length;

        cinemaLayoutDiv.appendChild( createRowType( createRowHeading(rowType.rowheading) , seatMatrix ) );
    }
}

renderCinemaLayout(cinemaLayoutObject);


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