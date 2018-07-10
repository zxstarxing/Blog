$(document).ready(()=>{
    $(".article-delete").on("click",(e)=>{
        var $target = $(e.target);
        var id= $target.attr("data-id");
        $.ajax({
            type: 'DELETE',
            url: '/articles/' + id,
            success: function() {
              window.location.href = "/";
            },
            erorr: function(err) {
              console.log(err);
            }
        })
    })
})