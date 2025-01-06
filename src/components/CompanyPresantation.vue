<template>
  <v-container fluid> </v-container>
</template>
<script>
export default {
  data() {
    return {
      teDhenat: [
        {
          title: 'ANNA PHOTOGRAPHERS',
          description:
            'Ne jemi destinacioni juaj i duhur për sesione fotografike magjike. ',
          elevation: 16,
          button: 'me kliko per me teper informacjone',
          src: 'photographyVideo.mp4',
        },
        {
          title: 'ANNA DECOR',
          description:
            'Perjeto magjine e shnderrimit te imagjinates ne realitet',
          elevation: 16,
          button: 'me kliko per me teper informacjone',
          src: 'decorVideo.mp4',
        },
      ],
    }
  },
}
</script>

<style scoped>
.title-style {
  position: absolute;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Raleway', sans-serif;
  font-size: 35px;
  font-weight: 800;
  line-height: 72px;
  margin: 0 0 24px;
  text-align: center;
  top: 180px;
  text-transform: uppercase;
}
.description-style {
  position: absolute;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.9); /* Red color with 50% opacity */
  font-family: 'Raleway', sans-serif;
  font-size: 13px;
  font-weight: 400;
  margin: 0 0 24px;
  text-align: center;
  top: 260px;
  text-transform: uppercase;
}

.button-style {
  position: absolute;
  top: 360px; /* Adjust the top position based on your layout */
  background-color: transparent;
  text-align: center;
  transition: transform 0.3s ease-in-out; /* Add a smooth transition effect */
}

.button-style:hover {
  transform: scale(1.1);
}
.card-container:hover {
  transform: scale(1.05);
}
</style>
