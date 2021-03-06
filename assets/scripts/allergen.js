var datatable;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!****************************************************************!*\
  !*** ../demo1/src/js/pages/crud/ktdatatable/base/data-ajax.js ***!
  \****************************************************************/

// Class definition

var KTDatatableRemoteAjaxDemo = function() {
    // Private functions

    // basic demo
    var demo = function() {

        datatable = $('#allergen').KTDatatable({
            // datasource definition
            data: {
                type: 'remote',
                source: {
                    read: {
                        url: HOST_URL + 'admin/allergen/api',
                        // sample custom headers
                        headers: {'x-my-custom-header': 'some value', 'x-test-header': 'the value'},
                        map: function(raw) {
                            var dataSet = raw;
                            if (typeof raw.data !== 'undefined') {
                                dataSet = raw.data;
                            }
                            return dataSet;
                        },
                        // params : {
                        //     query:{
                        //         "key" : "value"
                        //     }
                        // }
                    },
                },
                pageSize: 10,
                serverPaging: false,
                serverFiltering: false,
                serverSorting: false
				// autoColumns: true
            },

            // layout definition
            layout: {
                scroll: false,
                footer: false,
				icons:{
					pagination: {
						next: 'la la-angle-right',
						prev: 'la la-angle-left',
						first: 'la la-angle-double-left',
						last: 'la la-angle-double-right',
						more: 'la la-ellipsis-h'
					  }
				},
            },
			
            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch'
            },
			// columns definition
            columns: [{
                field: 'name',
                title: 'Name',
            },{
                field: 'content',
                title: 'Description'
            }, {
                field: 'created_at',
                title: 'Created Date'
            },{
                field: 'Actions',
                title: 'Actions',
                sortable: false,
                width: 125,
                overflow: 'visible',
                autoHide: false,
                template: function(row) {
                    return '\
                    <a href="javascript:onEdit('+row.id+')" class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3 edit_btn">\
                        <span class="svg-icon svg-icon-md svg-icon-primary">\
                            <!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg-->\
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                                    <rect x="0" y="0" width="24" height="24" />\
                                    <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />\
                                    <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />\
                                </g>\
                            </svg>\
                            <!--end::Svg Icon-->\
                        </span>\
                    </a>\
                    <a href="javascript:onDel('+row.id+')" class="btn btn-icon btn-light btn-hover-primary btn-sm">\
                        <span class="svg-icon svg-icon-md svg-icon-primary">\
                            <!--begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg-->\
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                                    <rect x="0" y="0" width="24" height="24" />\
                                    <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero" />\
                                    <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />\
                                </g>\
                            </svg>\
                            <!--end::Svg Icon-->\
                        </span>\
                    </a>\
                    ';
                },
            }],

        });
        $("#new_btn").on("click", function(){
            // $('#form')[0].reset();
            $("#id").val("");
            $('#form').trigger("reset");
            $("#kt_select2_modal").modal('show');
        });
        // datatable.on('click', 'tbody tr .edit_btn', function() {
		// 	// $(this).parents('tr').toggleClass('active');
        //     var data_row = datatable.row($(this).closest('td')).data();
        //     console.log(data_row);
		// });
		// $('#kt_datatable_search_status').on('change', function() {
        //     datatable.search($(this).val().toLowerCase(), 'category');
        // });
		// $('#search_btn').on('click', function(){
		// 	datatable.search($('#kt_datatable_search_type').val().toLowerCase(),'search');
		// });
        // $('#kt_datatable_search_status, #kt_datatable_search_type').selectpicker();
    };
    var temp = function (){
        $("form").submit(function (event) {
            var paramObj = new FormData($("form#kt_form")[0]);
            // var paramObj = $("form#kt_form").serialize();
            if(files.length > 0 ){
                paramObj.append('file',files[0]);
            }else{
                // toastr.error("Please select a file.");
                // return;
            }
            $.ajax({
                type: "POST",
                url: HOST_URL + "admin/allergen/save",
                data: paramObj,
                dataType: "json",
                encode: true,
            }).done(function (data) {
                if (data["success"] == true ){
                    toastr.success(data["msg"]);
                    $("#kt_select2_modal").modal('hide');
                    datatable.reload()
                }else{
               
              }
              
            });
            event.preventDefault();
        });
    }
    return {
        // public functions
        init: function() {
            demo();
            temp();
        },
    };
}();

jQuery(document).ready(function() {
    KTDatatableRemoteAjaxDemo.init();
});

/******/ })()
;

function onEdit(id){
    $.ajax({
        type: "POST",
        url: HOST_URL + "admin/allergen/api",
        data: {
            query:{"rest_id" : id}
        },
        dataType: "json",
        encode: true,
    }).done(function (data) {
        var row = data[0];
        $("#id").val(row["id"]);
        $("#name").val(row["name"]);
        $("#address").val(row["address"]);
        $("#contact_info").val(row["contact_info"]);
        $("#content").val(row["content"]);
        $("#kt_select2_modal").modal('show');
    });
}

function onDel(id){
    $.ajax({
        type: "POST",
        url: HOST_URL + "admin/allergen/delete",
        data: {"id" : id },
        dataType: "json",
        encode: true,
    }).done(function (data) {
        // if(data["success"] == true){}
        toastr.success("Sucess");
        datatable.reload();
    });
}
//# sourceMappingURL=data-ajax.js.map