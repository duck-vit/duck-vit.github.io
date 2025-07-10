var header = document.querySelector('header');
var nav_underline = document.getElementById('header_nav_underline');
var udl_hover = document.querySelector('.underline_hover');
var nav_1 = document.getElementById('nav_1');
window.addEventListener('scroll', function() {

    if (window.scrollY > 0) { // Cuộn xuống
        header.style.color = '#333';
        header.style.border = '1px solid #e5e5e5';
        header.style.backgroundColor = '#fff';
        header.style.transition = '0.1s';
        header.style.setProperty('--header_height', '80px');
        nav_underline.style.borderBottom = '1.8px solid #333';
        udl_hover.style.borderBottom = '0.8px solid #333';
        nav_1.style.marginTop = '80px';

        function handleScreenResize(e) {
            if (e.matches) {
                // Code to adjust the layout when the screen width is 1024px or less
                header.style.setProperty('--header_height', '100px');
                header.style.border = 'none';
                header.style.position = 'absolute';
                nav_underline.style.borderBottom = '1.8px solid transparent';
                udl_hover.style.borderBottom = '0.8px solid transparent';
            } else {
                // Code to adjust the layout when the screen width is more than 1024px
            }
        }
        
        // Create a MediaQueryList object
        const mediaQuery = window.matchMedia('(max-width: 1024px)');
        
        // Register event listener
        mediaQuery.addEventListener('change', handleScreenResize);
        
        // Initial check
        handleScreenResize(mediaQuery);
    } else { // Đầu trang
        // header.style.backgroundColor = 'transparent'; // Màu header khi cuộn lên đầu trang
        // header.style.color = '#fff';
        // header.style.backgroundColor = 'transparent';
        // header.style.border = 'none';
        header.style.setProperty('--header_height', '100px');
        // nav_underline.style.borderBottom = '1.8px solid #fff';
        // udl_hover.style.borderBottom = '0.8px solid #fff';
        
        header.style.color = '#333';
        header.style.border = '1px solid #e5e5e5';
        header.style.backgroundColor = '#fff';
        header.style.transition = '0.1s';
        nav_underline.style.borderBottom = '1.8px solid #333';
        udl_hover.style.borderBottom = '0.8px solid #333';
        nav_1.style.marginTop = '100px';

        function handleScreenResize(e) {
            if (e.matches) {
                // Code to adjust the layout when the screen width is 1024px or less
                header.style.color = '#333';
                header.style.backgroundColor = '#fff';
                nav_underline.style.borderBottom = '1.8px solid transparent';
            } else {
                // Code to adjust the layout when the screen width is more than 1024px
            }
        }
        
        // Create a MediaQueryList object
        const mediaQuery = window.matchMedia('(max-width: 1024px)');
        
        // Register event listener
        mediaQuery.addEventListener('change', handleScreenResize);
        
        // Initial check
        handleScreenResize(mediaQuery);
    }
});

var btn_narrow_1 = document.getElementById("btn_narrow_1");
var btn_narrow_2 = document.getElementById("btn_narrow_2");

var div_narrow_1 = document.getElementById("div_narrow_1");
var div_narrow_2 = document.getElementById("div_narrow_2");

btn_narrow_1.onclick = function() {
    div_narrow_1.style.display = 'block';
    div_narrow_2.style.display = 'none';
    btn_narrow_1.style.borderBottom = '1px solid #454545';
    btn_narrow_2.style.border = 'none';
}

btn_narrow_2.onclick = function() {
    div_narrow_2.style.display = 'block';
    div_narrow_1.style.display = 'none';
    btn_narrow_2.style.borderBottom = '1px solid #454545';
    btn_narrow_1.style.border = 'none';
}