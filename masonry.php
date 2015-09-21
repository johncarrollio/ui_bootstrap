<!doctype html>
<html class="no-js" lang="en">
  <head>
    <?php include('meta.php'); ?>


  </head>
  <body>



 <div class="btn-toolbar filters">
                <div class="btn-group" data-toggle="buttons">
                    <label data-filter="" class="btn btn-primary active">
                        <input type="radio" name="options" id="option1"> All
                    </label>
                    <label data-filter="one" class="btn btn-primary">
                        <input type="radio" name="options" id="option1"> One
                    </label>
                    <label data-filter="two" class="btn btn-primary">
                        <input type="radio" name="options" id="option2"> Two
                    </label>
                    <label data-filter="three" class="btn btn-primary">
                        <input type="radio" name="options" id="option3"> Three
                    </label>
                </div>
  </div>



   <!-- <div class="btn-toolbar filters">
        <div data-toggle="buttons" class="btn-group">
           <label class="btn btn-default">
            <input type="checkbox" value="Jesus" >
            Jesus
          </label>
          <label class="btn btn-default">
            <input type="checkbox" value="Matematica" >
            Math
          </label>
          <label class="btn btn-default">
            <input type="checkbox" value="Scienza" >
            Science
          </label>
          <label class="btn btn-default">
            <input type="checkbox" value="Letteratura" >
            Literature
          </label>
        </div>
        <div data-toggle="buttons" class="btn-group">
          <label class="btn btn-default">
            <input type="checkbox" value="mine" >
            Mine
          </label>
        </div>
      </div>-->
    <!-- /filters -->
    <?php
      $items = array(
        'products' => array(
          1 => array(
            'cats' => 'Letteratura Jesus',
            'img' => 'http://www.barbourproductsearch.info/net/product/00/73/99/th7399.png',
            'title' => 'Calcolo del Pi Greco',
            'desc' => 'Get things done faster. server in less than 55 .',
            'filter' => 'one'
          ),
          2 => array(
            'cats' => 'Letteratura Matematica',
            'img' => 'http://www.barbourproductsearch.info/net/product/00/90/92/th9092.png',
            'title' => 'Quadratura cerchio',
            'desc' => 'Get things done faster. Deploy an SSD cloud server in less than 55 seconds witated IP and root access.',
            'filter' => 'two'
          ),
          3 => array(
            'cats' => 'Matematica Scienza',
            'img' => 'http://www.barbourproductsearch.info/net/product/00/36/00/th3600.png',
            'title' => 'Creare una meridiana',
            'desc' => 'Get things d server in less thanwith a dedicated IP and root access. ds sd',
            'filter' => 'three'
          ),
          4 => array(
            'cats' => 'Matematica Letteratura',
            'img' => 'http://www.barbourproductsearch.info/net/product/00/78/58/th7858.png',
            'title' => 'Creare una meridiana',
            'desc' => 'Get things done faster. Deploy an SSD cloud server in less than 55 seconds with a dedicated IP and root access.',
            'filter' => 'one'
          ),
          5 => array(
            'cats' => 'Matematica Letteratura',
            'img' => 'http://www.barbourproductsearch.info/net/product/00/78/58/th7858.png',
            'title' => 'Creare una meridiana',
            'desc' => 'Get condsand root access.',
            'filter' => 'two'
          ),
          6 => array(
            'cats' => 'Matematica Letteratura',
            'img' => 'http://www.barbourproductsearch.info/net/product/00/78/58/th7858.png',
            'title' => 'Creare una meridiana',
            'desc' => 'Get things done faster. Deploy an SSD cloud server in less than 55 seconds with a dedicated IP and root access.',
            'filter' => 'three'
          ),
          7 => array(
            'cats' => 'Matematica Letteratura',
            'img' => 'http://www.barbourproductsearch.info/net/product/00/78/58/th7858.png',
            'title' => 'Creare una meridiana',
            'desc' => 'Get things done faster. Deploy an SSD h a dedicated IP and root access.',
            'filter' => 'one'
          ),
          8 => array(
            'cats' => 'Matematica Letteratura',
            'img' => 'http://www.barbourproductsearch.info/net/product/00/78/58/th7858.png',
            'title' => 'Creare una meridiana',
            'desc' => 'Get things done faster. Deploy an SSD cloud server in less than 5ccess.',
            'filter' => 'two'
          ),
          9 => array(
            'cats' => 'Matematica Letteratura',
            'img' => 'http://www.barbourproductsearch.info/net/product/00/78/58/th7858.png',
            'title' => 'Creare una meridiana',
            'desc' => 'Get things done faster. Deploy an SSD cloud server in less than 55 seconds with a dedicated IP and root access.',
            'filter' => 'three'
          ),
          )
        );
    ?>
    <div class="row">

      <div class="masonry-container" >





          <?php 

          for ($i = 0; $i <= 3; $i++) { 
            foreach($items['products'] as $item) : 

              $item_cats = $item['cats'];
              $item_img  = $item['img'];
              $item_title = $item['title'];
              $item_desc  = $item['desc'];
              $item_filter = $item['filter'];
            ?>
              <div data-filter="<?php echo $item_filter ?>" class="<?php echo $item_cats; ?> challenge small-24 medium-8 large-4 columns content">
                <div class="panel panel-default">
                  <div class="panel-body">
                    <img src="<?php echo $item_img; ?>" class="img-rounded img-responsive" width="100%">
                    <h3><?php echo $item_title; ?></h3>
                    <p><?php echo $item_desc; ?> </p>
                    <hr>
                  
                  </div>
                </div>
              </div>
            <?php 

            endforeach; 
          }
          ?>

      </div>

    </div>
    <h1>Hello</h1>


    <!-- masonary -->

      <script src="http://dynamick.github.io/multiple-filter-masonry/javascripts/jquery-1.10.2.min.js"></script>




