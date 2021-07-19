$('#menu').on({change:mostrarMenu})
function mostrarMenu(){
    if($('#menu')[0].checked){
        $('#menuTopo label').html('<svg viewBox="0 0 24 24" width="2.5rem" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>').css({background:'rgba(0,0,0,0.4)',color:'#fff'})
        $('#menuLateral').css({animationName:'mostrar'})        
    }else{
        $('#menuTopo label').html('<svg viewBox="0 0 76 76" style="enable-background:new 0 0 76 76;" width="2.5rem" fill="currentColor"><g><path id="List" d="M38,0C17,0,0,17,0,38s17,38,38,38s38-17,38-38S59,0,38,0z M38,72C19.2,72,4,56.8,4,38S19.2,4,38,4s34,15.2,34,34 S56.8,72,38,72z M57.5,38c0,1.1-0.9,2-2,2H33.1c-1.1,0-2-0.9-2-2s0.9-2,2-2h22.4C56.6,36,57.5,36.9,57.5,38z M57.5,50 c0,1.1-0.9,2-2,2H33.1c-1.1,0-2-0.9-2-2s0.9-2,2-2h22.4C56.6,48,57.5,48.9,57.5,50z M26.3,38c0,1.1-0.9,2-2,2h-3.8 c-1.1,0-2-0.9-2-2s0.9-2,2-2h3.8C25.4,36,26.3,36.9,26.3,38z M26.3,50c0,1.1-0.9,2-2,2h-3.8c-1.1,0-2-0.9-2-2s0.9-2,2-2h3.8 C25.4,48,26.3,48.9,26.3,50z M57.5,26c0,1.1-0.9,2-2,2H33.1c-1.1,0-2-0.9-2-2s0.9-2,2-2h22.4C56.6,24,57.5,24.9,57.5,26z M26.3,26 c0,1.1-0.9,2-2,2h-3.8c-1.1,0-2-0.9-2-2s0.9-2,2-2h3.8C25.4,24,26.3,24.9,26.3,26z"/></g></svg>').css({background:'transparent',color:'#000'})        
        $('#menuLateral').css({animationName:'enconder'})        
    }
}
