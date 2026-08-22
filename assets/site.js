/* ═══════════════════════════════════════════════════════════════
   RENOSPAC — shared site behaviours
   i18n (FR default / EN), mobile drawer, sticky nav, scroll reveal,
   counters, hero slider, lightbox gallery, photo fallbacks.
   ═══════════════════════════════════════════════════════════════ */

/* ── Translations ────────────────────────────────────────────── */
const I18N = {
  fr: {
    topbar_loc:"Conakry, République de Guinée",
    brand_sub:"Réseau National des Organisations Sanitaires Privées",
    nav_home:"Accueil", nav_about:"Qui sommes-nous", nav_activities:"Activités",
    nav_gallery:"Galerie", nav_contact:"Contact", nav_cta:"Nous rejoindre",
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
    f_note:"Merci ! Votre message a bien été préparé. (Formulaire de démonstration — à relier à un service d'envoi.)",
    f_options:["Adhésion au réseau","Recherche d'agrément","Partenariat","Autre demande"],
    footer_bio:"Réseau National des Organisations Sanitaires Privées, Associatives et Confessionnelles de Guinée. Près de 1 400 structures sanitaires réunies au service de la santé de la population guinéenne, en partenariat avec le Ministère de la Santé et de l'Hygiène Publique via la DNEHPP.",
    footer_map:"Plan du site", footer_partners:"Partenaires institutionnels",
    footer_p1:"Ministère de la Santé et de l'Hygiène Publique", footer_p3:"Partenaires techniques et financiers",
    footer_copy:"RENOSPAC — Réseau National des Organisations Sanitaires Privées, Associatives et Confessionnelles de Guinée. Tous droits réservés.",
    footer_motto:"République de Guinée · Travail — Justice — Solidarité",
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
    brand_sub:"National Network of Private Health Organisations",
    nav_home:"Home", nav_about:"About us", nav_activities:"Activities",
    nav_gallery:"Gallery", nav_contact:"Contact", nav_cta:"Join us",
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
    f_note:"Thank you! Your message has been prepared. (Demo form — connect it to a sending service.)",
    f_options:["Joining the network","Accreditation request","Partnership","Other enquiry"],
    footer_bio:"National Network of Private, Associative and Faith-Based Health Organisations of Guinea. Nearly 1,400 health facilities united to serve the health of the Guinean population, in partnership with the Ministry of Health and Public Hygiene through the DNEHPP.",
    footer_map:"Site map", footer_partners:"Institutional partners",
    footer_p1:"Ministry of Health and Public Hygiene", footer_p3:"Technical and financial partners",
    footer_copy:"RENOSPAC — National Network of Private, Associative and Faith-Based Health Organisations of Guinea. All rights reserved.",
    footer_motto:"Republic of Guinea · Work — Justice — Solidarity",
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
      const inner = `
        <div class="flex items-center justify-between">
          <span class="font-display font-black text-xl ${st.text}">${s}</span>
          <span class="w-9 h-9 rounded-full ${st.chip} flex items-center justify-center">
            ${url
              ? `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>`
              : `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg>`}
          </span>
        </div>
        <p class="mt-3 text-[15px] text-petrol-700 leading-snug">${t.platform_names[s]}</p>
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

/* ── Demo contact form ───────────────────────────────────────── */
const form = document.getElementById('contact-form');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('form-note').classList.remove('hidden');
  e.target.reset();
});

/* ── Boot ────────────────────────────────────────────────────── */
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
renderGallery();
bindFallbacks(document);
bindGallery(document);
initSlider();
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
applyLang(LANG);
