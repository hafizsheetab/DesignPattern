interface UserText {
    decorate(): any
}
class Decorator implements UserText {
    inputText: UserText;

    constructor(inputText: UserText) {
        this.inputText = inputText;
    }

    decorate(): any {
        return this.inputText.decorate();
    }

}

class UserInput implements UserText {

    text!: string

    constructor(text: string) {
        this.text = text
    }

    decorate(): any {
        return this.text;
    }
}

class BoldDecorator extends Decorator {
    public decorate(): string {
        return super.decorate().bold();
    }
}
class ItalicDecorator extends Decorator {
    public decorate(): string {
        return super.decorate().italics();
    }
}


class StrikeDecorator extends Decorator {
    public decorate(): string {
        return super.decorate().strike();
    }
}




const text = new UserInput('Md. Muhtaseen Hafiz')
console.log("Normal word: ", text.decorate())

const decorator1 = new BoldDecorator(text)
console.log("bold word: ", decorator1.decorate())


const decorator2 = new ItalicDecorator(decorator1)
console.log("bold and italic word: ", decorator2.decorate())


const decorator3 = new StrikeDecorator(decorator2)
console.log("bold, italic and strike word: ", decorator3.decorate())

