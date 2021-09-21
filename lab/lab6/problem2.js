var Song = function (songName, singer) {
    this.songName = songName;
    this.singer = singer;

    this.play = function () {
        console.log('Playing: ' + this.songName)
    }
}
var song1 = new Song('Lalisa', 'Lisa');
var song2 = new Song('ชีวิตยังคงสวยงาม', 'Bodyslam');
var song3 = new Song('Gone', 'ROSÉ');
song1.play();
song2.play();
song3.play()