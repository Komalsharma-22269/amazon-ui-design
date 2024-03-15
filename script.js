/* in sliding header we want to display only one image at the time and hide other images for that we use this thing */
const imgs = document.querySelectorAll('.header-slider ul img')
const prev_btn= document.querySelector('.control_prev')
const next_btn= document.querySelector('.control_next')


let n = 0;/* (when the 'n' is zero then it will select the first image and then n is 1 then it will show second image and so on....) */
 
function changeSlide(){
    for (let i = 0 ; i < imgs.length; i++){
        imgs[i].style.display = 'none';/* (images will be hidden) */
       }
       imgs[n].style.display = 'block';/* (images will be visible according to the 'n value') */
}
changeSlide();

/* ( by clicking on previous button it will decrease the value of 'n' and that iamge will be displayed) */
prev_btn.addEventListener('click' , (e)=>{
    if(n > 0){
        n--;/* (if n value is greater than zero then it will decrease the value of n by 1 ) */
    }else{
        n = imgs.length -1;
    }
    changeSlide();
} )

next_btn.addEventListener('click' , (e)=>{
    if(n < imgs.length -1){
        n++;/* (if n value is lesser then it will increase the value of n by 1 ) */
    }else{
        n = 0;
    }
    changeSlide();
} )

 /* to make scrolling  in ().products-slider.products)with mouse wheel */
/*  NOTE >>    we can use this js when we want to use mouse wheel */
  /*  const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer) {
   item.addEventListener('wheel', (evt)=>{
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
   }) 
}  */