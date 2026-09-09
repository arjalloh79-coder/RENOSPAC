/* ═══════════════════════════════════════════════════════════════
   RENOSPAC — shared site behaviours
   i18n (FR default / EN), mobile drawer, sticky nav, scroll reveal,
   counters, hero slider, lightbox gallery, photo fallbacks.
   ═══════════════════════════════════════════════════════════════ */

/* ── Translations ────────────────────────────────────────────── */
const I18N = {
  fr: {
    topbar_loc:"Conakry, République de Guinée",
    lang_label:"Langue",
    brand_sub:"Réseau National des Organisations Sanitaires Privées",
    nav_home:"Accueil", nav_about:"Qui sommes-nous", nav_activities:"Activités",
    nav_governance:"Gouvernance", nav_news:"Actualités",
    nav_gallery:"Galerie", nav_contact:"Contact", nav_cta:"Nous rejoindre",
    hero_welcome:"Bienvenue sur le site officiel du RENOSPAC",
    ad_slot_label:"Faites de la publicité ici", ad_slot_sub:"Touchez 1 400 structures sanitaires à travers la Guinée — contactez-nous →",
    hero_kicker:"République de Guinée · Santé privée",
    hero_title:`Unir le secteur sanitaire privé au service de <span class="text-ciel-400 italic">toute la Guinée</span>.`,
    hero_lead:`Près de <strong class="text-white">1 400 structures sanitaires</strong> réunies à travers <strong class="text-white">9 plateformes nationales</strong>, aux côtés du Ministère de la Santé et de l'Hygiène Publique.`,
    hero_cta1:"Découvrir le réseau", hero_cta2:"Devenir membre",
    stat_members_s:"structures membres", stat_platforms_s:"plateformes nationales",
    stat1:"structures sanitaires privées représentées",
    stat2:"plateformes nationales fédérées",
    stat3:"du territoire national couvert par nos plateformes",
    about_kicker:"Qui sommes-nous ?",
    about_title:"Un réseau, neuf plateformes,<br>une seule coordination.",
    about_p1:`Le <strong>Réseau National des Organisations Sanitaires Privées, Associatives et Confessionnelles de Guinée (RENOSPAC)</strong> est une organisation regroupant et représentant près de <strong>mille quatre cents (1 400) structures sanitaires privées</strong> en Guinée à travers neuf plateformes nationales.`,
    about_p2:"Le secteur privé de la santé représente une part significative de l'offre de soins en complément du secteur public. Il contribue à l'accessibilité des services de santé, notamment dans les zones urbaines où la demande est forte. Les cliniques privées, associatives et confessionnelles jouent un rôle essentiel dans la diversification des services — consultations spécialisées, maternités, laboratoires, imagerie médicale — et participent à la réduction de la charge des formations sanitaires (FOSA) publiques et à l'amélioration de la couverture sanitaire nationale.",
    about_p3:`Créé à l'initiative des responsables des associations de cliniques privées lucratives et non lucratives, le réseau constitue l'unité de coordination de toutes ces organisations sanitaires, avec l'orientation des autorités sanitaires à travers la <strong>Direction Nationale des Établissements Hospitaliers Publics et Privés (DNEHPP)</strong>.`,
    about_more:"En savoir plus sur le réseau",

    /* Mot du Président — teaser card (index) + full page (gouvernance) */
    president_kicker:"Mot du Président",
    president_name:"Emmanuel Goumou",
    president_role:"Président du RENOSPAC",
    president_teaser:"« Le RENOSPAC s'engage chaque jour aux côtés de ses 1 400 structures membres pour un secteur sanitaire privé plus fort, plus éthique et plus utile à la population guinéenne. »",
    president_read_full:"Lire le message complet",
    president_full_title:"Mot du Président",
    president_full_p1:"[Ce texte est un espace réservé. Remplacez-le par le message officiel du Président du RENOSPAC — sa vision pour le réseau, son appel aux structures membres et aux partenaires, et ses priorités pour le secteur sanitaire privé guinéen.]",
    president_full_p2:"[Deuxième paragraphe du message — par exemple un rappel des acquis du réseau, ou un remerciement aux plateformes membres et au Ministère de la Santé et de l'Hygiène Publique pour leur collaboration.]",
    president_full_sign:"Emmanuel Goumou",
    president_full_role:"Président du RENOSPAC",

    /* Direction & Gouvernance page */
    gov_kicker:"Direction & Gouvernance",
    gov_title:"L'équipe qui pilote le réseau",
    gov_sub:"Les membres du Bureau exécutif du RENOSPAC.",
    gov_team_note:"Membres du Bureau exécutif de RENOSPAC.",
    gov_placeholder_name:"[Nom à renseigner]",
    team1_role:"Chargé des Affaires Extérieures",
    team1_bio:"Responsable des partenariats extérieurs et de la communication.",
    team_role_president:"Président",
    team_role_sg_adjoint:"Secrétaire Général Adjoint",
    team_role_coordinateur_national:"Coordinateur National",
    team_role_coordinateur_adjoint:"Coordinateur Adjoint",
    team_role_secretaire_projets:"Secrétaire Chargé des Projets",
    team_role_charge_projets_adjoint:"Chargé des Projets Adjoint",
    team_role_secretaire_communication:"Secrétaire Chargé à la Communication et à l'Information",
    team_role_commissaire_comptes:"Commissaire aux Comptes",
    team_role_services_financiers:"Services Administratifs et Financiers",

    /* À propos — new sub-sections */
    history_kicker:"Notre histoire",
    history_title:"Une mobilisation née du terrain",
    history_text:"Le RENOSPAC est né de la volonté des responsables d'associations de cliniques privées lucratives et non lucratives de parler d'une seule voix. En réunissant neuf plateformes préexistantes au sein d'une unité de coordination unique, le réseau a transformé une mosaïque d'initiatives locales en un interlocuteur national reconnu par le Ministère de la Santé et de l'Hygiène Publique.",
    values_title:"Nos valeurs",
    value1_t:"Intégrité", value1_d:"Une éthique professionnelle stricte, au cœur de la campagne de moralisation du sous-secteur privé.",
    value2_t:"Solidarité", value2_d:"L'union de 1 400 structures et 9 plateformes au service d'un même engagement.",
    value3_t:"Excellence", value3_d:"La recherche constante d'une meilleure qualité de soins pour la population guinéenne.",
    value4_t:"Redevabilité", value4_d:"Une collaboration transparente avec les autorités sanitaires et la DNEHPP.",

    tech_kicker:"Plateau technique",
    tech_title:"Équipements & capacités des structures membres",
    tech_sub:"Aperçu des types de services que proposent les structures sanitaires privées, associatives et confessionnelles du réseau.",
    tech1:"Consultations spécialisées", tech2:"Maternités", tech3:"Laboratoires d'analyses médicales",
    tech4:"Imagerie médicale", tech5:"Blocs opératoires", tech6:"Pharmacies et dépôts pharmaceutiques",
    tech_note:"Les capacités varient selon les structures membres. Cette liste sera précisée par plateforme dès réception des données du réseau.",

    quality_kicker:"Normes & qualité",
    quality_title:"Notre engagement pour la qualité des soins",
    q1_t:"Conformité à la réglementation DNEHPP", q1_d:"Respect des textes régissant la création et la gestion des structures sanitaires privées en Guinée.",
    q2_t:"Moralisation du sous-secteur privé", q2_d:"Campagne nationale menée avec le MSHP pour l'éthique et la déontologie médicale.",
    q3_t:"Accompagnement des agréments", q3_d:"Orientation des promoteurs de FOSA privées dans leurs démarches réglementaires.",
    q4_t:"Suivi et coordination continue", q4_d:"Coordination des activités des structures membres à travers les 9 plateformes du réseau.",
    quality_note:"Certifications et accréditations spécifiques à ajouter par le réseau dès qu'elles seront communiquées.",

    /* Actualités (news) page */
    news_kicker:"Actualités", news_title:"Toute l'actualité du RENOSPAC",
    news_sub:"Communiqués, événements et annonces du réseau et de ses plateformes membres.",
    news_tag_event:"Événement", news_tag_release:"Communiqué", news_tag_partnership:"Partenariat",
    news_read:"Lire plus",
    news_sidebar_title:"Liens rapides",
    news_sidebar_contact:"Une question ? Contactez-nous",
    news_close:"Fermer",

    news_a1_title:"RENOSPAC : une seule coordination pour 1 400 structures sanitaires privées",
    news_a1_excerpt:"Présent dans toute la Guinée à travers neuf plateformes nationales, le RENOSPAC coordonne l'action des cliniques privées, associatives et confessionnelles auprès du Ministère de la Santé.",
    news_a1_body:"<p>Le Réseau National des Organisations Sanitaires Privées, Associatives et Confessionnelles de Guinée (RENOSPAC) regroupe et représente près de mille quatre cents (1 400) structures sanitaires privées en Guinée à travers neuf plateformes nationales.</p><p>Créé à l'initiative des responsables des associations de cliniques privées lucratives et non lucratives, le réseau constitue l'unité de coordination de toutes ces organisations sanitaires, avec l'orientation des autorités sanitaires à travers la Direction Nationale des Établissements Hospitaliers Publics et Privés (DNEHPP).</p><p>Sa mission : défendre les intérêts des cliniques privées, promouvoir leur conformité réglementaire et renforcer leur crédibilité institutionnelle, au bénéfice de la population guinéenne.</p>",

    news_a2_title:"Les neuf plateformes membres du RENOSPAC, en bref",
    news_a2_excerpt:"FNCPG, ONAMEL, ACS, SDT, AHP, IMG, ACMEG, RECOSAC-G, OCPH : neuf organisations, une seule voix pour le secteur sanitaire privé guinéen.",
    news_a2_body:"<p>Le RENOSPAC fédère neuf plateformes nationales, chacune représentant une composante du secteur sanitaire privé, associatif ou confessionnel :</p><ul class='mt-2 space-y-1.5 list-disc list-inside text-petrol-700'><li><strong>FNCPG</strong> — Fédération Nationale des Cliniques Privées de Guinée</li><li><strong>ONAMEL</strong> — Ordre National de la Médecine Libérale</li><li><strong>ACS</strong> — Les Actions Concertées pour la Santé</li><li><strong>SDT</strong> — La Santé Droit pour Tous</li><li><strong>AHP</strong> — L'Alliance des Hôpitaux Privés</li><li><strong>IMG</strong> — L'Internationale Médicale Guinée</li><li><strong>ACMEG</strong> — L'Action Médicale Guinée</li><li><strong>RECOSAC-G</strong> — Réseau Confessionnel des Organisations Sanitaires Chrétiennes de Guinée</li><li><strong>OCPH</strong> — L'Organisation Catholique pour l'Humanitaire</li></ul><p class='mt-3'>Ensemble, elles forment une seule coordination pour représenter les formations sanitaires privées sur toute l'étendue du territoire national.</p>",

    news_a3_title:"Moralisation du secteur privé de la santé : une priorité pour le RENOSPAC",
    news_a3_excerpt:"Campagne menée avec le Ministère de la Santé et de l'Hygiène Publique pour renforcer l'éthique, la conformité réglementaire et la qualité des soins.",
    news_a3_body:"<p>Le RENOSPAC mène, aux côtés du Ministère de la Santé et de l'Hygiène Publique, une campagne de moralisation du sous-secteur privé de la santé visant à renforcer l'éthique, la conformité réglementaire et la qualité des soins dans les structures sanitaires privées.</p><p>Le secteur privé de la santé représente une part significative de l'offre de soins en complément du secteur public. Il contribue à l'accessibilité des services de santé, notamment dans les zones urbaines où la demande est forte, et participe à la réduction de la charge des formations sanitaires (FOSA) publiques.</p><p>C'est pourquoi le respect des normes, la transparence et la crédibilité institutionnelle des cliniques, associations et structures confessionnelles membres restent une priorité constante du réseau, en lien avec la DNEHPP.</p>",

    news_a4_title:"Comment adhérer au RENOSPAC : l'accompagnement des promoteurs de structures sanitaires",
    news_a4_excerpt:"Vous êtes promoteur d'une structure sanitaire privée, associative ou confessionnelle ? Le RENOSPAC vous oriente dans vos démarches, notamment pour l'agrément.",
    news_a4_body:"<p>Le RENOSPAC oriente et accompagne les promoteurs de structures sanitaires privées, associatives ou confessionnelles, notamment dans le processus de recherche d'agréments, en lien avec la Direction Nationale des Établissements Hospitaliers Publics et Privés (DNEHPP).</p><p>Rejoindre le réseau, c'est intégrer l'une des neuf plateformes nationales membres et bénéficier d'une coordination commune face aux autorités sanitaires, ainsi que d'un relais pour vos démarches réglementaires.</p><p>Pour entamer les démarches d'adhésion, contactez le réseau par téléphone, WhatsApp ou via le formulaire du site — l'équipe du Bureau exécutif vous orientera vers la plateforme correspondant à votre structure.</p>",

    news_a5_title:"Le rôle du secteur privé dans le système de santé guinéen",
    news_a5_excerpt:"Cliniques privées, associatives et confessionnelles : un maillon essentiel de l'offre de soins aux côtés du secteur public.",
    news_a5_body:"<p>Le secteur privé de la santé représente une part significative de l'offre de soins en complément du secteur public. Il contribue à l'accessibilité des services de santé, notamment dans les zones urbaines où la demande est forte.</p><p>Les cliniques privées, associatives et confessionnelles jouent un rôle essentiel dans la diversification des services — consultations spécialisées, maternités, laboratoires, imagerie médicale — et participent à la réduction de la charge des formations sanitaires (FOSA) publiques et à l'amélioration de la couverture sanitaire nationale.</p><p>Le RENOSPAC constitue l'unité de coordination de ces structures, avec l'orientation des autorités sanitaires à travers la DNEHPP.</p>",

    location_kicker:"Localisation", location_title:"Nous trouver",
    location_footer_link:"Voir sur la carte",

    mission_kicker:"Notre mission",
    mission_quote:"« Défendre les intérêts des cliniques privées, promouvoir leur conformité réglementaire et renforcer leur crédibilité institutionnelle. »",
    goal_title:"Notre but",
    goal_text:"Accompagner le Ministère de la Santé, à travers la DNEHPP, dans la mise en œuvre et l'exécution de la stratégie nationale de développement sanitaire privé en Guinée.",
    where_title:"Où sommes-nous ?",
    where_text:"À travers ses plateformes, le RENOSPAC représente les FOSA privées de santé sur toute l'étendue du territoire national.",
    platforms_kicker:"Nos plateformes",
    platforms_title:"Neuf plateformes nationales, un même engagement",
    platforms_sub:"Les organisations membres qui composent l'unité de coordination du RENOSPAC.",
    visit_site:"Visiter le site",
    objectives_kicker:"Nos objectifs",
    objectives_title:"Ce que nous faisons, concrètement",
    gallery_kicker:"Galerie", gallery_title:"Le réseau en action",
    gallery_sub:"Ateliers, panels et rencontres du RENOSPAC aux côtés du Ministère de la Santé et de l'Hygiène Publique.",
    gallery_all:"Voir toute la galerie",
    activities_kicker:"Nos activités",
    activities_title:"Projets et actions du réseau",
    activities_sub:"Des campagnes nationales aux séances de travail institutionnelles, le RENOSPAC agit au quotidien pour un secteur sanitaire privé de qualité.",
    act1_t:"Moralisation du sous-secteur privé de la santé",
    act1_d:"Campagne nationale menée avec le Ministère de la Santé et de l'Hygiène Publique pour renforcer l'éthique, la conformité réglementaire et la qualité des soins dans les structures sanitaires privées.",
    act2_t:"Panels et ateliers thématiques",
    act2_d:"Organisation de panels réunissant les hôpitaux et cliniques privés autour de questions clés, comme les stratégies de contrôle des structures privées.",
    act3_t:"Séances de travail avec le MSHP et la DNEHPP",
    act3_d:"Rencontres régulières avec les autorités sanitaires pour proposer des réformes du système sanitaire privé et coordonner la mise en œuvre de la stratégie nationale.",
    act4_t:"Mobilisation et visites de terrain",
    act4_d:"Visites des structures membres sur le territoire national pour suivre les activités, écouter les besoins et renforcer la cohésion du réseau.",
    act5_t:"Accompagnement des promoteurs",
    act5_d:"Orientation et appui des promoteurs de FOSA privées dans le processus de recherche d'agréments et les démarches auprès des autorités.",
    act6_t:"Plaidoyer et formation continue",
    act6_d:"Plaidoyer pour la formation continue du personnel sanitaire privé et le développement de la coopération avec les partenaires techniques et financiers.",
    cta_title:"Rejoignez le RENOSPAC",
    cta_text:"Promoteur d'une structure sanitaire privée, associative ou confessionnelle ? Adhérez au réseau et bénéficiez de son accompagnement.",
    cta_btn:"Nous contacter",
    contact_kicker:"Contact", contact_title:"Rejoignez le réseau ou écrivez-nous",
    contact_sub:"Promoteur d'une FOSA privée, associative ou confessionnelle ? Le RENOSPAC vous oriente et vous accompagne, notamment dans le processus de recherche d'agréments.",
    c_hq:"Siège", c_hq_v:"Bureau de la Direction de la Santé de la Ville de Conakry, Lambagny, Commune de Ratoma, Conakry – Guinée · 030 B.P. 21",
    c_tel:"Téléphone", c_tel_office:"Bureau", c_tel_mobile:"Mobile / WhatsApp",
    c_hours:"Horaires", c_hours_v:"Lundi – Vendredi · 8h30 – 17h00",
    f_title:"Envoyez-nous un message", f_sub:"Nous vous répondrons dans les meilleurs délais.",
    f_name:"Nom complet", f_name_ph:"Votre nom", f_tel:"Téléphone", f_email_ph:"vous@exemple.com",
    f_subject:"Objet", f_msg_ph:"Votre message…", f_send:"Envoyer le message",
    f_note:"Merci ! Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.",
    f_error:"Une erreur est survenue. Veuillez réessayer ou nous écrire directement à renospacgui@gmail.com.",
    f_options:["Adhésion au réseau","Recherche d'agrément","Partenariat","Autre demande"],
    footer_bio:"Réseau National des Organisations Sanitaires Privées, Associatives et Confessionnelles de Guinée. Près de 1 400 structures sanitaires réunies au service de la santé de la population guinéenne, en partenariat avec le Ministère de la Santé et de l'Hygiène Publique via la DNEHPP.",
    footer_map:"Plan du site", footer_partners:"Partenaires institutionnels",
    footer_p1:"Ministère de la Santé et de l'Hygiène Publique", footer_p3:"Partenaires techniques et financiers",
    footer_copy:"RENOSPAC — Réseau National des Organisations Sanitaires Privées, Associatives et Confessionnelles de Guinée. Tous droits réservés.",
    footer_motto:"République de Guinée · Travail — Justice — Solidarité",
    footer_credit:"Conçu et créé par Al-Falah Marketing",
    ph_hq:"Qui sommes-nous", ph_act:"Nos activités", ph_gal:"Galerie", ph_contact:"Contact",
    cap1:"Intervention d'un responsable du réseau lors d'une rencontre",
    cap2:"Panel : « Quelles stratégies pour le contrôle des structures privées ? »",
    cap3:"Les membres du RENOSPAC aux couleurs du réseau",
    cap4:"Une équipe unie pour la santé privée en Guinée",
    cap5:"« Moralisation du sous-secteur privé de la santé au cœur du RENOSPAC »",
    cap6:"Les membres du réseau réunis devant un établissement sanitaire",
    cap7:"Point de presse des responsables du RENOSPAC",
    cap8:"Le réseau en visite de terrain auprès des structures membres",
    capx_msp:"Séance de travail avec le Ministère de la Santé et de l'Hygiène Publique",
    capx_visit:"Démarches institutionnelles auprès des autorités",
    capx_event:"Les membres du réseau lors d'un événement de santé",
    capx_shirt:"Les membres aux couleurs du RENOSPAC",
    capx_talk:"Intervention lors d'un atelier de santé",
    capx_work:"Atelier de travail des membres du réseau",
    capx_meeting:"Réunion de travail du Bureau exécutif du RENOSPAC",
    ph_note:"Photo du RENOSPAC", ph_add:"Ajoutez le fichier",
    platform_names:{
      FNCPG:"Fédération Nationale des Cliniques Privées de Guinée",
      ONAMEL:"Ordre National de la Médecine Libérale",
      ACS:"Les Actions Concertées pour la Santé",
      SDT:"La Santé Droit pour Tous",
      AHP:"L'Alliance des Hôpitaux Privés",
      IMG:"L'Internationale Médicale Guinée",
      ACMEG:"L'Action Médicale Guinée",
      "RECOSAC-G":"Réseau Confessionnel des Organisations Sanitaires Chrétiennes de Guinée",
      OCPH:"L'Organisation Catholique pour l'Humanitaire",
    },
    objectives:[
      "Promouvoir le partenariat public–privé pour l'offre de services de santé de qualité à la population, en collaboration avec la DNEHPP.",
      "Développer la coopération avec les partenaires techniques et financiers bi et multilatéraux.",
      "Proposer au Ministère de la Santé et de l'Hygiène Publique, via la DNEHPP, des réformes du système sanitaire privé.",
      "Participer à la coordination et au suivi des activités des structures sanitaires privées, associatives et confessionnelles.",
      "Plaider pour la formation continue du personnel sanitaire privé.",
      "Veiller à l'application des textes réglementant la création et la gestion des structures sanitaires privées et confessionnelles en Guinée.",
      "Orienter et accompagner les promoteurs des FOSA privées dans le processus de recherche d'agréments.",
      "Défendre les intérêts des membres du RENOSPAC.",
    ],
  },
  en: {
    topbar_loc:"Conakry, Republic of Guinea",
    lang_label:"Language",
    brand_sub:"National Network of Private Health Organisations",
    nav_home:"Home", nav_about:"About us", nav_activities:"Activities",
    nav_governance:"Governance", nav_news:"News",
    nav_gallery:"Gallery", nav_contact:"Contact", nav_cta:"Join us",
    hero_welcome:"Welcome to the official RENOSPAC website",
    ad_slot_label:"Advertise here", ad_slot_sub:"Reach 1,400 health facilities across Guinea — contact us →",
    hero_kicker:"Republic of Guinea · Private healthcare",
    hero_title:`Uniting the private health sector to serve <span class="text-ciel-400 italic">all of Guinea</span>.`,
    hero_lead:`Nearly <strong class="text-white">1,400 health facilities</strong> united through <strong class="text-white">9 national platforms</strong>, alongside the Ministry of Health and Public Hygiene.`,
    hero_cta1:"Discover the network", hero_cta2:"Become a member",
    stat_members_s:"member facilities", stat_platforms_s:"national platforms",
    stat1:"private health facilities represented",
    stat2:"federated national platforms",
    stat3:"of the national territory covered by our platforms",
    about_kicker:"Who are we?",
    about_title:"One network, nine platforms,<br>a single coordination.",
    about_p1:`The <strong>National Network of Private, Associative and Faith-Based Health Organisations of Guinea (RENOSPAC)</strong> is an organisation bringing together and representing nearly <strong>one thousand four hundred (1,400) private health facilities</strong> in Guinea through nine national platforms.`,
    about_p2:"The private health sector accounts for a significant share of care provision, complementing the public sector. It contributes to the accessibility of health services, particularly in urban areas where demand is high. Private, associative and faith-based clinics play an essential role in diversifying services — specialist consultations, maternity wards, laboratories, medical imaging — and help reduce the load on public health facilities (FOSA) while improving national health coverage.",
    about_p3:`Created at the initiative of the leaders of for-profit and non-profit private clinic associations, the network forms the coordination unit of all these health organisations, under the guidance of the health authorities through the <strong>National Directorate of Public and Private Hospital Establishments (DNEHPP)</strong>.`,
    about_more:"Learn more about the network",

    /* President's Message — teaser card (index) + full page (governance) */
    president_kicker:"President's Message",
    president_name:"Emmanuel Goumou",
    president_role:"President of RENOSPAC",
    president_teaser:"“RENOSPAC works every day alongside its 1,400 member facilities for a stronger, more ethical private health sector that better serves the Guinean population.”",
    president_read_full:"Read the full message",
    president_full_title:"President's Message",
    president_full_p1:"[This text is a placeholder. Replace it with the official message from the President of RENOSPAC — their vision for the network, their call to member facilities and partners, and their priorities for the Guinean private health sector.]",
    president_full_p2:"[Second paragraph of the message — for example, a recap of the network's achievements, or thanks to member platforms and the Ministry of Health and Public Hygiene for their collaboration.]",
    president_full_sign:"Emmanuel Goumou",
    president_full_role:"President of RENOSPAC",

    /* Direction & Governance page */
    gov_kicker:"Direction & Governance",
    gov_title:"The team leading the network",
    gov_sub:"The members of the RENOSPAC Executive Bureau.",
    gov_team_note:"RENOSPAC Executive Bureau members.",
    gov_placeholder_name:"[Name to be added]",
    team1_role:"External Affairs Officer",
    team1_bio:"Managing external partnerships and communications.",
    team_role_president:"President",
    team_role_sg_adjoint:"Deputy Secretary General",
    team_role_coordinateur_national:"National Coordinator",
    team_role_coordinateur_adjoint:"Assistant Coordinator",
    team_role_secretaire_projets:"Secretary in Charge of Projects",
    team_role_charge_projets_adjoint:"Assistant Project Manager",
    team_role_secretaire_communication:"Secretary for Communication and Information",
    team_role_commissaire_comptes:"Auditor",
    team_role_services_financiers:"Administrative and Financial Services",

    /* About — new sub-sections */
    history_kicker:"Our history",
    history_title:"A movement born in the field",
    history_text:"RENOSPAC was born from the will of leaders of for-profit and non-profit private clinic associations to speak with one voice. By bringing nine pre-existing platforms together into a single coordination unit, the network turned a patchwork of local initiatives into a national partner recognised by the Ministry of Health and Public Hygiene.",
    values_title:"Our values",
    value1_t:"Integrity", value1_d:"A strict professional ethic, at the heart of the private sub-sector ethical standards campaign.",
    value2_t:"Solidarity", value2_d:"The union of 1,400 facilities and 9 platforms behind a single commitment.",
    value3_t:"Excellence", value3_d:"A constant pursuit of better quality of care for the Guinean population.",
    value4_t:"Accountability", value4_d:"Transparent collaboration with the health authorities and the DNEHPP.",

    tech_kicker:"Technical facilities",
    tech_title:"Equipment & capabilities of member facilities",
    tech_sub:"Overview of the types of services offered by the network's private, associative and faith-based health facilities.",
    tech1:"Specialist consultations", tech2:"Maternity wards", tech3:"Medical analysis laboratories",
    tech4:"Medical imaging", tech5:"Operating theatres", tech6:"Pharmacies and medical supply stores",
    tech_note:"Capabilities vary by member facility. This list will be refined per platform as network data is received.",

    quality_kicker:"Standards & quality",
    quality_title:"Our commitment to quality of care",
    q1_t:"Compliance with DNEHPP regulations", q1_d:"Adherence to the rules governing the creation and management of private health facilities in Guinea.",
    q2_t:"Private sub-sector ethical standards", q2_d:"National campaign led with the MSHP for medical ethics and deontology.",
    q3_t:"Accreditation support", q3_d:"Guiding promoters of private health facilities through regulatory procedures.",
    q4_t:"Continuous monitoring and coordination", q4_d:"Coordinating the activities of member facilities across the network's 9 platforms.",
    quality_note:"Specific certifications and accreditations to be added by the network once communicated.",

    /* News page */
    news_kicker:"News", news_title:"All RENOSPAC news",
    news_sub:"Announcements, events and updates from the network and its member platforms.",
    news_tag_event:"Event", news_tag_release:"Announcement", news_tag_partnership:"Partnership",
    news_read:"Read more",
    news_sidebar_title:"Quick links",
    news_sidebar_contact:"A question? Contact us",
    news_close:"Close",

    news_a1_title:"RENOSPAC: one coordination body for 1,400 private health facilities",
    news_a1_excerpt:"Present across Guinea through nine national platforms, RENOSPAC coordinates the work of private, associative and faith-based clinics with the Ministry of Health.",
    news_a1_body:"<p>The Réseau National des Organisations Sanitaires Privées, Associatives et Confessionnelles de Guinée (RENOSPAC) brings together and represents nearly fourteen hundred (1,400) private health facilities in Guinea through nine national platforms.</p><p>Created at the initiative of the leaders of for-profit and non-profit private clinic associations, the network is the coordination unit for all these health organisations, under the guidance of the health authorities through the Direction Nationale des Établissements Hospitaliers Publics et Privés (DNEHPP).</p><p>Its mission: to defend the interests of private clinics, promote their regulatory compliance and strengthen their institutional credibility, for the benefit of the Guinean population.</p>",

    news_a2_title:"RENOSPAC's nine member platforms, at a glance",
    news_a2_excerpt:"FNCPG, ONAMEL, ACS, SDT, AHP, IMG, ACMEG, RECOSAC-G, OCPH: nine organisations, one voice for Guinea's private health sector.",
    news_a2_body:"<p>RENOSPAC federates nine national platforms, each representing a component of the private, associative or faith-based health sector:</p><ul class='mt-2 space-y-1.5 list-disc list-inside text-petrol-700'><li><strong>FNCPG</strong> — National Federation of Private Clinics of Guinea</li><li><strong>ONAMEL</strong> — National Order of Independent Medical Practice</li><li><strong>ACS</strong> — Concerted Actions for Health</li><li><strong>SDT</strong> — Health as a Right for All</li><li><strong>AHP</strong> — Alliance of Private Hospitals</li><li><strong>IMG</strong> — International Medical Guinea</li><li><strong>ACMEG</strong> — Medical Action Guinea</li><li><strong>RECOSAC-G</strong> — Faith-Based Network of Christian Health Organisations of Guinea</li><li><strong>OCPH</strong> — Catholic Organisation for Humanitarian Action</li></ul><p class='mt-3'>Together, they form a single coordination body representing private health facilities across the whole of the national territory.</p>",

    news_a3_title:"Ethical standards in the private health sector: a RENOSPAC priority",
    news_a3_excerpt:"A campaign led with the Ministry of Health and Public Hygiene to strengthen ethics, regulatory compliance and quality of care.",
    news_a3_body:"<p>Alongside the Ministry of Health and Public Hygiene, RENOSPAC leads a campaign to raise ethical standards in the private health sub-sector, aimed at strengthening ethics, regulatory compliance and quality of care in private health facilities.</p><p>The private health sector accounts for a significant share of care provision alongside the public sector. It contributes to access to health services, particularly in urban areas where demand is high, and helps reduce the burden on public health facilities (FOSA).</p><p>That is why compliance with standards, transparency and the institutional credibility of member clinics, associations and faith-based facilities remain a constant priority for the network, in partnership with the DNEHPP.</p>",

    news_a4_title:"How to join RENOSPAC: support for health facility promoters",
    news_a4_excerpt:"Running a private, associative or faith-based health facility? RENOSPAC guides you through the process, including accreditation.",
    news_a4_body:"<p>RENOSPAC guides and supports promoters of private, associative or faith-based health facilities, notably through the accreditation process, in coordination with the Direction Nationale des Établissements Hospitaliers Publics et Privés (DNEHPP).</p><p>Joining the network means becoming part of one of its nine national member platforms and benefiting from common coordination with the health authorities, as well as support with regulatory procedures.</p><p>To start the membership process, contact the network by phone, WhatsApp or through the site's contact form — the Executive Bureau team will direct you to the platform matching your facility.</p>",

    news_a5_title:"The role of the private sector in Guinea's health system",
    news_a5_excerpt:"Private, associative and faith-based clinics: an essential link in care provision alongside the public sector.",
    news_a5_body:"<p>The private health sector accounts for a significant share of care provision alongside the public sector. It contributes to access to health services, particularly in urban areas where demand is high.</p><p>Private, associative and faith-based clinics play an essential role in diversifying services — specialist consultations, maternity care, laboratories, medical imaging — and help reduce the burden on public health facilities (FOSA) and improve national health coverage.</p><p>RENOSPAC is the coordination unit for these facilities, under the guidance of the health authorities through the DNEHPP.</p>",

    location_kicker:"Location", location_title:"Find us",
    location_footer_link:"View on the map",

    mission_kicker:"Our mission",
    mission_quote:"“To defend the interests of private clinics, promote their regulatory compliance and strengthen their institutional credibility.”",
    goal_title:"Our goal",
    goal_text:"To support the Ministry of Health, through the DNEHPP, in implementing and executing the national strategy for private health sector development in Guinea.",
    where_title:"Where are we?",
    where_text:"Through its platforms, RENOSPAC represents private health facilities (FOSA) across the entire national territory.",
    platforms_kicker:"Our platforms",
    platforms_title:"Nine national platforms, one shared commitment",
    platforms_sub:"The member organisations that make up RENOSPAC's coordination unit.",
    visit_site:"Visit website",
    objectives_kicker:"Our objectives",
    objectives_title:"What we do, concretely",
    gallery_kicker:"Gallery", gallery_title:"The network in action",
    gallery_sub:"RENOSPAC workshops, panels and meetings alongside the Ministry of Health and Public Hygiene.",
    gallery_all:"See the full gallery",
    activities_kicker:"Our activities",
    activities_title:"Projects and actions of the network",
    activities_sub:"From national campaigns to institutional working sessions, RENOSPAC works daily for a quality private health sector.",
    act1_t:"Ethical standards in the private health sub-sector",
    act1_d:"A national campaign led with the Ministry of Health and Public Hygiene to strengthen ethics, regulatory compliance and quality of care in private health facilities.",
    act2_t:"Panels and thematic workshops",
    act2_d:"Panels bringing together private hospitals and clinics around key questions, such as strategies for overseeing private facilities.",
    act3_t:"Working sessions with the MSHP and DNEHPP",
    act3_d:"Regular meetings with the health authorities to propose reforms of the private health system and coordinate the national strategy.",
    act4_t:"Mobilisation and field visits",
    act4_d:"Visits to member facilities across the country to monitor activities, listen to needs and strengthen the network's cohesion.",
    act5_t:"Support for facility promoters",
    act5_d:"Guidance and support for promoters of private health facilities through the accreditation process and administrative procedures.",
    act6_t:"Advocacy and continuous training",
    act6_d:"Advocacy for continuous training of private health personnel and development of cooperation with technical and financial partners.",
    cta_title:"Join RENOSPAC",
    cta_text:"Running a private, associative or faith-based health facility? Join the network and benefit from its support.",
    cta_btn:"Contact us",
    contact_kicker:"Contact", contact_title:"Join the network or write to us",
    contact_sub:"Running a private, associative or faith-based health facility? RENOSPAC guides and supports you, in particular through the accreditation process.",
    c_hq:"Head office", c_hq_v:"Office of the Conakry City Health Directorate, Lambagny, Ratoma Commune, Conakry – Guinea · 030 P.O. Box 21",
    c_tel:"Phone", c_tel_office:"Office", c_tel_mobile:"Mobile / WhatsApp",
    c_hours:"Opening hours", c_hours_v:"Monday – Friday · 8:30 am – 5:00 pm",
    f_title:"Send us a message", f_sub:"We will get back to you as soon as possible.",
    f_name:"Full name", f_name_ph:"Your name", f_tel:"Phone", f_email_ph:"you@example.com",
    f_subject:"Subject", f_msg_ph:"Your message…", f_send:"Send message",
    f_note:"Thank you! Your message has been sent. We'll get back to you as soon as possible.",
    f_error:"Something went wrong. Please try again or email us directly at renospacgui@gmail.com.",
    f_options:["Joining the network","Accreditation request","Partnership","Other enquiry"],
    footer_bio:"National Network of Private, Associative and Faith-Based Health Organisations of Guinea. Nearly 1,400 health facilities united to serve the health of the Guinean population, in partnership with the Ministry of Health and Public Hygiene through the DNEHPP.",
    footer_map:"Site map", footer_partners:"Institutional partners",
    footer_p1:"Ministry of Health and Public Hygiene", footer_p3:"Technical and financial partners",
    footer_copy:"RENOSPAC — National Network of Private, Associative and Faith-Based Health Organisations of Guinea. All rights reserved.",
    footer_motto:"Republic of Guinea · Work — Justice — Solidarity",
    footer_credit:"Designed and Created by Al-Falah Marketing",
    ph_hq:"About us", ph_act:"Our activities", ph_gal:"Gallery", ph_contact:"Contact",
    cap1:"A network representative speaking at a meeting",
    cap2:"Panel: “What strategies for overseeing private facilities?”",
    cap3:"RENOSPAC members wearing the network's colours",
    cap4:"A team united for private healthcare in Guinea",
    cap5:"“Ethical standards in the private health sub-sector, at the heart of RENOSPAC”",
    cap6:"Network members gathered in front of a health facility",
    cap7:"Press briefing by RENOSPAC leadership",
    cap8:"The network on a field visit to member facilities",
    capx_msp:"Working session with the Ministry of Health and Public Hygiene",
    capx_visit:"Institutional outreach to the authorities",
    capx_event:"Network members at a health event",
    capx_shirt:"Members wearing the RENOSPAC colours",
    capx_talk:"Speaking at a health workshop",
    capx_work:"Working session of network members",
    capx_meeting:"RENOSPAC Executive Bureau working meeting",
    ph_note:"RENOSPAC photo", ph_add:"Add the file",
    platform_names:{
      FNCPG:"National Federation of Private Clinics of Guinea",
      ONAMEL:"National Order of Independent Medical Practice",
      ACS:"Concerted Actions for Health",
      SDT:"Health as a Right for All",
      AHP:"Alliance of Private Hospitals",
      IMG:"International Medical Guinea",
      ACMEG:"Medical Action Guinea",
      "RECOSAC-G":"Faith-Based Network of Christian Health Organisations of Guinea",
      OCPH:"Catholic Organisation for Humanitarian Action",
    },
    objectives:[
      "Promote public–private partnership to deliver quality health services to the population, in collaboration with the DNEHPP.",
      "Develop cooperation with bilateral and multilateral technical and financial partners.",
      "Propose reforms of the private health system to the Ministry of Health and Public Hygiene through the DNEHPP.",
      "Take part in coordinating and monitoring the activities of private, associative and faith-based health facilities.",
      "Advocate for continuous training of private health personnel.",
      "Ensure the application of the regulations governing the creation and management of private and faith-based health facilities in Guinea.",
      "Guide and support promoters of private health facilities through the accreditation process.",
      "Defend the interests of RENOSPAC members.",
    ],
  },
};

