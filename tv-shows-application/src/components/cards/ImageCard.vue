<template>
  <div>
    <v-card flat outlined>
      <v-img contain height="300" :src="image.resolutions.original.url" />
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ImageCard",
  props: {
    image: {}
  }
};
</script>
