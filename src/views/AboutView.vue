<script setup>
import TopTitle from '../components/ui/TopTitle.vue';
import CardSuggestion from '../components/card/CardSuggestion.vue';
import PrimaryBtn from '../components/ui/PrimaryBtn.vue';
import SkillsSection from '../components/section/SkillsSection.vue';
</script>

<template>
  <main class="about">
    <TopTitle>A propos de moi</TopTitle>
    <section class="about-content">
      <div class="container">
        <div class="about-content-text">
          <h2>Qui suis-je ?</h2>
          <p>Je m’appelle Chloé Adonon, j’ai 25 ans et je suis étudiante en deuxième année de BUT (Bachelor
            Universitaire Technologique) en informatique au sein de l’IUT de Villetaneuse de l’université Sorbonne Paris
            Nord.
          </p>
          <PrimaryBtn :cv="true">Télécharger mon CV</PrimaryBtn>
        </div>
        <div class="about-image">
          <img src="/moi2.jpg" alt="moi">
        </div>
      </div>
    </section>
    <section>
      <h2>Parcours et philosophie de travail :</h2>
      <p>
        Si mon parcours académique est aujourd’hui tourné vers l’informatique, il prend en réalité ses racines
        dans
        ma passion pour la sculpture, le design et le graphisme. En effet, le choix de l’informatique n’a pas
        toujours été une évidence pour moi mais il s’est progressivement imposé au fil des années comme une
        continuité logique à ma volonté d’exprimer ma créativité sous de nouvelles formes. L’informatique et
        particulièrement le web est pour moi un terrain de jeu quasi illimité, une toile vierge où interaction,
        technologie et inventivité s’allient.
      </p>
      <p>
        « Créativité et Technologie » décrivent mon approche de travail. Guidée par le souci du détail, la
        curiosité
        et l'innovation, j’ai progressivement construit une philosophie qui résume la manière dont j’aborde
        l’informatique: « Transmettre des émotions par le code ». Cette approche atypique me pousse à chercher des
        solutions qui améliorent l'expérience utilisateur et explorer différents langages de programmation afin de
        trouver les meilleurs outils qui répondent aux exigences de mes projets.
      </p>
    </section>
    <section>
      <h2>Mes compétences techniques :</h2>
      <span>Voici l’ensemble des savoir-faire techniques que j’ai acquis :</span>
      <SkillsSection />
      <!-- <ul>
        <li>Langages : JavaScript, Java, Python</li>
        <li>Frontend : HTML, CSS/SASS, Vue.js</li>
        <li>Backend : Node.js, Express.js, Prisma, ORM, Flask, Jinja</li>
        <li>Base de données : MySQL, PostgreSQL</li>
        <li>DevOps : GitHub, Docker</li>
        <li>Design & maquettage : Figma, Canva,</li>
        <li>Suite Adobe (Illustrator, Photoshop)</li>
        <li>Gestion de projet : Jira, Confluence</li>
        <li>Bureautique : Word, PowerPoint, Excel</li>
      </ul> -->

      <h3>Mes compétences phares :</h3>
      <p>Mon appétence pour le JavaScript, l’HTML et le CSS a été développée au cours de différentes expériences
        académiques et professionnelles. Celle-ci s’articule autour de frameworks et technologies tels que Node.js,
        Express.js pour le développement serveur ou encore Vue.js pour la partie client. Ces compétences ont été mises à
        l'épreuve lors de projets universitaires, tels que des sites vitrines destinés à promouvoir l’évènement annuel
        de
        l’Ecole Supérieure du Digital et des travaux pratiques divers.
      </p>
      <p>La deuxième compétence technique phare de mon profil est le design que je pratique essentiellement à l’aide de
        l’outil Figma. J’utilise ce savoir-faire dans quasiment tous mes projets pour formaliser le parcours utilisateur
        et les attendus du cahier des charges lors de la phase de conception logicielle.
      </p>
    </section>
    <section>
      <h2>Mes qualités :</h2>
      <p>Mon <b>dynamisme et mon sérieux</b> me permettent de m’intégrer rapidement au sein d’équipes
        pluridisciplinaires et
        d'appréhender clairement leur processus organisationnel afin d’être la plus efficace possible. Cela a été le
        cas, durant mon expérience en alternance chez Mobilize Financial Services, où j’occupais un poste au carrefour
        de plusieurs services. J’ai dû assimiler plusieurs processus, règles métiers et méthodes de travail pour être
        opérationnelle dans les meilleurs délais et contribuer au développement de l’outil EAR. Cette capacité
        d’adaptation m’a permis de gagner en autonomie et de maintenir une communication efficiente avec les parties
        prenantes.</p>

      <p>Ces deux premières qualités vont de pair avec les deux prochaines : la <b>compassion et la bienveillance</b>.
        En
        effet, l’une de mes missions pendant mon alternance était d’organiser des sessions de formation et de
        vulgarisation de l’outil que je développais. Au vue de sa complexité, certains utilisateurs ne parvenaient pas à
        le prendre en main. Au lieu de simplement répéter les mêmes explications et actions, j’ai cherché à comprendre
        les blocages des utilisateurs et j’ai adapté mon discours en proposant des exemples, des sessions personnalisées
        ou en modifiant mon support de formation.</p>

      <p>Je m’efforce également de mettre ma <b>créativité</b> au service des projets qui me sont confiés. Je porte une
        attention particulière à mettre une part d’inventivité dans tous mes projets et particulièrement en design et
        dans ma pratique de la poterie. Ces deux domaines nécessitent d’appliquer des règles et méthodes mais aussi et
        surtout, elles font appellent à notre imagination et à notre individualité.</p>

      <p>
        Enfin, afin de m’adapter aux évolutions et exigences de chaque projet et de prioriser mes tâches, je reste
        <b>organisée et orientée résultats</b>. Lors des différents projets universitaires menés au cours de ma
        scolarité, j’ai
        tenté de conserver une méthode de travail alliant flexibilité, écoute active et agilité. Cela me permet
        d'appréhender au mieux les enjeux de chaque projet.
      </p>
    </section>
    <CardSuggestion />
  </main>
</template>


<style scoped lang="scss">
@use '../assets/variables.scss' as v;

section {
  width: 60%;
  margin: 0 auto 4% auto;
}

h2 {
  margin-bottom: 2%;
}

p {
  margin-bottom: 2%;
  text-indent: 2em;
}

img {
  display: inline;
  height: 50px;
}

ul {
  margin-bottom: 2%;
}

section.about-content {
  padding: 0 4% 0 4%;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8%;

    .about-image {

      img {
        width: 90%;
        height: 90%;
      }
    }

    .about-content-text {

      h2 {
        font-size: 50px;
        font-weight: v.$font-bold;
        margin-bottom: 2%;
        // color: v.$neutral-900;
      }

      p {
        margin-bottom: 8%;
      }
    }
  }
}


// Desktop
@media (min-width: 901px) and (max-width: 1023px) {
  section.about-content {
    width: 100%;

    .container {
      flex-direction: column-reverse !important;

      .about-content-text,
      .about-image {
        width: 100% !important;
      }

      .about-image {
        text-align: center;
      }
    }
  }


}

// Tablet & mobile
@media (max-width: 900px) {
  section.about-content {
    width: 100%;

    .container {
      flex-direction: column-reverse !important;
      text-align: center !important;


      .about-content-text,
      .about-image {
        width: 100% !important;
      }

      .about-image {
        text-align: center;
        margin-bottom: 4% !important;
      }
    }
  }

}
</style>
