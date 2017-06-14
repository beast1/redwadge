//Модуль динамической цены(Не закончен: нет доступа к баре данных(https://www.insales.ru/collection/doc-promotion/product/mozhno-li-poluchit-dostup-k-ftp-ili-baze-dannyh))

var price = 0;
var count1 =0;
  var per = $('.catalog__list .counter__output');
    var per2 = $('.catalog__list .card__mob-price');
    var c=0,count=0;
  
    per.each(function(){
      
         c = $(this).val();
         count = parseInt(count) +  parseInt(c);
    });
  
    if (count > 9 ) {
      	
    	per2.each(function(){
      
         price = $(this).text(); 
         price = parseInt(price)*0.75;
         price = Math.round(price);
         price = price + ' РУБ';
         $(this).text(price);       
      });
      
    }

var basket = $('.basket__items .counter__output');
var count_b = basket.val();
if (count_b > 9) {
  var per1 = $('.js-item-price');
  var per2 = $('.basket__items .basket__item-data--common-price');
  var per3 = $('#all_price');
  var per4 = $('.page-header__basket-text--red');
  var per5 = $('.js-item-total-price');
  pr1 = per1.text(); 
  pr1 = parseInt(pr1)*0.75; 
         pr1 = Math.round(pr1);
         pr2 = pr1*count_b; 
         pr1 = pr1 + ' РУБ';
  		 pr2 = pr2 + ' РУБ';
         
  		 per2.text(pr2);
         
  
         function func() {
            per4.text(pr2);
           per3.text(pr2);
           per5.text(pr2);
           per1.text(pr1);
           $('#total_price').text('2');
          }

		 setTimeout(func, 1000);
  
  
}
$('.counter__count-down').click(function(){
  
  
    var per = $('.catalog__list .counter__output');
    var per2 = $('.catalog__list .card__mob-price');
    var c=0,count=0;
  
    per.each(function(){
      
         c = $(this).val();
         count = parseInt(count) +  parseInt(c);
    });
  
    count1 = count;
  	count = count-1;
    if (count > 9 && count1 <10) {
      	
    	per2.each(function(){
      
         price = $(this).text();
         price = parseInt(price)*0.75;
         $(this).text(price);       
      });
      
    }
  	
  if (count <10 && count1==10) {
      
      per2.each(function(){
      
         price = $(this).text();
         price = parseInt(price)*1.3333;
         price = Math.round(price);
         price = price + ' РУБ';
         $(this).text(price);       
      });
      
    }
   
   
});


$('.counter__count-up').click(function(){
  
  
    var per = $('.catalog__list .counter__output');
    var per2 = $('.catalog__list .card__mob-price');
    var c=0,count=0;
  
    per.each(function(){
      
         c = $(this).val();
         count = parseInt(count) +  parseInt(c);
    });
    count1 = count;
  	count = count+1;
    if (count > 9 && count1 <10) {
      	
    	per2.each(function(){
      
         price = $(this).text(); 
         price = parseInt(price)*0.75;
         price = Math.round(price);
         price = price + ' РУБ'; 
         $(this).text(price);       
      });
      
    } 
    
});