export class ChevroletCorsa  {
    
    _color
    
    constructor(color) {
        this._color = color
      
    }

    capacidad() {
        return 4
    }

    velocidadMaxima() {
        return 150
    }

    peso() {
        return 1300
    }

    color() {
        return this._color
    }

}
