const functions = require('firebase-functions');
const cors = require('cors')({ origin: true })
const fs = require('fs')
const uuid = require('uuid-v4')
const { Storage } = require('@google-cloud/storage')
const storage = new Storage({
  projectId: 'lambe-bedee',
  keyFilename: 'lambe-bedee.json'
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    try {
      fs.writeFileSync('/tmp/imageToSave.jpg', request.body.image, 'base64')

      const bucket = storage.bucket('lambe-bedee.appspot.com')
      const id = uuid()
      bucket.upload('/tmp/imageToSave.jpg', {
        uploadType: 'media',
        destination: `/posts/${id}.jpg`,
        metadata: {
          metadata: {
            contentType: 'image/jpg',
            firebaseStorageDownloadTokens: id
          }
        }
      }, (error, file) => {
        if(error) {
          console.log(error)
          return response.status(500).json({ error })
        } else {
          const filename = encodeURIComponent(file.name)
          const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/'
            + bucket.name + '/o/' + filename + '?' + '?alt=media&token=' + id
          return response.status(201).json({ imageUrl })
        }
      })
    } catch (error) {
      console.log(error)
      return response.status(500).json({ error })
    }
  })
});
