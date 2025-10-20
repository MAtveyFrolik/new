class TaskManager {
    constructor(listName) {
        this.listName = listName;
        this.items = [];
        this.currentId = 1;
    }

    createItem(description) {
        const newItem = {
            id: this.currentId++,
            description: description,
            isDone: false,
            created: new Date().toISOString(),
        };
        this.items.push(newItem);
    }

    markAsDone(itemId) {
        const item = this.items.find((item) => item.id === itemId);
        if (item) {
            item.isDone = true;
        }
    }

    removeItem(itemId) {
        this.items = this.items.filter((item) => item.id !== itemId);
    }

    getAllItems() {
        return [...this.items];
    }

    getDoneItems() {
        return this.items.filter((item) => item.isDone);
    }

    getTodoItems() {
        return this.items.filter((item) => !item.isDone);
    }

    getStats() {
        const totalCount = this.items.length;
        const doneCount = this.items.filter((item) => item.isDone).length;
        const todoCount = totalCount - doneCount;
        return { total: totalCount, done: doneCount, todo: todoCount };
    }
}

const myTasks = new TaskManager("Мой список дел");

myTasks.createItem("Приобрести хлеб");
myTasks.createItem("Выполнить упражнения");
myTasks.createItem("Написать другу");

myTasks.markAsDone(1);

console.log(myTasks.getStats());

myTasks.removeItem(2);

console.log(myTasks.getTodoItems());