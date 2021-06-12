const text = document.getElementById("introduce-amin")

text.innerHTML = '노력으로 무엇이든 해내는'

var items = [
    '서비스 기획자', '의사소통 능력을 가진', '프로젝트 매니저', '친화력으로 사람을 연결하는', 'QA', '리더쉽을 가진', '커뮤니케이터', '배려로 사람을 이해하는', 'CS', '신박한 아이디어를 가진', '관찰력으로 세상을 바라보는', '댕댕미로 사람을 녹이는', '노력으로 무엇이든 해내는'
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

