function openMenu(){
    $(".primaryMenu").toggleClass('active')
    $(".primaryMenu").find("li").removeClass('active').find('.submenu').slideUp(200)
}
$("#menuLateral").find(">a").find("span").eq(0).click(openMenu)
// //! //////////////////////////////////////////////////////////////////////////////////////// !//
// function openMenuSubmenu(e){
// }
// $(".primaryMenu.active>li").click(openMenuSubmenu)
// if(!$(this).closest(".primaryMenu").is(".active")){
//     $(".primaryMenu>li").not(this).find('.submenu').slideUp(200)
//     $(this).find('.submenu').slideToggle(200)
// }
$(".primaryMenu>li").not("#menuLateral").click(function(e){
    $(".primaryMenu.active>li").not(this).removeClass('active')
    $(this).toggleClass('active')

    if(!$(this).closest(".primaryMenu").is(".active")){
        $(".primaryMenu>li").not(this).find('.submenu').slideUp(200)
        $(this).find('.submenu').slideToggle(200)
    }
})