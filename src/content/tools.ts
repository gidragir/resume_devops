type Tool = {
    title: string,
    order: number,
    summary: string[]    
}

const tools: Tool[] = []

const addTool = (title: string, order: number, summary: string[]) => 
    tools.push({title, order, summary})


addTool("Virtualization",   1, ["Hyper-V", "Proxmox"])
addTool("Containerization", 2, ["Docker", "Docker-compose", "Portainer"])
addTool("CI / CD",          3, ["Github Actions", "Gitlab CI / CD", "Jenkins"])
addTool("IaC",              4, ["Terraform", "Ansible"])
addTool("Monitoring",       5, ["Prometheus", "Grafana", "Zabbix"])
addTool("Workflow",         6, ["Obsidian", "Todoist"])
addTool("OS",               7, ["Windows", "Windows Server", "Fedora", "Arch linux"])
addTool("Languages",        8, ["1C Enterprise", "JavaScript / TypeScript", "Rust"])

export default {data: tools}