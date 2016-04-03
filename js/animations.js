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

// Quizz
(function(){
//------------------------------------------------------------
// Création du tableau 'textes'
    var    reponse1V =  "<p> Yes, the percentage of <em>non-religious</em> people who have already had sexual intercourse with someone of the same sex is <span class='chiffre'>16%</span>. This percentage is the same for individuals belonging to <span class='emph'>a religion other than Catholicism</span>. <p> As for Catholics, they seem to be less tempted by homosexual experiences, even though the difference is hardly significant – <span class='chiffre'>12%</span> of Catholics have already had an experience with someone of the same sex.  Only four fewer percentage points than the rest of the population !</p>",
        reponse1F = "<p> Not at all!  The time when religion and homosexuality were incompatible is long past. The percentage of <em>non-religious</em> people who have already had sexual intercourse with someone of the same sex is <span class='chiffre'>16%</span>. This percentage is the same for individuals belonging to <span class='emph'>a religion other than Catholicism</span>.  <p> As for Catholics, they seem to be less tempted by homosexual experiences, even though the difference is hardly significant – <span class='chiffre'>12%</span> of Catholics have already had an experience with someone of the same sex.  Only four fewer percentage points than the rest of the population! </p>",
        reponse2V = "<p> Indeed ! Accordingly, <span class='chiffre'> 21%</span> of practicing Catholics and <span class='chiffre'> 23%</span> of individuals of other religions <span class='emph'> have never licked or sucked their partner's genitals </span>, as opposed to only <span class='chiffre'> 11%</span> among the non-religious. As for non-practicing Catholics, they like licking or sucking their partner's genitals as much as their agnostic compatriots.</p><p> More important than religious affiliations, it is therefore the actual practising of one's religion which is crucial in explaining one's sexual habits. <span class='chiffre'> 63%</span> <span class='emph'> practicing Catholics have never engaged in sodomy </span> (even with someone of the same sex) as opposed to <span class='chiffre'> 46%</span> <span class='emph'> for the rest of the population </span> </p>",
        reponse2F = "<p> If you are one of those <span class='emph'>waiting for marriage</span> and answered that, you're different from most of yours waiting mates ! Otherwise you're just wrong. Accordingly, <span class='chiffre'> 21%</span> of practicing Catholics and <span class='chiffre'> 23%</span> of individuals of other religions <span class='emph'> have never licked or sucked their partner's genitals </span>, as opposed to only <span class='chiffre'> 11%</span> among the non-religious. As for non-practicing Catholics, they like licking or sucking their partner's genitals as much as their agnostic compatriots.</p><p> More important than religious affiliations, it is therefore the actual practising of one's religion which is crucial in explaining one's sexual habits. <span class='chiffre'> 63%</span> <span class='emph'> practicing Catholics have never engaged in sodomy </span> (even with someone of the same sex) as opposed to <span class='chiffre'> 46%</span> <span class='emph'> for the rest of the population </span> </p>",
        reponse3V = "<p> Correct !  Apparently, women go into more detail than men when talking about sex with their friends… It's rare to hear a man describe exactly what he did the night before with his partner. Besides, only too seldom do we hear a man boasting about his efforts to please his partner…</p><p>But in fact a <span class='emph'>higher proportion of men (49%) than women (36%) <em> licks or sucks their partner's genitals</em></span>. Conversely, <span class='chiffre'>15%</span> of women declare never doing it, as opposed to <em>only</em> <span class='chiffre'>11%</span> for men. When you get down to it, it's clear, whatever your partner's gender, sex treats are good, indulge in them ! </p>",
        reponse3F = "<p> Ah, the collective imagination and facts… two radically different things! It is true that in an androcentric society, an <em>expected</em> consequence of masculine domination would be that oral sex be given  more often by women and received more often by men… in fact no, and so much the better! </p><p> A <span class='emph'>higher proportion of men (49%) than women (36%) <em> licks or sucks their partner's genitals</em></span>. Conversely, <span class='chiffre'>15%</span> of women declare never doing it, as opposed to <em>only</em> <span class='chiffre'>11%</span> for men. When you get down to it, it's clear, whatever your partner's gender, sex treats are good, indulge in them ! </p>",
        reponse4F = "<p>Good try, but no! Among men with a high school diploma up to a college education, <span class='chiffre'>48%</span> declare often sucking or licking their partner's genitals. Among those who don't have a high school diploma, this percentage goes up to <span class='chiffre'>50%</span>. Conversely, <span class='chiffre'>13%</span> of the former declare never doing it, as opposed to <span class='chiffre'>9%</span> for the latter. The difference there isn't enormous, and is greater for women. </p><p> Among women, the effect of their education level is the opposite. Those with a high school diploma or a higher degree are more likely to use their mouths <span class='emph'>often</span> and less likely to <span class='emph'>never</span> use them. What does this opposite effect between men and women convey? Education contributes to narrowing the gap in terms of sexual practices between genders, so that everyone can enjoy the lingual talents of the opposite sex! All this information is summed up on the graph below. </p><p class='hidden'> Those who paid ful attention may have noticed that the length of the bars does not correspond to the given percentage: it corresponds to the relative proportion of the respondants between the two items <em>often</em> et <em>never</em>, so as to better compare the various series. The percentages do not sum to 100, and it's normal! </p>",
        reponse4V="<p>That's it! Among women with a high school diploma or a higher degree, <span class='chiffre'>36%</span> declare often sucking or licking their partner's genitals. Among those who don't have a high school diploma, this share goes down to <span class='chiffre'>29%</span>. These gaps are wider than for men, by a two-to-one ratio. </p><p>Among men, the effect of their education level is the opposite.  Those with a high school diploma or a higher degree are less likely to use their mouths <span class='emph'>often</span> and more likely to <span class='emph'>never</span> use them. What does this opposite effect between men and women convey? Education contributes to narrowing the gap in terms of sexual practices between genders, so that everyone can enjoy the lingual talents of the opposite sex! All this information is summed up on the graph below. </p><p class='hidden'> Pour les  attentifs qui ont remarqué que la longueur des barres ne correspond pas au pourcentage donné : elle correspond à la proportion relative des répondants entre les deux modalités <em>souvent</em> et <em>jamais</em>, afin de mieux comparer les différentes séries. La somme des pourcentages ne fait pas 100, et c'est normal !</p>",
        reponse5V="<p> And you're... half correct ! It is true that <span class='emph'> sodomy among leftists </span> is a bit more frequent than among right-wingers: <span class='chiffre'>53%</span>  of the electorate of the French Socialist Party and <span class='chiffre'>51%</span>  of ecologists declare having already tried anal penetration as opposed to <span class='chiffre'>50%</span>  for the electors of the UMP (the right wing party of Nicolas Sarkozy) and <span class='chiffre'>49%</span>  of the electors of the Modem-UDI (right center). Those latter are also the most reticent about homosexual relations. Thus, <span class='chiffre'>10%</span>  of the UMP electorate declare having experienced a same sex relationship, as opposed to <span class='chiffre'>15%</span>  for the PS electorate. <\p>But it is in fact at the extremes of the political spectrum that the party gets the wildest. The Front de Gauche (a far left movement) and the Front National (far right) thus win the prize of the most sexually uninhibited members, with respectively <span class='chiffre'>59%</span>  and <span class='chiffre'>57%</span>  of the electorate having already tried sodomy, which is on average <span class='chiffre'> 8 points </span> percentage points more than the more moderate electors! The same U-shaped scheme is found again concerning sexual relations with more than two people at once. The Front National and Front de Gauche are in the lead, with respectively <span class='chiffre'>22%</span> and <span class='chiffre'>21%</span> of their electors having already given their love to several people at the same time.  There you have it -- some common values! </p>",
        reponse5F="<p> Drop your amalgams ! It is true that <span class='emph'> sodomy among leftists </span> is a bit more frequent than among right-wingers: <span class='chiffre'>53%</span>  of the electorate of the French Socialist Party and <span class='chiffre'>51%</span>  of ecologists declare having already tried anal penetration as opposed to <span class='chiffre'>50%</span>  for the electors of the UMP (the right wing party of Nicolas Sarkozy) and <span class='chiffre'>49%</span>  of the electors of the Modem-UDI (right center). Those latter are also the most reticent about homosexual relations. Thus, <span class='chiffre'>10%</span>  of the UMP electorate declare having experienced a same sex relationship, as opposed to <span class='chiffre'>15%</span>  for the PS electorate. <\p>But it is in fact at the extremes of the political spectrum that the party gets the wildest. The Front de Gauche (a far left movement) and the Front National (far right) thus win the prize of the most sexually uninhibited members, with respectively <span class='chiffre'>59%</span>  and <span class='chiffre'>57%</span>  of the electorate having already tried sodomy, which is on average <span class='chiffre'> 8 points </span> percentage points more than the more moderate electors! The same U-shaped scheme is found again concerning sexual relations with more than two people at once. The Front National and Front de Gauche are in the lead, with respectively <span class='chiffre'>22%</span> and <span class='chiffre'>21%</span> of their electors having already given their love to several people at the same time.  There you have it -- some common values! </p>",
        reponse6V="<p> Long live constancy! Indeed, among those who are <span class='emph'>little or not satisfied</span> with their sexual lives, the least unsatisfied are those who have had <span class='emph'> only one partner</span>. Among the steady lovers, <span class='chiffre'>1 in 4</span> is little satisfied or not satisfied at all, as opposed to <span class='chiffre'>1 in 3</span> for the hot-to-trot who have had four or five different partners!</p><p>But in fact, we notice that once there is more than one partner, <span class='emph'> the dissatisfaction rates are more or less the same</span>, whether it be a case of two or eighteen partners! How can we explain this? The special value attributed to a first love, a total bonding with the significant other? On the other hand, do we become increasingly demanding when our prospects are multiplied?  The answer is in your hands! <span class='hidden'>your hands, not your legs...</span></p>",
        reponse6F="<p>Too bad for Barney! Because, yes, among those who are <span class='emph'>little or not satisfied</span> with their sexual lives, the least unsatisfied are those who have had <span class='emph'> only one partner</span>. Among the steady lovers, <span class='chiffre'>1 in 4</span> is little satisfied or not satisfied at all, as opposed to <span class='chiffre'>1 in 3</span> for the hot-to-trot who have had four or five different partners!</p><p>But in fact, we notice that once there is more than one partner, <span class='emph'> the dissatisfaction rates are more or less the same</span>, whether it be a case of two or eighteen partners! How can we explain this? The special value attributed to a first love, a total bonding with the significant other? On the other hand, do we become increasingly demanding when our prospects are multiplied?  The answer is in your hands!  <span class='hidden'>your hands, not your legs...</span></p>",
        reponse7F="<p>...it is the case for de <em>only</em> <span class='chiffre'>14%</span> of non-cohabiting couples </p><p>...whereas there is <span class='chiffre'>1 in 2</span> among cohabiting couples</p>",
        reponse7V=reponse7F,
        reponse8F="<p>How pessimistic! The share of respondents with a moderate but steady sexual activity (around once a week) is <span class='emph'> the same for all ages</span>: <span class='chiffre'>45%</span> (click on the graph's legend). However, those under 25 are in the lead, with <span class='chiffre'>15%</span> of them who make love every other day. For those over 65 enjoying such a pace, the share goes down to ... <span class='chiffre'>2%</span>.</p><p> No reason to panic however-- between 50 and 65, there is still <span class='chiffre'>1 in 4</span> respondents with a frequency of <span class='emph'> at least twice a week </span>.  Better yet, by cumulating the respondents, we get that <span class='emph'>more than half of those over 65 who give a response other than “never”</span>… Good news, then, we can still enjoy sex when we're old, but with a bit of moderation! </p>",
        reponse8V="<p>Beautiful! Indeed, the share of respondents with a moderate but steady sexual activity (around once a week) is <span class='emph'> the same for all ages</span>: <span class='chiffre'>45%</span> (click on the graph's legend). However, those under 25 are in the lead, with <span class='chiffre'>15%</span> of them who make love every other day. For those over 65 enjoying such a pace, the share goes down to ... <span class='chiffre'>2%</span>.</p><p> No reason to panic however-- between 50 and 65, there is still <span class='chiffre'>1 in 4</span> respondents with a frequency of <span class='emph'> at least twice a week </span>.  Better yet, by cumulating the respondents, we get that <span class='emph'>more than half of those over 65 who give a response other than “never”</span>… Good news, then, we can still enjoy sex when we're old, but with a bit of moderation! </p>",
    textes = {
        vrai : [
            reponse1V ,
            reponse2V ,
            reponse3V ,
            reponse4V ,
            reponse5V ,
            reponse6V ,
            reponse7V ,
            reponse8V ,
        ],
        faux : [
            reponse1F ,
            reponse2F ,
            reponse3F , 
            reponse4F ,
            reponse5F ,
            reponse6F ,
            reponse7F ,
            reponse8F ,
    ]},
        scroller = function(){};
    
    
    document.querySelector("#quizz1 .commentaire").innerHTML = reponse1V ;
    document.querySelector("#quizz2 .commentaire").innerHTML = reponse2V ;
    document.querySelector("#quizz3 .commentaire").innerHTML = reponse3V ;
    document.querySelector("#quizz4 .commentaire").innerHTML = reponse4V ;
    document.querySelector("#quizz5 .commentaire").innerHTML = reponse5V ;
    document.querySelector('#quizz6 .commentaire').innerHTML = reponse6V ;
    document.querySelector('#quizz7 .commentaire').innerHTML = reponse7V ;
    document.querySelector('#quizz8 .commentaire').innerHTML = reponse8V ;



//-------------------------------------------------------------
// Début du script        
    var clics = document.querySelectorAll('.fenetreQuestion'),  // Récupération de toutes les fenêtres de question
        Reponse = {                                               // Création d'un prototype contenant la fenêtre mère parente et le clic
        init:function(bloc,result){
            this.fenetre = bloc ;
            this.result = result ;
        }
        },
        reponse = Object.create(Reponse),                       // Création de l'objet réponse
        infogra, comm, question,                               // Création des variables utilisées dans la boucle
        action = function(){
            question.style.WebkitFilter = 'opacity(0%)' ;     // On désaffiche la fenêtre question
            infogra.style.WebkitFilter = 'none' ;            // On enlève le flous sur les infographies
            comm.style.WebkitFilter = 'none' ;
            
            question.style.filter = 'opacity(0%)' ;     // On désaffiche la fenêtre question
            infogra.style.filter = 'none' ;            // On enlève le flous sur les infographies
            comm.style.filter = 'none' ;
            
            question.style.zIndex = '-1' ;  // On passe la fenêtre question derrière pour pas pouvoir cliquer dessus
        },
        comLat = document.getElementById('comLat');

    for (i=0, n=clics.length; i<n; i++) {                       // On 'prépare à l'écoute' toutes les fenêtres de la page
        clics[i].addEventListener('click',function(e){

            if (e.target.className === 'reponseV') {                    // On récupère true si cliqué sur V, false si cliqué sur F
                reponse.init(e.target.parentNode.parentNode,true);      // et un caractère vide si cliqué ailleurs dans la fenêtre
            } else if (e.target.className === 'reponseF') {
                reponse.init(e.target.parentNode.parentNode,false);
            } else {
                reponse.init(e.target.parentNode.parentNode,'erreur');
            }
        
            idFenetre = reponse.fenetre.id ;
        
            if (reponse.result != 'erreur') {                                  // On ne modifie le CSS que si l'utilisateur a répondu
                infogra = document.querySelector("#" + idFenetre + " .infographie") ;   // On enregistre les trois enfants de la fenêtre mère
                question = document.querySelector("#" + idFenetre + " .fenetreQuestion") ;      // On récupère l'élément question
                comm = document.querySelector("#"+ idFenetre + " .commentaire") ;       // On récupère le commentaire de réponse
                noQuestion = idFenetre.charAt(5) - 1;
                (reponse.result) ? comm.innerHTML = textes.vrai[noQuestion]: comm.innerHTML = textes.faux[noQuestion] ; 
                setTimeout(action,200) ;
                
                switch (noQuestion+1) { // On scrolle la page selon le quizz
                    case 2 : 
                        window.scrollBy(0,70) ;
                        break ;
                    case 3 :
                        window.scrollBy(0,190) ;
                        break ;
                    case 4 :
                        window.scrollBy(0,175) ;
                        break ;
                    case 5 :
                        window.scrollBy(0,270) ;
                        break ;
                    case 6 :
                        window.scrollBy(0,340) ;
                        break ;
                    case 7 :
                        comLat.style.filter = 'none' ;
                        comLat.style.WebkitFilter = 'none' ;
                        window.scrollBy(0,300) ;
                        break ;
                    case 8 :
                        window.scrollBy(0,300) ;
                        break ;
                }
            }
        });
    }
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
        texteAurevoir = "<p>We thankfully acknowledge the courage of readers that went until the bottom of that page (and were clever enough to click on the little cross). We (again) thank Ifop for letting us use their precious aggregated data. In spite of all the scientific integrity we put in this work, the results presented here DO NOT allow to draw any causality relations... No, having had only one sexual intercourse doesn't make you the most satisfied among your friends. We hope that you were surprised, diverted, and why not teached some stuff !</p><p>From now on, you will be able to shut your friend Shirley's trap, you know, the one who tries to impress you with her long list of sexual partners--at least thirty of them! In any case, it is not the number that counts! </p><p>You will also be able to justify your not always well accepted political orientation by the sexual openness of their adherents. Oh no! This would amount to drawing wrong conclusions from the data! </p><p>And if you want to be really nice, share this page with your friends, parents, grandparents, colleagues, Barack Obama or Emma Watson … which would help us get a good grade !</p>",
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

// Couple
$(function() {
  $('#couple').highcharts({
    chart: {
        type: 'bar',
        backgroundColor : null
    },
    colors: ['#CBA148', '#107671', '#004C59'],
    title: {
      text: 'Stacked bar chart'
    },
    xAxis: {
      categories: ['Living together couple', 'Living apart couple', 'Not in a couple but has been', 'Has never been in a couple']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Percentage (%)'
      }
    },
    tooltip: {
      valueSuffix: '%'
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'Not at all satisfied',
      data: [5, 3, 19, 16]

    }, {
      name: 'Little satisfied',
      data: [16, 11, 29, 29]
    }]
  });
});

