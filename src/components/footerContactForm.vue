<template>
  <v-form ref="form">
    <v-text-field v-model="name" label="Name" dense outlined></v-text-field>
    <v-text-field v-model="email" label="Email" dense outlined></v-text-field>
    <v-text-field v-model="tel" label="Nr Tel" dense outlined></v-text-field>
    <v-text-field
      v-model="subject"
      label="Subject"
      dense
      outlined
    ></v-text-field>
    <v-textarea
      v-model="message"
      dense
      label="Your Message"
      auto-grow
      outlined
      rows="8"
      row-height="20"
    ></v-textarea>
    <v-btn outlined block color="primary" @click="sendEmail">SEND EMAIL</v-btn>
  </v-form>
</template>

<script>
import emailjs from 'emailjs-com' // keep it as is unless switching to named imports

export default {
  data() {
    return {
      name: '',
      tel: '',
      email: '',
      subject: '',
      message: '',
    }
  },
  methods: {
    async sendEmail() {
      try {
        await emailjs.send(
          'service_u1ay0hb',
          'template_09pnylp',
          {
            name: this.name,
            email: this.email,
            subject: this.subject,
            telephone: this.tel,
            message: this.message,
          },
          '2ydcucD9DD2LytKdw'
        )

        alert('EMAIL SENT SUCCESSFULLY')
      } catch (err) {
        // console.error('Error sending email:', err); // Uncomment for debugging
        alert('Error sending email: ' + err.message)
      }

      this.clearFields() // Clear fields after sending email
    },
    clearFields() {
      this.name = ''
      this.email = ''
      this.tel = ''
      this.subject = ''
      this.message = ''
    },
  },
}
</script>

<style scoped></style>
