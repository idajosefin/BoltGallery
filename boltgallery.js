/*Jquery boltgallery*/

$(document).ready(function(){
    var item, img, title, large_img;
    var CW, CH, CL, CT, hpadding, vpadding, imgtag;
    var boltgallery_loading = false;
    var doc = $(document);
    
    $(".boltgallery li").click(function(){
        if(boltgallery_loading) return false;
        boltgallery_loading= true;
        
        item = $(this);
        img = item.find("img");
        title = item.find(".title").html();
        
        //Remove active class from previously clicked LI
        $(".boltgallery li.active").removeClass("active");
        //Mark the clicked LI as active for later use
        item.addClass("active");
        
        //The large image
        large_img = new Image();
        large_img.src = img.attr("data-large") ? img.attr("data-large") : img.attr("src");
        
        //Adding additional HTML - only if it hasn't been added before
        if($(".boltgallery_backdrop").length < 1)
        {
            var boltgallery_backdrop = '<div class="boltgallery_backdrop"></div>';
            var boltgallery_canvas = '<div class="boltgallery_canvas"></div>';
            var boltgallery_previous = '<span class="boltgallery_previous"><i class="fa fa-angle-left"></i></span>';
            var boltgallery_title = '<span class="boltgallery_title"></span>';
            var boltgallery_next = '<span class="boltgallery_next"><i class="fa fa-angle-right"></i></span>';
            var boltgallery_controls = '<div class="boltgallery_controls">'+boltgallery_previous+boltgallery_title+boltgallery_next+'</div>';
            var total_html = boltgallery_backdrop+boltgallery_canvas+boltgallery_controls;
            
            $(total_html).appendTo("body");
        }
        //Fade in boltgallery elements if they are hidden due to a previous exit
        if($(".boltgallery_backdrop:visible").length == 0)
        {
            $(".boltgallery_backdrop, .boltgallery_canvas, .boltgallery_controls").fadeIn("slow");
        }
        
        //Display preloader till the large image loads and make the previous image translucent so that the loader in the BG is visible
        if(!large_img.complete) 
            $(".boltgallery_canvas").addClass("loading").children().css("opacity", "0.5")
        
        //Disabling left/right controls on first/last items
        if(item.prev().length == 0)
            $(".boltgallery_previous").addClass("inactive");
        else
            $(".boltgallery_previous").removeClass("inactive");
        if(item.next().length == 0)
            $(".boltgallery_next").addClass("inactive");
        else
            $(".boltgallery_next").removeClass("inactive");
        
        //Centering .boltgallery_canvas
        CW = $(".boltgallery_canvas").outerWidth();
        CH = $(".boltgallery_canvas").outerHeight();
        //Top and left coordinates
        CL = ($(window).width() - CW)/2;
        CT = ($(window).height() - CH)/2;
        $(".boltgallery_canvas").css({top: CT});
        
        //Inserting the large image into .boltgallery_canvas once it's loaded
        $(large_img).load(function(){
            //Recentering .boltgallery_canvas with new dimensions
            CW = large_img.width;
            CH = large_img.height;
            //.boltgallery_canvas padding to be added to image width/height to get the total dimensions
            hpadding = parseInt($(".boltgallery_canvas").css("paddingLeft")) + parseInt($(".boltgallery_canvas").css("paddingRight"));
            vpadding = parseInt($(".boltgallery_canvas").css("paddingTop")) + parseInt($(".boltgallery_canvas").css("paddingBottom"));
            CL = ($(window).width() - CW - hpadding)/2;
            CT = ($(window).height() - CH - vpadding)/2;
            
            //Animating .boltgallery_canvas to new dimentions and position
            $(".boltgallery_canvas").html("").animate({top: CT, left: CL, right: CL}, 500, function(){
                //Inserting the image but keeping it hidden
                imgtag = '<img src="'+large_img.src+'" style="opacity: 0;" />';
                $(".boltgallery_canvas").html(imgtag);
                $(".boltgallery_canvas img").fadeTo("slow", 1);
                //Displaying the image title
                $(".boltgallery_title").html(title);
                
                boltgallery_loading= false;
                $(".boltgallery_canvas").removeClass("loading");
            })
        })
    })
    
    //Click based navigation
    doc.on("click", ".boltgallery_previous", function(){ navigate(-1) });
    doc.on("click", ".boltgallery_next", function(){ navigate(1) });
    doc.on("click", ".boltgallery_backdrop", function(){ navigate(0) });
    
    //Keyboard based navigation
    doc.keyup(function(e){
        //Keyboard navigation should work only if boltgallery is active which means backdrop is visible.
        if($(".boltgallery_backdrop:visible").length == 1)
        {
            //Left
            if(e.keyCode == "37") navigate(-1);
            //Right
            else if(e.keyCode == "39") navigate(1);
            //Esc
            else if(e.keyCode == "27") navigate(0);
        }
    });
    
    //Navigation function
    function navigate(direction)
    {
        if(direction == -1) // left
            $(".boltgallery li.active").prev().trigger("click");
        else if(direction == 1) //right
            $(".boltgallery li.active").next().trigger("click");
        else if(direction == 0) //exit
        {
            $(".boltgallery li.active").removeClass("active");
            $(".boltgallery_canvas").removeClass("loading");
            //Fade out the boltgallery elements
            $(".boltgallery_backdrop, .boltgallery_canvas, .boltgallery_controls").fadeOut("slow", function(){
                //empty canvas and title
                $(".boltgallery_canvas, .boltgallery_title").html("");
            })
            boltgallery_loading= false;
        }
    }
})