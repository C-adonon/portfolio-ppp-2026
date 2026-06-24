<script setup>
import TopTitle from '../components/ui/TopTitle.vue';
import CardSuggestion from '../components/card/CardSuggestion.vue';
import PrimaryBtn from '../components/ui/PrimaryBtn.vue';
</script>

<template>
    <main class="about">
        <TopTitle>Ma formation</TopTitle>
        <section class="about-content">
            <div class="container">
                <div class="about-content-text">
                    <h2>Mon parcours académique :</h2>
                    <p>
                        En 2024, à l’issue d’un Bachelor en Développement Web, j’obtiens un titre professionnel de
                        Concepteur
                        Développeur d’Applications de niveau 6 auprès de l’Ecole Supérieure du Digital (ESD) à Paris.
                        Cette
                        première
                        formation m’a permis de développer un savoir-faire en développement JavaScript avancé et
                        d’approfondir
                        mes
                        compétences en conception d’application et ma compréhension de l’expérience utilisateur. Forte
                        de cette
                        première expérience académique, j’ai choisi de poursuivre mes études en BUT afin de développer
                        de
                        nouveaux
                        acquis en réseau, algorithmie, mathématiques et programmation.
                    </p>
                    <p>En effet, le BUT Informatique aborde différentes compétences tout au long de chaque semestre.
                        Cette
                        année, nous
                        abordons 6 savoir-faire et savoir-être professionnels appliqués au domaine du numérique,
                        certains plus
                        techniques que d’autres mais tous complémentaires :
                    </p>
                    <ul>
                        <li>Compétence 1 : Réaliser un développement d'application</li>
                        <li>Compétence 2 : Optimiser des applications informatiques</li>
                        <li>Compétence 3 : Administrer des systèmes informatiques communicants</li>
                        <li>Compétence 4 : Gérer des données de l'information</li>
                        <li>Compétence 5 : Conduire un projet</li>
                        <li>Compétence 6 : Travailler dans une équipe informatique</li>
                    </ul>
                    <span>Elles sont abordées de manière transversale lors de différents projets universitaires et d'
                        enseignements.
                    </span>
                </div>
                <div class="about-image">
                    <img src="/esd.png" alt="logo ESD">
                    <img src="/iutv.png" alt="logo IUTV">
                </div>
            </div>
        </section>
        <section>
            <h2>Conclusion:</h2>
            <p>En somme, à l’issue d’une première formation axée sur le numérique et le développement web créatif, j’ai
                développé une appétence pour l’ergonomie, l’expérience utilisateur et le développement JavaScript qui
                constituent un socle de compétences solide sur lequel je m’appuie.</p>
            <p> Ma poursuite en BUT informatique
                s’inscrit naturellement dans une volonté d'élargir l’éventail de mes acquis en informatique. À l’issue
                de
                cette formation mon objectif est de continuer mon parcours académique afin de rejoindre un master en
                Interface Homme Machine (IHM) ou en Informatique Graphique. L’approche pluridisciplinaire du BUT,
                centrée
                sur des enseignements et mises en situation professionnalisantes, me permettra d’étayer et de renforcer
                mes
                compétences en Java, réseau et algorithmie, ainsi que les savoir-faire transverses en gestion de projet
                et
                communication professionnelle.</p>
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
