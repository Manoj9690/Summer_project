/**
 * Created by DELL on 11-05-2016.
 */
//DOM is ready for java script code to execute
$(document).ready(function(){
    //invoke function on click of submit button with id "simple_post"
    $("#simple_post").click(function(){
        var formData = JSON.stringify($("#user_details").serializeArray());
        //console.log(formData);
        //request server for results using ajax
        $.ajax({
            type: "POST",
            url: "process_details.php",
            async: true,
            data: formData,
            //dataType:'json',
            //display results when response received successfully
            success: function(data){
                 console.log(data);
                var details= "<p>Your details:</p>";
                $.each(JSON.parse(data), function(key,val)
                {    console.log(data);
                    details += '<p> Your';
                    details += val.name +' is '+ val.value;
                    details +='<\p>';
                })
                $('#results').html(details);
                return true;
            },
            complete: function() {},
            error: function(xhr, textStatus, errorThrown) {
                console.log(textStatus);
                return false;
            }
        });
     });
});

