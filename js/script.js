var todo='';

var filt = document.createElement('div');
    filt.id = 'filter';
    document.body.appendChild(filt);


filt.addEventListener('click', f77);
function f77(){
    filt.style.display= "none";
    s.style.display= "none";
}

var but1 = document.createElement('button');
but1.id = 'add1';
but1.innerHTML = 'Добавить';


document.body.appendChild(but1);
but1.addEventListener('click', f66);
function f66(){
    s.style.display= "block";
    filt.style.display= "block";
}

var d =document.createElement('div');
d.classList.add('blok1');
document.body.appendChild(d);


var s = document.createElement('div');
s.classList.add('all');
document.body.appendChild(s);

var div = document.createElement('div');
div.id = 'divI';


var inp = document.createElement('input');
inp.id= 'inpI';
s.appendChild(inp);





var b = document.createElement('div');
b.classList.add('allb');
s.appendChild(b);



var p1 = document.createElement('p');
p1.classList.add('pCl');
p1.innerHTML = 'Не важно';
b.appendChild(p1);

var radio1 = document.createElement('input');
radio1.type = 'radio';
radio1.name = 'prim';
radio1.value = 'Не важно';
radio1.classList.add('radio');
p1.appendChild(radio1);



var p2 = document.createElement('p');
p2.classList.add('pCl');
p2.innerHTML = 'Важно';
b.appendChild(p2);

var radio2 = document.createElement('input');
radio2.type = 'radio';
radio2.name = 'prim';
radio2.value = 'Важно';
radio2.classList.add('radio');
p2.appendChild(radio2);



var p3 = document.createElement('p');
p3.classList.add('pCl');
p3.innerHTML = 'КАПЕЦ ГОРИТ';

var radio3 = document.createElement('input');
radio3.type = 'radio';
radio3.name = 'prim';
radio3.value = 'Капец горит';
radio3.classList.add('radio');
p3.appendChild(radio3);
b.appendChild(p3);




var p = document.createElement('p');
p.id = 'pI'
p.innerHTML = 'Введите задачу';
s.insertBefore(p, inp);
// s.appendChild(p);



ul = document.createElement('ul');
div.appendChild(ul);

var but = document.createElement('button');
but.id = 'add';
but.innerHTML = 'ЖМИ';
s.appendChild(but);








var heck = document.getElementsByName('prim');

for( var k=0; k<heck.length; k++ ){
    heck[k].onchange = test1;
}

var v;

function test1(){
    // console.log(this.value);
    v = this.value;
    console.log(v);
}





document.body.appendChild(div);
but.addEventListener('click', f1);

function f1() {
    if (inp.value === '') {
        alert('Вы не ввели задачу');
    }


    else {

        var li = document.createElement('li');

        li.innerHTML = inp.value + '<input type = "checkbox">' + '<button class="rem">Удалить</button>' +
            '<button class="rem1">Редактировать</button>' +v;

        ul.appendChild(li);

        local();

        let b = document.getElementsByClassName('rem1');
        for (var t = 0; t < b.length; t++) {
            b[t].addEventListener('click', f5);

        }

        let c = document.getElementsByClassName('rem');
        for (var i = 0; i < c.length; i++) {
            c[i].addEventListener('click', f4);

        }

    }
}

function f5() {

    let u = prompt('Редактируйте');
    this.parentNode.childNodes[0].nodeValue=u;

    local();
}

function f4() {
    this.parentNode.remove();
    // console.log(this);

    local();
}

function local() {
    todo = ul.innerHTML;
    localStorage.setItem('todos', todo);
    console.log(todo);
}

if (localStorage.getItem('todos'));{
    ul.innerHTML=localStorage.getItem('todos');
}


