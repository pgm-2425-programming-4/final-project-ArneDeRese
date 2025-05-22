	
export const API_URL = import.meta.env.PROD
  ? "https://final-project-arnederese.onrender.com"
  : "http://localhost:1337/api";
 
export const API_TOKEN = import.meta.env.PROD
    ? "2f886c447631bf0cab2b0a7c88f974b2214e147b92ba1a2ff886cf2210c8a06a3951790d577b6edfd58cf737101b06b398d44a612d71ebf09d680cfe2ee61e4e90fbb3496a7d387356fa98f5e0a30558159c75b56034ccbf9dbad027d53f2b086a696b8339d5ae35f6be1dfa78476a6d1780483f795b4c2e9f64646491e1f11e"
    : "f88ae6f5a4b62f4c8fda8625463c09998a58feb12f9285de3998bc186aa9eb74eebdc0f5e6179f7c2ae8022955ee8c6c23a7ba75a3617cde29f75569ff1a9793fc9dd0d2404ece2c63d91e06e470f923d7a27dcc37bd9419bd7c8e41ad3886f0c7f189911face02bd8a3666faa155bdd635b142f26cf883783e95b9e67335739";

export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];
