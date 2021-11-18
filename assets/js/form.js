function formTest(e){
    e.preventDefault();
    
    var peopleRaw = localStorage.getItem('people');

    if(peopleRaw != null){
        var people = JSON.parse(peopleRaw);
    }else{
        var people = [];
    }

    people.push({
        name: e.target.elements['name'].value,
        tel: e.target.elements['phone'].value,
        xp: (e.target.elements['xp'].value) == 'true',
        //e = element,  target = o objeto element, elements = os itens do objeto, value = o valor armazenado,
    });

    localStorage.setItem('people', JSON.stringify(people));

    document.getElementById("goHome").click(); //seleciona o elemento pela id e direciona para goHome ao clicar


    //Salvando conteúdo no localStorage, apos validacao

}