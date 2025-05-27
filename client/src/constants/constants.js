	
export const API_URL = import.meta.env.PROD
  ? "https://final-project-arnederese.onrender.com/api"
  : "http://localhost:1337/api";
 
export const API_TOKEN = import.meta.env.PROD
    ? "f88ae6f5a4b62f4c8fda8625463c09998a58feb12f9285de3998bc186aa9eb74eebdc0f5e6179f7c2ae8022955ee8c6c23a7ba75a3617cde29f75569ff1a9793fc9dd0d2404ece2c63d91e06e470f923d7a27dcc37bd9419bd7c8e41ad3886f0c7f189911face02bd8a3666faa155bdd635b142f26cf883783e95b9e67335739"
    : "abd551a679adb651236c97c6878b0ade12d43411a7cd092fd35bd55b8f8a3be66b6f629d89a9d47a3f1b8a535242eeb52e8bb96a935cd2e2e23863f411677f6634ba410287009af3b21b7070bea397a53e489e683d336f69b17ec14a8b2d0b2f712596598d742f28d213895e3ccb5d4c99991fdb56f2cc4bf3e325989982817c";

export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];
