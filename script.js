let isLogin = false;

function checkLogin(){

    if(isLogin){

        window.location.href = "favorite.html";

    }else{

        alert("請先完成登入或註冊！");
    }
   /*下拉選單*/ 
}function showCategory(category){

    let cards = document.querySelectorAll('.place-card');

    cards.forEach(function(card){

        if(category === 'all'){

            card.style.display = 'flex';

        }else if(card.classList.contains(category)){

            card.style.display = 'flex';

        }else{

            card.style.display = 'none';
        }
    });
}
/*
function openTrip(){

    document.getElementById("tripPopup")
    .style.display = "block";
}


function closeTrip(){

    document.getElementById("tripPopup")
    .style.display = "none";
}


function showTrip(area){

    let result = document.getElementById("tripResult");

    if(area == "taipei"){

        result.innerHTML = `

        <h2>🎲 台北推薦行程</h2>

        <p>1. 晴光甜甜圈</p>

        <p>2. 西門咖啡廳</p>

        <p>3. 信義散步</p>

        `;
    }

    if(area == "seoul"){

        result.innerHTML = `

        <h2>🎲 首爾推薦行程</h2>

        <p>1. 聖水洞咖啡廳</p>

        <p>2. 弘大拍照點</p>

        <p>3. 漢江夜景</p>

        `;
    }

    closeTrip();
}*/
function openReview(){

    document.getElementById(
    "reviewModal").style.display="flex";

}

function closeReview(){

    document.getElementById(
    "reviewModal").style.display="none";

}
function toggleVisited(btn){

    btn.classList.toggle("visited");

}