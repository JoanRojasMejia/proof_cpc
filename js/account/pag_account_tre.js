$(function(){
    var numberOfItems = $(".coplants_tr .lordhv_tr").length;
    var limitPerPage = 5; //How many card items visible per a page
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 5; //How many page elements visible in the pagination
    var currentPage;

    function showPage(whichPage){
        if(whichPage < 1 || whichPage > totalPages) return false;
        currentPage = whichPage;

        $(".coplants_tr .lordhv_tr").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
        $(".pagination_ac_tr li").slice(1, -1).remove();

        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
        $("<li>").addClass("page-item-tr").addClass(item ? "current-page-tr" : "dotss-tr")
        .toggleClass("active-tr", item === currentPage).append($("<a>").addClass("page-link-tr")
        .attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page-tr");
        });

        $(".previous-page-tr").toggleClass("disable-tr", currentPage === 1);
        $(".next-page-tr").toggleClass("disable-tr", currentPage === totalPages);
        return true;
    };

    $(".pagination_ac_tr").append(
        $("<li>").addClass("page-item-tr").addClass("previous-page-tr").append($("<a>").addClass("page-link-tr").attr({href: "javascript:void(0)"}).text("Prev")),
        $("<li>").addClass("page-item-tr").addClass("next-page-tr").append($("<a>").addClass("page-link-tr").attr({href: "javascript:void(0)"}).text("Next"))
    );

    $(".coplants_tr").show();
    showPage(1);

    $(document).on("click", ".pagination_ac_tr li.current-page-tr:not(.active-tr)", function(){
        return showPage(+$(this).text());
    });

    $(".next-page-tr").on("click", function(){
        return showPage(currentPage + 1);
    });
    $(".previous-page-tr").on("click", function(){
        return showPage(currentPage - 1);
    });
});





























