AccordionLite
=============

For AccordionLite Demo kindly visit the url mentioned below:- 

http://Jithesh-Menon.github.io/AccordionLite/index.html


There are couple of instructions that you must follow while developing accordion controls using AccordionLite. 

1) Set Arrow Images:- While developing accordion control, if we are using Easy Implementation method we can use setArrow       function to set accordion arrows. But we should call this function before the accordion control generating function         'AccordionLite.accordion'. 

   Since the accordion arrows are the part of accordion control we should set these values/path before the accordion control    generation. Once we set the image uri path, it will refer that path to access the accordion arrow images during the         generation of accordion control. 
 
   Script:-
    $(document).ready(function(){
       AccordionLite.setArrow({ 'upArrow': '../Images/arrowUp.png', 'downArrow': '../Images/arrowDown.png' });                     AccordionLite.accordion(accordion); 
    });

2) Set Height Value:- While developing accordion control, we can set the child element container height using setHeight        function. But we should call this function only after the the accordion control generating function                         'AccordionLite.accordion'.

  Script:-
  $(document).ready(function(){
      AccordionLite.accordion(accordion); 
      AccordionLite.setHeight({ 'height': '200px', 'overflow-y': 'scroll' }); 
  });
