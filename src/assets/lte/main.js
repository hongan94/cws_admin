$(document).ready(function() {
    var current = window.location.pathname;
    $(".collapse navbar-collapse a").each(function() {
        var link = $(this).attr('href');
        if (current == link) {
            $(this).parent().addClass('active');
        }
    });

    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass('active');
            $(this).parents('li').parents('li').addClass('menu-open');
        } else if (window.location.href.includes(this.href)) {
            $(this).addClass('active');
            $(this).parents('li').parents('li').addClass('menu-open');
        }
    });

    if (/\/shopee\/\d+\/brand_mappings/.test(window.location.href)) {
        $('#panel_integrations_menu').addClass('active');
        $('#panel_shopee_menu').addClass('active');
        $('#panel_shopee_shops').addClass('active');
    }

    // For 'numberonly' class
    $(document).on('input keydown keyup mousedown mouseup select contextmenu drop focusout', '.numberonly', function() {
        let valuea = $(this).val();
           // Accept Int >= 0 and dots       // First number can't be 0
        if (/^(\d*\,?\d*)*$/.test(valuea) && (valuea === "" || parseInt(valuea) > 0)) {
            // Accepted value
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("")) {
            // Rejected value - restore the previous one
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
            // Rejected value - nothing to restore
            this.value = "";
        }
    })

    // For 'numberonly' class for latitude/longitude
    $(document).on('input keydown keyup mousedown mouseup select contextmenu drop focusout', '.numberonlyforlatlon', function () {
        let valuea = $(this).val();
        // Accept Int >= 0 and dots       // First number can't be 0
        if (/^-?([0-9]{1,2}|1[0-7][0-9]|180)(\.[0-9]{1,10})?$/.test(valuea) && (valuea === "" || parseInt(valuea) > 0)) {
            // Accepted value
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("")) {
            // Rejected value - restore the previous one
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
            // Rejected value - nothing to restore
            this.value = "";
        }
    })

    // For 'number' class for price store_product
    $(document).on('input keydown keyup mousedown mouseup select contextmenu drop focusout', '.number', function () {
        let valuea = $(this).val();
        // Accept Int >= 0 and dots       // First number can't be 0
        if (/^(\d*\.?\d*)*$/.test(valuea) && (valuea === "" || parseInt(valuea) >= 0)) {
            // Accepted value
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("")) {
            // Rejected value - restore the previous one
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
            // Rejected value - nothing to restore
            this.value = "";
        }
    })

    // For 'phonenumberonly' class
    $(document).on('input keydown keyup mousedown mouseup select contextmenu drop focusout', '.phonenumberonly', function() {
        let valuea = $(this).val();
           // Accept Int >= 0 and dots
        if (/^(\d*\.?\d*)*$/.test(valuea)) {
            // Accepted value
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("")) {
            // Rejected value - restore the previous one
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
            // Rejected value - nothing to restore
            this.value = "";
        }
    })

    $(document).on('keyup', '.add_dot', function() {
        let value = $(this).val().toString().replaceAll(".", '')
        value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        $(this).val(value)
    })

    $(document).ready(function() {
        $('#product_catalogues_extend').select2();
    });

    function readFile() {
        $('.image img').remove()
        $.each(this.files, function(index, file) {
            if (file) {
                var FR = new FileReader();
                FR.addEventListener("load", function(e) {
                    var result = '<img id="img" height="100" style="margin-right: 10px; border: #ff0000 solid 1px;" src="' + e.target.result + '">'
                    $('.image').append(result)
                });
                FR.readAsDataURL(file);
            }
        })
    }
    if (document.getElementById("upload-image")) {
        document.getElementById("upload-image").addEventListener("change", readFile)
    }


    function updateTextView(_obj) {
        var num = getNumber(_obj.val());
        if (num == 0) {
            _obj.val('');
        } else {
            _obj.val(num.toLocaleString());
        }
    }

    function getNumber(_str) {
        var arr = _str.split('');
        var out = new Array();
        for (var cnt = 0; cnt < arr.length; cnt++) {
            if (isNaN(arr[cnt]) == false) {
                out.push(arr[cnt]);
            }
        }
        return Number(out.join(''));
    }

    $('.vnd').on('keyup', function() {
        updateTextView($(this));
    });


    $('.delete-image').on('click', function(e) {
        var position = $(e.target).data('position')
        $('.item-image-' + position).addClass('d-none')
        $('#image_' + position).val(1)
    })

    /* Title article show */
    function show_title() {
        $("h3").click(function(){
            $("h3").removeClass("truncate");
        });
    }
    show_title();
});

function getFilename(element) {
    readImageFile(element)
}

function readImageFile(element) {
    var position = $(element).data('position')
    $('#image_' + position).val(0)
    $('.image-' + position + ' img').remove()
    $.each(element.files, function(index, file) {
        if (file) {
            var FR = new FileReader();
            FR.addEventListener("load", function(e) {
                var result = '<img id="img" width="100" height="100" style="margin-right: 10px; border: #ff0000 solid 1px;" src="' + e.target.result + '">'
                $('.image-' + position).append(result)
            });
            FR.readAsDataURL(file);
        }
    })
}

