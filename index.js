const gigi = document.querySelector('#gigi');
const listitem = document.querySelectorAll('.listitem ');
 

console.log(listitem);

gigi.addEventListener('click', ()=>{

    listitem.forEach((item)=>{
        // console.log("huhu")
        if(item.classList.contains('hide')){
            
            item.classList.remove('hide')
            console.log(item.classList)
        }else{
            item.classList.add('hide')
        }
       
    })
});