$(function () {
    initEvents();
});
function initEvents() {
    //菜单栏的变化
    changeMenuSeeNovelty();
    

}
//菜单栏的变化
function changeMenuSeeNovelty() {
    $(".mainLeft3ATitle").removeClass("mainLeft3ATitleS");
    $(".mainLeft3ATitle3").addClass("mainLeft3ATitleS");
    $(".mainLeft3ATitle").next(".mainLeft3UlContent").slideUp();
    $(".mainLeft3ATitle3").next(".mainLeft3UlContent").slideDown();
}