const SIGLES = ['FNCPG','ONAMEL','ACS','SDT','AHP','IMG','ACMEG','RECOSAC-G','OCPH'];
/* Verified partner websites (null = no known website yet) */
const PLATFORM_URLS = {
  FNCPG: null,
  ONAMEL: null,
  ACS: null,
  SDT: null,
  AHP: null,
  IMG: 'https://imguinee.wordpress.com/',
  ACMEG: 'https://actionmedicaleguinee.org/',
  'RECOSAC-G': 'https://recosacguinee.org/',
  OCPH: 'https://www.caritas.org/where-caritas-work/africa/guinea/',
};
const CARD_STYLES = [
  { text:'text-ciel-500',  chip:'bg-ciel-500/10 text-ciel-500' },
  { text:'text-vitale-500',chip:'bg-vitale-500/10 text-vitale-500' },
  { text:'text-lime-600',  chip:'bg-lime-600/10 text-lime-600' },
];
/* All published photos (14 & 15 intentionally excluded — patient privacy) */
const GALLERY_PHOTOS = [
  ['photo-5.jpg','cap5'], ['photo-2.jpg','cap2'], ['photo-1.jpg','cap1'],
  ['photo-3.jpg','cap3'], ['photo-4.jpg','cap4'], ['photo-6.jpg','cap6'],
  ['photo-7.jpg','cap7'], ['photo-8.jpg','cap8'],
  ['photo-11.jpg','capx_msp'], ['photo-16.jpg','capx_msp'], ['photo-17.jpg','capx_msp'],
  ['photo-18.jpg','capx_msp'], ['photo-19.jpg','capx_msp'], ['photo-20.jpg','capx_msp'],
  ['photo-21.jpg','capx_msp'], ['photo-22.jpg','capx_msp'],
  ['photo-9.jpg','capx_visit'], ['photo-10.jpg','capx_event'],
  ['photo-12.jpg','capx_shirt'], ['photo-13.jpg','capx_talk'], ['photo-23.jpg','capx_work'],
  ['photo-24.jpg','capx_meeting'],
];

