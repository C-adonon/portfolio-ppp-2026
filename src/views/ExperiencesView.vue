<script setup>
import TopTitle from '../components/ui/TopTitle.vue';
import CardSuggestion from '../components/card/CardSuggestion.vue';
import PrimaryBtn from '../components/ui/PrimaryBtn.vue';
</script>

<template>
    <main class="about">
        <TopTitle>Mes expériences & objectifs professionnels</TopTitle>
        <section class="about-content">
            <div class="container">
                <div class="about-content-text">
                    <p>Par ailleurs, j’ai eu l’opportunité de mettre en pratique mes acquis dans un contexte
                        professionnel. En 2021, j'ai intégré le studio créatif FCINQ basé à Paris en tant que stagiaire
                        UI et Intégration. Durant ce stage, j’ai participé à des ateliers de conception UX, approfondi
                        mes connaissances en ergonomie, appliqué les méthodologies centrées sur l'utilisateur sur des
                        projets concrets et développé des sites web interactifs.
                    </p>

                    <p>Puis, en 2023, j'ai rejoint
                        l’entreprise Mobilize Financial Services (MFS) basée à Noisy-le-Grand en tant qu’alternante
                        concepteur API intégration junior où j'ai contribué au développement du référentiel
                        d'architecture d'entreprise dans un contexte international. Cette dernière expérience m'a permis
                        de mobiliser mes compétences en Java et JavaScript, de renforcer ma capacité à collaborer avec
                        des équipes pluridisciplinaires et d’appréhender les enjeux techniques et organisationnels de la
                        conception logicielle.</p>

                    <p>Ces deux expériences, bien qu'éloignées les unes des autres, ont été déterminantes dans la
                        construction de mon identité de développeuse informatique et de designer. Elles font de moi un
                        profil complet et polyvalent car j’ai abordé les aspects ergonomiques de la conception
                        d’application, organisationnels pour les entreprises mais aussi techniques. C’est en conciliant
                        ces deux domaines que je souhaite devenir développeur ergonome ou spécialiste de l’interface
                        utilisateur.</p>
                </div>
                <div class="about-image">
                    <img src="/fcinq.jpg" alt="logo FCINQ">
                    <img src="/mfs.jpg" alt="logo Mobilize Financial Services">
                </div>
            </div>
        </section>
        <section>
            <h2>Mes objectifs:</h2>

            <h3>À long terme</h3>
            <p>Mon objectif à long terme est d'évoluer en tant que développeur ergonome ou spécialiste de l'Interface
                Homme Machine (IHM). Les domaines de l'aéronautique, de la médecine et de l'industrie m'intéressent
                particulièrement car l’ergonomie et l’expérience utilisateur sont au centre de la conception logicielle,
                ce qui correspond à ma philosophie de travail. Enfin, j'espère gagner en responsabilité et en confiance
                afin de piloter des projets innovants, complexes et de grandes envergures.</p>

            <h3>À moyen terme</h3>
            <p>Pour concrétiser ma vision, mes objectifs à moyen terme s’articulent autour de la poursuite de mes études
                en master ainsi que l’immersion professionnelle. En effet, je souhaite continuer mes études en master
                afin de me spécialiser dans les domaines de l’IHM ou encore de l’informatique graphique. De plus,
                j’aimerai découvrir de nouvelles applications de l’IHM comme la réalité virtuelle et augmentée, pour
                cela, j'espère décrocher une ou plusieurs expériences professionnelles en lien directes avec ces
                applications, si possible à l'international.
            </p>

            <h3>À court terme</h3>
            <p>En attendant de pouvoir concrétiser tous ces objectifs, je me concentre aujourd’hui sur la consolidation
                de mon socle de compétences et de connaissances, aussi bien techniques que transversales. Je tente de
                programmer aussi régulièrement que possible afin de travailler mes compétences en algorithmie et en
                conception logicielle. De plus, je m'efforce à perfectionner mes projets, notamment la SAE afin d'étayer
                mon portfolio et de le rendre plus attrayant pour les recruteurs.</p>
        </section>
        <CardSuggestion />
    </main>
</template>


<style scoped lang="scss">
@use '../assets/variables.scss' as v;

section {
    width: 65%;
    margin: 0 auto 4% auto;
}

h2 {
    margin-bottom: 2%;
}

img {
    display: inline;
    height: 50px;
}

p {
    margin-bottom: 2%;
    text-indent: 2em;
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
                width: 100%;
                height: 100%;
            }
        }

        .about-content-text {

            p,
            ul {
                margin-bottom: 4%;
                text-indent: 2em;
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
