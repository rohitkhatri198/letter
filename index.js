
    var envelope = document.getElementById("letter");
    var btn_open = document.getElementById("openl");
    var btn_reset = document.getElementById("resetl");
    
    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
        console.log(1);
    });
    btn_reset.click(function() {
        close();
        console.log(2);

    });
    
    function open() {
        envelope.addClass('open')
            .removeClass('close');
    }
    function close() {
        envelope.addClass('close')
            .removeClass('open');
    }