/* Articles — Actualités page. tag: 'release' | 'event' | 'partnership' (drives the chip colour) */
const NEWS_ARTICLES = [
  { img:'assets/photo-1.jpg',  tag:'release',     key:'news_a1' },
  { img:'assets/photo-16.jpg', tag:'partnership', key:'news_a2' },
  { img:'assets/photo-5.jpg',  tag:'release',      key:'news_a3' },
  { img:'assets/photo-9.jpg',  tag:'event',        key:'news_a4' },
  { img:'assets/photo-2.jpg',  tag:'event',        key:'news_a5' },
];
const NEWS_TAG_STYLES = {
  release:     'bg-vitale-500/10 text-vitale-500',
  event:       'bg-ciel-500/10 text-ciel-500',
  partnership: 'bg-lime-600/10 text-lime-600',
};

/* Team / Leadership — real, confirmed members go here. One batch edit
   adds/updates everyone at once; each entry needs a matching roleKey
   (and optional bioKey) added to both FR and EN blocks in I18N above.
   Names are not translated; titles and bios are, via the i18n keys. */
const TEAM_MEMBERS = [
  { img: 'assets/team-president.jpg', name: 'Emmanuel Goumou', roleKey: 'team_role_president' },
  { img: 'assets/team-secretaire-charge-projets.jpg', name: 'Abdoul Karim Barry', roleKey: 'team_role_secretaire_projets' },
  { img: 'assets/team-secretaire-communication-information.jpg', name: 'Miftaou Deen Bah', roleKey: 'team_role_secretaire_communication' },
  { img: 'assets/team-coordinateur-national.jpg', name: 'Abdoulaye Mamadouba Bangoura', roleKey: 'team_role_coordinateur_national' },
  { img: 'assets/team-services-administratif et-financier.jpg', name: 'Nanten Condé', roleKey: 'team_role_services_financiers' },
  { img: 'assets/team-secretaire-general-adjoint.jpg', name: 'Elhadj Zainou Bah', roleKey: 'team_role_sg_adjoint' },
  { img: 'assets/team-commissaire-comptes.jpg', name: 'Mohamed Diakité', roleKey: 'team_role_commissaire_comptes' },
  { img: 'assets/team-coordinateur-adjoint.jpg', name: 'Gono Sonomou', roleKey: 'team_role_coordinateur_adjoint' },
  { img: 'assets/charge-affaires-exterieures.jpg', name: 'Amadou Diallo', roleKey: 'team1_role', bioKey: 'team1_bio' },
  { img: 'assets/team-charge-projets-adjoint.jpg', name: 'Jean Tagbino', roleKey: 'team_role_charge_projets_adjoint' },
];

