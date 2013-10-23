$(function () {
    initEvents();
});
function initEvents() {
    //搜索框自动搜索功能，引用jQuery ui
    tags();
    //删除管理员功能
    deleteAdministration();
}
//删除管理员功能
function deleteAdministration(){
    $(".gvSuperAdminSeeInfoHeaderAD").click(function () {
        var adminID = parseInt($(this).attr("thisAdminID"));
        var adminName = $(this).attr("thisAdminName");
        var index = confirm("确认要删除账号为" + adminName + "的管理员吗？");
        if (index == true) {
            $.ajax({
                url: "ws/superSeeAdminInfo.asmx/deletAdmin",
                type: "POST",
                contentType: "application/json",
                data: "{adminid:" + adminID + "}",
                dataType: "json",
                success: function () {
                    
                    setTimeout(function () {
                        location.reload();
                    }, 2000);
                    showSuccessAlert("您成功删除管理员" + adminName + "！");
                }
            });
            
        }
        else {
            showNoticeAlert("您取消了删除管理员" + adminName + "！");
        }

    });
}

//搜索框自动搜索功能，引用jQuery ui
function tags() {
    var availableTags = [
	"ActionScript",
	"AppleScript",
	"Asp",
	"BASIC",
	"C",
	"C++",
	"Clojure",
	"COBOL",
	"ColdFusion",
	"Erlang",
	"Fortran",
	"Groovy",
	"Haskell",
	"Java",
	"JavaScript",
	"Lisp",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Scala",
	"Scheme"
	];
    $("#tags").autocomplete({
        source: availableTags
    });
}