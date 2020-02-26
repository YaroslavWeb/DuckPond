$(document).ready (function (){
alert('Если содержимое сайта не входит на экран, то уменьшите масштаб в браузере')
alert('Нажмите на вид или картинку утки, чтобы увеличить её количество')
//Счётчики
$('.first').click(function() {
    $('.count1').html(function(i, val) { return val*1+1 }); //счётчик крякв
});

$('.second').click(function() {
    $('.count2').html(function(i, val) { return val*1+1 }); //счётчик Савк
});

$('.third').click(function() {
    $('.count3').html(function(i, val) { return val*1+1 });//счётчик нырков
});

$('.fourth').click(function() {
    $('.count4').html(function(i, val) { return val*1+1 });//счётчик резиновых уток
});
//Скрытие элементов
$('.hide-all').click(function(){
    $(".menu").slideUp(2000);
});



$('.hide-all').click(function () {
    var DUCK1_COUNT = $(".count1").html();
    var DUCK2_COUNT = $(".count2").html();
    var DUCK3_COUNT = $(".count3").html();
    var DUCK4_COUNT = $(".count4").html();
//Копаем пруд
    var $pond, pondWidth, pondHeight;
    $pond = $("<div class='pond'/>").appendTo('body');//Добавление пруда
    $("<div class='messenge'><h2>Сообщения<div class='info'>Выберите действие и нажмите на утку</div></h2></div> ").appendTo('body');//Добавление текстового блока
    $(" <div class='controll'><div class='cry'>Крякнуть</div><div class='cvi'>Квыкнуть</div><div class='fly'>Лететь</div><div class='nir'>Нырять</div></div> ").appendTo('body');
     pondWidth = $pond.width(); //измерение ширины пруда
     pondHeight = $pond.height();//измерение высоты пруда 

//Спаун уток
    for (var i = 0; i < DUCK1_COUNT; i++) {
        var DUCK = $("<img src='img/004-duck.png' class='utka1 plav'>").appendTo(".pond") //добавление уток в пруд
        .addClass('Krykvi'+i);//присвоение индивидуального класса утке 
        var transform = 'translate(' + getRandom(pondWidth)+ 'px, ' +  getRandom(pondHeight)  + 'px)' //спаун утки в рандомном месте

        DUCK.css('transform', transform); //присвоение рандомной позиции утке при появление пруда
  }

    for (var i = 0; i < DUCK2_COUNT; i++) {
         DUCK = $("<img src='img/001-duck-3.png' class='utka2 plav'>").appendTo(".pond")//добавление уток в пруд
        .addClass('Savki'+i);//присвоение индивидуального класса утке 
         transform = 'translate(' + getRandom(pondWidth) + 'px, ' + getRandom(pondHeight) + 'px)' //спаун утки в рандомном месте

        DUCK.css('transform', transform);//присвоение рандомной позиции утке при появление пруда
  }
    for (var i = 0; i < DUCK3_COUNT; i++) {
         DUCK = $("<img src='img/003-duck-1.png' class='utka3 plav'>").appendTo(".pond")//добавление уток в пруд
        .addClass('Nirki'+i);//присвоение индивидуального класса утке 
        var transform = 'translate(' + getRandom(pondWidth) + 'px, ' + getRandom(pondHeight) + 'px)'//спаун утки в рандомном месте

        DUCK.css('transform', transform);//присвоение рандомной позиции утке при появление пруда
  }
      for (var i = 0; i < DUCK4_COUNT; i++) {
        DUCK = $("<img src='img/002-duck-2.png' class='utka4 plav'>").appendTo(".pond")//добавление уток в пруд
        .addClass('Rezin'+i);//присвоение индивидуального класса утке 
        var transform = 'translate(' + getRandom(pondWidth) + 'px, ' + getRandom(pondHeight) + 'px)'//спаун утки в рандомном месте

        DUCK.css('transform', transform);//присвоение рандомной позиции утке при появление пруда
  }
//Перемещение уток
  setInterval (function(){
    for (var i = 0; i < DUCK1_COUNT; i++){
    $('.Krykvi'+i).css({ 
  'transform' : 'translate('+ getRandom(pondWidth) +'px, '+ getRandom(pondHeight) +'px)' //присваиваются новые координаты для перемещения
});
}
  }, 5000); 
    setInterval (function(){
    for (var i = 0; i < DUCK2_COUNT; i++){
    $('.Savki'+i).css({
  'transform' : 'translate('+ getRandom(pondWidth) +'px, '+ getRandom(pondHeight) +'px)'//присваиваются новые координаты для перемещения
});
}
  }, 6000); 
      setInterval (function(){
    for (var i = 0; i < DUCK3_COUNT; i++){
    $('.Nirki'+i).css({
  'transform' : 'translate('+ getRandom(pondWidth) +'px, '+ getRandom(pondHeight) +'px)'//присваиваются новые координаты для перемещения
});
}
  }, 5500); 
        setInterval (function(){
    for (var i = 0; i < DUCK4_COUNT; i++){
    $('.Rezin'+i).css({
  'transform' : 'translate('+ getRandom(pondWidth) +'px, '+ getRandom(pondHeight) +'px)'//присваиваются новые координаты для перемещения
});
}
  }, 5600); 


//МЕНЮ УПРАВЛЕНИЯ 
//подключение класса activated для нажатой кнопки
$('.cry').click(function(){  
        $('.cvi').removeClass('activated') 
        $('.fly').removeClass('activated')
        $('.nir').removeClass('activated')
        $('.cry').addClass('activated')
        });
$('.cvi').click(function(){
        $('.cry').removeClass('activated')
        $('.fly').removeClass('activated')
        $('.nir').removeClass('activated')
        $('.cvi').addClass('activated')
        });
$('.fly').click(function(){
        $('.cvi').removeClass('activated')
        $('.cry').removeClass('activated')
        $('.nir').removeClass('activated')
        $('.fly').addClass('activated')
        });
$('.nir').click(function(){
        $('.cvi').removeClass('activated')
        $('.fly').removeClass('activated')
        $('.cry').removeClass('activated')
        $('.nir').addClass('activated')
        });

//Кряканье
        $('.utka1').click(function(){
        if ($(".cry").hasClass("activated")) { //проверка существование класса activated у нажатой кнопки
        $(".messenge").append("<div>-Кряква крякнула</div>");//добавление сообщения в текстовое меню
}   
});
        $('.utka2').click(function(){
        if ($(".cry").hasClass("activated")) {
        $(".messenge").append("<div>-Савке не дано крякать</div>");
}  
});
        $('.utka3').click(function(){
        if ($(".cry").hasClass("activated")) {
        $(".messenge").append("<div>-Нырка крякнула</div>");
}  
});
        $('.utka4').click(function(){
        if ($(".cry").hasClass("activated")) {
        $(".messenge").append("<div>-Резиновая уточка крякнула</div>");
}  
});

//Квыканье
        $('.utka1').click(function(){
        if ($(".cvi").hasClass("activated")) {
        $(".messenge").append("<div>-Кряква не смогла квыкнуть</div>");
}   
});
        $('.utka2').click(function(){
        if ($(".cvi").hasClass("activated")) {
        $(".messenge").append("<div>-Савка квыкнула</div>");
}   
});
        $('.utka3').click(function(){
        if ($(".cvi").hasClass("activated")) {
        $(".messenge").append("<div>-Нырка не умеет квыкать</div>");
}   
});
        $('.utka4').click(function(){
        if ($(".cvi").hasClass("activated")) {
        $(".messenge").append("<div>-Резиновая уточка не умеет квыкать</div>");
}   
});

//Полёт
        $('.utka1').click(function(){
        if ($(".fly").hasClass("activated")) {
        $(".messenge").append("<div>-Кряква полетела</div>");
}   
});
        $('.utka2').click(function(){
        if ($(".fly").hasClass("activated")) {
        $(".messenge").append("<div>-Савка полетела</div>");
}   
});
        $('.utka3').click(function(){
        if ($(".fly").hasClass("activated")) {
        $(".messenge").append("<div>-Нырка полетела</div>");
}   
});
        $('.utka4').click(function(){
        if ($(".fly").hasClass("activated")) {
        $(".messenge").append("<div>-Резиновая уточка поняла, что у неё нету крыльев</div>");
}   
});
//Ныряние
        $('.utka1').click(function(){
        if ($(".nir").hasClass("activated")) {
        $(".messenge").append("<div>-Кряква не может нырять</div>");
}   
});
        $('.utka2').click(function(){
        if ($(".nir").hasClass("activated")) {
        $(".messenge").append("<div>-Савка не может нырять</div>");
}   
});
        $('.utka3').click(function(){
        if ($(".nir").hasClass("activated")) {
        $(".messenge").append("<div>-Нырка нырнула</div>");
}   
});
        $('.utka4').click(function(){
        if ($(".nir").hasClass("activated")) {
        $(".messenge").append("<div>-Резиновая уточка не может нырять</div>");
}   
});
});

//Функция для рандомного числа
function getRandom(upper) {
  return Math.random() * upper;
}
});