let LANG = 'fr';
try { LANG = new URLSearchParams(location.search).get('lang') || localStorage.getItem('renospac-lang') || 'fr'; } catch(e) {}
if (!I18N[LANG]) LANG = 'fr';

/* ── Grid renderers (only on pages that have the containers) ── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('is-visible');
    e.target.querySelectorAll('.counter:not(.done)').forEach(c => {
      c.classList.add('done');
      const target = +c.dataset.target, t0 = performance.now(), dur = 1600;
      const tick = now => {
        const p = Math.min((now - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
        c.textContent = Math.round(target * eased).toLocaleString(LANG === 'fr' ? 'fr-FR' : 'en-US');
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.unobserve(e.target);
  });
}, { threshold: .15 });

function renderGrids() {
  const t = I18N[LANG];
  const pg = document.getElementById('platforms-grid');
  if (pg) {
    pg.innerHTML = SIGLES.map((s, i) => {
      const st = CARD_STYLES[i % 3];
      const url = PLATFORM_URLS[s];
      const slug = s.toLowerCase();
      /* Logo medallion: shows assets/partners/<slug>.png when the file
         exists, otherwise a coloured monogram of the acronym. */
      const initials = s.replace('-', '').slice(0, 3);
      const logo = `
        <span class="relative shrink-0 w-14 h-14 rounded-full ${st.chip} overflow-hidden flex items-center justify-center ring-1 ring-petrol-900/10">
          <span class="font-display font-black text-sm tracking-tight">${initials}</span>
          <img src="assets/partners/${slug}.png" alt="Logo ${s}" loading="lazy"
               class="absolute inset-0 w-full h-full object-contain bg-white p-1.5"
               onerror="this.remove()">
        </span>`;
      const inner = `
        <div class="flex items-center gap-4">
          ${logo}
          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between gap-2">
              <span class="font-display font-black text-xl ${st.text}">${s}</span>
              ${url ? `<span class="shrink-0 w-8 h-8 rounded-full ${st.chip} flex items-center justify-center">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>
              </span>` : ''}
            </div>
          </div>
        </div>
        <p class="mt-4 text-[15px] text-petrol-700 leading-snug">${t.platform_names[s]}</p>
        ${url ? `<p class="mt-4 inline-flex items-center gap-1.5 text-sm font-bold ${st.text}">${t.visit_site}
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.4" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3"/></svg></p>` : ''}`;
      return url
        ? `<a href="${url}" target="_blank" rel="noopener" class="platform-card reveal is-visible block bg-white border border-petrol-900/10 rounded-2xl p-7 cursor-pointer" aria-label="${s} — ${t.visit_site}">${inner}</a>`
        : `<div class="platform-card reveal is-visible bg-white border border-petrol-900/10 rounded-2xl p-7">${inner}</div>`;
    }).join('');
  }
  const og = document.getElementById('objectives-grid');
  if (og) {
    og.innerHTML = t.objectives.map((o, i) => `
      <div class="reveal is-visible flex gap-5 bg-white rounded-2xl border border-petrol-900/10 p-6 shadow-sm">
        <span class="shrink-0 w-10 h-10 rounded-xl bg-petrol-950 text-lime-500 font-display font-black flex items-center justify-center">${String(i + 1).padStart(2, '0')}</span>
        <p class="text-[15px] text-petrol-700 leading-relaxed">${o}</p>
      </div>`).join('');
  }
  document.querySelectorAll('#platforms-grid .reveal, #objectives-grid .reveal').forEach(el => io.observe(el));
}

