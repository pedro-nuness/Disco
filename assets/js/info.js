
function PlayAudio(){ 
    let Song = new Audio('');
}

var Active = false;

function OpenTab(){

    Active = !Active;


    var InfoDivElement = document.getElementById("info_div");
    var Cards = document.getElementsByClassName("song_cards");
    if(Active){
        InfoDivElement.style.height = "45vh";

        setTimeout(() => {
            for(let i =0; i < Cards.length; i++)
            Cards[i].style.opacity= "100%";
        }, 500);
    
    }
    else{

        for(let i =0; i < Cards.length; i++){
        Cards[i].style.opacity= "0%";
        }

        setTimeout(() => {
            InfoDivElement.style.height = "20vh";
        }, 500);     
    }

}

function IncreaseDiv(){


  
    var DiscElement = document.getElementById("disco_div");
    var InfoDivElement = document.getElementById("info_div");
    
    var SongInfo = document.getElementsByClassName("card_info");
    var SongContainers = document.getElementsByClassName("card_container")
    
    if(Active){ 


        for( let i =0; i < SongContainers.length; i++){
            let AudioName = "";

            switch(i){ 


            }

            SongContainers[i].addEventListener('mouseenter', function() {  
                SongContainers[i].style.animation = "grow_card 2s ease forwards";    
                /*ARTIST NAME*/ 
                SongInfo[i].style.animation = "show_info 1s ease forwards 0.5s";
            });
                
                
            SongContainers[i].addEventListener('mouseleave', function() {     
                SongContainers[i].style.animation = "decrease_card 1s ease backwards";   
                 /*ARTIST NAME*/  
                SongInfo[i].style.animation = "hide_info 1s ease forwards";                     
            });
        }
        
    }
}


