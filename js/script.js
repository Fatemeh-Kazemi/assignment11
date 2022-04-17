$(document).ready(function(){
    /************* مشت روی شکم ***********/
    $('#body').click(function(){
        $('#left-eye').css({transition:'all 0.5s', backgroundColor: 'black', height: '3px'})
        $('#right-eye').css({transition:'all 0.5s', backgroundColor: 'black', height: '3px'})
    })

    /************* نوازش سر ***********/
    $('#face').click(function(){
        $('#left-eye').css({transition:'all 0.5s', backgroundColor: 'white', height: '10px'})
        $('#right-eye').css({transition:'all 0.5s', backgroundColor: 'white', height: '10px'})
    })

    /************* سلام با دست چپ **********/
    $('#left-hand').click(function(){
        $('#left-hand').addClass('hello-left-hand')
    })

    /************* سلام با دست راست ***********/
    $('#right-hand').click(function(){
        $('#right-hand').addClass('hello-right-hand')
    })
})