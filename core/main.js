// window.addEventListener('scroll', function() {
//     var header = document.querySelector('header');
//     if (window.scrollY > 0) {
//         header.style.setProperty('--header-background', '#333'); // Thay đổi màu nền header khi cuộn xuống
//         header.style.setProperty('--header-color', '#fff'); // Thay đổi màu chữ header khi cuộn xuống
//         header.style.setProperty('--header-height', '60px'); // Thay đổi chiều cao header khi cuộn xuống
//         header.style.setProperty('--header-box-shadow', '0px 2px 5px rgba(0, 0, 0, 0.2)'); // Thay đổi shadow của header khi cuộn xuống
//     } else {
//         header.style.setProperty('--header-background', 'transparent'); // Khôi phục màu nền header khi cuộn lên đầu trang
//         header.style.setProperty('--header-color', 'black'); // Khôi phục màu chữ header khi cuộn lên đầu trang
//         header.style.setProperty('--header-height', '80px'); // Khôi phục chiều cao header khi cuộn lên đầu trang
//         header.style.setProperty('--header-box-shadow', 'none'); // Khôi phục shadow của header khi cuộn lên đầu trang
//     }
// });

var header = document.querySelector('header');
var nav_underline = document.getElementById('header_nav_underline');
var udl_hover = document.querySelector('.underline_hover'); // Thay '.your-element-class' bằng selector của phần tử bạn muốn hover
window.addEventListener('scroll', function() {

    if (window.scrollY > 0) { // Cuộn xuống
        header.style.color = '#333';
        header.style.border = '1px solid #e5e5e5';
        header.style.backgroundColor = '#fff';
        header.style.transition = '0.1s';
        header.style.setProperty('--header_height', '80px');
        nav_underline.style.borderBottom = '1.8px solid #333';
        udl_hover.style.borderBottom = '0.8px solid #333';


        // // Thêm sự kiện hover
        // element.addEventListener('mouseenter', function() {
        //     // Xử lý khi con trỏ chuột vào
        //     element.style.borderBottom = '1.8px solid #333'; // Thay đổi màu nền thành màu xanh khi hover
        // });

        // element.addEventListener('mouseleave', function() {
        //     // Xử lý khi con trỏ chuột rời đi
        //     element.style.borderBottom = 'none'; // Đặt lại màu nền về mặc định khi không hover
        // });

        function handleScreenResize(e) {
            if (e.matches) {
                // Code to adjust the layout when the screen width is 1024px or less
                // console.log('Screen width is 1024px or less');
                // Thêm code của bạn ở đây để điều chỉnh bố cục
                header.style.setProperty('--header_height', '100px');
                header.style.border = 'none';
                header.style.position = 'absolute';
                nav_underline.style.borderBottom = '1.8px solid transparent';
                udl_hover.style.borderBottom = '0.8px solid transparent';
            } else {
                // Code to adjust the layout when the screen width is more than 1024px
                // console.log('Screen width is more than 1024px');
                // Thêm code của bạn ở đây để điều chỉnh bố cục
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
        header.style.color = '#fff';
        header.style.backgroundColor = 'transparent';
        header.style.border = 'none';
        header.style.setProperty('--header_height', '100px');
        nav_underline.style.borderBottom = '1.8px solid #fff';
        udl_hover.style.borderBottom = '0.8px solid #fff';

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

// if (header.style.backgroundColor == '#fff') {
//     udl_hover.style.borderBottom = '1.8px solid #333';
// }

// // Chọn phần tử
// const element = document.querySelector('.underline_hover'); // Thay '.your-element-class' bằng selector của phần tử bạn muốn hover

// // Thêm sự kiện hover
// element.addEventListener('mouseenter', function() {
//     // Xử lý khi con trỏ chuột vào
//     this.style.borderBottom = '1.8px solid #fff'; // Thay đổi màu nền thành màu xanh khi hover
// });

// element.addEventListener('mouseleave', function() {
//     // Xử lý khi con trỏ chuột rời đi
//     this.style.borderBottom = 'none'; // Đặt lại màu nền về mặc định khi không hover
// });


// function loadHTML(selector, file) {
//     fetch(file)
//       .then(response => response.text())
//       .then(data => {
//         document.querySelector(selector).innerHTML = data;
//       })
//       .catch(error => console.log('Error:', error));
//   }

//   loadHTML('#header', 'media/header.html');
//   loadHTML('#footer', 'media/footer.html');