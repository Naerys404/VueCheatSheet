// services/ArticleDataService.js
import { database } from "../../firebase";
import { ref, push, update, remove, onValue } from "firebase/database";

class ArticleDataService {
    constructor() {
        //Ref de firebase permet de faire référence à la base de données firebase.
        this.dbRef = ref(database, "articles");
    }

    // Obtenir tous les articles (onValue : addeventlistener des bases de données)
    getAll(callback) {
        onValue(this.dbRef, callback);
    }

    // Ajouter un article
    create(article) {
        return push(this.dbRef, article);
    }

    // Mettre à jour un article
    update(id, article) {
        return update(ref(database, `articles/${id}`), article);
    }

    // Supprimer un article
    delete(id) {
        return remove(ref(database, `articles/${id}`));
    }

    // Supprimer tous les articles
    deleteAll() {
        return remove(this.dbRef);
    }
}

// Exporter une instance unique
export default new ArticleDataService();
