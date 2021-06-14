const text = document.getElementById("introduce-amin")

text.innerHTML = '능력으로 노력하는'

var items = [
    '서비스 기획자', '프로젝트 매니저', '친화력을 가진', '새로운 시각을 가진', '리더쉽을 가진', '커뮤니케이터', '배려심을 가진', '아이디어를 가진', '관찰력을 가진', '댕댕미를 가진', '능력으로 노력하는'
];

var answer
var number = 0

function print() {
    answer = items[number];
    text.innerHTML = answer;
    number = number + 1;
    if (number === items.length) {
        number = 0
    }
}

setInterval(print, 1800)

