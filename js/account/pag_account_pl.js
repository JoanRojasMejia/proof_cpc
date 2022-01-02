$(function(){
    
    const numberOfItems = $(".coplants_pl .lordhv_pl").length;
    const limitPerPage = 5; //How many card items visible per a page
    const totalPages = Math.ceil(numberOfItems / limitPerPage);
    const paginationSize = 5; //How many page elements visible in the pagination
    let currentPage;

    function showPage(whichPage){
        if(whichPage < 1 || whichPage > totalPages) return false;
        currentPage = whichPage;

        $(".coplants_pl .lordhv_pl").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
        $(".pagination_ac_pl li").slice(1, -1).remove();

        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
        $("<li>").addClass("page-item").addClass(item ? "current-page" : "dotss")
        .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
        .attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page");
        });

        $(".previous-page").toggleClass("disable", currentPage === 1);
        $(".next-page").toggleClass("disable", currentPage === totalPages);
        return true;
    };

    $(".pagination_ac_pl").append(
        $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Prev")),
        $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Next"))
    );

    $(".coplants_pl").show();
    showPage(1);

    $(document).on("click", ".pagination_ac_pl li.current-page:not(.active)", function(){
        return showPage(+$(this).text());
    });

    $(".next-page").on("click", function(){
        return showPage(currentPage + 1);
    });
    $(".previous-page").on("click", function(){
        return showPage(currentPage - 1);
    });
});