// Gauge
(function(){
    
var legend1 = "<span style='font-weight:100'>A little</span>",
    legend2 = "<span style='font-weight:100'>A lot</span>",
    legend3 = "<span style='font-weight:100'>Not at<br/> all</span>";




$(function () {
    
    if (!Highcharts.theme) {
        Highcharts.setOptions({
            chart: {
                backgroundColor: 'none'
            },
            colors: ['#CBA148', '#0092B9', '#107671']
        });
    }
    // 

    Highcharts.chart('gauge', {

        chart: {
            type: 'solidgauge',
            marginTop: 0
        },

        title: {
            text: '',
        },

        tooltip: {
            borderWidth : 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '15px',
                fontFamily: 'Gill Sans'
            },
            pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
            positioner: function (labelWidth, labelHeight) {
                return {
                    x: 200 - labelWidth / 2,
                    y: 150
                };
            }
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for 'un peu H'
                outerRadius: '112%',
                innerRadius: '100%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),            
                borderWidth:0,


            }, { // Track for 'un peu F'
                outerRadius: '100%',
                innerRadius: '88%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),
                 borderWidth:0,


            }, { // Track for Beaucoup H
                outerRadius: '87%',
                innerRadius: '75%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
								borderWidth:0,


            }, { // Track for Beaucoup F
                outerRadius: '75%',
                innerRadius: '63%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
                borderWidth: 0
            }, { // Track for Pas du tout H
                outerRadius: '62%',
                innerRadius: '50%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
                borderWidth: 0
            }, { // Track for Pas du tou F
                outerRadius: '50%',
                innerRadius: '38%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 60,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                borderWidth: 17,
                dataLabels: {
                    enabled: false
                },
                linecap : 'round',
                stickyTracking: false
            }
        },

        series: [{
            name: '(men) <br/><b>a little :</b>',
            borderColor:Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '106%',
                innerRadius: '106%',
                y: 40
            }]
        }, {
            name: '(women) <br/><b>a little :</b>',
            borderColor:Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '94%',
                innerRadius: '94%',
                y: 51
            }]
        } , {
            name: '(men) <br/><b>a lot :</b>',
            borderColor:Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '81%',
                innerRadius: '81%',
                y: 49
            }]
        }, {
            name: '(women) <br/><b>a lot :</b>',
            borderColor:Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '69%',
                innerRadius: '69%',
                y: 36
            }]
        } , {
            name: '(men) <br/><b>not at all :</b>',
            borderColor:Highcharts.getOptions().colors[2],
						data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '56%',
                innerRadius: '56%',
                y: 11
            }]
        }, {
            name: '(women) <br/><b>not at all :</b>',
            borderColor:Highcharts.getOptions().colors[2],
						data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '44%',
                innerRadius: '44%',
                y: 15
            }]
        }]
    },

    /**
     * In the chart load callback, add icons on top of the circular shapes
     */
    function callback() {

        // Move icon
        this.renderer.text(legend1, -55, 5)
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 0,
                'zIndex': 10
            })
            .translate(190, 26)
            .add(this.series[2].group);

        // Exercise icon
        this.renderer.text(legend2, -65, 10)
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 0,
                'zIndex': 10
            })
            .translate(190, 61)
            .add(this.series[2].group);

        // Stand icon
        this.renderer.text(legend3,-50,5)
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 0,
                'zIndex': 10
            })
            .translate(190, 96)
            .add(this.series[2].group);
    });


});

})();

