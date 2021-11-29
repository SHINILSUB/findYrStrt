import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

class AuthService {
    constructor(){
        this.firebaseAuth = getAuth();
        this.googleProvider = new GoogleAuthProvider();
        this.GithubAuthProvider = new GithubAuthProvider();
    }


  login(providerName) {
    const authProvider = this.getProvider(providerName)
    return signInWithPopup(this.firebaseAuth, authProvider)}
  logout() {
    this.firebaseAuth.signOut();
  }
  onAuthChange(onUserChanged) {
    this.firebaseAuth.onAuthStateChanged((user) => {
            onUserChanged(user);
        });
  }
  getProvider(providerName){
      switch (providerName){
          case 'Google':
        return this.googleProvider;
          case 'Github':
        return this.GithubAuthProvider;
    default:
        throw new Error(`not supported proveder: ${providerName}`)}
  }
}
export default AuthService;
