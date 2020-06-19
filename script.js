var config = {
    // TYPE YOUR FIREBASE DATA
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  const ref = storage.ref("/imagens");

  ref.listAll().then(all => {
      all.items[0].getDownloadURL().then(url => {
          console.log(url)
          document.getElementById('img').src = url;
          document.getElementById('link').href = url
      })
  })

