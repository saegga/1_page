$(document).ready(function(){
    
    var clearMoney = function(countCup, costArenda){
        // x*2,5*30-x*1*30-Y-115-90-225-1100-(x*2,5*30)*0,1=z
        result = countCup * 2.5 * 30 - countCup * 1 * 30 - costArenda - 115 - 90 - 225 - 1100 - ( countCup * 2.5 * 30 ) * 0.1;
        return parseInt(result);
    }
    var payback = function(countCup, costArenda){
        return parseInt(22000 / clearMoney(countCup, costArenda));
    }
   $( "#count_cap" ).slider({
        animate: "slow",
        range: "min",    
        max: 300,
        min: 0,
        value: 75,
        slide: function(event, ui){
            if(ui.value == 0 || ui.value == 300){
                $('.tooltip_cup').text("");
            }else{
                $('.tooltip_cup').text(ui.value);
            }
            var costArenda = $( "#cost_arenda" ).data().uiSlider.options.value;
            var countCup = ui.value;
            var money = clearMoney(countCup, costArenda);
            var paybackValue = payback(countCup, costArenda);
            $(".result_block .clear_money").text(money + "$");
            $(".result_block .payback").text(paybackValue);
        },
        create: function(event, ui) {
            $('#count_cap .ui-slider-handle').append('<span class="tooltip_cup">75</span>');
            var money = clearMoney(75, 0);
            var paybackValue = payback(75, 0);
            $(".result_block .clear_money").text(money + "$");
            $(".result_block .payback").text(paybackValue);
        }
    });

    $( "#cost_arenda" ).slider({
        animate: "slow",
        range: "min",    
        max: 1000,
        min: 0,
        value: 0,
        slide: function(event, ui){
            if(ui.value == 0 || ui.value == 1000){
                $('.tooltip_cost').text("");
            }else{
                $('.tooltip_cost').text(ui.value);
            }
            var costArenda = ui.value;
            var countCup =  $( "#count_cap" ).data().uiSlider.options.value;
            var money = clearMoney(countCup, costArenda);
            var paybackValue = payback(countCup, costArenda);

            $(".result_block .clear_money").text(money + "$");
            $(".result_block .payback").text(paybackValue);
        },
        create: function(event, ui) {
            $('#cost_arenda .ui-slider-handle').append('<span class="tooltip_cost"></span>');
        }
    });
    $('#downloadmail').on('click', function(e){
        e.preventDefault();
    });
    $('.download_email').fancybox({
        buttons : [ ],
        smallBtn: false,
    });

});
