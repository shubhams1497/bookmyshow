
const SVG_RED_HEART_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102"  width="10px" height="12px" 
fill="#c9363c"><path d="M4.3 39.4v-5.5c.9-3 1.4-6.2 2.8-9 4.4-8.9 11.6-14.2 22.1-14.2 8.2 0 14.1 4.1 18.9 10.2.6.8 
1.2 1.6 1.8 2.5 1.6-2 3-3.9 4.6-5.5 6.1-6.1 13.5-8.7 22.2-6.5 12.4 3.1 19.9 15.4 18.8 28-.8 9.1-4.9 16.9-10.7 
23.9-9.3 11.2-21.2 19.2-34 26.1-.4.2-1.3.2-1.8 0-11-5.9-21.3-12.7-29.9-21.6-5.9-6.1-10.8-12.9-13.2-21-.7-2.5-1-5-1.6-7.4z">
</path></svg> 
`;

const SVG_GRAY_HEART_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102"  width="10px" height="12px" 
fill="#ddd"><path d="M4.3 39.4v-5.5c.9-3 1.4-6.2 2.8-9 4.4-8.9 11.6-14.2 22.1-14.2 8.2 0 14.1 4.1 18.9 10.2.6.8 
1.2 1.6 1.8 2.5 1.6-2 3-3.9 4.6-5.5 6.1-6.1 13.5-8.7 22.2-6.5 12.4 3.1 19.9 15.4 18.8 28-.8 9.1-4.9 16.9-10.7 
23.9-9.3 11.2-21.2 19.2-34 26.1-.4.2-1.3.2-1.8 0-11-5.9-21.3-12.7-29.9-21.6-5.9-6.1-10.8-12.9-13.2-21-.7-2.5-1-5-1.6-7.4z">
</path></svg> 
`;


RenderRatingWidgets();

RenderRatingInputWidget();

RenderOffersWidget();

RenderStories();


function on() {
    document.getElementById("overlay").style.display = "block";
}
                
function off() {
    document.getElementById("overlay").style.display = "none";
}



function expandStoriesToggle()  {
    
    let val = document.getElementById("see-more-content").style;
    if(val.display != "flex")
    {
        val.display="flex";
    }
    else{
        val.display="none";
    }
}




function createRatingWidget(totalRating, ratingTitle) {
    
    let ratings = document.createElement('div');
    ratings.setAttribute('class', 'ratings');
    ratings.textContent = totalRating + " ";

    for(let i=1; i<=totalRating; i++)
    {
        ratings.innerHTML += SVG_RED_HEART_ICON;
    }

    for(let i=totalRating+1; i<=5; i++) {
        ratings.innerHTML += SVG_GRAY_HEART_ICON;
    }

    let voteHeading = document.createElement('div');
    voteHeading.setAttribute('class','votes');
    voteHeading.textContent = ratingTitle;

    let ratingWidget = document.createElement('div');
    ratingWidget.setAttribute('class','rating-widget');
    ratingWidget.appendChild(ratings);
    ratingWidget.appendChild(voteHeading);

    return ratingWidget;

}

function RenderRatingWidgets() {
    let div = document.getElementById('user-rating-1');
    let parDiv = div.parentNode;


    parDiv.insertBefore(createRatingWidget(3.1,"CRITICS RATING"),div);
    parDiv.insertBefore(createRatingWidget(4,"USER RATINGS"),div);
}

function getSVGHeartHtml(rating_scale) {

    let rtSvg = "";

    for(let i=1; i<=rating_scale; i++) {

        let heartinputsvg = `<svg width=20px height=20px>
        <svg xmlns="http://www.w3.org/2000/svg" >
        <path id="`+`icon-heart-${2*i-1}`+`" class = "heart-gray" d="M10,2 C8.53531901,0.666666667 7.03531901,0 5.5,0 C3.19702148,0 1.50162384e-16,1.50714111 0,6.00250244 C0,9.50250244 3.5,12.5029907 8.00183105,16.496582 C8.4184847,16.8661971 9.08801023,17.484003 10.0104076,18.35 L10,2 Z"></path>
        </svg>
    
        <svg xmlns="http://www.w3.org/2000/svg"  x="10px" >
        <path id="`+`icon-heart-${2*i}`+`" class="heart-gray" d="M0,2 C1.46533203,0.666666667 2.96533203,3.44874711e-16 4.5,0 C6.80200195,0 10,1.50128174 10,6.00250244 C10,9.50421143 6.5,12.49823 1.99816895,16.496582 C1.65066553,16.8052211 0.984609214,17.4230271 0,18.35 L0,2 Z"></path>
        </svg>
        </svg>
        `;

        rtSvg += heartinputsvg;  
    }

    return rtSvg; 
}

