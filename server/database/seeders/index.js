async function runSeeders() {
    try {
        const seedUsers = require("./1-insert-users");
        const seedBeans = require("./2-insert-beans");
        const seedDailyBean = require("./3-insert-dailyBean");
        const seedDistributors = require("./4-insert-distributors");

        await seedUsers();
        await seedBeans();
        await seedDailyBean();
        await seedDistributors();

        console.log("All seeders completed!");
        process.exit(0)
    } catch (error) {
        console.error("Seeder failed:", error)
        process.exit(1)
    }
}

runSeeders()
