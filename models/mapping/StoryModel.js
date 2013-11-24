var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    EventDate:Date,
    Place:String,
    People:String,

    Title:String,

    Content:String ,
    ContentType:String,

    PhotosUrl:Array,
    MusicUrl:String,
    VideoUrl:String,

    /***
     * 心情
     */
    Mood:String ,

    /***
     * 级别，重要程度
     */
    Rank:Number


}, {collection: 'Story'});

mongoose.model('Story', schema);