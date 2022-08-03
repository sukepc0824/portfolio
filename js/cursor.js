// カーソル用のdivタグを取得してcursorに格納
var cursor = document.getElementById('cursor');

// カーソル用のdivタグをマウスに追従させる
document.addEventListener('mousemove', function (e) {
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

//portfolioタグホバー時ー白
var link = document.querySelectorAll('.portfolio');
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseover', function (e) {
        cursor.classList.add('color-change-white');
    });
    link[i].addEventListener('mouseout', function (e) {
        cursor.classList.remove('color-change-white');
    });
}
//aタグホバー時ー青拡大
var link = document.querySelectorAll('a');
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseover', function (e) {
        cursor.classList.add('cursor--hover');
    });
    link[i].addEventListener('mouseout', function (e) {
        cursor.classList.remove('cursor--hover');
    });
}
//jumpタグホバー時ー黄
var link = document.querySelectorAll('.jump');
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseover', function (e) {
        cursor.classList.add('color-change-yellow');
    });
    link[i].addEventListener('mouseout', function (e) {
        cursor.classList.remove('color-change-yellow');
    });
}
//backタグホバー時ー黄
var link = document.querySelectorAll('.back');
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseover', function (e) {
        cursor.classList.add('color-change-yellow');
    });
    link[i].addEventListener('mouseout', function (e) {
        cursor.classList.remove('color-change-yellow');
    });
}
//talkタグホバー時ー黄
var link = document.querySelectorAll('.talk');
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseover', function (e) {
        cursor.classList.add('color-change-yellow');
    });
    link[i].addEventListener('mouseout', function (e) {
        cursor.classList.remove('color-change-yellow');
    });
}