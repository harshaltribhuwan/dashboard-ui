// src/mockData.js
export const lineChartData = [
    { date: "12 Mar", articles: 20 },
    { date: "13 Mar", articles: 10 },
    { date: "14 Mar", articles: 30 },
    { date: "15 Mar", articles: 25 },
    { date: "16 Mar", articles: 40 },
    { date: "17 Mar", articles: 35 },
    { date: "18 Mar", articles: 50 },
];

export const pieChartData = [
    { name: "To do", value: 20 },
    { name: "In progress", value: 30 },
    { name: "On hold", value: 10 },
    { name: "Completed", value: 40 },
];

export const stackedBarChartData = [
    { month: "Jan", Nature: 2, BHP: 1 },
    { month: "Feb", Nature: 3, BHP: 1 },
    { month: "Mar", Nature: 4, BHP: 2 },
];

export const ongoingTasksData = [
    { manuscript: "World and Natural Resources", author: "Sarah Johnson", assignedTo: "John Kulkarani", lastUpdated: "March 25, 2025", status: "In progress" },
    { manuscript: "World and Natural Resources", author: "Sarah Johnson", assignedTo: "John Kulkarani", lastUpdated: "March 25, 2025", status: "To do" },
    { manuscript: "World and Natural Resources", author: "Sarah Johnson", assignedTo: "John Kulkarani", lastUpdated: "March 25, 2025", status: "Completed" },
    { manuscript: "World and Natural Resources", author: "Sarah Johnson", assignedTo: "John Kulkarani", lastUpdated: "March 25, 2025", status: "In progress" },
    { manuscript: "World and Natural Resources", author: "Sarah Johnson", assignedTo: "John Kulkarani", lastUpdated: "March 25, 2025", status: "To do" },
];

export const projectTasksData = [
    { task: "Content Review", assignedTo: "John Kulkarani", author: "Sarah Johnson", due: "March 25, 2025", priority: "High" },
    { task: "Manuscript Screening", assignedTo: "John Kulkarani", author: "Sarah Johnson", due: "March 25, 2025", priority: "To do" },
    { task: "PRA", assignedTo: "John Kulkarani", author: "Sarah Johnson", due: "March 25, 2025", priority: "Completed" },
];