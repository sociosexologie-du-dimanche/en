// Flouter le canvas quand mouseouver sur le corps, déflouter quand en sort
(function(){
    var corps = document.getElementById('corps'),
        canvas = document.getElementById('mycanvas'),
        aurevoir = document.getElementById('aurevoir');
    corps.addEventListener('mouseover',function() { 
        canvas.style.WebkitFilter = 'blur(5px)' ;
        canvas.style.filter = 'blur(5px)' ;
    });
    corps.addEventListener('mouseout',function() { 
        canvas.style.WebkitFilter = 'none' ;
        canvas.style.filter = 'none' ;
    });
})();

// Apparition de la vidéo quand on clique sur le titre pour la section gâteries
(function(){
    var videoPipe = document.createElement('iframe'),
        titreGaterie = document.getElementById('titreGateries'),
        titreSatis = document.getElementById('titreSatis'),
        videoBarney = document.createElement('iframe'),
        pBarney = document.getElementById('pBarney'),
        spanBarney = document.getElementById('spanBarney'),
        compteur = 0,
        compteurBarney = 0,
        compteurMouseOver = 0,
        compteurMouseOver2 = 0,
        toolTip = document.createElement('div'),
        toolTip2 = document.createElement('div'),
        toolTipInsep = document.createElement('div'),
        questionInsep = document.getElementById('spanInsep'),
        affiche = function(video){
            video.style.opacity = '1' ;
        },
        retire = function(bloc,video){
            bloc.removeChild(video);
        };
    videoPipe.setAttribute('id','videoPipe') ;
    videoPipe.width = '420' ;
    videoPipe.height = '315' ;
    videoPipe.src = 'https://www.youtube.com/embed/ZyZBkGETvE8';
    videoPipe.allowFullscreen = false ;
    
    videoBarney.setAttribute('id','videoBarney') ;
    videoBarney.width = '420' ;
    videoBarney.height = '315' ;
    videoBarney.src = 'https://www.youtube.com/embed/NpnG044XzIo';
    videoBarney.allowFullscreen = false ;
    
    toolTip.setAttribute('class','tooltip') ;
    toolTip2.setAttribute('class','tooltip') ;
    toolTipInsep.setAttribute('class','tooltip') ;
    toolTip.innerHTML = "A bonus is hidden </br> behind the title..." ;
    toolTip2.innerHTML = "Yes, this title is rather depressing..." ;
    toolTipInsep.innerHTML =  "You know, <a href='https://fr.wikipedia.org/wiki/Inséparable' target='_blank'>these little parrots </a> who often spend their whole life with the same partner." ;

    titreGaterie.appendChild(toolTip) ;
    titreSatis.appendChild(toolTip2) ;
    spanInsep.parentElement.appendChild(toolTipInsep) ;
    

    titreGaterie.addEventListener('click',function(){
        compteur++ ;
        if (compteur%2===1) {
            titreGaterie.appendChild(videoPipe);
            titreGaterie.style.height = '600px';
            setTimeout(function(){
                affiche(videoPipe) ;
            },200) ;
        } else {
            titreGaterie.style.height = '50px';
            videoPipe.style.opacity = '0' ;
            setTimeout(function(){
                       retire(titreGaterie,videoPipe) ;
            },1000) ;
        };
    });
    
    spanBarney.addEventListener('click',function(){
        compteurBarney++ ;
        if (compteurBarney%2===1) {
            pBarney.appendChild(videoBarney);
            pBarney.style.height = '600px';
            setTimeout(function(){ affiche(videoBarney) },200) ;
        } else {
            pBarney.style.height = '100px';
            videoBarney.style.opacity = '0' ;
            setTimeout(function(){ retire(pBarney,videoBarney) },1000) ;
        };
    });
    // Création d'un tooltip !
    titreGaterie.firstElementChild.firstElementChild.addEventListener('mouseover',function(){
        compteurMouseOver++ ;
        if (compteurMouseOver === 1 ) { toolTip.style.opacity = '1' } ;
    }) ;
    titreGaterie.firstElementChild.firstElementChild.addEventListener('mouseout',function(){
        toolTip.style.opacity = '0' ;
    }) ;
    titreSatis.firstElementChild.firstElementChild.addEventListener('mouseover',function(){
        compteurMouseOver2++ ;
        if (compteurMouseOver2 === 1 ) { toolTip2.style.opacity = '1' } ;
    }) ;
    titreSatis.firstElementChild.firstElementChild.addEventListener('mouseout',function(){
        toolTip2.style.opacity = '0' ;
    }) ;
    questionInsep.addEventListener('mouseover',function(){
        toolTipInsep.style.opacity = '1' ;
    }) ;
    questionInsep.addEventListener('mouseout',function(){
        setTimeout(function(){
            toolTipInsep.style.opacity = '0' ;
        },3000);
    }) ;
})() ;

