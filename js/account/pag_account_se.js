function getPageList(totalPages, page, maxLength){
    function range(start, end){
        return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    const sideWidth = maxLength < 9 ? 1 : 2;
    const leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    const rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if(totalPages <= maxLength){
        return range(1, totalPages);
    }
    if(page <= maxLength - sideWidth - 1 - rightWidth){
        return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }
    if(page >= totalPages - sideWidth - 1 - rightWidth){
        return range(1, sideWidth).concat(0, range(totalPages- sideWidth - 1 - rightWidth - leftWidth, totalPages));
    }
    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
}

$(function(){
    var numberOfItems = $(".coplants_se .lordhv_se").length;
    var limitPerPage = 4; //How many card items visible per a page
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 5; //How many page elements visible in the pagination
    var currentPage;

    function showPage(whichPage){
        if(whichPage < 1 || whichPage > totalPages) return false;
        currentPage = whichPage;

        $(".coplants_se .lordhv_se").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
        $(".pagination_ac_se li").slice(1, -1).remove();

        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
        $("<li>").addClass("page-item-se").addClass(item ? "current-page-se" : "dotss-se")
        .toggleClass("active-se", item === currentPage).append($("<a>").addClass("page-link-se")
        .attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page-se");
        });

        $(".previous-page-se").toggleClass("disable-se", currentPage === 1);
        $(".next-page-se").toggleClass("disable-se", currentPage === totalPages);
        return true;
    };

    $(".pagination_ac_se").append(
        $("<li>").addClass("page-item-se").addClass("previous-page-se").append($("<a>").addClass("page-link-se").attr({href: "javascript:void(0)"}).text("Prev")),
        $("<li>").addClass("page-item-se").addClass("next-page-se").append($("<a>").addClass("page-link-se").attr({href: "javascript:void(0)"}).text("Next"))
    );

    $(".coplants_se").show();
    showPage(1);

    $(document).on("click", ".pagination_ac_se li.current-page-se:not(.active-se)", function(){
        return showPage(+$(this).text());
    });

    $(".next-page-se").on("click", function(){
        return showPage(currentPage + 1);
    });
    $(".previous-page-se").on("click", function(){
        return showPage(currentPage - 1);
    });
});



































