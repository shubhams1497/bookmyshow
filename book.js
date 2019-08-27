// console.log(document.getElementsByClassName('filter-heading'));

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