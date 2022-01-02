$(function(){
    
    const numberOfItems = $(".coplants_lo .toplg_").length;
    const limitPerPage = 1; //How many card items visible per a page
    const totalPages = Math.ceil(numberOfItems / limitPerPage);
    const paginationSize = 5; //How many page elements visible in the pagination
    let currentPage;

    function showPage(whichPage){
        if(whichPage < 1 || whichPage > totalPages) return false;
        currentPage = whichPage;

        $(".coplants_lo .toplg_").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
        $(".pagination_ac_lo li").slice(1, -1).remove();

        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
        $("<li>").addClass("page-item-lo").addClass(item ? "current-page-lo" : "dotss-lo")
        .toggleClass("active-lo", item === currentPage).append($("<a>").addClass("page-link-lo")
        .attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page-lo");
        });

        $(".previous-page-lo").toggleClass("disable-lo", currentPage === 1);
        $(".next-page-lo").toggleClass("disable-lo", currentPage === totalPages);
        return true;
    };

    $(".pagination_ac_lo").append(
        $("<li>").addClass("page-item-lo").addClass("previous-page-lo").append($("<a>").addClass("page-link-lo").attr({href: "javascript:void(0)"}).text("Prev")),
        $("<li>").addClass("page-item-lo").addClass("next-page-lo").append($("<a>").addClass("page-link-lo").attr({href: "javascript:void(0)"}).text("Next"))
    );

    $(".coplants_lo").show();
    showPage(1);

    $(document).on("click", ".pagination_ac_lo li.current-page-lo:not(.active-lo)", function(){
        return showPage(+$(this).text());
    });

    $(".next-page-lo").on("click", function(){
        return showPage(currentPage + 1);
    });
    $(".previous-page-lo").on("click", function(){
        return showPage(currentPage - 1);
    });
});









































