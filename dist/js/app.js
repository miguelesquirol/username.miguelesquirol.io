!function(e){function t(t){for(var o,l,s=t[0],r=t[1],d=t[2],c=0,u=[];c<s.length;c++)l=s[c],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&u.push(a[l][0]),a[l]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);for(p&&p(t);u.length;)u.shift()();return n.push.apply(n,d||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],o=!0,s=1;s<i.length;s++){var r=i[s];0!==a[r]&&(o=!1)}o&&(n.splice(t--,1),e=l(l.s=i[0]))}return e}var o={},a={0:0},n=[];function l(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=e,l.c=o,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(i,o,function(t){return e[t]}.bind(null,o));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var s=window.webpackJsonp=window.webpackJsonp||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=r;n.push([39,1]),i()}({11:function(e,t){Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null})},12:function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector)},39:function(e,t,i){"use strict";i.r(t);i(11),i(12);var o=i(9),a=i.n(o);i(24);var n=i(5),l=i.n(n),s=200;function r(){var e=document.querySelector('[data-js="search-target"]');if(e){var t=e.querySelector('[data-js="search-input"]'),i=function(){e.classList.add("is-hidden"),document.body.classList.remove("overflow-hidden")};document.addEventListener("click",function(o){o.target.matches('[data-js="search-trigger"]')&&(o.preventDefault(),e.classList.remove("is-hidden"),t.focus(),document.body.classList.add("overflow-hidden")),o.target.matches('[data-js="search-close"]')&&(o.preventDefault(),i())},!1),document.addEventListener("keydown",function(e){document.body.classList.contains("overflow-hidden")&&("Escape"!==e.key&&27!==e.keyCode||i())})}}var d=i(10),p=i.n(d);var c=function(){function e(){$(".background").css("background-position","50% "+$(this).scrollTop()/2+"px")}$(window).scroll(function(){$(".logo").css({bottom:-$(this).scrollTop()/5+"px"})}),$(window).scroll(function(){e()}),$(window).resize(function(){e()}),$(function(){$(".flipper").flip({trigger:"hover",autoSize:!1})})};function u(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var m=function(){var e,t=(navigator.language||navigator.userLanguage).substring(0,2);function i(){document.getElementById("title").innerHTML=i18next.t("title"),document.getElementById("text").innerHTML=i18next.t("text");for(var e=1;e<=8;e++)document.getElementById("logo"+e).innerHTML=i18next.t("logo"+e),document.getElementById("logo"+e+"-text").innerHTML=i18next.t("logo"+e+"-text")}i18next.init({lng:t,debug:!0,resources:{pt:{translation:(e={title:"Diseñador Gráfico - Líder Creativo",text:"<p>Há mais de 10 anos trabalhando em impressão e digital, tenho paixão por criar soluções e experiências originais e atraentes. Eu vejo meus projetos desde a concepção até a produção, sem comprometer a atenção aos detalhes.</p><p></p>Minha força está no entendimento das necessidades reais do cliente e na capacidade de criar um conceito que responda a ele, em todos os pontos de contato. Eu sempre trago as pessoas juntas como um líder verdadeiro e apaixonado</p>",logo4:"GLUCERNA","logo4-text":"<li><b>Abbott</b></li><li>Web Design</li><li>Photoshoot</li>",logo2:"COMPLEXE chDESJARDINS","logo2-text":"<li><b>Mall</b></li><li>Branding</li><li>Seasonal Campaigns</li><li>Projects all year long</li>",logo3:"METRO INC.","logo3-text":"<li><b>Retail</b></li><li>Branding</li><li>Brand Guidelines Book</li>",logo1:"SIMILAC","logo1-text":"<li><b>Abbott</b></li><li>Branding</li><li>Seasonal Campaigns</li><li>Projects all year long</li><li>Social Media</li>",logo5:"MIKES","logo5-text":"<li><b>Restaurants</b></li><li>Digital Campaigns</li><li>Web Banners</li>",logo6:"CSJR","logo6-text":"<li><b>Community Involvement</b></li><li>Logotype</li><li>Web Design</li><li>Flyers and Banners</li>",logo7:"LA PRESSE +","logo7-text":"<li><b>Daily newspaper</b></li><li>Digital Edition</li><li>Visual Data and infographics</li><li>lllustration</li>",logo8:"BOMBARDIER","logo8-text":"<li><b>Aviation</b></li><li>Print ads</li><li>Christmas card</li>","p1-title":"BOMBARDIER-pt","p1-subtitle":"<li><b>Aviation</b></li><li>Print ads</li><li>Christmas card</li>"},u(e,"p1-title","LA PRESSE +"),u(e,"p1-subtitle","Photomontage, edition and original illustrations for articles published in different sections of the daily newspaper LaPresse +."),u(e,"p2-title","INTERNATIONAL"),u(e,"p2-subtitle","<p>Display campaigns for theaters and a magazine in the Bordeaux Region, France..</p>"),u(e,"p3-title","BOMBARDIER"),u(e,"p3-subtitle","<p>Print Ads for in magazines for different causes in the name of the world famous company .</p>"),u(e,"p4-title","CSJR"),u(e,"p4-subtitle","<p>Visual identity of the CSJR (Restorative Justice Services Center), website, promotional material.</p>"),u(e,"p5-title","SIMILAC"),u(e,"p5-subtitle","<p>Repositioning the Similac brand, Abbott Laboratories, in the face of competition in the infant formula sector. Wanting to be closer to its target, the brand wants to show moms and dads that they understand their reality, in the good times of this new life and in the most difficult moments. </p><p>Redesign of the website, CRM and Facebook.</p><p>Original illustrations  Implementation of a content strategy to rejuvenate the brand on Facebook and make it more accessible, more fun and informative.</p>"),u(e,"p6-title","METRO"),u(e,"p6-subtitle","<p>Participation in the creation of a new identity platform for the Metro brands. Visual creation, writing and production of a 150-page Brand Guidelines Book of the Quebecers' favorite grocer.</p>"),u(e,"p7-title","MIKES"),u(e,"p7-subtitle","<p>Seasonal digital campaigns for Mikes.</p>"),u(e,"p8-title","GLUCERNA"),u(e,"p8-subtitle","<p>Website redesign for Glucerna, brand of Abbott Laboratories. The idea is to make the information that is relevant to the primary target (type 2 diabetes), clear and easily understandable. The photo montages and the presentation of the articles must allow the user to visualize very quickly the solution to his problem and make it concrete in his daily diet.</p><p>Desktop and mobile version.</p>"),u(e,"p9-title","SCORES"),u(e,"p9-subtitle","<p>Creation of a Facebook canvas introducing the Grand Saladier of Restaurants Scores. 60 seconds video filmed in a restaurant, photo montages and GIF animations..</p>"),u(e,"p10-title","COMPLEXE DESJARDINS"),u(e,"p10-subtitle",'<p>2019 Summer Campaign for Complexe Desjardins, a shopping center in the heart of the City of Montreal. Concept based on the idea of a "village éphémère", conveyed through colorful visuals and objects made of paper cut and folded. The objects represent the offer of the Complex, the hundreds of shops and restaurants, as well as free events scheduled throughout the year. .</p><p>The 360 campaign includes printed signage, TV screen animations, installations on the Main Square, 3D objects, a quiz and a digital campaign on both Facebook and Instagram..</p>'),u(e,"p11-title","DEVMCGILL"),u(e,"p11-subtitle","<p>Visual identity of luxury real estate projects in Montreal, websites and architecture booklets..</p>"),e)},fr:{translation:{title:"Designer Graphique - Directrice Artistique",text:"<p>Avec plus de 10 ans d'expérience en impression et en numérique, je me passionne pour la création et la conception de solutions originales et convaincantes. Je dirige mes projets de l’idée à la production, dans le souci constant du détail.</p><p>Ma force réside dans la compréhension des besoins réels du client et dans la capacité de créer un concept qui y réponde, dans tous les points de contact de la marque.</p>",logo4:"GLUCERNA","logo4-text":"<li><b>Laboratoires Abbott</b></li><li>Refonte du site internet</li><li>Photoshoot</li>",logo2:"COMPLEXE DESJARDINS","logo2-text":"<li><b>Centre commercial</b></li><li>Refonte identitaire</li><li>Campagnes saisonnières</li><li>Mandats toute l'année</li>",logo3:"METRO INC.","logo3-text":"<li><b>Alimentation</b><li>Plateforme de marque</li><li>Guide de normes graphiques</li>",logo1:"SIMILAC","logo1-text":"<li><b>Laboratoires Abbott</b></li><li>Refonte du site internet</li><li>Illustration originale</li><li>Réseaux sociaux</li>",logo5:"MIKES","logo5-text":"<li><b>Restaurants</b></li><li>Campagnes numériques</li><li>Bannières web</li>",logo6:"CSJR","logo6-text":"<li><b>Engagement communautaire</b></li><li>Logotype</li><li>Site web</li><li>Matériel promotionnel</li>",logo7:"LA PRESSE +","logo7-text":"<li><b>Journal quotidien québécois</b><li>Édition numérique</li><li>Data-visuel et infographies</li><li>Illustration originale</li>",logo8:"BOMBARDIER","logo8-text":"<li><b>Aéronautique</b></li><li>Publicité imprimée</li><li>Carte de Noël</li>","p1-title":"LA PRESSE +","p1-subtitle":"Photomontage, édition et illustrations originales pour des dossiers publiés dans différents cahiers du quotidien LaPresse + ","p2-title":"INTERNATIONAL","p2-subtitle":"<p>Campagnes d’affichage pour des Théâtres et un magazine dans la Région de Bordeaux, en France.</p>","p3-title":"BOMBARDIER","p3-subtitle":"<p>Publicités imprimées dans des magazines, pour différentes causes, au nom de Bombardier.</p>","p4-title":"CSJR","p4-subtitle":"<p>Refonte globale de l'identité visuelle du Centre de Services de Justice Réparatrice, site web, matériel promotionnel.</p>","p5-title":"SIMILAC","p5-subtitle":"Repositionnement de la marque Similac, des Laboratoires Abbott, face à la concurrence dans le secteur du lait maternisé. Se voulant plus proche de sa cible, la marque veut montrer aux mamans et aux papas d’aujourd’hui qu'elle comprend leur réalité, autant dans les bons moments de la vie des parents que dans les plus difficiles. </p><p>Refonte du site web, CRM et Facebook. Illustrations originales.</p><p>Mise en place d'une stratégie de contenu pour rajeunir la marque sur Facebook et la rendre plus accessible, plus ludique et plus informative.</p>","p6-title":"METRO","p6-subtitle":"<p>Participation à la création d'une nouvelle plateforme identitaire pour la marque et les sous-marques de Metro, mon épicier. Création visuelle, rédaction et production d'un livre de marque et d'un guide de normes de 150 pages sur les nouvelles normes de l'épicier préférée des Québécois.</p>","p7-title":"MIKES","p7-subtitle":"<p>Campagnes numériques saisonnières pour Mikes.</p>","p8-title":"GLUCERNA","p8-subtitle":"<p>Refonte de site web pour Glucerna, marque des Laboratoires Abbott. L’idée principale est de rendre l’information pertinente pour la cible principale, les diabétiques de type 2, claire et facilement compréhensible. Les montages photo et la présentation des articles doit permettre à l’utilisateur de visualiser très rapidement la solution à son problème et de la rendre concrète dans son alimentation de tous les jours. </p><p>Version desktop et mobile.</p>","p9-title":"SCORES","p9-subtitle":"<p>Création d'un canvas Facebook introduisant le Grand Saladier des Restaurants Scores. Vidéo de 60 secondes tournée dans un restaurant, montages photos et animations GIF.</p>","p10-title":"COMPLEXE DESJARDINS","p10-subtitle":'<p>Campagne d’été 2019 du Complexe Desjardins, centre commercial au coeur de la Ville de Montréal. Concept basé sur l’idée d\'un " village éphémère ", véhiculée au travers de visuels colorés et d’objets faits en papier découpé et plié. Les objets représentent l’offre du Complexe, soit les centaines de boutiques et restaurants, ainsi que les événements gratuits programmés tout au long de l’année.</p><p>La campagne 360 comprend de l’affichage imprimé, des animations sur écrans télé et écrans pilônes, des installations sur la Grande-Place avec mur instagramable, objets 3D, jeu concours, aménagement d’espaces de détente et campagne numérique sur Facebook et Instagram.</p>',"p11-title":"DEVMCGILL","p11-subtitle":"<p>Identité visuelle de projets immobiliers de luxe à Montréal, sites web et cahiers d’architectes.</p>"}},en:{translation:{title:"Graphic Designer - Artistic Director",text:"<p>More than 10 years working in both print and digital, I have a passion for creating original compelling design solutions and experiences. I see my projects from conception to production, without compromising attention to detail.</p><p>My strenght is in the understanding of the client real needs and the ability to create a concept that responds to it, in all the points of contact. I always bring people together as a true and passionate leader.</p>",logo4:"GLUCERNA","logo4-text":"<li><b>Abbott</b></li><li>Web Design</li><li>Photoshoot</li>      ",logo2:"COMPLEXE DESJARDINS","logo2-text":"<li><b>Mall</b></li><li>Branding</li><li>Seasonal Campaigns</li><li>Projects all year long</li>",logo3:"METRO INC.","logo3-text":"<li><b>Retail</b></li><li>Branding</li><li>Brand Guidelines Book</li>",logo1:"SIMILAC","logo1-text":"<li><b>Abbott</b></li><li>Branding</li><li>Seasonal Campaigns</li><li>Projects all year long</li><li>Social Media</li>",logo5:"MIKES","logo5-text":"<li><b>Restaurants</b></li><li>Digital Campaigns</li><li>Web Banners</li>",logo6:"CSJR","logo6-text":"<li><b>Community Involvement</b></li><li>Logotype</li><li>Web Design</li><li>Flyers and Banners</li>",logo7:"LA PRESSE +","logo7-text":"<li><b>Daily newspaper</b></li><li>Digital Edition</li><li>Visual Data and infographics</li><li>lllustration</li>",logo8:"BOMBARDIER","logo8-text":"<li><b>Aviation</b></li><li>Print ads</li><li>Christmas card</li>","p1-title":"LA PRESSE +","p1-subtitle":"Photomontage, edition and original illustrations for articles published in different sections of the daily newspaper LaPresse +.","p2-title":"INTERNATIONAL","p2-subtitle":"<p>Display campaigns for theaters and a magazine in the Bordeaux Region, France.</p>","p3-title":"BOMBARDIER","p3-subtitle":"<p>Print Ads for in magazines for different causes in the name of the world famous company .</p>","p4-title":"CSJR","p4-subtitle":"<p>Visual identity of the CSJR (Restorative Justice Services Center), website, promotional material.</p>","p5-title":"SIMILAC","p5-subtitle":"<p>Repositioning the Similac brand, Abbott Laboratories, in the face of competition in the infant formula sector. Wanting to be closer to its target, the brand wants to show moms and dads that they understand their reality, in the good times of this new life and in the most difficult moments. </p><p>Redesign of the website, CRM and Facebook.</p><p>Original illustrations  Implementation of a content strategy to rejuvenate the brand on Facebook and make it more accessible, more fun and informative.</p>","p6-title":"METRO","p6-subtitle":"<p>Participation in the creation of a new identity platform for the Metro brands. Visual creation, writing and production of a 150-page Brand Guidelines Book of the Quebecers' favorite grocer.</p>","p7-title":"MIKES","p7-subtitle":"<p>Seasonal digital campaigns for Mikes.</p>","p8-title":"GLUCERNA","p8-subtitle":"<p>Website redesign for Glucerna, brand of Abbott Laboratories. The idea is to make the information that is relevant to the primary target (type 2 diabetes), clear and easily understandable. The photo montages and the presentation of the articles must allow the user to visualize very quickly the solution to his problem and make it concrete in his daily diet.</p><p>Desktop and mobile version.</p>","p9-title":"SCORES","p9-subtitle":"<p>Creation of a Facebook canvas introducing the Grand Saladier of Restaurants Scores. 60 seconds video filmed in a restaurant, photo montages and GIF animations.</p>","p10-title":"COMPLEXE DESJARDINS","p10-subtitle":'<p>2019 Summer Campaign for Complexe Desjardins, a shopping center in the heart of the City of Montreal. Concept based on the idea of a "village éphémère", conveyed through colorful visuals and objects made of paper cut and folded. The objects represent the offer of the Complex, the hundreds of shops and restaurants, as well as free events scheduled throughout the year. .</p><p>The 360 campaign includes printed signage, TV screen animations, installations on the Main Square, 3D objects, a quiz and a digital campaign on both Facebook and Instagram.</p>',"p11-title":"DEVMCGILL","p11-subtitle":"<p>Visual identity of luxury real estate projects in Montreal, websites and architecture booklets.</p>"}},es:{translation:{title:"Diseñador Gráfico - Líder Creativo",text:"<p>Más de 10 años trabajando tanto en impresión como en digital, me apasiona crear soluciones y experiencias de diseño originales y convincentes. Superviso los proyectos durante todo el proceso, sin comprometer la atención al detalle.</p> <p> Mi fortaleza está en la comprensión de las necesidades reales del cliente y la capacidad de crear un concepto que responda a ellas, en todos los puntos de contacto. Acerco a los talentos como una verdadera y apasionada líder.</p>",logo4:"GLUCERNA","logo4-text":"<li><b>Abbott</b></li><li>Web Design</li><li>Photoshoot</li>",logo2:"COMPLEXE DESJARDINS","logo2-text":"<li><b>Mall</b></li><li>Branding</li><li>Seasonal Campaigns</li><li>Projects all year long</li>",logo3:"METRO INC.","logo3-text":"<li><b>Retail</b></li><li>Branding</li><li>Brand Guidelines Book</li>",logo1:"SIMILAC","logo1-text":"<li><b>Abbott</b></li><li>Branding</li><li>Seasonal Campaigns</li><li>Projects all year long</li><li>Social Media</li>",logo5:"MIKES","logo5-text":"<li><b>Restaurants</b></li><li>Digital Campaigns</li><li>Web Banners</li>",logo6:"CSJR","logo6-text":"<li><b>Community Involvement</b></li><li>Logotype</li><li>Web Design</li><li>Flyers and Banners</li>",logo7:"LA PRESSE +","logo7-text":"<li><b>Daily newspaper</b></li><li>Digital Edition</li><li>Visual Data and infographics</li><li>lllustration</li>",logo8:"BOMBARDIER","logo8-text":"<li><b>Aviation</b></li><li>Print ads</li><li>Christmas card</li>","p1-title":"LA PRESSE +","p1-subtitle":"Photomontage, edition and original illustrations for articles published in different sections of the daily newspaper LaPresse +.","p2-title":"INTERNATIONAL","p2-subtitle":"<p>Display campaigns for theaters and a magazine in the Bordeaux Region, France.</p>","p3-title":"BOMBARDIER","p3-subtitle":"<p>Print Ads for in magazines for different causes in the name of the world famous company .</p>","p4-title":"CSJR","p4-subtitle":"<p>Visual identity of the CSJR (Restorative Justice Services Center), website, promotional material.</p>","p5-title":"SIMILAC","p5-subtitle":"<p>Repositioning the Similac brand, Abbott Laboratories, in the face of competition in the infant formula sector. Wanting to be closer to its target, the brand wants to show moms and dads that they understand their reality, in the good times of this new life and in the most difficult moments. </p><p>Redesign of the website, CRM and Facebook.</p><p>Original illustrations  Implementation of a content strategy to rejuvenate the brand on Facebook and make it more accessible, more fun and informative.</p>","p6-title":"METRO","p6-subtitle":"<p>Participation in the creation of a new identity platform for the Metro brands. Visual creation, writing and production of a 150-page Brand Guidelines Book of the Quebecers' favorite grocer.</p>","p7-title":"MIKES","p7-subtitle":"<p>Seasonal digital campaigns for Mikes.</p>","p8-title":"GLUCERNA","p8-subtitle":"<p>Website redesign for Glucerna, brand of Abbott Laboratories. The idea is to make the information that is relevant to the primary target (type 2 diabetes), clear and easily understandable. The photo montages and the presentation of the articles must allow the user to visualize very quickly the solution to his problem and make it concrete in his daily diet.</p><p>Desktop and mobile version.</p>","p9-title":"SCORES","p9-subtitle":"<p>Creation of a Facebook canvas introducing the Grand Saladier of Restaurants Scores. 60 seconds video filmed in a restaurant, photo montages and GIF animations.</p>","p10-title":"COMPLEXE DESJARDINS","p10-subtitle":'<p>2019 Summer Campaign for Complexe Desjardins, a shopping center in the heart of the City of Montreal. Concept based on the idea of a "village éphémère", conveyed through colorful visuals and objects made of paper cut and folded. The objects represent the offer of the Complex, the hundreds of shops and restaurants, as well as free events scheduled throughout the year. .</p><p>The 360 campaign includes printed signage, TV screen animations, installations on the Main Square, 3D objects, a quiz and a digital campaign on both Facebook and Instagram.</p>',"p11-title":"DEVMCGILL","p11-subtitle":"<p>Visual identity of luxury real estate projects in Montreal, websites and architecture booklets.</p>"}}}},function(e,t){i()}),$(".mosaicbutton").click(function(){var e=$(this).data("info");$("#mosaiciframe").load(e,function(){for(var e=1;e<=10;e++)$("#p"+e+"-title")[0]&&(console.log("p"+e+"-title"),document.getElementById("p"+e+"-title").innerHTML=i18next.t("p"+e+"-title"),document.getElementById("p"+e+"-subtitle").innerHTML=i18next.t("p"+e+"-subtitle"))})}),i18next.on("languageChanged",function(){i()})};var g=function(){$("#closemodal").click(function(){$("#mosaicmodal").modal("hide")})};document.addEventListener("DOMContentLoaded",function(){!function(){var e=document.querySelector('[data-js="carousel"]');if(e){e.classList.remove("is-hidden"),e.offsetHeight,new a.a(e,{cellAlign:"left",wrapAround:!0})}}(),function(){var e=document.querySelector('[data-js="navbar"]');if(e){document.addEventListener("click",function(e){e.target.closest('[data-js="navbar-toggler"]')&&(e.preventDefault(),document.body.classList.toggle("navbar--opened"))},!1);!function(){if(e.classList.contains("navbar--fixed-transparent")){window.addEventListener("scroll",l()(function(){document.scrollingElement.scrollTop>e.offsetTop+150?e.classList.add("navbar--scrolled"):e.classList.remove("navbar--scrolled")},s))}}();!function(){var t=0;if(e.classList.contains("navbar--fixed-toggle")){window.addEventListener("scroll",l()(function(){if(document.scrollingElement.scrollTop>e.offsetTop+150){var i=window.scrollY;i<t?(e.classList.add("navbar-visible"),e.classList.remove("navbar-hidden")):(e.classList.add("navbar-hidden"),e.classList.remove("navbar-visible")),t=i}},s))}}()}}(),r(),function(){var e=Array.from(document.querySelectorAll('[data-toggle="collapse"]'));window.addEventListener("click",function(t){var o=t.target;if(e.includes(o)){t.preventDefault();var a=o.getAttribute("data-target"),n=o.getAttribute("data-text-closed"),l=o.getAttribute("data-text-opened");i(a,"toggle"),t.target.classList.contains("collapse-trigger--opened")?(t.target.classList.remove("collapse-trigger--opened"),t.target.innerHTML=n):(t.target.classList.add("collapse-trigger--opened"),t.target.innerHTML=l)}},!1);var t={toggle:"toggle",show:"add",hide:"remove"},i=function(e,i){Array.from(document.querySelectorAll(e)).forEach(function(e){e.classList[t[i]]("show")})}}(),new p.a({}),document.addEventListener("click",function(e){if(e.target.matches('[data-js="toggle-element"]')){e.preventDefault();var t=document.querySelector(e.target.hash);if(!t)return;t.classList.toggle("is-hidden")}},!1),c(),m(),g()})}});