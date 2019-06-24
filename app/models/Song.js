export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }
    get Template() {
        return `      
    <div class="songs card">
        <h4>Title: ${this.title}</h4>
        <img src="${this.albumArt}" />
        <h4>Artist: ${this.artist}</h4>
        <h4>Collection: ${this.collection}</h4>
        <h4>Price: ${this.price}</h4>
        <audio controls>
        <source src="${this.preview}" type="">
        </audio>

    </div>
    `
    }
}