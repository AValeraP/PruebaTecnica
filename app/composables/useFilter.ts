export const useFilter = <T>(projects: T[], filterKey: keyof T) => {
    const selectedOption = ref('')

    const filteredProjects = computed(() =>{
        if(!selectedOption.value || selectedOption.value === "All"){
            return projects
        }
        return projects.filter((project) =>{
            return String(project[filterKey]) === selectedOption.value
        })
    })
    
    return { selectedOption, filteredProjects}
}