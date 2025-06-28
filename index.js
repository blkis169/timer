let start_button = document.querySelector(".start");
let timer_div = document.querySelector(".timer");
let list_one = document.createElement("ul");
let list_tow = document.createElement("ul");
let list_three = document.createElement("ul");
let twinty_threee = document.querySelector(".twinty_threee")
let fifty_nine_min = document.querySelector(".fifty-nine-min")
let fifty_nine_sec = document.querySelector(".fifty-nine-sec")
let li_list = document.createElement("li");
list_one.classList.add("no-hours")
list_tow.classList.add("no-min")
list_three.classList.add("no-sec")
let hours_list = []
let min_list = []
let sec_list = []








// twinty_threee.addEventListener('mouseenter',()=>{
//     list_one.style.display = "flex"
    
    
//     if(list_one.classList.contains("no-hours")){
//         for (let i = 0 ; i <23  ; i++){
//             let li_list = document.createElement("li");
//             li_list.textContent = [i + 1]
//             list_one.appendChild(li_list);
//             twinty_threee.appendChild(list_one);
//             hours_list.push(li_list)
//             li_list.style.animation = "animationhover 1s forwards 1"
//             li_list.classList.add("from_hours")
//             li_list.classList.add(`${i+1}`);
//         }
//         list_one.classList.remove("no-hours")
//     }

// })

// twinty_threee.addEventListener('mouseleave',()=>{
//  list_one.style.display = "none"
// })

// fifty_nine_min.addEventListener('mouseenter', ()=>{
//     list_tow.style.display = "flex";
//      if(list_tow.classList.contains("no-min")){
//         for (let i = 0 ; i <59  ; i++){
//             let li_list = document.createElement("li");
//             li_list.textContent = [i + 1]
//             list_tow.appendChild(li_list);
//             fifty_nine_min.appendChild(list_tow);
//             min_list.push(li_list)
//               li_list.style.animation = "animationhover 1s forwards 1"
//               li_list.classList.add(`${i+1}`);
//         }
//         list_tow.classList.remove("no-min")
//      }

// })
// fifty_nine_min.addEventListener('mouseleave',()=>{
//      list_tow.style.display = "none"
//     })



    // fifty_nine_sec.addEventListener('mouseenter', ()=>{
    //     list_three.style.display = "flex";
    //      if(list_three.classList.contains("no-sec")){
    //         for (let i = 0 ; i <59  ; i++){
    //             let li_list = document.createElement("li");
    //             li_list.textContent = [i + 1]
    //             list_three.appendChild(li_list);
    //             fifty_nine_sec.appendChild(list_three);
    //             sec_list.push(li_list)
    //               li_list.style.animation = "animationhover 1s forwards 1"
    //               li_list.classList.add(`${i+1}`);
    //         }
    //         list_three.classList.remove("no-sec")
    //      }
    
    // })
    // fifty_nine_sec.addEventListener('mouseleave',()=>{
    //     list_three.style.display = "none"
    //     })















