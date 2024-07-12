export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:VG6rjaeouog82q4c@database.p2gtu3q.mongodb.net/todo_list_db?retryWrites=true&w=majority&appName=Database.', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(">>>>> DB is connected");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};
