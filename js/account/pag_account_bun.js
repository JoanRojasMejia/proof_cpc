$(function(){
    var numberOfItems = $(".coplants_bu .lordhv_bu").length;
    var limitPerPage = 5; //How many card items visible per a page
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 5; //How many page elements visible in the pagination
    var currentPage;

    function showPage(whichPage){
        if(whichPage < 1 || whichPage > totalPages) return false;
        currentPage = whichPage;

        $(".coplants_bu .lordhv_bu").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
        $(".pagination_ac_bu li").slice(1, -1).remove();

        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
        $("<li>").addClass("page-item-bu").addClass(item ? "current-page-bu" : "dotss-bu")
        .toggleClass("active-bu", item === currentPage).append($("<a>").addClass("page-link-bu")
        .attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page-bu");
        });

        $(".previous-page-bu").toggleClass("disable-bu", currentPage === 1);
        $(".next-page-bu").toggleClass("disable-bu", currentPage === totalPages);
        return true;
    };

    $(".pagination_ac_bu").append(
        $("<li>").addClass("page-item-bu").addClass("previous-page-bu").append($("<a>").addClass("page-link-bu").attr({href: "javascript:void(0)"}).text("Prev")),
        $("<li>").addClass("page-item-bu").addClass("next-page-bu").append($("<a>").addClass("page-link-bu").attr({href: "javascript:void(0)"}).text("Next"))
    );

    $(".coplants_bu").show();
    showPage(1);

    $(document).on("click", ".pagination_ac_bu li.current-page-bu:not(.active-bu)", function(){
        return showPage(+$(this).text());
    });

    $(".next-page-bu").on("click", function(){
        return showPage(currentPage + 1);
    });
    $(".previous-page-bu").on("click", function(){
        return showPage(currentPage - 1);
    });
});





































