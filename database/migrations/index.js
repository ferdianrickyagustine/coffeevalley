async function runMigrations() {
    try {
        const migrateUsers = require("./1-create-user");
        const migrateBean = require("./2-create-bean");
        const migrateDailyBean = require("./3-create-dailyBean");
        const migrateDistributor = require("./4-create-distributor");
        const migrateUpload = require("./5-create-upload");

        await migrateUsers();
        await migrateBean();
        await migrateDailyBean();
        await migrateDistributor();
        await migrateUpload();

        console.log("All migrations completed!");
        process.exit()
    } catch (error) {
        console.error("Migration failed:", error)
        process.exit(1)
    }
}

runMigrations()