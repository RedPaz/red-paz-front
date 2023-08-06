<script setup lang="ts">
import { DescriptionItem } from '@/common/interfaces';

const description: DescriptionItem = {
  title: 'Descripción',
  description: `En este curso proponemos hacer un recorrido por los principales hitos que dan cuenta de las características y dimensiones del conflicto armado de más de 50 años en el país, y analizar los diversos esfuerzos de negociación política que se han realizado con el fin de poner fin a la confrontación armada. Este recorrido se realiza desde la perspectiva de los daños materiales e inmateriales, políticos, culturales y psicosociales que ha causado la guerra a los diversos sectores, comunidades y colectivos afectados, teniendo en cuenta las luchas y procesos en aras de conquistar los derechos a la reparación, la verdad, la justicia y las garantías de no repetición, adelantados por las víctimas, las organizaciones de derechos humanos y la sociedad civil.

  En las sesiones del curso se procura combinar análisis nacionales y territoriales, dando lugar a la presentación de casos que permitan abordar modalidades específicas de violencia y situaciones particulares de los grupos y sectores poblacionales. Se hará un especial énfasis en la identificación de los retos, dificultades y oportunidades que afronta el país de cara a construir una paz estable y duradera.

  Contaremos con la participación de invitados especiales: líderes sociales, funcionarios públicos, académicos y profesores de las distintas sedes de la UNAL.`,
}
</script>

<template>
  <DescriptionSection
    :items="[description]"
    main-image="/images/experiences/discussions/discussions-description.png"
  />
</template>

<style scoped>

</style>
