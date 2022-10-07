// import { ref, computed } from 'vue'
import { defineStore } from "pinia";
import { api } from "../assets/api";

export const useProjectStore = defineStore("projects", {
  state: () => {
    return {
      projects: [],
      selectedProject: {},
      categories: [],
    };
  },

  actions: {
    fetchProjects() {
        api().get(`/get_projects/${parseInt(window.localStorage.getItem("user"))}`).then(res => {
                this.projects = res.data
        }).catch(err => alert("something went wrong while fetching projects"))
    }
  },
});
