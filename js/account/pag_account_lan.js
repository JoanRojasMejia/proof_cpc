$(function(){

    var numberOfItems = $(".coplants_la .lordhv_la").length;
    var limitPerPage = 5; //How many card items visible per a page
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 5; //How many page elements visible in the pagination
    var currentPage;

    function showPage(whichPage_la){
        if(whichPage_la < 1 || whichPage_la > totalPages) return false;
        currentPage = whichPage_la;

        $(".coplants_la .lordhv_la").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
        $(".pagination_ac_la li").slice(1, -1).remove();

        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
        $("<li>").addClass("page-item-la").addClass(item ? "current-page-la" : "dotss-la")
        .toggleClass("active-la", item === currentPage).append($("<a>").addClass("page-link-la")
        .attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page-la");
        });

        $(".previous-page-la").toggleClass("disable-la", currentPage === 1);
        $(".next-page-la").toggleClass("disable-la", currentPage === totalPages);
        return true;
    };

    $(".pagination_ac_la").append(
        $("<li>").addClass("page-item-la").addClass("previous-page-la").append($("<a>").addClass("page-link-la").attr({href: "javascript:void(0)"}).text("Prev")),
        $("<li>").addClass("page-item-la").addClass("next-page-la").append($("<a>").addClass("page-link-la").attr({href: "javascript:void(0)"}).text("Next"))
    );

    $(".coplants_la").show();
    showPage(1);

    $(document).on("click", ".pagination_ac_la li.current-page-la:not(.active-la)", function(){
        return showPage(+$(this).text());
    });

    $(".next-page-la").on("click", function(){
        return showPage(currentPage + 1);
    });
    $(".previous-page-la").on("click", function(){
        return showPage(currentPage - 1);
    });
});





































