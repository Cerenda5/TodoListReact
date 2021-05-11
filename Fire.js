import firebase from 'firebase';
import '@firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDCMD03_pX3EUYpGWzEXu2gBudBw0_2TEc",
    authDomain: "todolistbdd.firebaseapp.com",
    projectId: "todolistbdd",
    storageBucket: "todolistbdd.appspot.com",
    messagingSenderId: "492826571885",
    appId: "1:492826571885:web:70e39f407df6e70a557b64"
  };

  export default class Fire {
      constructor(callback) {
          this.init(callback);
      }

      init(callback) {
          if(!firebase.apps.length) {
              firebase.initializeApp(firebaseConfig);
          }

          firebase.auth().onAuthStateChanged(user => {
              if (user) {
                  callback(null);
              } else {
                  firebase.auth().signInAnonymously().catch(error => {
                      callback(error)
                  });
              }
          })
      }

      get ref() {
          return firebase.firestore().collection("lists");
      }

      getLists(callback) {
          let ref = this.ref.orderBy("name");
          this.unsubscribe = ref.onSnapshot(snapshot => {
              let lists = [];
              snapshot.forEach(doc => {
                  lists.push({id: doc.id, ...doc.data()});
              });
              callback(lists);
            }, function(error) {
                console.error(error);
            });
        }

        addList(list) {
            let ref = this.ref;
            ref.add(list);
        }

        deleteList(list) {
            let ref = this.ref;
            ref.doc(list.id).delete();
        }

        updateList(list) {
            let ref = this.ref;
            ref.doc(list.id).update(list);
        }

        detach() {
            this.unsubscribe();
        }
  }