<template>
  <li>
    <p>{{ title }}</p>
    <ul>
      <li v-for="(member, index) in members" :key="index" class="member-name">
        <template v-if="member.url">
          <a :href="member.url" target="_blank" rel="noopener noreferrer">
            {{ member.name }}
          </a>
        </template>
        <template v-else>
          {{ member.name }}
        </template>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    members: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
