import axios from "axios";

// yapılacak bütün api isteklerinde ortak  kullanılcak

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWIwMTVhMTJkNThhOTA5MDY4MjhjY2Q1YmIxNWRkMSIsIm5iZiI6MTcyMTc0MDIxNC44MTY4OTYsInN1YiI6IjY2MmFiMDlkNWMwNzFiMDExYzVlMmY0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.beN-JvbFtIKJ8ksC4VRKaVkx8w5yQou7ei4nbIM2-R8",
  },
  params: {
    language: "fr-FR",
  },
});

export default api;
