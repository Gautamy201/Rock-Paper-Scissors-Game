let user_name = prompt("Enter Your Name")
let userScore = 0
let computerScore = 0
// ----------------------------------------------
let data = document.querySelectorAll("img")
let msg = document.querySelector("#msg");
let user_score_para =  document.querySelector("#user_score")
let comuter_score_para =  document.querySelector("#comp_score")
let user_score_name = document.getElementById("user_name")
// -------------------------------------------------------------------------
user_name = user_name === null || user_name === "" ? "user" : user_name;
user_name = user_name != null? user_name : "user_name";
user_score_name.innerHTML=user_name+" -: "
// --------------------------------------------------------------------------
const gen_comp_value = () =>{
    let opption = ["rock" , "paper" , "scissors"]
    let random = Math.floor(Math.random()*3)
    return opption[random]
}

const match_draw = () =>{
    msg.innerHTML="Match is Draw"
    document.getElementById("msg").style.color="blue"
}

const user_winner = (user_win) => {
    if(user_win){
        userScore++
        user_score_para.innerHTML=userScore
        msg.innerHTML=` *** You Win *** `
        document.getElementById("msg").style.color="Green"
    }
    else{
        computerScore++
        comuter_score_para.innerHTML=computerScore
        msg.innerHTML=` *** You Loss *** `
        document.getElementById("msg").style.color="red"
    }
}

const playGame = (user_value) => {
    console.log(user_value)
    const comp_value = gen_comp_value();
    console.log(comp_value)
    if(user_value === comp_value){
        match_draw();
    }
    else{
        let user_win = true
        if(user_value === "rock"){
            user_win = comp_value === "paper" ? false : true
        }
        else if(user_value === "paper"){
            user_win = comp_value === "scissors" ? false : true
        }
        else{
            user_win = comp_value === "paper" ? false : true
        }
        user_winner(user_win)
    }
}

data.forEach((value)=>{
    value.addEventListener("click",()=>{
        let user_value = value.getAttribute("id");
        playGame(user_value)
    })
})

console.log(userScore)