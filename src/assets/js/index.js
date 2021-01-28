
function hideShow(menuId,guitarId,closeId){

    const menu=document.querySelector(menuId);
    const guitar=document.querySelector(guitarId);
    const close=document.querySelector(closeId);
    if(menu.classList.contains('aparece')){
        menu.classList.remove('aparece');
        close.classList.remove('aparece')
        guitar.classList.add('esconde')
    }else{
        menu.classList.add('aparece');
        close.classList.add('aparece')
        guitar.classList.remove('esconde')
    }

}
function onlyHideShow(menuId){

    const menu=document.querySelector(menuId);
        menu.classList.remove('aparece');


}