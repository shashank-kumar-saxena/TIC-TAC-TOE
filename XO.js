var c=0;
var o=[];
var x=[];
var draw=0,notdraw=0;
var value=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function ocheck(arr)
{
    for(j=0;j<value.length;j++)
    {
        var counter=0;
        for(l=0;l<value[j].length;l++)
        {
            for(m=0;m<arr.length;m++)
            {
                if(value[j][l]==arr[m])
                {
                    counter++;
                    break;
                }
            }
        }
        if(counter==3)
        {
            window.alert("O won");
            notdraw=1;
        }
        counter=0;
    }
}
function xcheck(arr)
{
    for(j=0;j<value.length;j++)
    {
        var counter=0;
        for(l=0;l<value[j].length;l++)
        {
            for(m=0;m<arr.length;m++)
            {
                if(value[j][l]==arr[m])
                {
                    counter++;
                    break;
                }
            }
        }
        if(counter==3)
        {
            window.alert("X won");
            notdraw=0;
        }
        counter=0;
    }
}
function over(i)
{
    if(select[i].className.length==12)
    {
        select[i].className="col box boxover";
        o.push(i);
        draw++;
        if(o.length>=3)
        ocheck(o);
        if(draw==9 && notdraw==0)
        {
            window.alert("Draw");
        }
    }
}
function cross(i)
{
    if(select[i].className.length==12)
    {
        select[i].className="col box boxcross";
        x.push(i);
        draw++;
        if(x.length>=3)
        xcheck(x);
        if(draw==9 && notdraw==0)
        {
            window.alert("Draw");
        }
        
    }
}
function count(i)
{
if(c%2==0)
{
    if(c==0)
    {
    over(i);
    c++;
    }
    else
    {

        var arr1=o+x;
        var value=0;
        for(var j=0;j<arr1.length;j++)
        {
        if(arr1[j]==i)
        {
            value++;
            break;
        }
        value++;
        }
        if(j==value)
        {
        over(i);
        c++;
        }
    }
}
else
{
    if(c==1)
    {
        cross(i);
       c++;
    }
    else
    {
    
      var  arr2=o+x;
        console.log(c);
        var value=0;
        for(var j=0;j<arr2.length;j++)
        {
            if(arr2[j]==i)
            {
                value++;
                break;
            }
            value++;
        }
        if(j==value)
        {
            cross(i);
            c++;
        }
    }
    
    }
    
}
function reset()
{
    window.open('index.html','_self');
}
var btn=document.getElementById("button");
btn.addEventListener('click',reset,false);
var select=document.getElementsByClassName("box");
select[0].addEventListener("click",function()
{
    count(0);
},false);
select[1].addEventListener("click",function()
{
    count(1);
},false);
select[2].addEventListener("click",function()
{
    count(2);
},false);
select[3].addEventListener("click",function()
{
    count(3);
},false);
select[4].addEventListener("click",function()
{
    count(4);
},false);
select[5].addEventListener("click",function()
{
    count(5);
},false);
select[6].addEventListener("click",function()
{
    count(6);
},false);
select[7].addEventListener("click",function()
{
    count(7);
},false);
select[8].addEventListener("click",function()
{
    count(8);
},false);
