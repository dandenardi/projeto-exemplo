function formTest(e){
    e.preventDefault();
    
    var peopleRaw = localStorage.getItem('people');

    if(peopleRaw != null){
        var people = JSON.parse(peopleRaw);
    }else{
        var people = [];
    }

    if (id !== null){
        people[id] = {
            name: e.target.elements['name'].value,
            tel: e.target.elements['phone'].value,
            xp: (e.target.elements['xp'].value == 'true'),
            
        }

    }else{
        people.push({
            name: e.target.elements['name'].value,
            tel: e.target.elements['phone'].value,
            xp: (e.target.elements['xp'].value == 'true'),
            //e = element,  target = o objeto element, elements = os itens do objeto, value = o valor armazenado,
        });
    
        
    };

    localStorage.setItem('people', JSON.stringify(people));
    
    document.getElementById("goHome").click(); //seleciona o elemento pela id e direciona para goHome ao clicar
        

    //Salvando conteúdo no localStorage, apos validacao

}

var urlPrincipal = new URL(window.location.href);
//urlPrincipal guarda a pagina atual (funcao window.location.href)

var id = urlPrincipal.searchParams.get('person'); 
//guarda em id os parametros (searchParams), neste caso de 'person' da pagina atual
if (id !== null){
    //verifica se id não é nulo (validacao)
    var peopleRaw = localStorage.getItem('people');

    if(peopleRaw != null){
        var people = JSON.parse(peopleRaw);
    }else{
        var people = [];
    }

    document.getElementById('name').value = people[id].name;
    document.getElementById('phone').value = people[id].tel;
    if (people[id].xp) {
        document.getElementById('xp-yes').checked = true;
    }else{
        document.getElementById('xp-no').checked = true;
    }
    
}



