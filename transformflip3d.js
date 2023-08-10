

    
let ar=[];
for(let i=0;i<24;i++)
{
    ar[i]=(document.querySelector(".game").children[i].children[0]);
}
let indexrang=[];
for(let i=1;i<5;i++)
{
   for(let j=1;j<7;j++)
{
 indexrang.push([i,j]);   
} 
}
let r;
let existedrang=[];
let p=0;
for(let k=0;k<24;k++)
{
    
    r=Math.floor((Math.random())*14);
    
    console.log("r="+r);
    
    if(r>=0&&r<=24&&!existedrang.includes(r))
    {
        existedrang[p]=r;
        ar[k].parentElement.style.gridArea=`${indexrang[r][0]}`;
        p++;
    }

}



console.log(ar);

let eg=[];
ar.forEach(function(e)
{
    e.onclick=function()
    {
        e.style.transform="translateX(-100%) rotateY(-180deg)";
        eg.push(e);
        
        if(eg.length==2)
        {
            if(eg[0].children[1].innerHTML===eg[1].children[1].innerHTML)
            {
                eg.splice(0,2);
                return;
            }
            if(eg[0].children[1].innerHTML!==eg[1].children[1].innerHTML)
            {
                setTimeout(function()
                {
                    eg[0].style.transform="translateX(0) rotateY(0)";
                    eg[1].style.transform="translateX(0) rotateY(0)";
                },1000)
                setTimeout(function()
                {
                    eg.splice(0,2);
                },1100)

                return;
            }
        }
    }
   
})






document.querySelector(".restart").onclick=function()
{
    window.location.reload();
}