// Highcharts1
(function(){
    $(function () {
    $('#highchart1').highcharts({
        data: {
            columns: [
                [null, 'Non religious people', 'non attending catholic', 'other religious people','attending catholic'], // categories
                ["Never sucked or licked his/her partner's genitals", 11, 12, 21,23], // first series
                ["Never sodomized his/her partner", 45, 47, 45,63] // second series
            ]
        },
        colors : ['#0092B9','#004C59'],
        chart: {
            type: 'column',
            backgroundColor : null
        },
        title: {
            text: ''
        },
        yAxis: {
            allowDecimals: false,
            title :'',
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ' :</b><br/>' +
                    this.point.y + '% among ' + this.point.name.toLowerCase();
            }
        },

    });
});
})();

// Nombre
(function(){
    $(function () {
    $('#nombre').highcharts({
        chart: {
            type: 'bar',
            backgroundColor : null
        },
             		colors: ['#004C59','#107671'],

        title: {
            text: ''
        },
        xAxis: {
            categories: ['1','Between 2 and 3','Between 4 and 5','Between 6 and 10','More than 10']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage (%)'
            }
        },
        tooltip: {
            valueSuffix: '%'
            },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [ {
            name: 'Not at all satisfied',
            data: [7,10,9,9,9]
     
        },
        {
            name: 'Little satisfied',
            data: [18,18,21,20,20]
        }]
    });
});
})();

