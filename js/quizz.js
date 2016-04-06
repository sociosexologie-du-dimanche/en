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
        reponse8F="<p>How pessimistic! The share of respondents with a moderate but steady sexual activity (around once a week) is <span class='emph'> the same for all ages</span>: <span class='chiffre'>45%</span> (click on the graph's legend). However, those under 25 are in the lead, with <span class='chiffre'>15%</span> of them who make love every other day. For those over 65 enjoying such a pace, the share goes down to ... <span class='chiffre'>2%</span>.</p><p> No reason to panic however-- between 50 and 65, there is still <span class='chiffre'>1 in 4</span> respondents with a frequency of <span class='emph'> at least twice a week </span>.  Better yet, by cumulating the respondents, we get that <span class='emph'>more than half of those over 65 give a response other than “never”</span>… Good news, then, we can still enjoy sex when we're old, but with a bit of moderation! </p>",
        reponse8V="<p>Beautiful! Indeed, the share of respondents with a moderate but steady sexual activity (around once a week) is <span class='emph'> the same for all ages</span>: <span class='chiffre'>45%</span> (click on the graph's legend). However, those under 25 are in the lead, with <span class='chiffre'>15%</span> of them who make love every other day. For those over 65 enjoying such a pace, the share goes down to ... <span class='chiffre'>2%</span>.</p><p> No reason to panic however-- between 50 and 65, there is still <span class='chiffre'>1 in 4</span> respondents with a frequency of <span class='emph'> at least twice a week </span>.  Better yet, by cumulating the respondents, we get that <span class='emph'>more than half of those over 65 give a response other than “never”</span>… Good news, then, we can still enjoy sex when we're old, but with a bit of moderation! </p>",
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


