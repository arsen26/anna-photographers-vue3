<template>
  <v-card class="card-form-style">
    <v-btn
      icon
      large
      variant="plain"
      @click="closeCard"
      class="close-btn"
      style="position: absolute; top: 10px; right: 10px; z-index: 1"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-card-title class="row-container-for-information-title-style">
      Rezervim per {{ title }}
    </v-card-title>
    <v-card-text>
      Plotesoni te dhenat e meposhtme per te kontaktuar me stafin e Anna Photographers.
    </v-card-text>

    <v-row class="row-container-for-information">
      <v-col>
        <v-text-field
          color="primary"
          v-model="nameValue"
          label="Emer"
          variant="outlined"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          color="primary"
          v-model="surnameValue"
          label="Mbiemer"
          variant="outlined"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="row-container-for-information">
      <v-col>
        <v-text-field
          color="primary"
          hide-spin-buttons="true"
          type="number"
          v-model="numberValue"
          label="Nr Tel"
          variant="outlined"
        ></v-text-field>
      </v-col>
      <v-col>
        <!-- <v-text-field
          color="primary"
          v-model="packageValue"
          :label="packageLabel"
          variant="outlined"
        ></v-text-field> -->
        <v-text-field
          color="primary"
          :value="packageValue"
          :label="packageValue ? '' : packageLabel"
          variant="outlined"
          >{{  }}</v-text-field
        >
      </v-col>
    </v-row>

    <v-row class="row-container-for-information-text-area">
      <v-textarea
        color="primary"
        v-model="moreMessage"
        label="Me teper..."
        variant="outlined"
        density
      >{{ packageType }} 123</v-textarea>
    </v-row>

    <v-row class="justify-center">
      <v-date-picker
        @update:model-value="formatDate"
        v-model="dateToSend"
        color="primary"
        :title="''"
      ></v-date-picker>
    </v-row>

    <v-card-actions class="reserve-button-style">
      <v-spacer></v-spacer>

      <v-btn
        prepend-icon="mdi-check-circle"
        variant="outlined"
        color="primary"
        @click="sendMessageToWhatssApp"
        >Rezervoni</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script setup>
import { ref, onMounted } from 'vue'
// const packageValue = ref('')
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  packageValue: {
    type: String,
    required: true,
  },
  packageType: {
    type: String,
    required: true,
  },
  packageLabel: {
    type: String,
    default: 'Paketa që interesoheni',
  },
})

const emit = defineEmits(['close'])

const nameValue = ref('')
const surnameValue = ref('')
const numberValue = ref('')
const sendToWaDate = ref(null)
const moreMessage = ref('')
moreMessage.value = props.packageType
const dateToSend = ref(null)
const formatDate = (date) => {
  if (!date) return ''
  const d = new Date(date)
  if (isNaN(d.getTime())) return ''
  const day = String(d.getDate()).padStart(2, '0')
  const month = String(d.getMonth() + 1).padStart(2, '0')

  const year = d.getFullYear()
  // console.log(year)

  dateToSend.value = `${day}/${month}/${year}`
  sendToWaDate.value = dateToSend.value
  // console.log(dateToSend.value)
}
const closeCard = () => {
  emit('close')
}

const sendMessageToWhatssApp = () => {
  if (!nameValue.value || !surnameValue.value || !numberValue.value || !props.packageValue) {
    alert('Ju lutem plotësoni të gjitha fushat!');
    return;
  }

  const message = `Pershendetje! Une jam ${nameValue.value} ${surnameValue.value}, dhe isha i/e interesuar per te bere setin me paketen
  ${props.packageValue}, ne date ${sendToWaDate.value}. Per te bere rezervimin ky eshte numri im i telefonit ${numberValue.value}. SHENIM: ${moreMessage.value}™`;
  const phoneNumber = '+355697496384';

  if (
    (numberValue.value.includes('+') && numberValue.value.length > 12) ||
    (!numberValue.value.includes('+') && numberValue.value.length > 10)
  ) {
    alert('Numri që keni vendosur nuk është i saktë');
  } else {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
};
</script>
<style scoped>
.card-form-style {
  max-width: 500px;
  max-height: 900px;
  /* overflow-y: hidden !important; */
}
.row-container-for-information-title-style {
  padding-left: 23px;
  margin-bottom: -10px;
  font-weight: 600;
  font-size: large;
}
.row-container-for-information {
  padding-left: 20px;
  margin-bottom: -20px;
  padding-right: 20px;
}
.row-container-for-information-text-area {
  padding-left: 32px;
  padding-right: 32px;
  max-height: 170px;
}

.reserve-button-style {
  padding-right: 19px;
}
</style>
