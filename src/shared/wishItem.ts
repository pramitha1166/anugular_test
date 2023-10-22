export class WishItem {
    name: String
    isCompleted: boolean = false
    constructor(name: String, isCompleted: boolean = false) {
        this.name = name
        this.isCompleted = isCompleted
    }
}