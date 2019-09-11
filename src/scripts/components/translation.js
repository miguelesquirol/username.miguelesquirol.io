export function translation() {
  // Get started!

  var userLang = navigator.language || navigator.userLanguage;
  var lngbrowser = userLang.substring(0, 2);

  i18next.init(
    {
      lng: lngbrowser,
      debug: true,
      resources: {
        pt: {
          translation: {
            title: "Diseñador Gráfico <span>-</span> Líder Creativo",
            text:
              "<p>Há mais de 10 anos trabalhando em impressão e digital, tenho paixão por criar soluções e experiências originais e atraentes. Eu vejo meus projetos desde a concepção até a produção, sem comprometer a atenção aos detalhes.</p><p>Minha força está no entendimento das necessidades reais do cliente e na capacidade de criar um conceito que responda a ele, em todos os pontos de contato. Eu sempre trago as pessoas juntas como um líder verdadeiro e apaixonado.</p>",
            logo4: "GLUCERNA",
            "logo4-text":
              "<li><b>Abbott</b></li><li>Web Design</li><li>Photoshoot</li>",
            logo2: "COMPLEXE chDESJARDINS",
            "logo2-text":
              "<li><b>Mall</b></li><li>Branding</li><li>Seasonal Campaigns</li><li>Projects all year long</li>",
            logo3: "METRO INC.",
            "logo3-text":
              "<li><b>Retail</b></li><li>Branding</li><li>Brand Guidelines Book</li>",
            logo1: "SIMILAC",
            "logo1-text":
              "<li><b>Abbott</b></li><li>Branding</li><li>Seasonal Campaigns</li><li>Projects all year long</li><li>Social Media</li>",
            logo5: "MIKES",
            "logo5-text":
              "<li><b>Restaurants</b></li><li>Digital Campaigns</li><li>Web Banners</li>",
            logo6: "CSJR",
            "logo6-text":
              "<li><b>Community Involvement</b></li><li>Logotype</li><li>Web Design</li><li>Flyers and Banners</li>",
            logo7: "LA PRESSE +",
            "logo7-text":
              "<li><b>Daily newspaper</b></li><li>Digital Edition</li><li>Visual Data and infographics</li><li>lllustration</li>",
            logo8: "BOMBARDIER",
            "logo8-text":
              "<li><b>Aviation</b></li><li>Print ads</li><li>Christmas card</li>",
            "p1-title": "BOMBARDIER-pt",
            "p1-subtitle":
              "<li><b>Aviation</b></li><li>Print ads</li><li>Christmas card</li>",
            "p1-title": "LA PRESSE +",
            "p1-subtitle":
              "Photomontage, edition and original illustrations for articles published in different sections of the daily newspaper LaPresse +.",
            "p2-title": "INTERNATIONAL",
            "p2-subtitle":
              "<p>Display campaigns for theaters and a magazine in the Bordeaux Region, France.</p>",
            "p3-title": "BOMBARDIER",
            "p3-subtitle":
              "<p>Print Ads for in magazines for different causes in the name of the world famous company .</p>",
            "p4-title": "CSJR",
            "p4-subtitle":
              "<p>Visual identity of the CSJR (Restorative Justice Services Center), website, promotional material.</p>",
            "p5-title": "SIMILAC",
            "p5-subtitle":
              "<p>Repositioning the Similac brand, Abbott Laboratories, in the face of competition in the infant formula sector. Wanting to be closer to its target, the brand wants to show moms and dads that they understand their reality, in the good times of this new life and in the most difficult moments. .</p><p>Redesign of the website, CRM and Facebook.</p><p>Original illustrations  Implementation of a content strategy to rejuvenate the brand on Facebook and make it more accessible, more fun and informative.</p>",
            "p6-title": "METRO",
            "p6-subtitle":
              "<p>Participation in the creation of a new identity platform for the Metro brands. Visual creation, writing and production of a 150-page Brand Guidelines Book of the Quebecers' favorite grocer.</p>",
            "p7-title": "MIKES",
            "p7-subtitle": "<p>Seasonal digital campaigns for Mikes.</p>",
            "p8-title": "GLUCERNA",
            "p8-subtitle":
              "<p>Website redesign for Glucerna, brand of Abbott Laboratories. The idea is to make the information that is relevant to the primary target (type 2 diabetes), clear and easily understandable. The photo montages and the presentation of the articles must allow the user to visualize very quickly the solution to his problem and make it concrete in his daily diet.</p><p>Desktop and mobile version.</p>",
            "p9-title": "SCORES",
            "p9-subtitle":
              "<p>Creation of a Facebook canvas introducing the Grand Saladier of Restaurants Scores. 60 seconds video filmed in a restaurant, photo montages and GIF animations.</p>",
            "p10-title": "COMPLEXE DESJARDINS",
            "p10-subtitle":
              '<p>2019 Summer Campaign for Complexe Desjardins, a shopping center in the heart of the City of Montreal. Concept based on the idea of a "village éphémère", conveyed through colorful visuals and objects made of paper cut and folded. The objects represent the offer of the Complex, the hundreds of shops and restaurants, as well as free events scheduled throughout the year. .</p><p>The 360 campaign includes printed signage, TV screen animations, installations on the Main Square, 3D objects, a quiz and a digital campaign on both Facebook and Instagram.</p>',
            "p11-title": "DEVMCGILL",
            "p11-subtitle":
              "<p>Visual identity of luxury real estate projects in Montreal, websites and architecture booklets.</p>"
          }
        },
        fr: {
          translation: {
            title: "Designer Graphique <span>-</span> Directrice Artistique",
            text:
              "<p>Avec plus de 10 ans d'expérience en impression et en numérique, je me passionne pour la création et la conception de solutions originales et convaincantes. Je dirige mes projets de l’idée à la production, dans le souci constant du détail.</p><p>Ma force réside dans la compréhension des besoins réels du client et dans la capacité de créer un concept qui y réponde, dans tous les points de contact de la marque.</p>",
            logo4: "GLUCERNA",
            "logo4-text":
              "<li><b>Laboratoires Abbott</b></li><li>Refonte du site internet</li><li>Photoshoot</li>",
            logo2: "COMPLEXE DESJARDINS",
            "logo2-text":
              "<li><b>Centre commercial</b></li><li>Refonte identitaire</li><li>Campagnes saisonnières</li><li>Mandats toute l'année</li>",
            logo3: "METRO INC.",
            "logo3-text":
              "<li><b>Alimentation</b><li>Plateforme de marque</li><li>Guide de normes graphiques</li>",
            logo1: "SIMILAC",
            "logo1-text":
              "<li><b>Laboratoires Abbott</b></li><li>Refonte du site internet</li><li>Illustration originale</li><li>Réseaux sociaux</li>",
            logo5: "MIKES",
            "logo5-text":
              "<li><b>Restaurants</b></li><li>Campagnes numériques</li><li>Bannières web</li>",
            logo6: "CSJR",
            "logo6-text":
              "<li><b>Communautaire</b></li><li>Logotype</li><li>Site web</li><li>Matériel promotionnel</li>",
            logo7: "LA PRESSE +",
            "logo7-text":
              "<li><b>Quotidien québécois</b><li>Édition numérique</li><li>Data-visuel</li><li>Illustration originale</li>",
            logo8: "BOMBARDIER",
            "logo8-text":
              "<li><b>Aéronautique</b></li><li>Publicité imprimée</li><li>Carte de Noël</li>",
            "p1-title": "LA PRESSE +",
            "p1-subtitle":
              "<p>Participation au lancement de La Presse +, grand journal quotidien québécois et premier au monde à être édité uniquement sur tablette, avec plus de 400 000 téléchargements en 9 mois.</p><p>Photomontage, édition, data-visuel et illustrations originales pour des dossiers publiés dans différents cahiers du quotidien. Perfectionnement, au fil des mois, de l'expérience et de la navigation de l'utilisateur, au travers d'une nouvelle façon pour les Québécois de lire le journal.</p>",
            "p2-title": "AFFICHES",
            "p2-subtitle":
              "<p>Campagnes d’affichage et matériel promotionnel pour des Théâtres et des Festivals dans la Région de Bordeaux (France), ainsi que la promotion d'un magazine sur le Vin. Collaboration avec le studio SB Design.</p>",
            "p3-title": "BOMBARDIER",
            "p3-subtitle":
              "<p>Série d'encarts publicitaires dans des magazines, pour différentes causes défendues par l'entreprise multinationale canadienne Bombardier, branche Aéronautique. Mise en page de catalogues de vente et d'une carte de Voeux de Fêtes de fin d'année. .</p>",
            "p4-title": "CSJR",
            "p4-subtitle":
              "<p>Refonte globale de l'identité visuelle du Centre de Services de Justice Réparatrice, site web, affiches et matériel promotionnel. Participation bénévole au développement et à la promotion de l'association au Québec.</p>",
            "p5-title": "SIMILAC",
            "p5-subtitle":
              "<p>Repositionnement de la marque Similac (Laboratoires Abbott) face à la concurrence féroce dans le secteur du lait maternisé. Se voulant plus proche de sa cible, la marque montre aux mamans et aux papas d’aujourd’hui qu'elle comprend leur réalité, dans tous les instants de leur nouvelle vie, et qu'elle les accompagne dans cette aventure. .</p><p>Refonte du site internet, CRM et Facebook. Illustrations originales.</p><p>Mise en place d'une stratégie de contenu pour rajeunir la marque sur Facebook et la rendre plus accessible, plus ludique et plus informative.</p>",
            "p6-title": "METRO INC.",
            "p6-subtitle":
              "<p>Participation à la création d'une nouvelle plateforme identitaire pour la marque de Metro, chef de file dans le segment des supermarchés au Québec et que l'on dit \"l'épicier préféré des Québécois\".</p><p>Conception graphique et rédaction du contenu d'un livre de marque et d'un guide de normes contenant 150 pages de règles identitaires et visuelles qui sont appliquées par plus de 334 magasins au Québec.</p>",
            "p7-title": "IMVESCOR Inc., restauration",
            "p7-subtitle":
              "<p>Campagnes numériques pour les restaurants Mikes et Scores qui comptent plus d'une centaine d'enseignes et qui appartiennent au groupe Imvescor, une chaîne canadienne de restaurants basée principalement au Québec.</p><p>Bannières web animées, participation à des concours et lancement de campagnes saisonnières pour Mikes. .</p><p>Direction artistique de tournage vidéo et création d'un canvas Facebook faisant la promotion du bar à salades pour Scores.</p>",
            "p8-title": "GLUCERNA",
            "p8-subtitle":
              "<p>Refonte du site internet de la marque Glucerna (Laboratoires Abbott), qui propose des suppléments alimentaires pour les personnes souffrant de diabète de type 2. L’idée principale est de rendre l’information sur le diabète de type 2 claire et facilement compréhensible par la cible.</p><p>La présentation des articles et des Plans de repas permet à l’utilisateur de visualiser très rapidement en quoi consiste une alimentation santé et le contenu du site lui donne les outils pour suivre un régime adapté. .</p><p>Version desktop et mobile.</p>",
            "p9-title": "SCORES",
            "p9-subtitle":
              "<p>Création d'un canvas Facebook introduisant le Grand Saladier des Restaurants Scores. Vidéo de 60 secondes tournée dans un restaurant, montages photos et animations GIF.</p>",
            "p10-title": "COMPLEXE DESJARDINS",
            "p10-subtitle":
              '<p>Conception de la campagne d’été 2019 du Complexe Desjardins, un des plus grands centres commerciaux au Centre-ville de Montréal, visité plus de 17 millions de fois chaque année.</p><p>Le concept de la campagne est basé sur l’idée d’un \" village éphémère \" où les Montréalais se retrouvent pour profiter des boutiques et restaurants du Complexe, et des nombreux événements programmés sur la Grande-Place de juin à septembre, en collaboration avec les principaux Festivals du Quartier des Spectacles tels que les Francofolies, le Festival de Jazz ou Montréal Complètement Cirque.</p><p>La campagne 360 est déployée en affichage, habillage de palissades, animations sur écrans, installation d’espaces détente, objets 3D et murs instagramables sur la Grande-Place, ainsi qu’une stratégie de contenu sur Facebook et Instagram. Au travers des différentes plateformes, se déclinent des visuels colorés et une série d’objets 3D faits de papier découpé et plié. Tout cela renforce le sentiment que vous pouvez passer des moments frais et délicieux à l’intérieur des murs du Complexe tout au long de l’été.</p>',
            "p11-title": "DEVMCGILL",
            "p11-subtitle":
              "<p>Conception d'identités visuelles pour des projets immobiliers de luxe à Montréal, développés par le promoteur DevMcGill. Création logos puis de matériel promotionnel tels que brochures, pamphlets, habillage de bureaux des ventes et de bannières de grande taille, microsites, cahiers d’architectes.</p>"
          }
        },
        en: {
          translation: {
            title: "Graphic Designer <span>-</span> Artistic Director",
            text:
              "<p>More than 10 years working in both print and digital, I have a passion for creating original compelling design solutions and experiences. I see my projects from conception to production, without compromising attention to detail.</p><p>My strenght is in the understanding of the client real needs and the ability to create a concept that responds to it, in all the points of contact. I always bring people together as a true and passionate leader.</p>",
            logo4: "GLUCERNA",
            "logo4-text":
              "<li><b>Abbott</b></li><li>Web Design</li><li>Photoshoot</li>",
            logo2: "COMPLEXE DESJARDINS",
            "logo2-text":
              "<li><b>Mall</b></li><li>Branding</li><li>Seasonal Campaigns</li><li>Projects all year long</li>",
            logo3: "METRO INC.",
            "logo3-text":
              "<li><b>Retail</b></li><li>Branding</li><li>Brand Guidelines Book</li>",
            logo1: "SIMILAC",
            "logo1-text":
              "<li><b>Abbott</b></li><li>Branding</li><li>Seasonal Campaigns</li><li>Projects all year long</li><li>Social Media</li>",
            logo5: "MIKES",
            "logo5-text":
              "<li><b>Restaurants</b></li><li>Digital Campaigns</li><li>Web Banners</li>",
            logo6: "CSJR",
            "logo6-text":
              "<li><b>Community Involvement</b></li><li>Logotype</li><li>Web Design</li><li>Flyers and Banners</li>",
            logo7: "LA PRESSE +",
            "logo7-text":
              "<li><b>Daily newspaper</b></li><li>Digital Edition</li><li>Visual Data and infographics</li><li>lllustration</li>",
            logo8: "BOMBARDIER",
            "logo8-text":
              "<li><b>Aviation</b></li><li>Print ads</li><li>Christmas card</li>",
            "p1-title": "LA PRESSE +",
            "p1-subtitle":
              "<p>Participation in the launch of La Presse +, one of the most famous newspapers in Québec (Canada) and also the first in the world to be published only on tablet, with 400 000 downloads in the first 9 months.</p><p>Photomontage, edition, data-visual and original illustrations for articles published in various sections of the newspaper. Improvement, over the months, of the experience and the navigation of the user, through a new way for Quebecois to read the news.</p>",
            "p2-title": "POSTERS",
            "p2-subtitle":
              "<p>Posters and flyers for several Theaters and Festivals in the Bordeaux Region (France), as well as the promotion of a Wine magazine. Collaboration with the SB Design studio.</p>",
            "p3-title": "BOMBARDIER",
            "p3-subtitle":
              "<p>Series of advertising inserts in magazines, for various causes defended by the Canadian multinational company Bombardier, Aerospace branch. Layout of sales booklets and a holiday greeting card.</p>",
            "p4-title": "CSJR",
            "p4-subtitle":
              "<p>Visual identity of the CSJR (Restorative Justice Services Center), website, posters, promotional material. Volunteer participation in the development and promotion of the association in Quebec.</p>",
            "p5-title": "SIMILAC",
            "p5-subtitle":
              "<p>Repositioning of the Similac brand (Abbott Laboratories), on top of the competition in the infant formula sector. In order to be closer to our target, we want to show today's moms and dads that we understand their reality, in every moment of their new life, and that we don't let them down in this adventure. .</p><p>Redesign of the website, CRM and Facebook.</p><p>Original illustrations  Implementation of a content strategy to rejuvenate the brand on Facebook and make it more accessible, more fun and informative.</p>",
            "p6-title": "METRO",
            "p6-subtitle":
              "<p>Creation of a new identity platform for the Metro brand, a leader in the supermarket segment in Quebec known as \"Quebecers’ favorite grocer\".</p>.<p>Graphic conception and content writing of a brand book containing 150 pages of identity guidelines that are applied today by more than 334 stores in Quebec.</p>",
            "p7-title": "IMVESCOR INC., Restauration",
            "p7-subtitle": "<p>Digital campaigns for Mikes and Scores restaurants, which have more than 100 stores and belong to the Imvescor group, a Canadian restaurant chain based mainly in Quebec.</p><p>Animated web banners, contests and launch of seasonal campaigns for Mikes.</p><p>Artistic direction of a video shoot and creation of a Facebook canvas promoting the salad bar for Scores.</p>",
            "p8-title": "GLUCERNA",
            "p8-subtitle":
              "<p>Design of the Glucerna website, a brand of Abbott Laboratories which offers dietary supplements for people with type 2 diabetes. The main idea is to make information about type 2 diabetes clear and easily understandable by the target.</p><p>The presentation of the articles and the Meal Plans make the user visualize quickly what a healthy diet is and the content of the website gives him the tools to follow a suitable diet.</p><p>Desktop and mobile version.</p>",
            "p9-title": "SCORES",
            "p9-subtitle":
              "<p>Creation of a Facebook canvas introducing the Grand Saladier of Restaurants Scores. 60 seconds video filmed in a restaurant, photo montages and GIF animations.</p>",
            "p10-title": "COMPLEXE DESJARDINS",
            "p10-subtitle":
              '<p>Conception of the 2019 Summer Campaign of Complexe Desjardins, one of the largest shopping centers in downtown Montreal, which is visited more than 17 million times each year. The concept of the campaign is based on the idea of ​​an "ephemeral village" where Montrealers meet to enjoy the shops and restaurants of the Complexe, and also the many events planned on the Main Square from June to September, in collaboration with the famous Festivals of the Quartier des Spectacles such as the Francofolies, the Jazz Festival or Montréal Complètement Cirque.</p><p>The 360 ​​campaign is deployed in posters, walls, screen animations, relaxation space and installations, 3D objects and instagramable walls on the Grande-Place, as well as a content strategy on Facebook and Instagram. On all the different platforms, the visuals are colorful and they show a serie of 3D objects made of cut and folded paper. All of it reinforce the feeling that you can spend fresh and delightful moments inside the walls of the Complexe all summer long.</p>',
            "p11-title": "DEVMCGILL",
            "p11-subtitle":
              "<p>Design of visual identities for luxury real estate projects in Montreal, by developer DevMcGill. Creation of logotypes and promotional material such as brochures, pamphlets, sales offices and large banners, microsites, booklets etc.</p>"
          }
        },
        es: {
          translation: {
            title: "Diseñador Gráfico <span>-</span> Líder Creativo",
            text:
              "<p>Más de 10 años trabajando tanto en impresión como en digital, me apasiona crear soluciones y experiencias de diseño originales y convincentes. Superviso los proyectos durante todo el proceso, sin comprometer la atención al detalle.</p> <p> Mi fortaleza está en la comprensión de las necesidades reales del cliente y la capacidad de crear un concepto que responda a ellas, en todos los puntos de contacto. Acerco a los talentos como una verdadera y apasionada líder.</p>",
              logo4: "GLUCERNA",
              "logo4-text":
                "<li> <b> Abbott </b> </li> <li> Diseño web </li> <li> Sesión de fotos </li>",
              logo2: "COMPLEJO DESJARDINS",
              "logo2-text":
                "<li> <b> Centro comercial </b> </li> <li> Diseño de Marca </li> <li> Campañas de temporada </li> <li> Proyectos durante todo el año </li>",
              logo3: "METRO INC.",
              "logo3-text":
                "<li> <b> Venta minorista </b> </li> <li> Diseño de Marca </li> <li> Libro de directrices de marca </li>",
              logo1: "SIMILAC",
              "logo1-text":
                "<li> <b> Abbott </b> </li> <li> Diseño de Marca </li> <li> Campañas de temporada </li> <li> Proyectos durante todo el año </li> <li> Redes sociales < / li> ",
              logo5: "MIKES",
              "logo5-text":
                "<li> <b> Restaurantes </b> </li> <li> Campañas digitales </li> <li> Banners web </li>",
              logo6: "CSJR",
              "logo6-text":
                "<li> <b> Participación en la comunidad </b> </li> <li> Logotipo </li> <li> Diseño web </li> <li> Volantes y pancartas </li>",
              logo7: "LA PRESSE +",
              "logo7-text":
                "<li> <b> Periódico diario </b> </li> <li> Edición digital </li> <li> Datos visuales e infografías </li> <li>Ilustración </li>",
              logo8: "BOMBARDIER",
              "logo8-text":
                "<li> <b> Aviación </b> </li> <li> Publicidad impresa </li> <li> Tarjeta de Navidad </li>",
              "p1-title": "LA PRESSE +",
              "p1-subtitle":
                "<p> Participación en el lanzamiento de La Presse +, uno de los periódicos más famosos de Québec (Canadá) y también el primero en el mundo que se publica solo en tabletas, con 400 000 bajadas en los primeros 9 meses. </ p> <p> Fotomontaje, edición, datos visuales e ilustraciones originales para artículos publicados en varias secciones del periódico. Mejora, a lo largo de los meses, de la experiencia y la navegación del usuario, creando una nueva forma para que los Quebequenses lea el noticias. .</p> ",
              "p2-title": "CARTELES",
              "p2-subtitle":
                "<p> Carteles y volantes para varios teatros y festivales en la región de Burdeos (Francia), así como la promoción de una revista de vinos. Colaboración con el estudio SB Design. .</p>",
              "p3-title": "BOMBARDIER",
              "p3-subtitle":
                "<p> Serie de inserciones publicitarias en revistas, por diversas causas defendidas por la multinacional canadiense Bombardier, sucursal aeroespacial. Diseño de folletos de ventas y una tarjeta de felicitación navideña. .</p>",
              "p4-title": "CSJR",
              "p4-subtitle":
                "<p> Identidad visual del CSJR (Centro de Servicios de Justicia Restaurativa), sitio web, carteles, material promocional. Participación voluntaria en el desarrollo y promoción de la asociación en Quebec. .</p>",
              "p5-title": "SIMILAC",
              "p5-subtitle":
                "<p> Reposicionamiento de la marca Similac (Abbott Laboratories), además de la competencia en el sector de fórmulas infantiles. Para estar más cerca de su objetivo, queríamos mostrarles a las mamás y papás de hoy que la compañía entiene su realidad, en cada momento de su nueva vida, y que no los decepcionaran en esta aventura. .</p> <p> Rediseño del sitio web, CRM y Facebook. .</p> <p> Ilustraciones originales Implementación de una estrategia de contenido para rejuvenecer la marca en Facebook y hacerla más accesible, más divertida e informativa. .</p> ",
              "p6-title": "METRO",
              "p6-subtitle":
                "<p> Creación de una nueva plataforma de identidad para la marca Metro, líder en el segmento de supermercados en Quebec conocida como \" Tienda de comestibles favorita de los quebequenses \".</p>. <p> Concepción gráfica y redacción de contenido de un libro de marca que contiene 150 páginas de pautas de identidad que se aplican hoy en más de 334 tiendas en Quebec. .</p> ",
              "p7-title": "IMVESCOR INC., Restauration",
              "p7-subtitle": "<p> Campañas digitales para restaurantes Mikes y Scores, que tienen más de 100 sucursales y pertenecen al grupo Imvescor, una cadena de restaurantes canadienses con sede principalmente en Quebec. .</p> <p> Banners web animados , concursos y lanzamiento de campañas de temporada para Mikes. .</p> <p> Dirección artística de una sesión de video y creación de un lienzo de Facebook que promueve la barra de ensaladas de Scores. .</p>",
              "p8-title": "GLUCERNA",
              "p8-subtitle":
                "<p> Diseño del sitio web Glucerna, una marca de Laboratorios Abbott que ofrece suplementos dietéticos para personas con diabetes tipo 2. La idea principal es hacer que la información sobre la diabetes tipo 2 sea clara y fácilmente comprensible para el objetivo. .</p> < p> La presentación de los artículos y los Planes de comidas hacen que el usuario visualice rápidamente qué es una dieta saludable y el contenido del sitio web le brinda las herramientas para seguir una dieta adecuada. .</p> <p> Versión de escritorio y móvil. < / p> ",
              "p9-title": "PUNTUACIONES",
              "p9-subtitle":
                "<p> Creación de un lienzo de Facebook que presenta las puntuaciones de Grand Saladier of Restaurants. Video de 60 segundos filmado en un restaurante, fotomontajes y animaciones GIF. .</p>",
              "p10-title": "COMPLEJO DESJARDINS",
              "p10-subtitle":
              '<p>Campaña de verano de 2019 para Complexe Desjardins, un centro comercial en el corazón de la ciudad de Montreal. Concepto basado en la idea de una -/"aldea éphémère/", transmitida a través de imágenes y objetos coloridos hechos de papel cortado y doblado. Los objetos representan la oferta del Complejo, los cientos de tiendas y restaurantes, así como los eventos gratuitos programados durante todo el año. . .</p> <p> La campaña 360 incluye señalización impresa, animaciones de pantalla de TV, instalaciones en la Plaza Principal, objetos 3D, un cuestionario y una campaña digital en Facebook e Instagram. .</p> ',
              "p11-title": "DEVMCGILL",
              "p11-subtitle":
                "<p> Identidad visual de proyectos inmobiliarios de lujo en Montreal, sitios web y folletos de arquitectura. .</p>"
          }
        }
      }
    },
    function(err, t) {
      // init set content
      updateContent();
    }
  );

  function updateContent() {
 
    document.getElementById("title").innerHTML = i18next.t("title");
    document.getElementById("text").innerHTML = i18next.t("text");

    for (var i = 1; i <= 8; i++) {
      document.getElementById("logo" + i).innerHTML = i18next.t("logo" + i);
      document.getElementById("logo" + i + "-text").innerHTML = i18next.t(
        "logo" + i + "-text"
      );
    }

    
  }

  function loadmodal(){
    var title = $(this).data("info");
    $("#mosaiciframe").load(title, function() {
      loadmodalopen();
    });
  }

  function loadmodalopen(){
    for (var i = 1; i <= 10; i++) {
      if ($("#p" + i + "-title")[0]) {
        console.log("p" + i + "-title");

        document.getElementById("p" + i + "-title").innerHTML = i18next.t(
          "p" + i + "-title"
        );
        document.getElementById("p" + i + "-subtitle").innerHTML = i18next.t(
          "p" + i + "-subtitle"
        );
      }
    }

  }

  $(".mosaicbutton").click(loadmodal);

  function changeLng(lng) {
    i18next.changeLanguage(lng);
  }

  i18next.on("languageChanged", () => {
    updateContent();

    if ($("#mosaicmodal").hasClass("show")) {
    loadmodalopen();
  }
  });



}

export default translation;