function RenderRatingInputWidget() {
    let div = document.getElementById('rating-input');

    let rating_scale = 5;

    let svgHeartHtml = getSVGHeartHtml(rating_scale);
    div.innerHTML = svgHeartHtml;

    //adding action listener to rating input widget


    document.getElementById('rating-input').addEventListener('mouseover',function(e) { 
        if(e.target.nodeName == "path")
        {
          //e.target.className.baseVal = "heart-red";
          let stringId = e.target.id;
          stringId = stringId.substr(11,stringId.length);
          for(let i=1;i<=stringId;i++)
          {
              document.getElementById('icon-heart-'+i).className.baseVal = "heart-red";
          }
          for(let i=stringId+1 ; i<=2*rating_scale; i++)
          {
              document.getElementById('icon-heart-'+i).className.baseVal = "heart-gray";
          }
    
          document.getElementById('rating-value').innerHTML = (stringId/2.0).toFixed(1);
    
        }
     });
     
     document.getElementById('rating-input').addEventListener('mouseout', function(e){
     
       for(let i=1;i<=2*rating_scale;i++)
           {
               document.getElementById('icon-heart-'+i).className.baseVal = "heart-gray";
           }
           document.getElementById('rating-value').innerHTML = (0.0).toFixed(1);
       });
}


function createStoryCard() {
    let storyCard = document.createElement('div');
    storyCard.setAttribute('class','story-card');

    let img = document.createElement('img');
    img.setAttribute('src',"assets/images/storie1.jpg");
    img.setAttribute('width','193px');
    img.setAttribute('height','102px');
    img.setAttribute('alt','stories-image-1');
    
    let storyTitle = document.createElement('div');
    storyTitle.setAttribute('class','story-title');

    let storyLink = document.createElement('a');
    storyLink.setAttribute('href',"#");
    storyLink.textContent = "Batla House: Users Give John Abraham’s Film a...";

    storyTitle.appendChild(storyLink);

    let storyDate = document.createElement('div');
    storyDate.setAttribute('class','story-date');
    storyDate.textContent = "19 August";

    storyCard.appendChild(img);
    storyCard.appendChild(storyTitle);
    storyCard.appendChild(storyDate);

    return storyCard;
}

function RenderStories() {
    let el = document.getElementById('see-more-content');
    let parEl = el.parentNode;

    parEl.insertBefore(createStoryCard(),el);
    parEl.insertBefore(createStoryCard(),el);
    parEl.insertBefore(createStoryCard(),el);

    el.appendChild(createStoryCard());
    el.appendChild(createStoryCard());
    el.appendChild(createStoryCard());

}



{/* <div class="story-card">
    <img src="assets/images/storie1.jpg" width="193px" height="102px" alt="storie-image-1">
    <div class="story-title">
        <a href="#">Batla House: Users Give John Abraham’s Film a...</a> 
    </div>
    <div class="story-date">
        19 August
    </div>
</div> */}


function createOfferBanner(imgUrl, bannerheading, bannerbody) {

    let offerbanner = document.createElement('div');
    offerbanner.setAttribute('class','offer-banner');

    let img = document.createElement('img');
    img.setAttribute('alt','offer_logo_icon');
    img.setAttribute('src',imgUrl);

    let offerBannerDetails = document.createElement('div');
    offerBannerDetails.setAttribute('class','offer-banner-details');

    let offerBannerHeader = document.createElement('div');
    offerBannerHeader.setAttribute('class','offer-banner-header');

    offerBannerHeader.textContent = bannerheading;

    let offerBannerBody = document.createElement('div');
    offerBannerBody.setAttribute('class','offer-banner-body');
    offerBannerBody.textContent = bannerbody;



    offerBannerDetails.appendChild(offerBannerHeader);
    offerBannerDetails.appendChild(offerBannerBody);

    offerbanner.appendChild(img);
    offerbanner.appendChild(offerBannerDetails);

    return offerbanner;

}

function RenderOffersWidget() {
    
    let el = document.getElementById('offers_section_1');
    
    el.appendChild( createOfferBanner(
        `https://in.bmscdn.com/offers/offerlogo/amazon-pay-cashback-offer-amazonpaycashback.jpg?21082019122828`,
        'Amazon Pay', 'Win Cashback upto Rs. 300.'
    ));


    el.appendChild(createOfferBanner(
        `https://in.bmscdn.com/offers/offerlogo/paypal-cashback-offer-paypalcashback.jpg?21082019171734` ,
        'PayPal Offer', 'Transact first time with Paypal and get 100% cashback up to Rs. 500' 
    ));

    el.appendChild(createOfferBanner(
        `https://in.bmscdn.com/offers/offerlogo/paypal-cashback-offer-paypalcashback.jpg?21082019171734` ,
        'PayPal Offer', 'Transact first time with Paypal and get 100% cashback up to Rs. 500' 
    ));

}


