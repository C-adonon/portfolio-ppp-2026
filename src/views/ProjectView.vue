<script setup>
// import { getProjectByName } from '../services/services.js';
import { getProjectByName } from "../services/services.nocodb.js";
import ProjectCard from "../components/card/ProjectCard.vue";
import TopTitle from "../components/ui/TopTitle.vue";
import CardSuggestion from "../components/card/CardSuggestion.vue";
import TertiaryBtn from "../components/ui/TertiaryBtn.vue";
</script>

<template>
  <main v-if="currentProject">
    <TopTitle>{{ currentProject.name }}</TopTitle>
    <section class="project-content">
      <!-- description -->
      <div v-html="description" class="project-content-text"></div>
      <!-- pictures -->
      <p class="link-text">Galerie :</p>
      <div class="project-content-pictures" v-if="currentProject.pictures">
        <img
          v-for="img in currentProject.pictures"
          :src="img.thumbnails.card_cover.signedUrl"
          :key="img.id"
          :title="img.title"
          :alt="currentProject.name"
        />
      </div>
      <!-- link -->
      <div v-if="currentProject.link" class="project-link">
        <p class="link-text">Lien du projet :</p>
        <TertiaryBtn v-if="currentProject.link" :url="currentProject.link"
          >Voir le site
        </TertiaryBtn>
      </div>
      <!-- video -->
      <div v-if="currentProject.video" class="project-video">
        <p class="link-text">Video du projet :</p>
        <iframe
          width="560"
          height="315"
          :src="currentProject.video"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        >
        </iframe>
      </div>
      <!-- pdf -->
      <div v-if="currentProject.pdf" class="project-pdf">
        <p class="link-text">Lien utile :</p>
        <TertiaryBtn
          v-for="pdf in currentProject.pdf"
          :pdf="pdf.filename"
          :key="pdf.id"
        >
          Voir le pdf
        </TertiaryBtn>
      </div>
    </section>
    <CardSuggestion />
  </main>
  <main v-else>
    <TopTitle>Chargement en cours</TopTitle>
  </main>
</template>

<script>
export default {
  name: "ProjectListView",
  components: {
    ProjectCard,
    TopTitle,
    CardSuggestion,
    TertiaryBtn,
  },
  data() {
    return {
      currentProject: null,
      description: "",
    };
  },
  created() {
    this.getProjectData();
  },
  watch: {
    "$route.params.name": "getProjectData",
  },
  methods: {
    async getProjectData() {
      if (this.$route.params.name) {
        console.log("project name:", this.$route.params.name);
        let projectResponse = await getProjectByName(this.$route.params.name);
        if (projectResponse) {
          console.log(" IN PROJECT VIEW projectResponse: ", projectResponse);
          this.currentProject = projectResponse;
          this.description = this.currentProject.description;
        }
      } else {
        console.log("no project name");
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>

<style scoped lang="scss">
@use "../assets/variables.scss" as v;

section.project-content {
  width: 80%;
  margin: 4% auto 8% auto;

  div.project-content-text {
    margin-bottom: 4%;
    padding: 0 10%;

    &:deep(p) {
      margin: 24px 0;
    }
  }

  div.project-link {
    margin: 4% 0;
  }

  .link-text {
    font-size: v.$font-header2;
    font-weight: v.$font-semi-bold;
    color: v.$neutral-900;
    margin: 8px 0;
  }

  div.project-content-pictures {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin: 4% auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  div.project-video {
    margin: 4% 0;

    iframe {
      display: block;
      text-align: center;
      margin: auto;
      width: 80%;
      height: 400px;
      border: none;
    }
  }
}

@media (min-width: 901px) and (max-width: 1023px) {
  section.project-content {
    width: 95%;
    margin: 4% auto 8% auto;
    text-align: justify;
  }
}

@media (max-width: 900px) {
  section.project-content {
    width: 95%;
    margin: 4% auto 8% auto;
    text-align: justify;

    div.project-content-pictures {
      grid-template-columns: 1fr;
    }

    div.project-video {
      iframe {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>