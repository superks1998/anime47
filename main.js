
function filterSection(option) {
    var fliterTimeList = document.querySelectorAll('.filter-time');
    var productViewContent = document.querySelector(".product__view-content");
    fliterTimeList.forEach(item => {
        var arr1 = item.className;
        
        if (arr1.indexOf(option) > -1) {
            if(item.style.display !== 'none') {
                item.style.transform = 'translate(0px, 0px)';
            }else {
                item.style.display = '';
                item.style.opacity = '1';
                item.style.transform = 'perspective(3000px) scale(1, 0.01) translate(0px, 210px)';
                // item.style.transition = 'transform 0.6s ease 0s, opacity 0.6s linear 0s;';
                // item.style.transition = 'all 0.5s linear 0s';
                // productViewContent.style.height = "auto";
                setTimeout(function() {
                    item.style.transform = 'scale(1, 1) translate(0px, 0px)';
                }, 400)
            } 
        } else {
            item.style.opacity = '0';
            item.style.transform = 'perspective(3000px) scale(1, 0.01) translate(0, -210px)';
            // item.style.transition = 'all 0.5s linear 0s';
            // item.style.transition = 'transform 0.6s ease 0s, opacity 0.6s linear 0s;';
            // productViewContent.style.height = "auto";
            setTimeout(function() {
                item.style.display = 'none';
            }, 400)
        }
    } ) 
}

// function filterSection(option) {
        //     var fliterTimeList = document.querySelectorAll('.filter-time');

        //     if (option == 'all') {
        //         option = '';
        //     }

        //     console.log(option);

        //     for ( var i = 0; i < fliterTimeList.length; i++) {
        //         removeClass(fliterTimeList[i], 'show-filter');
        //         if (fliterTimeList[i].className.indexOf(option) > -1) addClass(fliterTimeList[i], 'show-filter');
        //     }
        // }

        // function addClass(element, name) {
        //     var arr1 = element.className.split(" ");
        //     var arr2 = name.split(" ");

        //     for (var i = 0; i < arr2.length; i++) {
        //         if(arr1.indexOf(arr2[i]) == -1) {
        //             element.className += " " + arr2[i];
        //         }
        //     }
        // }

        // function removeClass(element, name) {
        //     var arr1 = element.className.split(" ");
        //     var arr2 = name.split(" ");

        //     for(var i = 0; i < arr2.length; i++) {
        //         while(arr1.indexOf(arr2[i]) > -1) {
        //             arr1.splice(arr1.indexOf(arr2[i]), 1);
        //         }
        //     }
        //     element.className = arr1.join(" ");
        // }