class ToDo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = Math.random().toString();
    this.text = todoText;
  }
}

export default ToDo;
