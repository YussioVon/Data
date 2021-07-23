servers=[
    '----请选择要操作的服务器----',
    '121.4.86.9'
],
options=[
    '----请选择具体操作----',
    '新建文件1',
    '新建文件2',
    '新建文件3',
    '新建文件4'
],
optionid=[
    '1','2','3','4'
]
$(document).ready(function(){
    
    //赋值option
    $.each(servers,function(i,val){
        $('.select1').append("<option>"+val+"</option>");
    }),
    $.each(options,function(i,val){
        $('.select2').append("<option value="+optionid[i]+">"+val+"</option>");

    }),
    
    
// 前端判断取值
    $(".select1").change(function(){
        var se_O_text =  $(".select1 option:selected").text();
        if(se_O_text.indexOf("请选择")>=0){
            console.log("这是请选择");
        }
        else{
            console.log(se_O_text)
        }	
    });
    $(".select2").change(function(){
        var se_T_text = $(".select2 option:selected").text();
        var se_T_val = $(".select2 option:selected").val();
        if(se_T_text.indexOf("请选择")>=0){
            console.log("这是请选择");
        }
        else{
            console.log(se_T_text);
            console.log(se_T_val);
        }	
    });
    $(".confirm").click(function(){
        var se_O_text =  $(".select1 option:selected").text();
        var se_T_text = $(".select2 option:selected").text();
        if((se_O_text.indexOf("请选择")>=0)&&(se_T_text.indexOf("请选择")<0)){
            alert("请选择操作服务器！");
        }
        else if((se_O_text.indexOf("请选择"))<0&&(se_T_text.indexOf("请选择")>=0)){
            alert("请选择具体操作");
        }
        else if((se_O_text.indexOf("请选择"))>=0&&se_T_text.indexOf(("请选择")>=0)){
            alert("请选择！");
        }
        else{
            console.log("输入格式正确~")
            $.ajax({
                url:'/index',
                data:{
                    "testdata":'123'
                },
                // contentType: "application/json",
                type:'GET',
                // dataType:'json',
                async:false,
                success:function(data){
                    alert('success')
                    $.ajax({
                        url:'/getData',
                        type:'POST',
                        data:{
                            "number":'54321'
                        },
                        success:function(res){
                            alert("操作成功");
                            window.location.reload()
                        }
                    })
                },
                error:function(XMLHttpRequest,textStatus,errorThrown){
                    debugger
                    console.log(XMLHttpRequest.status);
                    console.log(XMLHttpRequest.readyState)
                    console.log(textStatus);
                    }
                })
        }
    });
})