$('.option.drop_group').change(function() {
    window.location.href = "?group=" + $(this).val();
});
// $('.option_company_id').change(function() {
//     window.location.href = "?company_id=" + $(this).val();
// });
$('.bnt_find_by_key').click(function() {
    window.location.href = "?keyword=" + $('.find_by_key').val();
});
$('.select.drop_group').change(function() {
    window.location.href = "?id=" + $(this).val();
});
$('.choose.drop_group').change(function() {
    var choose = $(this).val();
    $("#input_option_group").val(choose);
});

function upload_image1(obj) {
    if (obj.files) {
        console.log(obj.files)
        console.log($('.upload_queue'));
        console.log($('.editing'));
        // if ($('.editing').length) {
        //     $('.editing').prev().prev().css('background', "#00a65a")
        // } else if($('.upload_queue').length){
        //     $('.wrap-repeat-upload').children().last().find('.gallery-img-wrapper').css('background', "#00a65a")
        // }
        // console.log($(obj));
        // $(obj).prev().prev().css('background', "#00a65a")
        // return;

        var file = obj.files[0];
        var formData = new FormData();
        formData.append('file', file);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', "/admin/resources/quick_upload/?command=QuickUpload&type=Images", true);
        xhr.send(formData);
        xhr.onload = function() {
            if (this.response != 'null') {
                var self = this
                if ($('.upload_queue').length) {
                    $('.wrap-repeat-upload').children().last().find('.gallery-img-wrapper').next().val('/uploads/' + self.response);
                    $('.wrap-repeat-upload').children().last().find('.gallery-img-wrapper').attr('src', '/uploads/' + self.response);
                } else if ($('.editing').length) {
                    console.log($('.editing').prev().prev());
                    $('.editing').prev().val('/uploads/' + self.response)
                    $('.editing').prev().prev().attr('src', '/uploads/' + self.response);
                }
                // $(obj).prev().val('/uploads/' + self.response)
                // $(obj).prev().prev().attr('src', '/uploads/' + self.response);
                // $(obj).prev().prev().css('background', "#ccc")
            }
        };
    }
}

function upload_image(obj) {
    if (obj.files) {
        var file = obj.files[0];
        var formData = new FormData();
        formData.append('file[]', file);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', "/admin/resources/quick_upload/?command=QuickUpload&type=Images", true);
        xhr.onload = function() {
            if (xhr.status == 200) {
                var self = this
                uploadImg = JSON.parse(self.response)
                $(obj).prev().val('/uploads/' + uploadImg[0])
                $(obj).prev().prev().attr('src', '/uploads/' + uploadImg[0]);
                $(obj).prev().prev().prev('.combine_product_attribute_image').attr('src', '/uploads/' + uploadImg[0]);
                $(obj).prev().prev(".img.thumb.quickview").css("display", "inline");
                // $(obj).prev().prev().css('background', "#ccc")
                $(obj).parent().closest("div[data-repeater-item]").removeClass('hidden')
                $(obj).parent().closest("div[data-repeater-item]").removeClass('empty-image')
            } else {
                $(obj).parent().closest("div[data-repeater-item]").empty()
            }
        };
        xhr.send(formData);
    }
}