/* ── Team / Leadership renderer (gouvernance.html) ───────────── */
function teamImgError(img) {
  const wrap = img.parentElement;
  wrap.innerHTML = `<svg class="w-9 h-9 text-ciel-500/60" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>`;
}
function renderTeam() {
  const tg = document.getElementById('team-grid');
  if (!tg) return;
  const t = I18N[LANG];
  /* Idempotent: drop any previously-injected real-member cards before
     re-inserting, so switching language doesn't duplicate them. The
     generic role-placeholder cards already in the HTML are left alone. */
  tg.querySelectorAll('.team-real-card').forEach(el => el.remove());
  const cards = TEAM_MEMBERS.map((m, i) => {
    const nameHtml = m.name
      ? `<p class="mt-4 font-display font-bold text-petrol-900">${m.name}</p>`
      : `<p class="mt-4 font-display font-bold text-petrol-900/50 italic" data-i18n="${m.nameKey}">${t[m.nameKey] || ''}</p>`;
    const altText = m.name || (t[m.roleKey] || '');
    return `
    <div class="team-real-card reveal is-visible bg-white rounded-2xl border border-petrol-900/10 p-6 text-center shadow-sm" style="transition-delay:${(i % 3) * .08}s">
      <div class="w-20 h-20 mx-auto rounded-full bg-ciel-50 border border-ciel-500/20 overflow-hidden flex items-center justify-center">
        <img src="${m.img}" alt="${altText}" class="w-full h-full object-cover" loading="lazy" onerror="teamImgError(this)">
      </div>
      ${nameHtml}
      <p class="text-sm text-ciel-500 font-semibold" data-i18n="${m.roleKey}">${t[m.roleKey] || ''}</p>
      ${m.bioKey ? `<p class="mt-2 text-xs text-petrol-700/70 leading-relaxed" data-i18n="${m.bioKey}">${t[m.bioKey] || ''}</p>` : ''}
    </div>`;
  }).join('');
  tg.insertAdjacentHTML('afterbegin', cards);
  tg.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ── Full gallery renderer (galerie.html) ────────────────────── */
function renderGallery() {
  const g = document.getElementById('full-gallery');
  if (!g) return;
  g.innerHTML = GALLERY_PHOTOS.map(([f, k], i) => `
    <figure class="gallery-item reveal relative rounded-2xl overflow-hidden cursor-zoom-in aspect-[4/3]" style="transition-delay:${(i % 3) * .07}s">
      <img src="assets/${f}" data-caption-key="${k}" alt="" class="site-photo w-full h-full object-cover" loading="lazy">
      <figcaption class="caption absolute inset-x-0 bottom-0 bg-gradient-to-t from-petrol-950/90 to-transparent text-white text-sm px-5 pt-10 pb-4" data-i18n="${k}"></figcaption>
    </figure>`).join('');
  g.querySelectorAll('.reveal').forEach(el => io.observe(el));
  bindGallery(g);
  bindFallbacks(g);
}

/* ── News articles renderer (actualites.html) ────────────────── */
function renderNews() {
  const grid = document.getElementById('news-grid');
  if (!grid) return;
  const t = I18N[LANG];
  grid.innerHTML = NEWS_ARTICLES.map((a, i) => `
    <article class="act-card reveal is-visible bg-white rounded-3xl overflow-hidden border border-petrol-900/10 shadow-sm cursor-pointer" data-article="${a.key}" style="transition-delay:${(i % 2) * .08}s">
      <div class="overflow-hidden aspect-[16/9]">
        <img src="${a.img}" alt="" class="act-img site-photo w-full h-full object-cover" loading="lazy">
      </div>
      <div class="p-6">
        <span class="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${NEWS_TAG_STYLES[a.tag]}" data-i18n="news_tag_${a.tag}">${t['news_tag_' + a.tag] || ''}</span>
        <h3 class="mt-3 font-display font-bold text-lg leading-snug">${t[a.key + '_title'] || ''}</h3>
        <p class="mt-2 text-sm text-petrol-700 leading-relaxed">${t[a.key + '_excerpt'] || ''}</p>
        <span class="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-ciel-500">${t.news_read || ''} <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3"/></svg></span>
      </div>
    </article>`).join('');
  grid.querySelectorAll('.reveal').forEach(el => io.observe(el));
  bindFallbacks(grid);
  grid.querySelectorAll('[data-article]').forEach(card => card.addEventListener('click', () => openArticle(card.dataset.article)));
}
function openArticle(key) {
  const modal = document.getElementById('article-modal');
  if (!modal) return;
  const t = I18N[LANG];
  const art = NEWS_ARTICLES.find(a => a.key === key);
  document.getElementById('article-modal-tag').textContent = t['news_tag_' + art.tag] || '';
  document.getElementById('article-modal-tag').className = `inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${NEWS_TAG_STYLES[art.tag]}`;
  document.getElementById('article-modal-title').textContent = t[key + '_title'] || '';
  document.getElementById('article-modal-body').innerHTML = t[key + '_body'] || '';
  document.getElementById('article-modal-img').src = art.img;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}
function closeArticle() {
  const modal = document.getElementById('article-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}
function bindArticleModal() {
  const modal = document.getElementById('article-modal');
  if (!modal) return;
  modal.addEventListener('click', closeArticle);
  const card = document.getElementById('article-modal-card');
  if (card) card.addEventListener('click', e => e.stopPropagation());
  const x = document.getElementById('article-modal-close');
  if (x) x.addEventListener('click', closeArticle);
  addEventListener('keydown', e => { if (e.key === 'Escape') closeArticle(); });
}

/* ── Language ────────────────────────────────────────────────── */
function applyLang(lang) {
  LANG = I18N[lang] ? lang : 'fr';
  const t = I18N[LANG];
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-i18n]').forEach(el => { const k = el.dataset.i18n; if (t[k] != null) el.textContent = t[k]; });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { const k = el.dataset.i18nHtml; if (t[k] != null) el.innerHTML = t[k]; });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { const k = el.dataset.i18nPh; if (t[k] != null) el.placeholder = t[k]; });
  const sel = document.getElementById('f-select');
  if (sel) sel.innerHTML = t.f_options.map(o => `<option>${o}</option>`).join('');
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === LANG));
  document.querySelectorAll('.ph-tile [data-ph-caption]').forEach(el => { el.textContent = t[el.dataset.phCaption] || t.ph_note; });
  renderGrids();
  renderTeam();
  renderNews();
  try { localStorage.setItem('renospac-lang', LANG); } catch(e) {}
}
document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));

