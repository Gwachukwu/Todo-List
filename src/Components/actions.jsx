export const ADD = "ADD"
export function addTask(task){
    return{
        type: ADD,
        task
    }
}
export const REMOVE = "REMOVE";
export function removeTask(task){
    return{
        type: REMOVE,
        task
    }
}