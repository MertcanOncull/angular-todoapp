import { TodoItem } from "./todoitem";

export class Model {
    name: string;
    items: TodoItem[];

    constructor() {
        this.name = "Mertin";
        this.items = [
            {description: "Kahvaltı", action: "yes"},
            {description: "Spor", action: "yes"},
            {description: "Alışveriş", action: "no"}
        ];
    }
}