{/* <div class="offer-banner">
<img alt="AMAZONPAYCASHBACK" src="https://in.bmscdn.com/offers/offerlogo/amazon-pay-cashback-offer-amazonpaycashback.jpg?21082019122828">
<div class="offer-banner-details">
    <div class="offer-banner-header">
        Amazon Pay
    </div>
    <div class="offer-banner-body">
        Win Cashback upto Rs. 300.
    </div>
</div>
</div> */}


{/* <div class="rating-widget">
    <div class="ratings">
        3.1 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102"  width="10px" height="12px" fill="#c9363c"><path d="M4.3 39.4v-5.5c.9-3 1.4-6.2 2.8-9 4.4-8.9 11.6-14.2 22.1-14.2 8.2 0 14.1 4.1 18.9 10.2.6.8 1.2 1.6 1.8 2.5 1.6-2 3-3.9 4.6-5.5 6.1-6.1 13.5-8.7 22.2-6.5 12.4 3.1 19.9 15.4 18.8 28-.8 9.1-4.9 16.9-10.7 23.9-9.3 11.2-21.2 19.2-34 26.1-.4.2-1.3.2-1.8 0-11-5.9-21.3-12.7-29.9-21.6-5.9-6.1-10.8-12.9-13.2-21-.7-2.5-1-5-1.6-7.4z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102" width="10px" height="12px" fill="#c9363c"><path d="M4.3 39.4v-5.5c.9-3 1.4-6.2 2.8-9 4.4-8.9 11.6-14.2 22.1-14.2 8.2 0 14.1 4.1 18.9 10.2.6.8 1.2 1.6 1.8 2.5 1.6-2 3-3.9 4.6-5.5 6.1-6.1 13.5-8.7 22.2-6.5 12.4 3.1 19.9 15.4 18.8 28-.8 9.1-4.9 16.9-10.7 23.9-9.3 11.2-21.2 19.2-34 26.1-.4.2-1.3.2-1.8 0-11-5.9-21.3-12.7-29.9-21.6-5.9-6.1-10.8-12.9-13.2-21-.7-2.5-1-5-1.6-7.4z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102"  width="10px" height="12px" fill="#c9363c"><path d="M4.3 39.4v-5.5c.9-3 1.4-6.2 2.8-9 4.4-8.9 11.6-14.2 22.1-14.2 8.2 0 14.1 4.1 18.9 10.2.6.8 1.2 1.6 1.8 2.5 1.6-2 3-3.9 4.6-5.5 6.1-6.1 13.5-8.7 22.2-6.5 12.4 3.1 19.9 15.4 18.8 28-.8 9.1-4.9 16.9-10.7 23.9-9.3 11.2-21.2 19.2-34 26.1-.4.2-1.3.2-1.8 0-11-5.9-21.3-12.7-29.9-21.6-5.9-6.1-10.8-12.9-13.2-21-.7-2.5-1-5-1.6-7.4z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102" width="10px" height="12px" fill="#ddd"><path d="M4.3 39.4v-5.5c.9-3 1.4-6.2 2.8-9 4.4-8.9 11.6-14.2 22.1-14.2 8.2 0 14.1 4.1 18.9 10.2.6.8 1.2 1.6 1.8 2.5 1.6-2 3-3.9 4.6-5.5 6.1-6.1 13.5-8.7 22.2-6.5 12.4 3.1 19.9 15.4 18.8 28-.8 9.1-4.9 16.9-10.7 23.9-9.3 11.2-21.2 19.2-34 26.1-.4.2-1.3.2-1.8 0-11-5.9-21.3-12.7-29.9-21.6-5.9-6.1-10.8-12.9-13.2-21-.7-2.5-1-5-1.6-7.4z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102"  width="10px" height="12px" fill="#ddd"><path d="M4.3 39.4v-5.5c.9-3 1.4-6.2 2.8-9 4.4-8.9 11.6-14.2 22.1-14.2 8.2 0 14.1 4.1 18.9 10.2.6.8 1.2 1.6 1.8 2.5 1.6-2 3-3.9 4.6-5.5 6.1-6.1 13.5-8.7 22.2-6.5 12.4 3.1 19.9 15.4 18.8 28-.8 9.1-4.9 16.9-10.7 23.9-9.3 11.2-21.2 19.2-34 26.1-.4.2-1.3.2-1.8 0-11-5.9-21.3-12.7-29.9-21.6-5.9-6.1-10.8-12.9-13.2-21-.7-2.5-1-5-1.6-7.4z"></path></svg>
    </div>
    <div class="votes">
        CRITICS RATING
    </div>
</div> */}