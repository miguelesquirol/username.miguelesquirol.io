
export function translation() {

    // Get started!

i18next.init({
  lng: 'fr',
  debug: true,
  resources: {
    pt: {
      translation: {
        "title": "DIRETOR ARTÍSTICO",
        "text" : "Como designer em design gráfico digital e tradicional, desenvolvo conceitos de diferentes formas e realizo projetos com o desejo constante de trazer resultados. Exigente, criativo, unificador, comprometido, sou excelente em encontrar cada vez o que o cliente mais precisa. Branding, publicação, postagem, websites, microsites, banners, CRM, redes sociais ... Com facilidade em gerenciamento de projetos e coaching de uma equipe, minha paixão está nos brainstorms coletivos e na minha força no busca de conceitos.",
        "logo1" : "Glucerna-pt",
        "logo1-text" : "<li>Refonte du site web</li><li>Expérience Usager</li><li>Prise de vue en studio</li><li>Montage photo</li>",
        "logo2" : "Brunet - pt",
        "logo2-text" : "Réseaux sociaux"

      }
    },
    fr: {
      translation: {
        "title": "DIRECTRICE ARTISTIQUE",
        "text": "Conceptrice en design graphique numérique et traditionnel, je développe des concepts sous différentes formes et réalise des projets avec le souci constant d’amener des résultats. Exigeante, créative, rassembleuse, engagée, j'excelle à trouver chaque fois ce dont le client a le plus besoin. Branding, édition, affichage, sites internet, microsites, bannières, CRM, réseaux sociaux... À l’aise dans la gestion de projet et l’encadrement d’une équipe, ma passion est dans les brainstorms collectifs et ma force dans la recherche de concepts.",
        "logo1" : "Glucerna",
        "logo1-text" : "<li>Refonte du site web</li><li>Expérience Usager</li><li>Prise de vue en studio</li><li>Montage photo</li>",
        "logo2" : "Brunet",
        "logo2-text" : "Réseaux sociaux", 
      }
    },
    
    en: {
      translation: {
        "title": "ARTISTIC DIRECTOR",
        "text": "As a designer in digital and traditional graphic design, I develop concepts in different forms and realize projects with the constant desire to bring results. Demanding, creative, unifying, committed, I excel in finding each time what the customer needs most. Branding, publishing, posting, websites, microsites, banners, CRM, social networks ... At ease in project management and coaching a team, my passion is in the collective brainstorms and my strength in the search for concepts.." ,
        "logo1" : "Glucerna-en",
        "logo1-text" : "<li>Refonte du site web</li><li>Expérience Usager</li><li>Prise de vue en studio</li><li>Montage photo</li>",
        "logo2" : "Brunet - en",
        "logo2-text" : "Réseaux sociaux" 
      }
    }

  }
}, function(err, t) {
  // init set content
  updateContent();
});

function updateContent() {
  document.getElementById('title').innerHTML = i18next.t('title');
  document.getElementById('text').innerHTML = i18next.t('text');

  for (var i = 1; i <= 2; i++) {
  document.getElementById('logo' + i).innerHTML = i18next.t('logo' + i);
  document.getElementById('logo' + i + '-text').innerHTML = i18next.t('logo' + i + '-text'); }
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});

}

export default translation;
