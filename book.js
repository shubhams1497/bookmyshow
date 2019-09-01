// console.log(document.getElementsByClassName('filter-heading'));

const SVG_LIKE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102" id="icon-heart" 
width="20px" height="20px" stroke="#999" stroke-width="5px" fill="#fff"><path d="M4.3 39.4v-5.5c.9-3 
1.4-6.2 2.8-9 4.4-8.9 11.6-14.2 22.1-14.2 8.2 0 14.1 4.1 18.9 10.2.6.8 1.2 1.6 1.8 2.5 1.6-2 3-3.9 
4.6-5.5 6.1-6.1 13.5-8.7 22.2-6.5 12.4 3.1 19.9 15.4 18.8 28-.8 9.1-4.9 16.9-10.7 23.9-9.3 11.2-21.2 
19.2-34 26.1-.4.2-1.3.2-1.8 0-11-5.9-21.3-12.7-29.9-21.6-5.9-6.1-10.8-12.9-13.2-21-.7-2.5-1-5-1.6-7.4z"></path></svg>
`;

const SVG_MTICKET_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102" width="22px" height="20px" 
fill="#49ba8e"><path d="M73.5 95.2H26.8c-1.3 0-2.3-1-2.3-2.3V7.6c0-1.3 1-2.3 2.3-2.3h46.7c1.3 0 2.3 1 2.3 2.3V93c0 
1.2-1.1 2.2-2.3 2.2zM26.8 6.4c-.6 0-1.1.5-1.1 1.1v85.4c0 .6.5 1.1 1.1 1.1h46.7c.6 0 1.1-.5 1.1-1.1V7.6c0-.6-.5-1.1-1.1-1.1l-46.7-.1z">
</path><path d="M68.8 78.9H31.3c-.6 0-1.2-.5-1.2-1.2V16c0-.6.5-1.2 1.2-1.2h37.5c.6 0 1.2.5 1.2 1.2v61.7c0 .6-.5 1.2-1.2 1.2zm0-62.9H31.3v61.6h37.4l.1-61.6zm-19 
74.4c-2.3 0-4.1-1.9-4.1-4.1 0-2.3 1.9-4.1 4.1-4.1 2.3 0 4.1 1.9 4.1 4.1a4 4 0 0 1-4.1 4.1zm0-7.1a2.9 2.9 0 1 0 2.9 2.9c.1-1.5-1.2-2.9-2.9-2.9zm-5.5-72.1h-1.6c-.3 
0-.6-.3-.6-.6s.3-.6.6-.6h1.6c.3 0 .6.3.6.6s-.3.6-.6.6zm11 0h-6.5c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h6.5c.3 0 .6.3.6.6s-.2.6-.6.6z"></path></svg>`;

const SVG_FNB_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102" width="22px" height="20px"><path fill="#F90" d="M58.7 
85.9H8.5c-4.1 0-7.5-3.4-7.5-7.5v-1.1c0-4.1 3.4-7.5 7.5-7.5h50.2c4.1 0 7.5 3.4 7.5 7.5v1.1c0 4.1-3.4 7.5-7.5 7.5zM8.5 74.3a3 3 0 0 0-3 3v1.1a3 
3 0 0 0 3 3h50.2a3 3 0 0 0 3-3v-1.1a3 3 0 0 0-3-3H8.5zM54.8 99H12.4c-3.7 0-6.8-3-6.8-6.8v-4c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v4c0 1.3 1.1 2.3 
2.4 2.3h42.4c1.3 0 2.3-1.1 2.3-2.3v-4c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v4c.1 3.8-3 6.8-6.7 6.8zm42-57.9c-1.2 0-2.2-1-2.2-2.2v-2.8c0-.6-.5-1-1-1h-54a1 
1 0 0 0-1 1v2.8c0 1.2-1 2.2-2.2 2.2-1.2 0-2.2-1-2.2-2.2v-2.8c0-3 2.5-5.5 5.5-5.5h54c3 0 5.5 2.4 5.5 5.5v2.8c-.2 1.2-1.2 2.2-2.4 2.2z"></path><path 
fill="#F90" d="M63.9 31.4c-1 0-1.9-.7-2.2-1.7L56.6 6.2c-.1-.4-.3-.5-.4-.6-.1-.1-.4-.2-.8-.1L41 8.6c-1.2.3-2.4-.5-2.6-1.7-.3-1.2.5-2.4 1.7-2.6l14.4-3.1c1.4-.3 
2.9 0 4.1.7 1.2.8 2.1 2 2.4 3.4l5.1 23.5c.3 1.2-.5 2.4-1.7 2.6h-.5zm-3.7 38.7c-.8 0-1.5-.4-1.9-1.1-3.9-6.7-12.4-14.5-23.8-14.5s-20 7.8-23.8 14.5c-.6 1.1-2 1.4-3 
.8-1.1-.6-1.4-2-.8-3 5.9-10.1 16.7-16.7 27.7-16.7s21.8 6.5 27.7 16.7c.6 1.1.3 2.4-.8 3-.5.2-.9.3-1.3.3z"></path><ellipse fill="#F90" cx="24.3" cy="63.9" rx="1.7" 
ry="1.7"></ellipse><ellipse fill="#F90" cx="40.7" cy="65.6" rx="1.7" ry="1.7"></ellipse><ellipse fill="#F90" cx="33.6" cy="58.8" rx="1.7" ry="1.7"></ellipse><path 
fill="#F90" d="M47 49.6c-1.2 0-2.2-.9-2.2-2.1l-.5-10.3c-.1-1.2.9-2.3 2.1-2.3 1.3-.1 2.3.9 2.3 2.1l.5 10.3c.1 1.2-.9 2.3-2.1 2.3H47zM82.1 93H71.4c-1.2 
0-2.2-1-2.2-2.2s1-2.2 2.2-2.2h10.7c.6 0 1-.5 1-1L85.5 37a2.3 2.3 0 0 1 2.3-2.1c1.2.1 2.2 1.1 2.1 2.3l-2.4 50.5c.1 2.9-2.4 5.3-5.4 5.3z"></path></svg>`;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let cinemaObjectList = JSON.parse(cinemaJsonList);
      

