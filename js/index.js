$(document).ready(function(){

    //스크롤바가 이동될 때마다 스크롤위치값 나타내기
    // $(window).scroll(function(){
    //     $("#txt1").text($(this).scrollTop());
    // });
	
    //search_bar//////////////
    sb=true;

    $("button").click(function(){
        
        if(sb){
            $("input").css({"width":"145px","opacity":"1"});
            $(this).css({"margin-right":"5px"});
            sb=false;
        }else{
            $("input").css({"width":"0px","opacity":"0"});
            $(this).css({"margin-right":"0px"});
            sb=true;
        }

    });


    //TOP Mobile Menu.........................

    $(".gnb").css({"left":"-100%"});  /* 처음위치 */

    // 메뉴버튼
    $(".gnb_btn").click(function(){
        $(".gnb").stop(true,true).animate({"left":"0%"},500,"swing");
        $(".gnb .gnb_list>li:nth-child(1)").delay(300).animate({"margin-left":"0"},500,"swing");
        $(".gnb .gnb_list>li:nth-child(2)").delay(400).animate({"margin-left":"0"},500,"swing");
        $(".gnb .gnb_list>li:nth-child(3)").delay(500).animate({"margin-left":"0"},500,"swing");
        $(".gnb .gnb_list>li:nth-child(4)").delay(600).animate({"margin-left":"0"},500,"swing");
        $(".gnb .gnb_list>li:nth-child(5)").delay(700).animate({"margin-left":"0"},500,"swing");
    });

    // 닫기버튼
    $(".gnb .close").click(function(){
        $(".gnb").stop(true,true).animate({"left":"-100%"},500,"swing");
        $(".gnb .gnb_list>li").stop(true,true).animate({"margin-left":"-100%"});
        $(".gnb_list>li").find("ul").stop(true,true).slideUp(200);
        $(".gnb_list>li").stop(true,true).animate({"height":"60px"});
    });

    //메뉴 클릭시...
    gl=true;

    $(".gnb_list>li:first").click(function(){
        if(gl){
            $(this).find("ul").stop(true,true).slideDown(200);
            $(this).stop(true,true).animate({"height":"215px"});
            gl=false;
        }else{
            $(this).find("ul").stop(true,true).slideUp(200);
            $(this).stop(true,true).animate({"height":"60px"});
            gl=true;
        }
        
    });





    //SUB1_about_us.........................

    info=true;

    $(".au_info").click(function(){
        if(info){
            $(this).find("dt .drop").html("<span class='material-icons drop'>arrow_drop_up</span>");
            $(this).find("dt").css({"background":"#000","color":"#fff","transition":"all 0.4s"});
            $(this).stop(true,true).animate({"height":"270px"});
            info=false;
        }else{
            $(this).find("dt .drop").html("<span class='material-icons drop'>arrow_drop_down</span>");
            $(this).find("dt").css({"background":"transparent","color":"#000","transition":"all 0.4s"});
            $(this).stop(true,true).animate({"height":"50px"});
            info=true;
        }
    });

    $(".sub_title h3").animate({"margin-left":"0"},700,"swing");
    $(".sub_title h3:last-child").animate({"margin-right":"0"},400,"swing");


    $(window).scroll(function(){

        if($(this).scrollTop()>$(window).height()*(1/10)){
            $(".au_text").css({"background":"none","transition":"0.5s all"});
        }else{
            $(".au_text").css({"background":"#666","transition":"0.5s all"});
        }

    });




    //SUB2_our_story.........................

    var target1=$(".os1"),
        targetContent=target1.find(".os_img1");

    $(window).scroll(function(){

        if($(this).scrollTop()>=1){
            target1.addClass("osactive");
            if($(this).scrollTop()>=1000){
                target1.removeClass("osactive");
                target1.css({paddingTop:"1000px",paddingBottom:0})
            }
        }else{
            target1.removeClass("osactive");
            target1.css({paddingTop:0,paddingBottom:"735px"})
        }

    });


    var target2=$(".os2"),
        targetContent=target2.find(".os_img2");

    $(window).scroll(function(){

        if($(this).scrollTop()>=1400){
            target2.addClass("osactive");
            if($(this).scrollTop()>=2250){
                target2.removeClass("osactive");
                target2.css({paddingTop:"850px",paddingBottom:0})
            }
        }else{
            target2.removeClass("osactive");
            target2.css({paddingTop:0,paddingBottom:"600px"})
        }

    });


    var target3=$(".os3"),
        targetContent=target3.find(".os_img3");

    $(window).scroll(function(){

        if($(this).scrollTop()>=2650){
            target3.addClass("osactive");
            if($(this).scrollTop()>=3480){
                target3.removeClass("osactive");
                target3.css({paddingTop:"830px",paddingBottom:0})
            }
        }else{
            target3.removeClass("osactive");
            target3.css({paddingTop:0,paddingBottom:"605px"})
        }

    });


    $(window).scroll(function(){
        if($(this).scrollTop()>=3600){
            $(".os_last_in").fadeIn(500);
        }
    });




    //SUB3_stockists.........................

    $(".st_panel>li:not(:first)").hide();
    //첫번째를 제외한 나머지 내용 숨기기

    $(".st_tab>li").click(function(){
        $(".st_tab>li").removeClass("st_selected");  //기존선택된 selected 클래스 삭제
        $(this).addClass("st_selected");  //새로 선택된 selected 클래스 생성
        $(".st_panel>li").hide();  //기존의 보여진 내용 숨기기
        $($(this).find("a").attr("href")).show();  //새로 선택된 내용 href 연결된 내용 보여주기
    });




    //SUB4_contact.........................

    $(".ct_box").css({"display":"none"});

    $(window).scroll(function(){
        $(".ct_contents ul:nth-child(4)").delay(900).fadeIn(500);
        $(".ct_contents ul:nth-child(3)").delay(700).fadeIn(500);
        $(".ct_contents ul:nth-child(2)").delay(500).fadeIn(500);
        $(".ct_contents ul:nth-child(1)").delay(300).fadeIn(500);
    });




    //SUB5_archive.........................

    arch=true;

    $(".ac_menu dt").click(function(){
        if(arch){
            $(this).find(".drop").html("<span class='material-icons drop'>arrow_drop_up</span>");
            $(this).css({"background":"#000","color":"#fff","transition":"all 0.4s"});
            $(".ac_menu dd").stop(true,true).slideDown(400);
            arch=false;
        }else{
            $(this).find(".drop").html("<span class='material-icons drop'>arrow_drop_down</span>");
            $(this).css({"background":"#edecee","color":"#000","transition":"all 0.4s"});
            $(".ac_menu dd").stop(true,true).slideUp(400);
            arch=true;
        }
    });


    $(window).scroll(function(){

        if($(this).scrollTop()>$(window).height()*(1/10)){
            $("#ac_tabmenu").css({"background":"none","transition":"0.5s all"});
        }else{
            $("#ac_tabmenu").css({"background":"#999","transition":"0.5s all"});
        }

    });


    $(".ac_panel>li:not(:first)").hide();
    //첫번째를 제외한 나머지 내용 숨기기

    $(".tab>ul>li").click(function(){
        $(".tab>ul>li").removeClass("selected");  //기존선택된 selected 클래스 삭제
        $(this).addClass("selected");  //새로 선택된 selected 클래스 생성
        $(".ac_panel>li").hide();  //기존의 보여진 내용 숨기기
        $($(this).find("a").attr("href")).show();  //새로 선택된 내용 href 연결된 내용 보여주기
    });


	var ac_img_n= $(".ac_panel>li").length;  //이미지의 총개수  
	var ac_oldidx=0;  //기존이미지
	var ac_index=0;  //선택된 새이미지

    //index번째 비주얼이미지 이동하는 함수생성
    function nextImg(ac_index){

        $(".tab>ul>li").eq(ac_oldidx).removeClass("selected");  //기존선택된 selected 클래스 삭제
        $(".tab>ul>li").eq(ac_index).addClass("selected");  //새로 선택된 selected 클래스 생성
        $(".ac_panel>li").eq(ac_oldidx).hide();  //기존의 보여진 내용 숨기기
        $($(".tab>ul>li").find("a").eq(ac_index).attr("href")).show();  //새로 선택된 내용 href 연결된 내용 보여주기

        ac_oldidx=ac_index;

    }

    //다음버튼 클릭
    $(".tab>ul .next_page").click(function(){

        ac_index++;	
        if(ac_index>ac_img_n-1){ //총개수 4(이미지4컷)에서 1을 뺀 3->index=3(0,1,2,3)
            ac_index=0;      
        }
        nextImg(ac_index);       

    });




    //SUB6_story.........................

    $(".sr_tabmenu>li:not(:first)").hide();
    //첫번째를 제외한 나머지 내용 숨기기

    $(".sr_menu>ul>li").click(function(){
        $(".sr_menu>ul>li").removeClass("sr_selected");  //기존선택된 selected 클래스 삭제
        $(this).addClass("sr_selected");  //새로 선택된 selected 클래스 생성
        $(".sr_tabmenu>li").hide();  //기존의 보여진 내용 숨기기
        $($(this).find("a").attr("href")).show();  //새로 선택된 내용 href 연결된 내용 보여주기
    });


    $(".sr_panel .btn1").click(function(){
        $(".sr_panel .btn:nth-child(11)").css({"display":"none"});
		$(".sr_panel li:nth-child(n+12):nth-child(-n+22)").fadeIn();
	});

	$(".sr_panel .btn2").click(function(){
        $(".sr_panel .btn:nth-child(22)").css({"display":"none"});	
		$(".sr_panel li:nth-child(n+23):nth-child(-n+33)").fadeIn();
	});




    //SUB7_shop.........................

    $(".sh_tabmenu>li:not(:first)").hide();
    //첫번째를 제외한 나머지 내용 숨기기

    $(".sh_menu>ul>li").click(function(){
        $(".sh_menu>ul>li").removeClass("sh_selected");  //기존선택된 selected 클래스 삭제
        $(this).addClass("sh_selected");  //새로 선택된 selected 클래스 생성
        $(".sh_tabmenu>li").hide();  //기존의 보여진 내용 숨기기
        $($(this).find("a").attr("href")).show();  //새로 선택된 내용 href 연결된 내용 보여주기
    });



    $("#sh_tabmenu1 .sh_panel>li:not(:first)").hide();
    //첫번째를 제외한 나머지 내용 숨기기

    $(".atab_sh>ul>li").click(function(){
        $(".atab_sh>ul>li").removeClass("tab_selected");  //기존선택된 selected 클래스 삭제
        $(this).addClass("tab_selected");  //새로 선택된 selected 클래스 생성
        $("#sh_tabmenu1 .sh_panel>li").hide();  //기존의 보여진 내용 숨기기
        $($(this).find("a").attr("href")).show();  //새로 선택된 내용 href 연결된 내용 보여주기
    });


	var ash_img_n= $("#sh_tabmenu1 .sh_panel>li").length;  //이미지의 총개수  
	var ash_oldidx=0;  //기존이미지
	var ash_index=0;  //선택된 새이미지

    //index번째 비주얼이미지 이동하는 함수생성
    function ash_nextImg(ash_index){

        $(".atab_sh>ul>li").eq(ash_oldidx).removeClass("tab_selected");  //기존선택된 selected 클래스 삭제
        $(".atab_sh>ul>li").eq(ash_index).addClass("tab_selected");  //새로 선택된 selected 클래스 생성
        $("#sh_tabmenu1 .sh_panel>li").eq(ash_oldidx).hide();  //기존의 보여진 내용 숨기기
        $($(".atab_sh>ul>li").find("a").eq(ash_index).attr("href")).show();  //새로 선택된 내용 href 연결된 내용 보여주기

        ash_oldidx=ash_index;

    }

    //다음버튼 클릭
    $(".atab_sh>ul .next_page").click(function(){

        ash_index++;	
        if(ash_index>ash_img_n-1){ //총개수 4(이미지4컷)에서 1을 뺀 3->index=3(0,1,2,3)
            ash_index=0;      
        }
        ash_nextImg(ash_index);       

    });



    $("#sh_tabmenu2 .sh_panel>li:not(:first)").hide();
    //첫번째를 제외한 나머지 내용 숨기기

    $(".btab_sh>ul>li").click(function(){
        $(".btab_sh>ul>li").removeClass("tab_selected");  //기존선택된 selected 클래스 삭제
        $(this).addClass("tab_selected");  //새로 선택된 selected 클래스 생성
        $("#sh_tabmenu2 .sh_panel>li").hide();  //기존의 보여진 내용 숨기기
        $($(this).find("a").attr("href")).show();  //새로 선택된 내용 href 연결된 내용 보여주기
    });


	var bsh_img_n= $("#sh_tabmenu2 .sh_panel>li").length;  //이미지의 총개수  
	var bsh_oldidx=0;  //기존이미지
	var bsh_index=0;  //선택된 새이미지

    //index번째 비주얼이미지 이동하는 함수생성
    function bsh_nextImg(bsh_index){

        $(".btab_sh>ul>li").eq(bsh_oldidx).removeClass("tab_selected");  //기존선택된 selected 클래스 삭제
        $(".btab_sh>ul>li").eq(bsh_index).addClass("tab_selected");  //새로 선택된 selected 클래스 생성
        $("#sh_tabmenu2 .sh_panel>li").eq(bsh_oldidx).hide();  //기존의 보여진 내용 숨기기
        $($(".btab_sh>ul>li").find("a").eq(bsh_index).attr("href")).show();  //새로 선택된 내용 href 연결된 내용 보여주기

        bsh_oldidx=bsh_index;

    }

    //다음버튼 클릭
    $(".btab_sh>ul .next_page").click(function(){

        bsh_index++;	
        if(bsh_index>bsh_img_n-1){ //총개수 4(이미지4컷)에서 1을 뺀 3->index=3(0,1,2,3)
            bsh_index=0;      
        }
        bsh_nextImg(bsh_index);       

    });

});