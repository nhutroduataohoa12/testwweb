   
    // function filterSelection(c) {
    //     var x, i;
    //     x = document.getElementsByClassName("flexitem");
    //     if (c == "all") c = "";
    //     for (i = 0; i < x.length; i++) {
    //         w3RemoveClass(x[i], "show");
    //         if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    //     }
    // }


    // function w3AddClass(element, name) {
    //     var i, arr1, arr2;
    //     arr1 = element.className.split(" ");
    //     arr2 = name.split(" ");
    //     for (i = 0; i < arr2.length; i++) {
    //         if (arr1.indexOf(arr2[i]) == -1) {
    //         element.className += " " + arr2[i];
    //         }
    //     }
    // }


    // function w3RemoveClass(element, name) {
    //     var i, arr1, arr2;
    //     arr1 = element.className.split(" ");
    //     arr2 = name.split(" ");
    //     for (i = 0; i < arr2.length; i++) {
    //         while (arr1.indexOf(arr2[i]) > -1) {
    //         arr1.splice(arr1.indexOf(arr2[i]), 1);
    //         }
    //     }
    //     element.className = arr1.join(" ");
    //     }


    // var btnContainer = document.getElementsByClassName("myBtnContainer");
    
    // var btns = document.getElementsByClassName("btn");
    // for (var i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener("click", function() {
    //     var current = document.getElementsByClassName("active");
    //     current[0].className = current[0].className.replace(" active", "");
    //     this.className += " active";
    // });
    // }
    // filterSelection("all") ;

 
// function filterSelection(params){
//     let strart = document.getElementsByClassName("flexitem");
//     for(let i = 0 ; i < strart.length ; i++){
//         strart[i].style.display = "none" ;
//     }
//     if(params === "all"){
//         let csss =  document.getElementsByClassName("flexitem")  ;
//         for(let i = 0 ; i < csss.length ; i++){
//             csss[i].style.display = "block" ;
//    }
//     }
//     else if( params === "oranges"){
//         let inoran = document.getElementsByClassName("oranges");
//             for(let i = 0 ; i < inoran.length ;i++) {
//                 inoran[i].style.display = "block" ;
//             }
//     //     inoran.forEach(function(item){
//     //         item.style.display = "block" ;
//     //    });
       
//     }
//     else if( params === "fresh-meat"){
//         let inoran1 = document.getElementsByClassName("fresh-meat");
            
//             for(let i = 0 ; i < inoran1.length ;i++) {
//                 inoran1[i].style.display = "block" ;
//             }
//     }
//     else if( params === "vegetables"){
//         let inoran2 = document.getElementsByClassName("vegetables");
            
//             for(let i = 0 ; i < inoran2.length ;i++) {
//                 inoran2[i].style.display = "block" ;
//             }
//     }
//     else if( params === "fastfood"){
//         let inoran3 = document.getElementsByClassName("fastfood");
            
//             for(let i = 0 ; i < inoran3.length ;i++) {
//                 inoran3[i].style.display = "block" ;
//             }
//     }
// }


function filterSelection(params){
    let strart = document.getElementsByClassName("flexitem");
    for(let i = 0 ; i < strart.length ; i++){
        strart[i].style.display = "none" ;
    }
    function myClick(object){
        // let lengthObject = object.length ;
        // for(let i = 0 ; i < lengthObject ; i++ ){
        //     object[i].style.display = "block" ;
        // }
        object.forEach(function(item){
            item.style.display = "block" ;
        });
      
    };
    
    switch (params) {
        case "all":{
            // myClick(document.getElementsByClassName("flexitem")) ;
            myClick(document.querySelectorAll(".flexitem")) ;
            break;
        }
        case  "oranges" : {
            myClick(document.querySelectorAll(".oranges"));
            break ;
        }
        case  "fresh-meat" : {
            myClick(document.querySelectorAll(".fresh-meat"));
            break ;
        }
        case  "vegetables" : {
            myClick(document.querySelectorAll(".vegetables"));
            break ;
        }
        case  "fastfood" : {
            myClick(document.querySelectorAll(".fastfood"));
            break ;
        }
        default:
            break;
    }
}