/* ── Missing-photo graceful fallback ─────────────────────────── */
function swapForPlaceholder(img) {
  const t = I18N[LANG];
  const key = img.dataset.captionKey;
  const ph = document.createElement('div');
  ph.className = 'ph-tile w-full h-full flex flex-col items-center justify-center text-center p-6 gap-3';
  ph.innerHTML = `<img src="assets/logo.png" alt="" class="h-16 w-16 object-contain opacity-70">
    <p class="text-petrol-700/70 text-xs font-medium max-w-[220px]" data-ph-caption="${key}">${t[key] || t.ph_note}</p>`;
  img.replaceWith(ph);
}
function bindFallbacks(root) {
  (root || document).querySelectorAll('img.site-photo').forEach(img => {
    if (img.complete && img.naturalWidth === 0) swapForPlaceholder(img);
    else img.addEventListener('error', () => swapForPlaceholder(img));
  });
}

/* ── Mobile drawer ───────────────────────────────────────────── */
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  document.querySelectorAll('.mobile-link').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));
}

/* ── Sticky nav shadow ───────────────────────────────────────── */
const nav = document.getElementById('mainnav');
if (nav) addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 10), { passive: true });

/* ── Hero slider (index.html) ────────────────────────────────── */
function initSlider() {
  const slider = document.getElementById('hero-slider');
  if (!slider) return;
  const slides = [...slider.querySelectorAll('.hero-slide')];
  const dotsBox = document.getElementById('hero-dots');
  let cur = 0, timer = null;
  dotsBox.innerHTML = slides.map((_, i) =>
    `<button data-slide="${i}" aria-label="Diapositive ${i + 1}" class="hero-dot w-2.5 h-2.5 rounded-full bg-white/40 hover:bg-white/80 transition-all"></button>`).join('');
  const dots = [...dotsBox.querySelectorAll('.hero-dot')];
  function show(i) {
    cur = (i + slides.length) % slides.length;
    slides.forEach((s, j) => s.classList.toggle('active', j === cur));
    dots.forEach((d, j) => d.classList.toggle('active', j === cur));
  }
  function play() { stop(); timer = setInterval(() => show(cur + 1), 5500); }
  function stop() { if (timer) clearInterval(timer); }
  dots.forEach(d => d.addEventListener('click', () => { show(+d.dataset.slide); play(); }));
  const prev = document.getElementById('hero-prev'), next = document.getElementById('hero-next');
  if (prev) prev.addEventListener('click', () => { show(cur - 1); play(); });
  if (next) next.addEventListener('click', () => { show(cur + 1); play(); });
  slider.addEventListener('mouseenter', stop);
  slider.addEventListener('mouseleave', play);
  show(0); play();
}