function parseImage(uploadImg, countElement, type, key_image = 'image_album') {
  let html = `<div data-repeater-item data-repeater-editor="1" style="padding: 0px 5px 0px 5px">
      <div style="position:relative; padding-top: 10px;">
          <a class="btn btn-sm btn-default mgt-5"
          data-toggle="popover"
          tabindex="0"
          data-trigger="focus"
          data-html="true"
          style="position:absolute; right: 5px;"
          data-content="<input type='button'style='width:100%; display: initial;' class='list-group-item custom-input'
              value='Thay hình ảnh'><input data-repeater-delete style='width:100%' type='button' class='list-group-item list-group-item-action'value='Xóa hình ảnh'>">
              <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
          </a>
          <img class="gallery-img-wrapper" src="/uploads/${uploadImg}">
          <input type="hidden" name="${type}[${key_image}][${countElement}][img]" id="img" value="/uploads/${uploadImg}" placeholder="IMG" class="form-control oneline input-repeater-id image half" autocomplete="off">
          <input type="file" onchange="upload_avatar(this)"  accept="image/png, image/gif, image/jpeg, image/svg" multiple class="custom-file-input blah" style="display:none;">
      </div>
  </div>`
  return html
}
function uploadImageMultiple(obj) {
    key_image = 'image_album'
    var typeFormat = window.location.pathname.split( '/' );
    var type = 'products';
    if (typeFormat.includes('catalogues')) {
      type = 'catalogue'
    }else if (typeFormat.includes('product_mappings')){
      type = 'product_mapping'
    }else if(typeFormat.includes('invoices')){
      type = 'invoice'
      key_image = 'images'
    }else if(typeFormat.includes('store_products')){
      type = 'store_product'
    }else{
      type = 'product'
    }
    
    container = document.getElementById("containerrr")
    // countElement = container.childElementCount - 1
    countElement = $(".mt-repeater div[data-repeater-item]:not(.hidden)").length;
    if(!$(obj).hasClass("editing") && type == 'product'){
        let imageCurrent = $(".mt-repeater div[data-repeater-item]:not(.hidden)").length;
        let totalImage = obj.files.length + imageCurrent
        if(totalImage > 8){
            swal({
                title: "Bạn chỉ có thể đăng tối đa 8 ảnh",
                icon: "warning",
                buttons: true,
                dangerMode: true
            })
            return false;
        }
    }else if(type == 'store_product'){
        let imageCurrent = $(".mt-repeater div[data-repeater-item]:not(.hidden)").length;
        let totalImage = obj.files.length + imageCurrent
        let display_info = `(${totalImage}/8)`
        $(".number-image").html(display_info)
    }
    if (obj.files) {
        var formData = new FormData();
        var xhr = new XMLHttpRequest();
        xhr.open('POST', "/admin/resources/quick_upload/?command=QuickUpload&type=Images", true);
        for (let index = 0; index < obj.files.length; index++) {
            formData.append('file[]', obj.files[index]);
        }
        xhr.onload = function() {
            if (xhr.status == 200) {
                var self = this
                uploadImg = JSON.parse(self.response)
                if (self.response[0].includes("[") &&  uploadImg.length >= 1) {
                    for (let index = 0; index < uploadImg.length; index++) {
                        html = document.createElement("div")
                        html.innerHTML = parseImage(uploadImg[index], countElement, type, key_image)
                        countElement++;
                       $(container).find('.btn-add-image').after(html);
                        $('[data-toggle="popover"]').popover();
                    }
                }else{
                    $(obj).prev().val('/uploads/' + uploadImg[0])
                    $(obj).prev().prev().attr('src', '/uploads/' + uploadImg[0]);
                    $(obj).prev().prev().prev('.combine_product_attribute_image').attr('src', '/uploads/' + uploadImg[0]);
                    $(obj).prev().prev(".img.thumb.quickview").css("display", "inline");
                    $(obj).parent().closest("div[data-repeater-item]").removeClass('hidden')
                    $(obj).parent().closest("div[data-repeater-item]").removeClass('empty-image')
                }
            } else {
                $(obj).parent().closest("div[data-repeater-item]").empty()
            }
        };
        xhr.send(formData);
    }
}


function upload_image_chat(obj) {
    if (obj.files) {
        var file = obj.files[0];
        var formData = new FormData();
        formData.append('file', file);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', "/admin/resources/quick_upload/?command=QuickUpload&type=Images", true);
        xhr.send(formData);
        var output = document.getElementById('output-img');
        output.src = URL.createObjectURL(obj.files[0]);
        $("#file-name").removeClass('hidden');
        $("#output-img").removeClass('hidden');
        $("#file-name").text("Ảnh đính kèm: " + obj.files[0].name);
        $("#chat-msg-text").css("margin-left", "50px");
        output.onload = function() {
            URL.revokeObjectURL(output.src) // free memory
        };
        xhr.onload = function() {
            if (this.status == 200) {
                var self = this
                $(obj).prev().val('/uploads/' + self.response)
                $(obj).prev().prev().attr('src', '/uploads/' + self.response);
                // $(obj).prev().prev().css('background', "#ccc")
            }
        };
    }
}

function file_up(obj) {
    if (obj.files) {
        var file = obj.files[0];
        var formData = new FormData();
        formData.append('file', file);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', "/admin/resources/quick_upload/?command=QuickUpload&type=Files", true);
        xhr.send(formData);
        $("#file-name").removeClass('hidden');
        $("#file-name").text("Tệp đính kèm: " + obj.files[0].name);
        xhr.onload = function() {
            if (this.status == 200) {
                var self = this
                $(obj).prev().val('/uploads/' + self.response)
                $(obj).prev().prev().attr('src', '/uploads/' + self.response);
                // $(obj).prev().prev().css('background', "#ccc")
            }
        };
    }
}

function upload_avatar(obj) {
    if (obj.files) {
        var file = obj.files[0];
        var formData = new FormData();
        formData.append('file[]', file);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', "/admin/resources/quick_upload/?command=QuickUpload&type=Images", true);
        xhr.send(formData);
        xhr.onload = function() {
            if (this.status == 200) {
                var self = this
                avatar = JSON.parse(self.response)
                $(obj).prev().val('/uploads/' + avatar[0])
                $(obj).prev().prev().attr('src', '/uploads/' + avatar[0]);
                // $(obj).prev().prev().css('background', "#ccc")
            }
        };
    }
}

function upload_icon(obj) {
    if (obj.files) {
        var file = obj.files[0];
        var formData = new FormData();
        formData.append('resource[file]', file);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', "/administrator/resources/upload", true);
        xhr.send(formData);
        xhr.onload = function() {
            if (this.status == 200) {
                var self = this
                $(obj).prev().val('/uploads/' + self.response)
                $(obj).prev().prev().attr('src', '/uploads/' + self.response);
            }
        };
    }
}

/////////