//Polsodo
$(function () {
    $('#polsodo').highcharts({ 
        chart : {
            backgroundColor : null
        },
        colors: ['#CBA148', '#107671', '#004C59'],
        title: {
            text: '',
            x: -20 //center
        },
       
        xAxis: {
            categories: ['Front de Gauche', 'PS','Europe Ecologie les Verts','Modem-UDI','UMP','Front National']
        },
        yAxis: {
            title: {
                text: 'Percentage (%)'
            },
             tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ' :</b><br/>' +
                    this.point.y + '% among ' + this.point.name.toLowerCase();
            }
        },
        
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'Have had sex with more than two people at the same time',
            data: [22, 17, 16, 13, 14, 21],
            visible : false
        }, {
            name: 'Have had an homosexual sex intercourse',
            data: [16, 15, 18, 11, 10, 15],
            visible : false
        }, {
            name: 'Has performed anal sex',
            data: [55, 53, 51, 49, 50, 57]
            
        }]
        
        
    });
});


// Treemap
$(function () {
    $('#treemap').highcharts({
    		chart : {
        	   type : 'treemap',
                backgroundColor : null
            },
    		plotOptions : {
        	treemap : {
							allowDrillToNode : true,
              interactByLeaf : true,
              layoutAlgorithm : 'stripes',
              tooltip : {
              	pointFormat : '<b>{point.name}</b>'
              }
            }
        },
        series: [{
        	levels: [{
                level: 1,
                layoutAlgorithm : 'stripes',
                layoutStartingDirection : 'horizontal',
                borderWidth : 5,
                dataLabels: {
                align : 'left',
                    enabled: true,
                    style: {
                        fontSize: '15px',
                        fontWeight: 'bold',
                        color : '#FFFFFF'
                    }
                }
            },{
            		level : 2,
                layoutStartingDirection : 'horizontal',
                dataLabels :{
                align : 'left',
                	enabled : true,
                  style : {
                  	fontSize : '13px'
                   },
                  color : '#FFFFFF'
                }
            },{
            		level : 3,
                layoutStartingDirection : "vertical",
                dataLabels : {
                	enabled : true,
									color : 'rgb(230,230,230)',
                  verticalAlign : 'bottom',
                  align : 'right'
                }
            }],
            data: [{
                id: 'D',
                name: 'Graduated from college',
            }, {
                id: 'R',
                name: 'Did not graduated from college',
            },{
            		id: 'DH',
                name: 'Men',
                parent : 'D'
            }, {
            		id: 'DF',
                name: 'Women',
                parent : 'D'
            },{
                name: 'Often : 48%',
                parent: 'DH',
                color : '#107671',
                value: 78.7,
                  dataLabels :{
                format : "Often"
                }
            },{
            		name : 'Never : 13%',
                parent: 'DH',
                color : '#004C59',
                value : 21.3,
                dataLabels : {
                format : "Never"
                }
            },{
            		name : 'Often : 36%',
                parent: 'DF',
                color : '#CBA148',
                value : 72,
                  dataLabels :{
                format : "Often"
                }
            },{
            		name : 'Never : 14%',
                parent : 'DF',
                color : '#B67823',
                value : 28,
                dataLabels : {
                format : "Never"
                }
            },{
            		id: 'RH',
                name: 'Hommes',
                parent : 'R',
            }, {
                id: 'RF',
                name: 'Femmes',
                parent : 'R',
            },{
                name: 'Often : 50%',
                parent: 'RH',
  							color: '#107671',
                value: 84.7,
                  dataLabels :{
                format : "Often"
                }
            },{
            		name : 'Never : 9%',
                parent: 'RH',   
                color : '#004C59',
                value : 15.3,
                dataLabels : {
                format : "Never"
                }
            },{
            		name : 'Often : 29%',
                parent: 'RF',
                value : 61.7,
                color : '#CBA148',
                dataLabels :{
                format : "Often"
                }
            },{
            		name : 'Never : 18%',
                parent : 'RF',
                value : 38.3,
                color : '#B67823',
                dataLabels : {
                format : "Never"
                }
            }],

        }],
        title: {
            text: ''
        }
    });
});

// vieillir
$(function () {
    $('#vieillir').highcharts({
        chart: {
            type: 'area',
            backgroundColor : null
        },
        colors:['rgba(248,215,201,1)','rgba(0,146,185,0.3)','rgba(203,161,72,0.5)'],
        legend : {
        	width : 50,
        },
        title: {
            text: ''
        },
        xAxis: {
            title : {
                text: "Age category"
            },
            categories: ['Less than 35','Between 35 and 50','More than 50']
        },
        yAxis: {
            title: {
                text: "Percentage among age category"
            },
            floor : 20
        },
        tooltip: {
            pointFormat: '{series.name} : <b>{point.y}%</b><br/>'
        },
        plotOptions: {
            area: {
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'At least twice a week',
            data: [33,31,21]
        },{
            name: 'About once a week',
            data: [46,46,46],
            visible : false
        },{
            name: 'Never',
            data: [21,23,33]
        }]
    });
});