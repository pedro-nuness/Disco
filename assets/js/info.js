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



