// Um objeto literal criado para armazenar os projetos
const projetos = {
    0: {
        nomeProjeto: 'FA Turismo',
        descricaoProjeto: 'É um projeto com um design próprio, para uma empresa ficticia chamada FA turismo.',
        linguagensProjeto: ['HTML', 'CSS', 'JS'],
        gitLinkProjeto: 'https://github.com/caiof1/ProjetoTurismo',
        externalLinkProjeto: 'https://caiofernandes.tech/fa_turismo/',
        imgProjeto: '../img/Fa_turismo.png'
    },
    1: {
        nomeProjeto: 'Pagina de Produto',
        descricaoProjeto: 'É uma pagina com design próprio, para uma empresa de moda ficticia. Foi a minha primeira interação com sliders',
        linguagensProjeto: ['HTML', 'CSS', 'JS'],
        gitLinkProjeto: 'https://github.com/caiof1/projetoPaginaProduto',
        externalLinkProjeto: 'https://caiofernandes.tech/pagina_produto/',
        imgProjeto: '../img/PaginaProduto.png'
    },
    2: {
        nomeProjeto: 'Tela de login',
        descricaoProjeto: 'É uma tela de login criada para um banco, com o proposito de fazer login ou criar a conta do cliente',
        linguagensProjeto: ['HTML', 'CSS'],
        gitLinkProjeto: 'https://github.com/caiof1/projetoTelaLogin',
        externalLinkProjeto: 'https://caiofernandes.tech/tela_login/',
        imgProjeto: '../img/PaginaLogin.png'
    },
    3: {
        nomeProjeto: 'Game Mata mosquito',
        descricaoProjeto: 'É um joguinho de matar mosquito, na sua maior parte, utilizando JS e também usando o localStorage do navegador',
        linguagensProjeto: ['HTML', 'CSS', 'JS'],
        gitLinkProjeto: 'https://github.com/caiof1/projetoMataMosquito',
        externalLinkProjeto: 'https://caiofernandes.tech/mata_mosquito/html/',
        imgProjeto: '../img/MataMosquito.png'
    },
    4: {
        nomeProjeto: 'Game Super Mario',
        descricaoProjeto: 'É uma recriação do super mario, feito de um jeito mais simples por ser em navegador. Em sua principal linguagem sendo JS',
        linguagensProjeto: ['HTML', 'CSS', 'JS'],
        gitLinkProjeto: 'https://github.com/caiof1/projetoSuperMario',
        externalLinkProjeto: 'https://caiofernandes.tech/super_mario/',
        imgProjeto: '../img/SuperMario.png'
    },
    5: {
        nomeProjeto: 'Noticias cidade',
        descricaoProjeto: 'Projeto de um site de noticias, não sendo responsivo, já que quando o fiz, não sabia deixar um site responsivo',
        linguagensProjeto: ['HTML', 'CSS'],
        gitLinkProjeto: 'https://github.com/caiof1/projetoNoticiasCidade',
        externalLinkProjeto: 'https://caiofernandes.tech/noticias_cidade',
        imgProjeto: '../img/NoticiasCidade.png'
    },
    6: {
        nomeProjeto: 'Museu nacional',
        descricaoProjeto: 'Projeto do museu nacional, não sendo responsivo, já que quando o fiz, não sabia deixar um site responsivo',
        linguagensProjeto: ['HTML', 'CSS'],
        gitLinkProjeto: 'https://github.com/caiof1/projetoMuseuNacional',
        externalLinkProjeto: 'https://caiofernandes.tech/museu_nacional',
        imgProjeto: '../img/MuseuNacional.png'
    },
    7: {
        nomeProjeto: 'Spotify',
        descricaoProjeto: 'É uma recriação da home do spotify, que fiz utilizando BOOSTRAP',
        linguagensProjeto: ['HTML', 'CSS', 'BOOSTRAP', 'FONTAWESOME'],
        gitLinkProjeto: 'https://github.com/caiof1/projetoSpofity',
        externalLinkProjeto: 'https://caiofernandes.tech/spotify/',
        imgProjeto: '../img/Spotify.png'
    },
    8: {
        nomeProjeto: 'Finans',
        descricaoProjeto: 'Site ficticio de finanças, onde podemos visualizar o trabalho da empresa',
        linguagensProjeto: ['HTML', 'CSS', 'BOOSTRAP', 'FONTAWESOME'],
        gitLinkProjeto: 'https://github.com/caiof1/projetoFinans',
        externalLinkProjeto: 'https://caiofernandes.tech/finans/',
        imgProjeto: '../img/Finans.png'
    },
    9: {
        nomeProjeto: 'Orçamento pessoal',
        descricaoProjeto: 'Projeto que foi desenvolvido utilizando localStorage, servindo para armazenar gastos do dia a dia',
        linguagensProjeto: ['HTML', 'CSS', 'JS', 'JS OO', 'BOOSTRAP'],
        gitLinkProjeto: 'https://github.com/caiof1/projetoOrcamentoPessoal',
        externalLinkProjeto: 'https://caiofernandes.tech/orcamento_pessoal/index.html',
        imgProjeto: '../img/OrcamentoPessoal.png'
    },
    10: {
        nomeProjeto: 'Calculadora',
        descricaoProjeto: 'Uma calculadora desenvolvida novamente, com o próposito de conferir como eu evolui',
        linguagensProjeto: ['HTML', 'CSS', 'JS'],
        gitLinkProjeto: 'https://github.com/caiof1/projetoCalculadora',
        externalLinkProjeto: 'https://caiofernandes.tech/calculadora/',
        imgProjeto: '../img/Calculadora.png'
    },
    11: {
        nomeProjeto: 'Pokedex',
        descricaoProjeto: 'É uma pokedex criada utilizando uma api chamada PokeAPI. Foi a minha primeira interação com API, é um site de 2022/07',
        linguagensProjeto: ['HTML', 'CSS', 'JS', 'PokeAPI'],
        gitLinkProjeto: 'https://github.com/caiof1/projetoPokedex',
        externalLinkProjeto: 'https://caiofernandes.tech/pokedex/',
        imgProjeto: '../img/Pokedex.png'
    },
    12: {
        nomeProjeto: 'PokeWiki',
        descricaoProjeto: 'É um acervo mostrando todos os pokemons(Todos os pokemons catalogados na API)',
        linguagensProjeto: ['HTML', 'CSS', 'JS', 'PokeAPI'],
        gitLinkProjeto: 'https://github.com/caiof1/projeto_Pokemon',
        externalLinkProjeto: 'https://caiofernandes.tech/pokemon/',
        imgProjeto: '../img/Pokemon.png'
    },
    length: 13
}
// Um objeto literal criado para armazenar os projetos em destaque
const projetosDestaque = {
    1: {
        nomeProjeto: 'Game Mata mosquito',
        descricaoProjeto: 'É um joguinho de matar mosquito, na sua maior parte, utilizando JS e também usando o localStorage do navegador',
        linguagensProjeto: ['HTML', 'CSS', 'JS'],
        gitLinkProjeto: 'https://github.com/caiof1/projetoMataMosquito',
        externalLinkProjeto: 'https://caiofernandes.tech/mata_mosquito/html/',
        imgProjeto: '../img/MataMosquito.png'
    },
    2: {
        nomeProjeto: 'Game Super Mario',
        descricaoProjeto: 'É uma recriação do super mario, feito de um jeito mais simples por ser em navegador. Em sua principal linguagem sendo JS',
        linguagensProjeto: ['HTML', 'CSS', 'JS'],
        gitLinkProjeto: 'https://github.com/caiof1/projetoSuperMario',
        externalLinkProjeto: 'https://caiofernandes.tech/super_mario/',
        imgProjeto: '../img/SuperMario.png'
    },
    3: {
        nomeProjeto: 'Pokedex',
        descricaoProjeto: 'É uma pokedex criada utilizando uma api chamada PokeAPI. Foi a minha primeira interação com API, é um site de 2022/07',
        linguagensProjeto: ['HTML', 'CSS', 'JS', 'PokeAPI'],
        gitLinkProjeto: 'https://github.com/caiof1/projetoPokedex',
        externalLinkProjeto: 'https://caiofernandes.tech/pokedex/',
        imgProjeto: '../img/Pokedex.png'
    },
    length: 3
    
}
// Function que adiciona os projetos em destaque, mudando apenas as informações dos elementos html já criado
const addProjetosDestaque = (img, title, descricao, linguagensUsadas, git, link) => {
    for(let i = 1; i <= projetosDestaque.length; i++) {
        document.getElementById(img + i).src = projetosDestaque[i].imgProjeto
        document.getElementById(title + i).innerHTML = projetosDestaque[i].nomeProjeto
        document.getElementById(descricao + i).innerHTML = projetosDestaque[i].descricaoProjeto
        const linguagensID = document.getElementById(linguagensUsadas + i)
        // Laço para mostrar as linguagens, independente de quantas tenha
        for(let j = 0; j < projetosDestaque[i].linguagensProjeto.length; j++) {
            const span = document.createElement('span')
            linguagensID.appendChild(span)
            span.innerHTML = projetosDestaque[i].linguagensProjeto[j]
        }
        document.getElementById(git + i).href = projetosDestaque[i].gitLinkProjeto
        document.getElementById(link + i).href = projetosDestaque[i].externalLinkProjeto
    }
}
// Function para criar os demais projetos
const addProjetos = () => {
    const projectOther = document.getElementById('projects__other')
    for(let i = 0; i < projetos.length; i++) {    
        // Criando os elementos html
        const projects = document.createElement('div')
        const subHeader = document.createElement('div')
        const iFolder = document.createElement('i')
        const divHeader = document.createElement('div')
        const aExternalLink = document.createElement('a')
        const iExternalLink = document.createElement('i')
        const aGitHub = document.createElement('a')
        const iGitHub = document.createElement('i')
        const divProjectDescricao = document.createElement('div')
        const h3 = document.createElement('h3')
        const span = document.createElement('span')
        const divlinguagens = document.createElement('div')

        // Adicionando os elementos criados via js, no escopo html
        projectOther.appendChild(projects)
        projects.appendChild(subHeader)
        subHeader.appendChild(iFolder)
        subHeader.appendChild(divHeader)
        divHeader.appendChild(aExternalLink)
        aExternalLink.appendChild(iExternalLink)
        divHeader.appendChild(aGitHub)
        aGitHub.appendChild(iGitHub)
        projects.appendChild(divProjectDescricao)
        divProjectDescricao.appendChild(h3)
        divProjectDescricao.appendChild(span)
        projects.appendChild(divlinguagens)

        // Adicionando as classes nos elementos html
        projects.classList = 'projects entry'
        subHeader.classList = 'sub__header'
        iFolder.classList = 'fa-regular fa-folder'
        iExternalLink.classList = 'fa-solid fa-arrow-up-right-from-square'
        iGitHub.classList = 'fa-brands fa-github'
        divProjectDescricao.classList = 'projects__descricao'
        divlinguagens.classList = 'linguagens__project'

        // Setando os valores nos elementos
        aExternalLink.href = projetos[i].externalLinkProjeto
        aGitHub.href = projetos[i].gitLinkProjeto
        h3.innerHTML = projetos[i].nomeProjeto
        span.innerHTML = projetos[i].descricaoProjeto

        // Laço para adicionar as linguagens
        for(let j = 0; j < projetos[i].linguagensProjeto.length; j++) {
            const spanLing = document.createElement('span')
            divlinguagens.appendChild(spanLing)
            spanLing.innerHTML = projetos[i].linguagensProjeto[j]
        }

        // Setando para que os links abram em uma nova aba
        aExternalLink.target = '_blank'
        aGitHub.target = '_blank'
    }

}


addProjetos()


addProjetosDestaque('img', 'title__', 'descricao__', 'linguagens__usadas', 'git', 'link')