// Apparition de la liste de liens quand on clique sur le paragraphe Pam
(function(){
    var Pam = document.getElementById('listePam'),
        pPam = Pam.firstElementChild,
        motLien = document.getElementById('lienArticles'),
        liens = document.getElementById('liensPam'),
        compteur = 0,
        hauteurPetit = pPam.clientHeight.toString(),
        hauteurGrand = Pam.clientHeight.toString(),
        affiche = function(){
            liens.style.display = 'block' ;
        },
        retire = function(){
            liens.style.display = 'none' ;
        } ;
    Pam.style.height = hauteurPetit ;
    liens.style.display = 'none' ;
    motLien.addEventListener('click',function(){
        compteur ++ ;
        console.log(compteur) ;
        if (compteur%2 === 1) {
            Pam.style.height = '800px' ;
            setTimeout(affiche,100) ;
        } else {            
            Pam.style.height = '80px' ;
            setTimeout(retire,100) ;
        };
    });
})();

// Tooltip pour liste des films et sources
(function(){
    var toolTip = document.getElementById('toolFilms'),
        toolIfop = document.getElementById('toolIfop'),
        toolContact = document.getElementById('toolContact'),
        toolAurevoir = document.getElementById('toolAurevoir'),
        fenetreBlur = document.getElementById('fenetreBlur'),
        texte = "<p>All the background images </br>are screenshots </br>from the following (good) movies, given by order of apparition :</p>",
        texteIfop = "<p>The data used in this website were provided by <a href='http://www.ifop.com/?option=com_homepage' target='_blank'>Ifop</a>. They were collected during a survey ordered by the newspaper <a href='http://www.marianne.net/Cette-semaine-dans-Marianne-Les-Francais-la-politique-et-le-sexe_a238936.html' target='_blank'>Marianne</a>, in order to study the links between sexuality and political positions. We thank Ifop for having kindly put at our disposal the results from this survey. </p><p> The interactive charts were designed with <a href='http://www.highcharts.com' target='_blank'>Highcharts</a>.</p>",
        texteContact = "<p>This website have been designed for a data visualization course from <a href='http://www.ensae.fr' target='_blank'>Ensae ParisTech</a>. You can contact us using the following links, or <a href='mailto:sociosexologuesdudimanche@ntymail.com?Subject=A%20propos%20de%20votre%20site%20de%20dataviz'> write to the whole team as well !</a></p>",
        texteAurevoir = "<p>We thankfully acknowledge the courage of readers that went until the end of that page (and thought to click on the little cross). We (again) thank Ifop for letting us use their precious aggregated data. In spite of all the serious of our work, the results presented here DO NOT allow to draw any causality relations... No, having had only one sexual intercourse doesn't make you the most satisfied among your friends. We hope that you were surprised, diverted, and why not teached some stuff !</p><p>From now on, you will be able to shut your friend Shirley's trap, you know, the one who tries to impress you with her long list of sexual partners--at least thirty of them! In any case, it is not the number that counts! </p><p>You will also be able to justify your not always well accepted political orientation by the sexual openness of their adherents. Oh no! This would amount to drawing wrong conclusions from the data! </p><p>And if you want to be really nice, share this page with your friends, parents, grandparents, colleagues, Barack Obama or Emma Watson … which would help us get a good grade !</p>",
        films = [ {
                nom : 'La mala educacion',
                lien : 'http://www.imdb.com/title/tt0275491/'
            },{
                nom : 'Priest',
                lien : 'http://www.imdb.com/title/tt0110889/' ,
            },{
                nom :'Blue Valentine',
                lien : 'http://www.imdb.com/title/tt1120985/' ,
            },{
                nom :'Titanic',
                lien : 'http://www.imdb.com/title/tt0120338/',
            },{
                nom:'American History X',
                lien: 'http://www.imdb.com/title/tt0120586/',
            },{
                nom :'Eyes Wide Shut',
                lien : 'http://www.imdb.com/title/tt0120663/' ,
            },{
                nom :'Vicky Cristina Barcelona',
                lien : 'http://www.imdb.com/title/tt0497465/' ,
            },{
                nom: 'Harold and Maude',
                lien : 'http://www.imdb.com/title/tt0067185/',
            }
        ],
        contacts = [ {
                nom : 'The one who has the good ideas',
                lien : 'https://www.linkedin.com/in/marie-beigelman-955a8397'
            },{
                nom : 'The one who has been super motivated from the start',
                lien : 'https://www.linkedin.com/in/ptanneau' ,
            },{
                nom : "The one whose mother likes to help for english stuff",
                lien : 'https://fr.linkedin.com/in/kim-montalibet-1a01a265' ,
            },{
                nom :'The one who likes to code at night',
                lien : 'https://fr.linkedin.com/in/romaindamian' ,
            }
        ],
        filmList = document.getElementById('filmList'),
        sourceDonnees = document.getElementById('sourceDonnees'),
        auteurs = document.getElementById('auteurs'),
        goodbye = document.getElementById('buttonGoodbye'),
        x = 0,
        y = 0,
        a = 0,
        b = 0,
        blurer = function(e){
            x = Math.random()*60;
            y = Math.random()*20;
            a = Math.random()*30;
            b = Math.random()*70;
            if (e.target === filmList) {
                toolTip.style.top = y+'%' ;
                toolTip.style.left = x+'%' ;
                toolTip.style.opacity = '1' ;
                toolTip.style.zIndex = '7' ;
            } else if (e.target === sourceDonnees) {
                toolIfop.style.top = a+'%' ;
                toolIfop.style.left = b+'%' ;
                toolIfop.style.opacity = '1' ;
                toolIfop.style.zIndex = '7' ;
            } else if (e.target === auteurs){
                toolContact.style.top = a+'%' ;
                toolContact.style.left = b+'%' ;
                toolContact.style.opacity = '1' ;
                toolContact.style.zIndex = '7' ;
            } else {
                toolAurevoir.style.opacity = '1' ;
                toolAurevoir.style.zIndex= '7' ;
            }
            fenetreBlur.style.opacity = '1' ;
            fenetreBlur.style.zIndex = '6' ;
        },
        cleaner = function(e){
            a = Math.random()*100;
            b = Math.random()*100;
            toolTip.style.top = a+'%' ;
            toolTip.style.left = b+'' ;
            toolTip.style.opacity = '0' ;
            toolTip.style.zIndex = '-1' ;
            
            toolIfop.style.top = a+'%' ;
            toolIfop.style.left = b+'' ;
            toolIfop.style.opacity = '0' ;
            toolIfop.style.zIndex = '-1' ;
            
            toolContact.style.top = a+'%' ;
            toolContact.style.left = b+'' ;
            toolContact.style.opacity = '0' ;
            toolContact.style.zIndex = '-1' ;
            
            toolAurevoir.style.opacity = '0' ;
            toolAurevoir.style.zIndex = '-1' ;
            
            fenetreBlur.style.opacity = '0' ;
            fenetreBlur.style.zIndex = '-1' ;
        };
    
    for (i = 0,n=films.length;i<n;i++){
        texte = texte + "<p><a href=" + films[i].lien + " target='_blank'>"+films[i].nom+"</a></p>" ;
    };
    for (i = 0,n=contacts.length;i<n;i++){
        texteContact = texteContact + "<p><a href=" + contacts[i].lien + " target='_blank'>"+contacts[i].nom+"</a></p>"
    }
    texte = texte + "<p> The javascript code at the origin of the moving spermatozoids is available <a href='http://paperjs.org/examples/tadpoles/' target='_blank'>here</a>.</p>" ;
    toolTip.innerHTML = texte ;
    toolIfop.innerHTML = texteIfop ;
    toolContact.innerHTML = texteContact ;
    toolAurevoir.innerHTML = texteAurevoir ;
    filmList.addEventListener('click',function(e) {
        blurer(e) ;
    });
    sourceDonnees.addEventListener('click',function(e){
        blurer(e) ;
    });
    auteurs.addEventListener('click',function(e) {
        blurer(e) ;
    });
    goodbye.addEventListener('click',function(e) {
       blurer(e) ; 
    });
    fenetreBlur.addEventListener('click',function(e){
        cleaner(e) ;
    });
 })();

