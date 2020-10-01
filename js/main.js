 $(document).ready(function(){
     var imgItems = $('.slider li').length
     var imgpos =1;
      for(i = 1 ; i <= imgItems ; i++){
        $('.pagenumber').append('<li><span class="fa fa-circle"></span></li>');
      }

 $('.slider li').hide();
 $('.slider li:first').show();
 $('.pagenumber li:first').css({'color':'#CD6E2E'});

 $('.pagenumber li').click(pagenumber);
 $('.right span').click(nextslider);
 $('.left span').click(prevslider);

 setInterval(function(){
     nextslider();

 },4000);

 function pagenumber(){
     var pagenumberpos= $(this).index() +1 ; 
    

     $('.slider li').hide();
     $('.slider li:nth-child('+ pagenumberpos +')').fadeIn();

     $('.pagenumber li').css({'color':'#858585'});
     $(this).css({'color':'#CD6E2E'});

     imgpos = pagenumberpos;
 }

     function nextslider(){
         if( imgpos >= imgItems){imgpos = 1;}
         else{imgpos++;}
             

     $('.pagenumber li').css({'color':'#858585'});
     $('.pagenumber li:nth-child('+ imgpos +')').css({'color':'#CD6E2E'});

     $('.slider li').hide();
     $('.slider li:nth-child('+ imgpos  +')').fadeIn();


 }
 function prevslider(){
    if( imgpos <= 1){imgpos = imgItems}
    else{imgpos--;}
        
$('.pagenumber li').css({'color':'#858585'});
$('.pagenumber li:nth-child('+ imgpos +')').css({'color':'#CD6E2E'});

$('.slider li').hide();
$('.slider li:nth-child('+ imgpos  +')').fadeIn();
 }

 $('.menu ul li ').hover(function(){
     $(this).find('ul').slideDown('slow');
       },function(){
    $(this).find('ul').slideUp('slow');

    
 });

 });
 var products =[
    {
        title:"آبرسان ٌصورت سوپکس",
        price:"30,000تومان",
        img:src="../img/sopex.jpg",
       
    },
    {
        img:src="../img/prefum1.jpeg",
        title:"عطر زنانه میس دیور",
        price:"1,500,000تومان",
    },
    {
       
      
        img:src="../img/kalista.jpg",
        price:"65,000تومان",
        title:"کرم پودر کالیستا",
      
    },
    {
        img:src="../img/mq.jpg",
        title:"ابرسان صورت ام کیو",
        price:"100,000تومان",
    },
    {
        img:src="../img/lak my.jpg",
        title:"لاک مای",
        price:"13,000تومان",
    },
    {
        img:src="../img/baio derama.jpg",
        title:"ضد آفتاب بایو درما spf50",
        price:"198,000تومان",
    },
    {
        img:src="../img/rimel.jpg",
        title:"ریمل اسنس",
        price:"85,000تومان",
    },
    {
        img:src="../img/amous one.jpg",
        title:"شوینده صورت آموس وان",
        price:"38,000تومان",
    },
    {
        img:src="../img/elaro.jpeg",
        title:"ضد آفتاب الارو",
        price:"130,000تومان",
    },
    {
        img:src="../img/lak my 1.jpg",
        title:"لاک مای",
        price:"13,000تومان",
    },
    {
        img:src="../img/lak my 4.jpg",
        title:"لاک مای",
        price:"13,000تومان",
    },
    {
        img:src="../img/lafarer.jpg",
        title:"شوینده صورت لافارر",
        price:"70,000تومان",
    },
    {
        img:src="../img/sun my.jpg",
        title:"ضد افتاب مای",
        price:"45,000تومان",
    },
    {
        img:src="../img/max.jpg",
        title:"کرم پودر مکس",
        price:"120,000تومان",
    },
    {
        img:src="../img/lak my 3.jpg",
        title:"لاک مای",
        price:"13,000تومان",
    },
    {
        img:src="../img/loral.jpg",
        title:"شوینده صورت لورال",
        price:"40,000تومان",
    },
    {
        img:src="../img/seshoar.jpg",
        title:"سشوار پرو مکس",
        price:"650,000تومان",
    },
    {
        img:src="../img/rozh my.jpg",
        title:"رژ مای",
        price:"45,000تومان",
    },
    {
        img:src="../img/rozh my 1.jpg",
        title:"رژ مای",
        price:"45,000تومان",
    },  
       {
        img:src="../img/oto fer mo.jpg",
        title:" اتو فر مو مکس",
        price:"800,000تومان",
    },
      {
        img:src="../img/oto mo.jpg",
        title:"اتو مو مکس",
        price:"750,000تومان",
    },
      {
        img:src="../img/farben.jpg",
        title:"ابرسان صورت فاربن",
        price:"130,000تومان",
    },
      {
        img:src="../img/rozh my 3.jpg",
        title:"رژ مای ",
        price:"45,000تومان",
    },
      {
        img:src="../img/rimel my.jpg",
        title:"ریمل مای",
        price:"65,000تومان",
    },
      {
        img:src="../img/palet2.jpg",
        title:"پالت سایه",
        price:"50,000تومان",
    },
      {
        img:src="../img/common.jpg",
        title:"شوینده صورت کامان",
        price:"45,000تومان",
    },
      {
        img:src="../img/seshoar 1.jpg",
        title:"سشوار پرومکس",
        price:"800,000تومان",
    },
      {
        img:src="../img/golden roz.jpg",
        title:"کرم پودر گلدن رز",
        price:"80,000تومان",
    },
       {
        img:src="../img/prefum5.jpg",
        title:"عطر مردانه گوچی",
        price:"1000,000تومان",
    },
      {
        img:src="../img/pregume3.jpg",
        title:"عطر زنانه چنل",
        price:"1300,000تومان",
    },
     {
        img:src="../img/milbin.jpg",
        title:"کانسیلر میلبین",
        price:"160,000تومان",
    },

      {
        img:src="../img/tart.jpg",
        title:"کانسیلر تارت",
        price:"450,000تومان",
    },
      {
        img:src="../img/palet.jpg",
        title:"پالت سایه",
        price:"120,000تومان",
    },   {
        img:src="../img/seshoar3.jpg",
        title:"سشوار پرومکس",
        price:"500,000تومان",
    },  {
        img:src="../img/rimel2.jpeg",
        title:"ریمل بلند کننده",
        price:"80,000تومان",
    },
    
    


];
var lists=document.querySelector('.products');
for( var i = 0; i <= products.length; i++){
     
    var div=document.createElement('div');
    var img=document.createElement('img');
    var pTag=document.createElement('p');
    var h3Tag=document.createElement('h3');
    img.className="imgTag";


    
    img.setAttribute('src',products[i].img);
    pTag.innerHTML=products[i].price;
    h3Tag.innerHTML=products[i].title;

    div.appendChild(img);
    div.appendChild(h3Tag);
    div.appendChild(pTag);
    lists.appendChild(div);


};




 