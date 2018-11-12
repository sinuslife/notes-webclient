<template>
  <div>
    {{note.id}}
    {{note.title}}
    {{note.text}}
  </div>
</template>

<script>
  export default {
    props:['note']
  }
</script>
