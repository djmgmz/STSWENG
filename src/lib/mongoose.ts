import mongoose from "mongoose";
import "@/lib/models/business/livelihood";
import "@/lib/models/business/transaction";
import "@/lib/models/donations/donation";
import "@/lib/models/feeding/feeding_child";
import "@/lib/models/feeding/feeding_program";
import "@/lib/models/households/household";
import "@/lib/models/households/member";
import "@/lib/models/interventions/intervention";
import "@/lib/models/useraccounts/user";

const connection: { isConnected?: number } = {};

const dbConnect = async () => {
    if (connection.isConnected) return;

    console.log("Connecting to MongoDB...");

    const db = await mongoose.connect(process.env.MONGODB_URI!);

    connection.isConnected = db.connections[0].readyState;
};

export default dbConnect;