renderCinemaList();


function renderCinemaList() {

    let cinemaList = document.getElementById('cinema-list-1');
    
    for(let cinema of cinemaObjectList ){
        cinemaList.appendChild(createCinemaListItem(cinema));
    }

}


document.getElementById('price-filter').addEventListener('click',toggleFilterList);
document.getElementById('time-filter').addEventListener('click',toggleFilterList);


document.getElementById('price-filter-container').addEventListener('mouseleave',hideFilterList);
document.getElementById('time-filter-container').addEventListener('mouseleave',hideFilterList);

function hideFilterList(e) {
    // console.log(e.target.id);
    if(e.currentTarget.childNodes[3].style.opacity == 1){
        // console.dir(e.currentTarget.childNodes[1].childNodes[1].childNodes[1]);
      //  e.currentTarget.childNodes[1].childNodes[1].childNodes[1].style.transformOrigin = "center";
        e.currentTarget.childNodes[1].childNodes[1].childNodes[1].style.transform  = "rotate(0deg)";
        e.currentTarget.childNodes[3].style.opacity = 0;
    }
}

function toggleFilterList(e) {
    let filterListId = e.currentTarget.id + "-list";
    if(document.getElementById(filterListId).style.opacity == 1){
        document.getElementById(filterListId).style.opacity = 0;
        e.currentTarget.childNodes[1].childNodes[1].style.transformOrigin = "center";
        e.currentTarget.childNodes[1].childNodes[1].style.transform  = "rotate(0deg)";
    }
    else{
        document.getElementById(filterListId).style.opacity = 1;
        //console.dir(e.currentTarget.childNodes[1].childNodes[1]);
        e.currentTarget.childNodes[1].childNodes[1].style.transformOrigin = "center";
        e.currentTarget.childNodes[1].childNodes[1].style.transform  = "rotate(180deg)";
    }
}

function openSearchBox() {
    document.getElementById('search-cinema-box').style.width = "200px";
    document.getElementById('icon-cancel').style.width = "18px";
    document.getElementById('icon-cancel-box').style.margin = "15px";
    document.getElementById('search-cinema-box').focus();
}

function closeSearchBox() {
    document.getElementById('search-cinema-box').style.width = "0";
    document.getElementById('search-cinema-box').value = "";
    document.getElementById('icon-cancel').style.width = "0";
    document.getElementById('icon-cancel-box').style.margin = "0";
}

document.getElementById('search-cinema-box').addEventListener('focusout',closeSearchBox);


function createDivClass(divClass) {
    let el = document.createElement('div');
    el.setAttribute('class',divClass);
    return el;
}


function createCinemaListItem(cinema) {

    let listItem = document.createElement('LI');

    let likeIcon = createDivClass('like-icon');
    likeIcon.innerHTML = SVG_LIKE_ICON;
    
    let cinemaDetails = createDivClass('cinema-details');

    let cinemaName = createDivClass('cinema-name');
    let cinemaLink = document.createElement('a');
    cinemaLink.setAttribute('href','#');
    cinemaLink.textContent = cinema.name;
    cinemaName.appendChild(cinemaLink);

    let cinemaFacilities = createDivClass('cinema-facilities');
    
    if(cinema.isMticket) {
        let Mticket = createDivClass('M-ticket');
        Mticket.innerHTML = SVG_MTICKET_ICON;
        Mticket.innerHTML += "M-Ticket";
        cinemaFacilities.appendChild(Mticket);
    }

    if(cinema.isFNB) {
        let FNB = createDivClass('FandB');
        FNB.innerHTML = SVG_FNB_ICON;
        FNB.innerHTML += "F&B";
        cinemaFacilities.appendChild(FNB);
    }
    

    cinemaDetails.append(cinemaName);
    cinemaDetails.append(cinemaFacilities);


    let timeCancelDetails = createDivClass('time-cancel-details');
    
    let timeDetails = createDivClass('time-details');

    for(let time of cinema.showtimes) {
        timeDetails.innerHTML += createShowTime(time);
    }


    timeCancelDetails.appendChild(timeDetails);

    if(cinema.isCancellation) {
        timeCancelDetails.appendChild(getCancelDetails());
    }

    listItem.append(likeIcon);
    listItem.append(cinemaDetails);
    listItem.append(timeCancelDetails);

    return listItem;
}

function getCancelDetails() {
    let cancelDetails = createDivClass('cancel-details');

    let yelloCircle = createDivClass('yellow-circle');

    let spanCancel = document.createElement('span');
    spanCancel.textContent = "Cancellation Available";

    cancelDetails.appendChild(yelloCircle);
    cancelDetails.appendChild(spanCancel);
    
    return cancelDetails;
}


function createShowTime(time) {

    let showTime = `<a href="seat_selection.html">
                    <div class="show-time"> 
                        ${time} 
                        <span class="tooltip seat-2">
                                <div class="seat-categories">
                                    <p class="seat-price">Rs 220</p>
                                    <p class="seat-type">Silver</p>
                                    <p class="seat-availability">Available</p>
                                </div>
                                <div class="seat-categories">
                                        <p class="seat-price">Rs 350</p>
                                        <p class="seat-type">Gold</p>
                                        <p class="seat-availability">Available</p>
                                </div>
                        </span>
                    </div>
                </a>`;

    return showTime;            

}
