// let start_button = document.querySelector(".start");
// let timer_div = document.querySelector(".timer");
// let twinty_threee = document.querySelector(".twinty_threee")
// let fifty_nine_min = document.querySelector(".fifty-nine-min")
// let fifty_nine_sec = document.querySelector(".fifty-nine-sec")
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let li5 = document.createElement("li");
let li6 = document.createElement("li");
let li7 = document.createElement("li");
let li8 = document.createElement("li");
let li9 = document.createElement("li");
let li10 = document.createElement("li");
let li11 = document.createElement("li");
let li12 = document.createElement("li");
let li13 = document.createElement("li");
let li14 = document.createElement("li")
let li15 = document.createElement("li");
let li16 = document.createElement("li");
let li17 = document.createElement("li");
let li18 = document.createElement("li");
let li19 = document.createElement("li");
let li20= document.createElement("li");
let li21 = document.createElement("li");
let li22 = document.createElement("li");
let li23 = document.createElement("li");
let t_t_li_arr = [li1,li2,li3,li4,li5,li6,li7,li8,li9,li10,li11,li12,li13,li14,li15,li16,li17,li18,li19,li20,li21,li22,li23]

let li1m = document.createElement("li");
let li2m = document.createElement("li");
let li3m = document.createElement("li");
let li4m = document.createElement("li");
let li5m = document.createElement("li");
let li6m = document.createElement("li");
let li7m = document.createElement("li");
let li8m = document.createElement("li");
let li9m = document.createElement("li");
let li10m = document.createElement("li");
let li11m = document.createElement("li");
let li12m = document.createElement("li");
let li13m = document.createElement("li");
let li14m = document.createElement("li")
let li15m = document.createElement("li");
let li16m = document.createElement("li");
let li17m = document.createElement("li");
let li18m = document.createElement("li");
let li19m = document.createElement("li");
let li20m = document.createElement("li");
let li21m  = document.createElement("li");
let li22m = document.createElement("li");
let li23m = document.createElement("li");
let li24m = document.createElement("li");
let li25m = document.createElement("li");
let li26m = document.createElement("li");
let li27m = document.createElement("li");
let li28m = document.createElement("li");
let li29m = document.createElement("li");
let li30m = document.createElement("li");
let li31m = document.createElement("li");
let li32m = document.createElement("li");
let li33m = document.createElement("li");
let li34m = document.createElement("li");
let li35m = document.createElement("li");
let li36m = document.createElement("li");
let li37m = document.createElement("li");
let li38m = document.createElement("li");
let li39m = document.createElement("li");
let li40m = document.createElement("li");
let li41m = document.createElement("li");
let li42m = document.createElement("li");
let li43m = document.createElement("li");
let li44m = document.createElement("li");
let li45m = document.createElement("li");
let li46m = document.createElement("li");
let li47m = document.createElement("li");
let li48m = document.createElement("li");
let li49m = document.createElement("li");
let li50m = document.createElement("li");
let li51m = document.createElement("li");
let li52m = document.createElement("li");
let li53m = document.createElement("li");
let li54m = document.createElement("li");
let li55m = document.createElement("li");
let li56m = document.createElement("li");
let li57m = document.createElement("li");
let li58m = document.createElement("li");
let li59m = document.createElement("li");

let t_t_li_arr_m = [li1m,li2m,li3m,li4m,li5m,li6m,li7m,li8m,li9m,li10m,li11m,li12m,li13m,li14m,li15m,li16m,li17m,li18m,li19m,li20m,li21m,li22m,li23m,li24m,li25m,li26m,li27m,li28m,li29m,li30m,li31m,li32m,li34m,li35m,li36m,li37m,li38m,li39m,li40m,li41m,li42m,li43m,li44m,li45m,li46m,li47m,li48m,li49m,li50m,li51m,li52m,li53m,li54m,li55m,li56m,li57m,li58m,li59m]




twinty_threee.addEventListener('mouseenter',()=>{
    t_t_li_arr.forEach((el,ind)=>{
        list_one.style.display = "flex"
        el.style.opacity ="100%";
        el.style.animation = "animationhover 1s forwards 1"
        list_one.appendChild(el)
        twinty_threee.appendChild(list_one)
        el.textContent = ind+1
    }
        )
})

twinty_threee.addEventListener('mouseleave',()=>{
    list_one.style.display = "none"
})


t_t_li_arr.forEach((li)=>{
    li.addEventListener('click',function(){
        twinty_threee.textContent = li.textContent;
    })
})


fifty_nine_min.addEventListener('mouseenter',()=>{
    t_t_li_arr_m.forEach((el,ind)=>{
        list_tow.style.display = "flex"
        el.style.opacity ="100%";
        el.style.animation = "animationhover 1s forwards 1"
        list_tow.appendChild(el)
        fifty_nine_min.appendChild(list_tow)
        el.textContent = ind+1
    }
        )
})

fifty_nine_min.addEventListener('mouseleave',()=>{
    list_tow.style.display = "none"
})



t_t_li_arr_m.forEach((li)=>{
    li.addEventListener('click',function(){
       fifty_nine_min.textContent = li.textContent;
    })
})

















