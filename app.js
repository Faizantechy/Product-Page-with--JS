const image1=document.querySelector('.image1')
const image2=document.querySelector('.image2')
const image3=document.querySelector('.image3')
const img=document.querySelector('img')
const selectors=document.querySelector('.selectors')
const price=document.querySelector('.price')
const quantity=document.querySelector('.quantity')



selectors.addEventListener('click',(event)=>{
    image1.style.backgroundColor = ''; // Reset image1 background
    image2.style.backgroundColor = ''; // Reset image2 background
    image3.style.backgroundColor = ''; // Reset image3 background

    document.querySelector('.img1').style.display = 'none';
    document.querySelector('.img2').style.display = 'none';
    document.querySelector('.img3').style.display = 'none';
    

    if(event.target.classList.contains('image2')){

        document.querySelector('.img2').style.display='block'
        image2.style.backgroundColor='blue'
        document.querySelector('.img1').style.display='none'


    } else if(event.target.classList.contains('image3')){

        document.querySelector('.img3').style.display='block'
        image3.style.backgroundColor='blue'
        document.querySelector('.img2').style.display='none'
        

    }

        else if(event.target.classList.contains('image1')){


            document.querySelector('.img1').style.display='block'

            document.querySelector('.img3').style.display='none'

            image3.style.backgroundColor='blue'
            document.querySelector('.img2').style.display='none'
    } else{
        document.querySelector('.img1').style.display='none'
        image3.style.backgroundColor=''
        document.querySelector('.img2').style.display=''

    }


    

})

const proPrice= 15;

quantity.addEventListener('input',(event)=>{

   if (event.target.value <15){

   const newPrice= proPrice* event.target.value;

   setTimeout(() => {
    price.textContent=` $${newPrice}:00`;

   }, 2000);


   }
    
})

