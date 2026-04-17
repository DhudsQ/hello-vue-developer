<script setup>
import DeveloperRegistration from "./greetings/presentation/components/developer-registration.vue";
import {ref} from "vue";
import DeveloperCountShow from "./greetings/presentation/components/developer-count-show.vue";
import DeveloperGreeting from "./greetings/presentation/components/developer-greeting.vue";
import { Developer } from "./greetings/domain/model/developer.entity.js";

const firstName = ref('');
const lastName = ref('');
const developerCount=ref(0)
const hastRegistered=ref(false)

function updateRegisteredDeveloperInfo(developer){
  firstName.value=developer.firstName;
  lastName.value=developer.lastName;
  hastRegistered.value=true;
  updateDeveloperInfo(developer);
  console.log('Developer registered: ' ,  developer);

}

function resetRegisteredDeveloperInfo() {
  firstName.value = '';
  lastName.value = '';
  hastRegistered.value = false;
  console.log('Registration deferred');
}

function updateDeveloperInfo(developer){
  const dev=new Developer(developer.firstName,developer.lastName);
  if(dev.fullName !== 'Unknown')
    developerCount.value++;
}
</script>

<template>
  <div style="width: 1126px; max-width: 100%; margin: 0 auto; text-align: center; border-inline: 1px solid #e5e4e7; min-height: 100svh; display: flex; flex-direction: column;">
    <h1>Hello Vue Developer Application</h1>
    <developer-registration
      @developer-registered="updateRegisteredDeveloperInfo"
      @developer-deferred="resetRegisteredDeveloperInfo"
      />
    <developer-greeting
      v-if="hastRegistered"
      :firstName="firstName"
      :lastName="lastName"/>
    <developer-count-show :developer-count="developerCount"/>
  </div>
</template>
