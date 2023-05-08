import mongoose from "mongoose";
import app from './server'

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions)
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));