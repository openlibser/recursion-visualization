import Mustache from 'mustache';
import randomColor from 'randomcolor';

$(function(){


let template = $('#block-template').html();
Mustache.parse(template);

let initN = 10;


const recursionDown = (n) => {
  let templateData = {
    n,
    condition:  (n === 0).toString(),
    blockId:    'blockId' + n,
    callId:     'callId' + n,
    return1Id:  'return1Id' + n,
    return2Id:  'return2Id' + n,
    prevId:     'prevId' + (n+1)
  };

  let rendered = Mustache.render(template, templateData);
  let block = $(rendered);
  let callBlock = block.find('#callId'+n);
  callBlock.css({
    backgroundColor: randomColor()
  }).on('click', function() {
    let n = +$(this).data('n');
    recursionDown(n-1);
    $(this).off('click');
  });

  if (n === 0) {
    callBlock
      .off('click')
      .removeClass('func-call')
      .css({
        backgroundColor: block.css('background-color')
      });

    block.data('returnVal', '1');

    block
      .find('#return1Id'+n)
      .addClass('return-active')
      .on('click', function(){
        recursionUp(this);
      })
  }

  $(document.body).append(block);

  if (n < initN) {
    let prevCall = $('#callId' + (n+1));
    let pos = prevCall.offset();
    let w =   prevCall.outerWidth();
    let h =   prevCall.outerHeight();
    block.css({
      position: 'absolute',
      top:      Math.floor(pos.top) + 'px',
      left:     Math.floor(pos.left) + 'px',
      width:    Math.floor(w) + 'px',
      height:   Math.floor(h) + 'px',
      overflow: 'hidden',
      backgroundColor: prevCall.css('background-color')
    });
  

    (function(){
      let parent = $('#callId'+(n+1)).parents('.recursion-step');
      let pos = parent.offset();
      let w =   parent.outerWidth();
      let h =   parent.outerHeight();
      block.css({
        top:    Math.floor(pos.top + h) + 'px',
        left:   Math.floor(pos.left) + 'px',
        width:  Math.floor(w) - 40 + 'px',
        height: Math.floor(h) + 'px'
      });
    })();

  }
}

const recursionUp = (returnEl) => {
  let n = +$(returnEl).parents('.recursion-step').data('n');
  let curBlock = $(returnEl).parents('.recursion-step');

  if (n === initN) {
    let result = curBlock.data('returnVal') * n;
    curBlock.html(`factorial(${n}) = ${result}`);
    return;
  }
  
  let prevBlock = $('#blockId' + (n+1));
  let prevCall = prevBlock.find('#callId' + (n+1));

  let pos = prevCall.offset();
  let w =   prevCall.outerWidth();
  let h =   prevCall.outerHeight();

  let returnVal = curBlock.data('returnVal');
  
  if (n === 0) {
    prevBlock.data('returnVal', returnVal);
  } else {
    prevBlock.data('returnVal', returnVal * curBlock.data('n'));
  }
  

  curBlock.css({
    top:    Math.floor(pos.top) + 'px',
    left:   Math.floor(pos.left) + 'px',
    width:  Math.floor(w) + 'px',
    height: Math.floor(h) + 'px' 
  });

  curBlock.one("webkitTransitionEnd \
                otransitionend \
                oTransitionEnd \
                msTransitionEnd \
                transitionend", function(e) {
    
    curBlock.remove();
    prevCall.remove();

    let prevBlockReturn = prevBlock.find('#return2Id' + prevBlock.data('n'));
    prevBlockReturn.addClass('return-active');
    prevBlockReturn.html( prevBlockReturn.text().replace(';','') + prevBlock.data('returnVal') + ';');
    
    prevBlockReturn.one('click', () => {
      recursionUp(prevBlockReturn);
    })
  });
}


$('#init').submit(function(){
  $('#start-block').hide();
  $('#init').hide();

  initN = +$('#init').find('#input-value').val();
  recursionDown(initN);

  return false;
})


})