/* ── Lightbox ────────────────────────────────────────────────── */
const lb = document.getElementById('lightbox');
function bindGallery(root) {
  if (!lb) return;
  const lbImg = document.getElementById('lightbox-img'), lbCap = document.getElementById('lightbox-caption');
  (root || document).querySelectorAll('.gallery-item').forEach(fig => {
    if (fig.dataset.lbBound) return;
    fig.dataset.lbBound = '1';
    fig.addEventListener('click', () => {
      const img = fig.querySelector('img.site-photo');
      if (!img || !img.isConnected) return;
      lbImg.src = img.src; lbImg.alt = img.alt;
      lbCap.textContent = I18N[LANG][img.dataset.captionKey] || '';
      lb.classList.remove('hidden'); lb.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });
  });
}
if (lb) {
  const closeLb = () => { lb.classList.add('hidden'); lb.classList.remove('flex'); document.body.style.overflow = ''; };
  lb.addEventListener('click', closeLb);
  const x = document.getElementById('lightbox-close');
  if (x) x.addEventListener('click', closeLb);
  addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });
}

/* ── Contact form — submits to arjalloh79@gmail.com via FormSubmit ── */
const form = document.getElementById('contact-form');
if (form) form.addEventListener('submit', async e => {
  e.preventDefault();
  const note = document.getElementById('form-note');
  const err = document.getElementById('form-error');
  const btn = form.querySelector('button[type="submit"]');
  note.classList.add('hidden');
  err.classList.add('hidden');
  btn.disabled = true;
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${form.action.split('/').pop()}`, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form),
    });
    if (!res.ok) throw new Error('send failed');
    note.classList.remove('hidden');
    form.reset();
  } catch {
    err.classList.remove('hidden');
  } finally {
    btn.disabled = false;
  }
});

/* ── Boot ────────────────────────────────────────────────────── */
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
renderGallery();
bindArticleModal();
bindFallbacks(document);
bindGallery(document);
initSlider();
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
applyLang(LANG);