<style>

.hidden{
    visibility: hidden;
}
.confirm-box {
  position:absolute;
  top:-2000px;
  left:-2000px;
  bottom:-2000px;
  right:-2000px;
  background-color: rgba(0,0,0,0.5);
  z-index:100;
}

</style>
    <script>
        $(function() {

            // initialize checkbox filter Masonry
            var $container = $('.masonry-container');

            $container.multipleFilterMasonry({
              itemSelector: '.challenge',
              filtersGroupSelector:'.filters',                  
              selectorType: 'list'
            });

             // initialize tab filter Masonry
            var self = $(".masonry-container");
              self.imagesLoaded(function () {
                self.masonry({
                    gutterWidth: 15,
                    isAnimated: true,
                    itemSelector: ".challenge"
                });
            });

            $(".filters .btn").click(function(e) {
                e.preventDefault();

                var filter = $(this).attr("data-filter");

                self.masonryFilter({
                    filter: function () {
                        if (!filter) return true;
                        return $(this).attr("data-filter") == filter;
                    }
                });
            });

        });



        function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height() - 50;

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


$(document).ready(function(){
     $('.content').each(function(){
        if(!isScrolledIntoView($(this))){
            $(this).addClass('hidden').removeClass('animated bounceIn');;
        }
    });

$(document).on('scroll', function(){
    $('.hidden').each(function(){
        if(isScrolledIntoView($(this))){
            $(this).removeClass('hidden').css({ 'display' : 'none' }).fadeIn();
        }
    });
});
});


    </script>

    <!-- Checkbox filter masonry -->
    <script src="js/libraries/multiple-filter-masonry/multipleFilterMasonry.js"></script>
    <script src="js/libraries/multiple-filter-masonry/masonry.pkgd.js"></script>


    <!-- Tabbed filter masonry -->
    <script src="https://cdn.rawgit.com/mikethedarv/Simple-Masonry-Filter/master/javascripts/imagesloaded.js"></script>
    <script src="https://cdn.rawgit.com/mikethedarv/Simple-Masonry-Filter/master/javascripts/masonry-3.1.4.js"></script>
    <script src="https://cdn.rawgit.com/mikethedarv/Simple-Masonry-Filter/master/javascripts/masonry.filter.js"></script>

    <link rel="stylesheet" href="https://daneden.github.io/animate.css/animate.min.css" />
    <link rel="stylesheet" href="icon_moon/style.css" />
    <link rel="stylesheet" href="css/app.css" />
    <!--[if lt IE 9]>
    <link rel="stylesheet" href="ie8_fix/ie8.css">
    <script src="ie8_fix/ie8-head.js"></script>
    <![endif]-->
    <!--[if lte IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/4.0.1/placeholders.min.js"></script>
    <![endif]-->
    <!--[if lt IE 9]>
          <script src="ie8_fix/ie8.js"></script>
    <![endif]-->
    <script src="plugins/royalslider/jquery.royalslider.min.js"></script>
    <script data-main="jsmin/main.min" src="jsmin/require.min.js"></script>
    <!-- / footer scripts -->

<style>
html,body{
  height:100%;
  margin:0;
  padding:0;  
}
.overlay {
  opacity:0;
  position:fixed;
  top:-999em;
  left:-999em;
  width:100%;
  height:100%;
  display:table;
  background:rgba(0,0,0,0);
  -webkit-animation: splash 10s forwards;
  -moz-animation: splash 10s forwards; 
  -ms-animation: splash 10s forwards; 
  animation: splash 10s forwards;
}
.overlay-inner {
  display:table-cell;
  vertical-align:middle;
  text-align:center;
}
@-webkit-keyframes splash {
  0%  {opacity: 0;top:0;left:0;-webkit-transform:rotate(0) scale(0.2)}
  20% {opacity:1;-webkit-transform:rotate(720deg) scale(1.0)}
  60% {opacity:1;}
  99% {top:0;left:0;}
  100%{opacity:0;top:-999em;left:-999em;-webkit-transform:rotate(720deg) scale(1.0)}
}
@-moz-keyframes splash {
   0% {opacity: 0;top:0;left:0;-moz-transform:rotate(0) scale(0.2)}
  20% {opacity:1;-moz-transform:rotate(720deg) scale(1.0)}
  60% {opacity:1;}
  99% {top:0;left:0}
  100%{opacity:0;top:-999em;left:-999em;-moz-transform:rotate(720deg) scale(1.0)}
}
@-ms-keyframes splash {
   0% {opacity: 0;top:0;left:0;-ms-transform:rotate(0) scale(0.2)}
  20% {opacity:1;-ms-transform:rotate(720deg) scale(1.0)}
  60% {opacity:1;}
  99% {top:0;left:0}
  100%{opacity:0;top:-999em;left:-999em;-ms-transform:rotate(720deg) scale(1.0)}
}  
@keyframes splash {
  0%  {opacity: 0;top:0;left:0;transform:rotate(0) scale(0.2)}
  20% {opacity:1;transform:rotate(720deg) scale(1.0)}
  60% {opacity:1;}
  99% {top:0;left:0}
  100%{opacity:0;top:-999em;left:-999em;transform:rotate(720deg) scale(1.0)}
}
.overlay-wrap {
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:99;
}
.overlay-wrap .hide {
  position:absolute;
  top:-999em;
  right:10px;
  opacity:0;
  color:#fff;
  border:5px solid #fff;
  padding:10px;
  font-size:200%;
  z-index:2;
  cursor:pointer;
  -webkit-animation:10s fadein 2s forwards;
  -moz-animation:10s fadein 2s forwards;
  -ms-animation:10s fadein 2s forwards;
  animation:10s fadein 2s forwards; 
}
#hide {
  position:absolute;
  left:-999em;
  top:-999em;
}
.overlay2{
  position:absolute;
  opacity:1;
  -webkit-transition:all 2s;
  -moz-transition:all 2s;
  -ms-transition:all 2s;
  transition:all 2s ;
}
#hide:checked ~ div,#hide:checked ~ div *, #hide:checked + label {
 opacity:0;
 left:-999em;
 right:auto;
 top:-999em;
 pointer-events:none;
}
@-webkit-keyframes fadein {
 0% {opacity: 0;top:10px;}
 20% {opacity:1;top:10px;}
  80%{opacity:1;top:10px}
  100%{opacity:0;top:-999em}
}
@-moz-keyframes fadein {
 0% {opacity: 0;top:10px;}
 20% {opacity:1;top:10px;}
  80%{opacity:1;top:10px}
 100%{opacity:0;top:-999em
}
@-ms-keyframes fadein {
 0% {opacity: 0;top:10px;}
 20% {opacity:1;top:10px;}
 80%{opacity:1;top:10px}
 100%{opacity:0;top:-999em
}
@keyframes fadein {
 0% {opacity: 0;top:10px;}
 20% {opacity:1;top:10px;}
 80%{opacity:1;top:10px}
 100%{opacity:0;top:-999em}
}



</style>

<div class="overlay-wrap">
    <div class="overlay2">
        <div class="overlay">
            <div class="overlay-inner">
                <div class="message">
                     <svg height="100" width="100">
                          <circle cx="50" cy="50" r="40" stroke="black" stroke-width="0" fill="red" />
                      </svg>
                </div>
            </div>
        </div>
    </div>
</div>


   

  </body>
</html>
