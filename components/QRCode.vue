<template>
  <div>
    <img v-if="qrURL" :src="qrURL" alt="QRcode" />
  </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  data () {
    return {
      text: 'ここの内容がQRコードで出力されます。',
      qrURL: null // QRコードのURLを入れる用
    }
  },
  mounted () {
    this.renderQR()
  },
  methods: {
    renderQR () {
      const d = this
      QRCode.toDataURL(this.text, (err, url) => {
        if (err) { throw err }
        d.qrURL = url
      })
    }
  }
}
</script>
