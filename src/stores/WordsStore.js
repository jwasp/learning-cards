import {action, makeAutoObservable, observable} from 'mobx';
import {default as UUID} from "node-uuid";

class WordsStore {
    @observable isLoading;

    constructor() {
        makeAutoObservable(this)
        this.loadData()
    }

    async fetchFromApi() {
        const url = `http://itgirlschool.justmakeit.ru/api/words`;
        const response = await fetch(url);
        return await response.json();
    }

    @action addWord = (value) => {
        const newWord = {
            id: `${value.english}-${UUID.v4()}`,
            english: value.english,
            transcription: value.transcription,
            russian: value.russian,
            tags: value.tags,
            tags_json: value.tags_json
        }
        fetch('/api/words/add', {
            method: 'POST',
            body: JSON.stringify(newWord),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        }).then((response)=> {
            if (response) return response.json()
            else {
                throw new Error('Something went wrong ...');
            }
        }).then(()=> {
            this.words.push(newWord);
            this.isLoading = false;
        })
    }
    @action removeWord = (index) => {
        fetch(`/api/words/${index}/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        }).then((response)=> {
            if (response) return response.json()
            else {
                throw new Error('Something went wrong ...');
            }
        }).then(()=>{
            this.words.splice(index, 1)
        })
    }
    @action loadData = () => {
        this.isLoading = true;
        fetch('/api/words')
            .then((response) => {
                if (response) return response.json()
                else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((data)=> {
                this.words = data;
                this.isLoading = false;
            })
            .catch(error=>{
                this.error = error;
                this.isLoading = false;
            })
    }
    @action updateWord = (id, value)=> {
        const changedWord = {
            english: value.english,
            transcription: value.transcription,
            russian: value.russian,
            tags: value.tags,
            tags_json: value.tags_json
        }
        fetch(`/api/words/${id}/update`, {
            method: 'POST',
            body: JSON.stringify(changedWord),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        }).then((response)=> {
            if (response) return response.json()
            else {
                throw new Error('Something went wrong ...');
            }
        }).then(()=>{
            this.words[id] = changedWord;
            console.log(changedWord, this.words[id])
            this.isLoading = false;
            console.log('update-', this.words)
        })
    }
}

export default WordsStore;