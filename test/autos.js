import { expect } from "chai"
import { describe } from "mocha"
import { ChevroletCorsa} from "../src/autos"

describe("vehiculos - configuraciones", () => {

    it("configuracion de Chevrolet Corsa ", () => {

        var chevrolet = new ChevroletCorsa("rosa")
        expect(chevrolet.velocidadMaxima()).to.equal(150)
        expect(chevrolet.capacidad()).to.equal(4)
        expect(chevrolet.peso()).to.equal(1300)
        expect(chevrolet.color()).to.equal("rosa")

    })
        
});
        //TEST UTILES 
        // to.be.true
        // to.be.false
        // to.not.equal
        //to.equal