//ScrollTO
$(document).ready(function() {
				$('.scrollTo').click( function() { // Au clic sur un élément
					var page = $(this).attr('href'); // Page cible
					var speed = 900; // Durée de l'animation (en ms)
					$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
					return false;
				});
			});

// Infographie cathos
(function(){
    // test 

var imagesCathos = document.getElementById('imagesCathos'),     // Récupération des div contenant les iamges
    imagesAthees = document.getElementById('imagesAthees'),
    chiffre = document.getElementById('chiffreInfoCathos'),     // Récupération de la div contenant les chiffres
    // Remplissage variables de texte contenant les chiffres
    texteDepart = "Move the mouse over the small men to see the figures !",
    texteCathoOui = "Catholics having had a homosexual intercourse : <span class='chiffre'>12%</span>" ,
    texteCathoNon = "Catholics having never had a homosexual intercourse : <span class='emph'>88%</span>",
    texteAtheeOui = "Non-religious having had a homosexual intercourse : <span class='chiffre'>16%</span>" ,
    texteAtheeNon = "Non-religious having never had a homosexual intercourse: <span class='emph'>84%</span>",
    // HTML à insérer dans les div span pour avoir l'image
    cathoOui = "<img src='Images/cathoOui.png'/>" ,
    cathoNon = "<img src='Images/cathoNon.png'/>",
    atheeOui = "<img src='Images/atheeOui.png'/>" ,
    atheeNon = "<img src='Images/atheeNon.png'/>";
    
var petitBloc , autreReligion ; // Variables utilisées dans la boucle initialisées ici

// On va faire la même chose pour les deux lignes de bonhommes, donc on fait une fonction
var alignerImages = function (religion,imageOui,imageNon,nombreOui) {
    
    // Les deux boucles for ajoutent en ligne les images en utilisant des span
    for (i=0;i<nombreOui;i++) {
        petitBloc = document.createElement('span') ;
        petitBloc.setAttribute('id','span'+i) ;
        petitBloc.setAttribute('class','oui') ;
        religion.appendChild(petitBloc) ;
        petitBloc.innerHTML = imageOui ;
    }

    for (i=0;i<20-nombreOui;i++) {
        petitBloc = document.createElement('span') ;
        petitBloc.setAttribute('id','span'+i) ;
        petitBloc.setAttribute('class','non') ;
        religion.appendChild(petitBloc) ;
        petitBloc.innerHTML = imageNon ;
    }

    // Réaction des bonhommes lors du survol de la souris
    religion.addEventListener('mouseover', function(e){
        
        // On enregistre quelle religion/non-religion est survolée
        reliSur = e.target.parentElement.parentElement ;
        (reliSur.id === 'imagesCathos') ? autreReligion = imagesAthees : autreReligion = imagesCathos ;
        
        // selon que c'est les images oui ou non qui sont survolées, on opacifie les autres et on affiche la bonne réponse
        if (e.target.parentElement.className === 'oui') {
            nons = document.querySelectorAll('#' + reliSur.id + ' .non') ;
            for (j=0,n=nons.length;j<n;j++){
                nons[j].style.opacity = '0.5' ;
            }
            (reliSur.id === 'imagesCathos') ? chiffre.innerHTML = texteCathoOui : chiffre.innerHTML = texteAtheeOui ;
        } else if (e.target.parentElement.className === 'non') {
            ouis = document.querySelectorAll('#'+ reliSur.id + ' .oui') ;
            for (j=0,n=ouis.length;j<n;j++){
                ouis[j].style.opacity = '0.5' ;
            }
            (reliSur.id === 'imagesCathos') ? chiffre.innerHTML = texteCathoNon : chiffre.innerHTML = texteAtheeNon ;
        }
        
        // on opacifie également l'autre ligne d'images pour plus de lisibilité ;
        autreReligion.style.opacity = '0.5' ;
    });

    // lorsque la souris sort des images, tout redevient normal et on raffiche le texte de départ
    religion.addEventListener('mouseout', function(e){
        nons = document.querySelectorAll('.non') ;
        ouis = document.querySelectorAll('.oui') ;
        for (j=0,n=ouis.length;j<n;j++){
            ouis[j].style.opacity = '1' ;
        }
        for (j=0,n=nons.length;j<n;j++){
            nons[j].style.opacity = '1' ;
        }
        chiffre.innerHTML = texteDepart ;
        imagesCathos.style.opacity = '1' ;
        imagesAthees.style.opacity = '1' ;
    });
}

chiffre.innerHTML = texteDepart ; // remplissage par le texte de départ à l'ouverture de la page

alignerImages(imagesCathos,cathoOui,cathoNon,3) ;
alignerImages(imagesAthees,atheeOui,atheeNon,4) ;
})();