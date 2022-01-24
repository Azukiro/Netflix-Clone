import mongoose from "mongoose";

const MovieList = new mangoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        type : { type: String},
        genre: { type: String },
        content : { type: Array},
    },
    {
        timestamps: true
    }
);

export default mangoose.model("MovieList", MovieListSchema);