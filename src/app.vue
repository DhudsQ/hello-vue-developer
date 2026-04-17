<script setup>
import DeveloperRegistration from "./greetings/presentation/components/developer-registration.vue";
import {ref} from "vue";

const firstName = ref('');
const lastName = ref('');
const developerCount=ref(0)
const hastRegistered=ref(false)

function updateRegisteredDeveloperInfo(developer){
  firstName.value=developer.firstName;
  lastName.value=developer.lastName;
  hastRegistered.value=true;
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
  <developer-registration
    @developer-registered="updateRegisteredDeveloperInfo"
    @registered-deferred="resetRegisteredDeveloperInfo"
    />
</template>
