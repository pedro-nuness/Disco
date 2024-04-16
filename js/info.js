
function PlayAudio(){ 
    let Song = new Audio('');
}

var Active = false;
var Change =false;

function IncreaseDiv(){


  
    var DiscElement = document.getElementById("disco_div");
    var InfoDivElement = document.getElementById("info_div");
    
    var SongInfo = document.getElementsByClassName("card_info");
    var SongContainers = document.getElementsByClassName("card_container")
    

    

    
    DiscElement.addEventListener('click', function() {
        Change = true;
    });

    if(Change){
        Active = !Active;
        Change = false;
    }

    let Songs = document.getElementsByClassName("song_cards");
   
 
    if(Active){ 

       

        InfoDivElement.style.animation = "increase_height 2s ease forwards"; 
        for (let step = 0; step < Songs.length; step++) {      
            Songs[step].style.animation = "songs_appear 1s ease 0.5s both" 
        }

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
    


        FrstTime = false;
        
    }else{ 
        if(!FrstTime){  
           
            InfoDivElement.style.animation = "decrease_height 2s ease forwards";  
            for (let step = 0; step < Songs.length; step++) {      
                Songs[step].style.animation = "songs_disapper 1s ease both" 
            }

        }

    }
}

setInterval(IncreaseDiv, 0);
